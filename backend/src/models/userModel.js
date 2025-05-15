const db = require('../config/db');

function crearUsuario({ nombre, correo, contrasenaHasheada, rol }) {
  const stmt = db.prepare(`
    INSERT INTO usuarios (nombre, correo, contrasena, rol)
    VALUES (?, ?, ?, ?)
  `);
  return stmt.run(nombre, correo, contrasenaHasheada, rol);
}

function buscarPorCorreo(correo) {
  const stmt = db.prepare('SELECT * FROM usuarios WHERE correo = ?');
  return stmt.get(correo);
}

module.exports = {
  crearUsuario,
  buscarPorCorreo,
};
