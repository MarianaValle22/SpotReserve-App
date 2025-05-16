const request = require('supertest');
const app = require('../src/app');
const db = require('../src/config/db');

describe('GET /api/espacios', () => {
  beforeAll(() => {
    db.prepare('INSERT INTO espacios (nombre, tipo, capacidad, estado) VALUES (?, ?, ?, ?)').run(
      'Sala Test',
      'Reunión',
      4,
      'activo'
    );
  });

  test('Debe devolver la lista de espacios', async () => {
    const res = await request(app).get('/api/espacios');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('nombre');
  });
});
