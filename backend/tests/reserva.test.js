const db = require('../src/config/db');
const reservaModel = require('../src/models/reservaModel');
const userModel = require('../src/models/userModel');
const espacioModel = require('../src/models/espacioModel');
const bcrypt = require('bcrypt');

// ✅ Contraseña encriptada
const contraseña = bcrypt.hashSync('reserva123', 10);

describe('Modelo de Reservas', () => {
  let usuarioId;
  let espacioId;
  let reservaId;

  beforeAll(() => {
    // Eliminar si ya existe un usuario con ese correo
    db.prepare('DELETE FROM usuarios WHERE correo = ?').run('reserva@test.com');

    // Crear usuario de prueba
    const user = userModel.crearUsuario({
      nombre: 'Reserva Test',
      correo: 'reserva@test.com',
      contraseña, // ✅ Campo correcto
      rol: 'usuario',
    });
    usuarioId = user.lastInsertRowid;

    // Crear espacio de prueba
    const espacio = espacioModel.crearEspacio({
      nombre: 'Espacio Test',
      tipo: 'Sala',
      capacidad: 10,
    });
    espacioId = espacio.lastInsertRowid;
  });

  test('Debe crear una nueva reserva', () => {
    const reserva = reservaModel.crearReserva({
      usuario_id: usuarioId,
      espacio_id: espacioId,
      fecha_inicio: '2025-06-01T10:00',
      fecha_fin: '2025-06-01T11:00',
    });

    expect(reserva.changes).toBe(1);
    reservaId = reserva.lastInsertRowid;
  });

  test('Debe listar reservas del usuario', () => {
    const reservas = reservaModel.obtenerReservasDeUsuario(usuarioId);
    expect(reservas.length).toBeGreaterThan(0);
    expect(reservas[0].usuario_id).toBe(usuarioId);
  });

  test('Debe cancelar una reserva', () => {
    const cancelada = reservaModel.cancelarReserva(reservaId, usuarioId);
    expect(cancelada.changes).toBe(1);
  });
});
