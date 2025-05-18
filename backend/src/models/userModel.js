const db = require('../config/db');

function crearUsuario({ nombre, correo, contraseña, rol }) {
  const stmt = db.prepare(`
    INSERT INTO usuarios (nombre, correo, contraseña, rol)
    VALUES (?, ?, ?, ?)
  `);
  return stmt.run(nombre, correo, contraseña, rol);
}

function buscarPorCorreo(correo) {
  const stmt = db.prepare('SELECT * FROM usuarios WHERE correo = ?');
  return stmt.get(correo);
}

function guardarUsuario(usuario) {
  const stmt = db.prepare(`
    INSERT INTO usuarios (nombre, correo, contraseña, rol)
    VALUES (?, ?, ?, ?)
  `);
  return stmt.run(usuario.nombre, usuario.correo, usuario.contraseña, usuario.rol);
}

function actualizarUsuario(usuario) {
  const stmt = db.prepare(`
    UPDATE usuarios
    SET nombre = ?, correo = ?, contraseña = ?, rol = ?
    WHERE correo = ?
  `);
  return stmt.run(usuario.nombre, usuario.correo, usuario.contraseña, usuario.rol, usuario.correo);
}

function eliminarUsuario(correo) {
  const stmt = db.prepare('DELETE FROM usuarios WHERE correo = ?');
  return stmt.run(correo);
}

module.exports = {
  crearUsuario,
  buscarPorCorreo,
  guardarUsuario,
  actualizarUsuario,
  eliminarUsuario,
};