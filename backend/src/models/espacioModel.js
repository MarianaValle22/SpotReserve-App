const db = require('../config/db');

function obtenerEspacios() {
  return db.prepare('SELECT * FROM espacios').all();
}

function crearEspacio({ nombre, tipo, capacidad }) {
  return db.prepare(`
    INSERT INTO espacios (nombre, tipo, capacidad)
    VALUES (?, ?, ?)
  `).run(nombre, tipo, capacidad);
}

function actualizarEspacio(id, { nombre, tipo, capacidad, estado }) {
  return db.prepare(`
    UPDATE espacios
    SET nombre = ?, tipo = ?, capacidad = ?, estado = ?
    WHERE id = ?
  `).run(nombre, tipo, capacidad, estado, id);
}

function eliminarEspacio(id) {
  return db.prepare('DELETE FROM espacios WHERE id = ?').run(id);
}

function obtenerDisponiblesPorFecha(fecha) {
  const stmt = db.prepare(`
    SELECT * FROM espacios
    WHERE id NOT IN (
      SELECT espacio_id FROM reservas
      WHERE date(fecha_inicio) = ?
    )
    AND estado = 'activo'
  `);
  return stmt.all(fecha);
}

module.exports = {
    obtenerEspacios,
    crearEspacio,
    actualizarEspacio,
    eliminarEspacio,
    obtenerDisponiblesPorFecha,
};
