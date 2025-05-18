jest.mock("../../src/models/userModel")

jest.mock('../../src/factories/userFactory', () => ({
  crearUsuario: jest.fn()
}));

const { buscarPorCorreo } = require('../../src/models/userModel');
const { crearUsuario } = require('../../src/factories/userFactory');
const { register } = require('../../src/controllers/authController');

describe('Auth Controller con mocks', () => {
  const mockRequest = (body) => ({ body });
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe rechazar si el correo ya existe', async () => {
    buscarPorCorreo.mockReturnValue({ correo: 'ya@existe.com' });

    const req = mockRequest({
      nombre: 'Ya Existe',
      correo: 'ya@existe.com',
      contraseña: 'ya12345'
    });

    const res = mockResponse();

    await register(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Correo ya registrado' });
  });

  test('debe crear usuario si el correo es nuevo', async () => {
    buscarPorCorreo.mockReturnValue(undefined);
    crearUsuario.mockReturnValue({ lastInsertRowid: 99 });

    const req = mockRequest({
      nombre: 'Nuevo',
      correo: 'nuevo@correo.com',
      contraseña: 'nuevo12345',
      rol: 'usuario'
    });

    const res = mockResponse();

    await register(req, res);

    expect(crearUsuario).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ mensaje: 'Usuario registrado correctamente' });
  });
});
