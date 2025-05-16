const request = require('supertest');
const app = require('../src/app');
const db = require('../src/config/db');

describe('Endpoints de Reservas', () => {
  const correo = 'apireserva@test.com';
  const contrasena = '123456';
  let token = '';
  let espacioId = null;

  beforeAll(() => {
    // Preparar usuario y espacio
    db.prepare('DELETE FROM usuarios WHERE correo = ?').run(correo);

    const espacio = db.prepare(`
      INSERT INTO espacios (nombre, tipo, capacidad, estado)
      VALUES (?, ?, ?, ?)
    `).run('Espacio Test API', 'Sala', 5, 'activo');
    espacioId = espacio.lastInsertRowid;
  });

  test('Registrar e iniciar sesión', async () => {
    await request(app).post('/api/auth/register').send({
      nombre: 'API Tester',
      correo,
      contrasena
    });

    const login = await request(app).post('/api/auth/login').send({ correo, contrasena });
    expect(login.statusCode).toBe(200);
    token = login.body.token;
  });

  test('Debe rechazar reserva sin token', async () => {
    const res = await request(app).post('/api/reservas').send({
      espacio_id: espacioId,
      fecha_inicio: '2025-06-10T10:00',
      fecha_fin: '2025-06-10T11:00'
    });

    expect(res.statusCode).toBe(401);
  });

  test('Debe crear reserva con token válido', async () => {
    const res = await request(app)
      .post('/api/reservas')
      .set('Authorization', `Bearer ${token}`)
      .send({
        espacio_id: espacioId,
        fecha_inicio: '2025-06-10T10:00',
        fecha_fin: '2025-06-10T11:00'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('mensaje', 'Reserva creada correctamente');
  });
});
