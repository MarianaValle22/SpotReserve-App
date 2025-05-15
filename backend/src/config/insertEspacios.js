const db = require('./db');

const espacios = [
  { nombre: 'Sala A', tipo: 'Reunión', capacidad: 8 },
  { nombre: 'Sala B', tipo: 'Coworking', capacidad: 12 },
  { nombre: 'Cancha 1', tipo: 'Deporte', capacidad: 20 },
  { nombre: 'Cancha 2', tipo: 'Deporte', capacidad: 15 },
  { nombre: 'Auditorio Central', tipo: 'Evento', capacidad: 50 },
];

espacios.forEach(e => {
  db.prepare(`
    INSERT INTO espacios (nombre, tipo, capacidad)
    VALUES (?, ?, ?)
  `).run(e.nombre, e.tipo, e.capacidad);
});

console.log('✅ Espacios insertados correctamente');
