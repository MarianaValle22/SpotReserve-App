const request = require('supertest');
const app = require('../src/app');
const db = require('../src/config/db');

describe('Auth endpoints', () => {
  const correo = 'cliente@test.com';
  const contraseña = 'cliente12345';
  let token = '';

  beforeAll(() => {
    db.prepare('DELETE FROM usuarios WHERE correo = ?').run(correo);
  });

  test('Debe registrar un nuevo usuario', async () => {
    const res = await request(app).post('/api/auth/register').send({
      nombre: 'Cliente Test',
      correo,
      contraseña
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('mensaje', 'Usuario registrado correctamente');
  });

  test('Debe iniciar sesión y devolver un token', async () => {
    const res = await request(app).post('/api/auth/login').send({
      correo,
      contraseña
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    token = res.body.token;
  });

  test('Debe rechazar acceso sin token a ruta protegida', async () => {
    const res = await request(app).get('/api/reservas/mis-reservas');
    expect(res.statusCode).toBe(401);
  });

  test('Debe permitir acceso a reservas con token', async () => {
    const res = await request(app)
      .get('/api/reservas/mis-reservas')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
