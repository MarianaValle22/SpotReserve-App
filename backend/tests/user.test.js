const db = require('../src/config/db');
const { crearUsuario, buscarPorCorreo } = require('../src/models/userModel');

describe('Modelo de Usuario', () => {
  const testCorreo = 'test@correo.com';

  beforeAll(() => {
    db.prepare('DELETE FROM usuarios WHERE correo = ?').run(testCorreo);
  });

  test('debe crear un nuevo usuario', () => {
    const nuevo = crearUsuario({
      nombre: 'Test',
      correo: testCorreo,
      contrasenaHasheada: '123456',
      rol: 'usuario',
    });

    expect(nuevo.changes).toBe(1);
  });

  test('debe encontrar un usuario por correo', () => {
    const usuario = buscarPorCorreo(testCorreo);
    expect(usuario).toBeDefined();
    expect(usuario.correo).toBe(testCorreo);
  });
});
