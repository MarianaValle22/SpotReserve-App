function crearReserva({ espacio_id, usuario_id, fecha_inicio, fecha_fin }) {
  if (!espacio_id || !usuario_id || !fecha_inicio || !fecha_fin) {
    throw new Error('Datos incompletos para crear reserva');
  }

  if (new Date(fecha_inicio) >= new Date(fecha_fin)) {
    throw new Error('La fecha de inicio debe ser menor que la de fin');
  }

  return {
    espacio_id,
    usuario_id,
    fecha_inicio,
    fecha_fin
  };
}

module.exports = { crearReserva };
