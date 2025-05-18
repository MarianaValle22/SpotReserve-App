function crearUsuario({ nombre, correo, contraseña, rol = 'usuario' }) {
  if (!nombre || !correo || !contraseña) {
    throw new Error('Datos incompletos para crear usuario');
  }

  return {
    nombre,
    correo,
    contraseña,
    rol
  };
}

module.exports = { crearUsuario };
