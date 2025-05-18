jest.mock('../../src/models/reservaModel');

const reservaModel = require('../../src/models/reservaModel');
const { crear, historial, cancelar } = require('../../src/controllers/reservaController');

describe('Reserva Controller con mocks', () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnThis();
    res.json = jest.fn();
    return res;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('crear debe devolver error si faltan datos', async () => {
    const req = {
      body: {},
      usuario: { id: 1 }
    };
    const res = mockResponse();

    await crear(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Datos incompletos para crear reserva' });
  });

  test('crear debe llamar al modelo y devolver mensaje', async () => {
    const req = {
      body: {
        espacio_id: 1,
        fecha_inicio: '2025-05-20T10:00',
        fecha_fin: '2025-05-20T11:00'
      },
      usuario: { id: 99 }
    };
    const res = mockResponse();

    // ⚠️ SIMULAR QUE NO HAY CONFLICTOS
    reservaModel.verificarDisponibilidad = jest.fn().mockReturnValue([]);

    // ⚠️ SIMULAR QUE SE CREÓ LA RESERVA
    reservaModel.crearReserva.mockReturnValue({ changes: 1 });

    await crear(req, res);

    expect(reservaModel.crearReserva).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ mensaje: 'Reserva creada correctamente' });
  });

  test('historial debe devolver lista de reservas', async () => {
    const req = { usuario: { id: 99 } };
    const res = mockResponse();

    const reservasFalsas = [{ id: 1, espacio_id: 3 }];
    reservaModel.obtenerReservasDeUsuario.mockReturnValue(reservasFalsas);

    await historial(req, res);

    expect(res.json).toHaveBeenCalledWith(reservasFalsas);
  });

  test('cancelar debe llamar modelo y devolver mensaje', async () => {
    const req = {
      params: { id: 1 },
      usuario: { id: 99 }
    };
    const res = mockResponse();

    reservaModel.cancelarReserva.mockReturnValue({ changes: 1 });

    await cancelar(req, res);

    expect(res.json).toHaveBeenCalledWith({ mensaje: 'Reserva cancelada' });
  });
});
