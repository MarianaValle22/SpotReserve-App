const { crearReserva } = require('../../src/factories/reservaFactory');

test('crearReserva válida', () => {
  const reserva = crearReserva({
    espacio_id: 1,
    usuario_id: 2,
    fecha_inicio: '2025-06-01T10:00',
    fecha_fin: '2025-06-01T11:00'
  });

  expect(reserva).toHaveProperty('espacio_id');
});

test('lanza error si faltan campos', () => {
  expect(() => crearReserva({})).toThrow('Datos incompletos');
});

test('lanza error si fecha inválida', () => {
  expect(() => crearReserva({
    espacio_id: 1,
    usuario_id: 2,
    fecha_inicio: '2025-06-01T12:00',
    fecha_fin: '2025-06-01T11:00'
  })).toThrow('fecha de inicio');
});
