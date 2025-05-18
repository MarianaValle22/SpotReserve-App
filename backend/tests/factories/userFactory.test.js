const { crearUsuario } = require('../../src/factories/userFactory');

test('crearUsuario crea correctamente un usuario válido', () => {
  const usuario = crearUsuario({
    nombre: 'Ana',
    correo: 'ana@mail.com',
    contraseña: 'segura123'
  });

  expect(usuario).toEqual({
    nombre: 'Ana',
    correo: 'ana@mail.com',
    contraseña: 'segura123',
    rol: 'usuario'
  });
});

test('crearUsuario lanza error si faltan campos', () => {
  expect(() => crearUsuario({})).toThrow();
});
