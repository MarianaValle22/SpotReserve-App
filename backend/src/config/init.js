const db = require('./db');

db.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    correo TEXT NOT NULL UNIQUE,
    contrasena TEXT NOT NULL,
    rol TEXT NOT NULL CHECK (rol IN ('admin', 'usuario'))
  );

  CREATE TABLE IF NOT EXISTS espacios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    tipo TEXT NOT NULL,
    capacidad INTEGER NOT NULL,
    estado TEXT NOT NULL DEFAULT 'activo' CHECK (estado IN ('activo', 'inactivo'))
  );

  CREATE TABLE IF NOT EXISTS reservas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL,
    espacio_id INTEGER NOT NULL,
    fecha_inicio TEXT NOT NULL,
    fecha_fin TEXT NOT NULL,
    estado TEXT NOT NULL DEFAULT 'pendiente' CHECK (estado IN ('pendiente', 'confirmada', 'cancelada')),
    FOREIGN KEY(usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY(espacio_id) REFERENCES espacios(id)
  );
`);

console.log('Base de datos inicializada');
