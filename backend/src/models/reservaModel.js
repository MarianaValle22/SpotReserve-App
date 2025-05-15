const db = require('../config/db');

function crearReserva({ usuario_id, espacio_id, fecha_inicio, fecha_fin }) {
  const stmt = db.prepare(`
    INSERT INTO reservas (usuario_id, espacio_id, fecha_inicio, fecha_fin)
    VALUES (?, ?, ?, ?)
  `);
  return stmt.run(usuario_id, espacio_id, fecha_inicio, fecha_fin);
}

function obtenerReservasDeUsuario(usuario_id) {
  const stmt = db.prepare(`
    SELECT r.*, e.nombre AS espacio_nombre, e.tipo
    FROM reservas r
    JOIN espacios e ON r.espacio_id = e.id
    WHERE r.usuario_id = ?
    ORDER BY r.fecha_inicio DESC
  `);
  return stmt.all(usuario_id);
}

function cancelarReserva(id, usuario_id) {
  const stmt = db.prepare(`
    DELETE FROM reservas
    WHERE id = ? AND usuario_id = ?
  `);
  return stmt.run(id, usuario_id);
}

function verificarDisponibilidad({ espacio_id, fecha_inicio, fecha_fin }) {
  const stmt = db.prepare(`
    SELECT * FROM reservas
    WHERE espacio_id = ?
    AND fecha_inicio < ?
    AND fecha_fin > ?
  `);
  return stmt.all(espacio_id, fecha_fin, fecha_inicio);
}

module.exports = {
  crearReserva,
  obtenerReservasDeUsuario,
  cancelarReserva,
  verificarDisponibilidad,
};
