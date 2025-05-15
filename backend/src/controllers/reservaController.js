const reservaModel = require('../models/reservaModel');

function crear(req, res) {
  try {
    const usuario_id = req.usuario.id;
    const { espacio_id, fecha_inicio, fecha_fin } = req.body;

    if (new Date(fecha_inicio) >= new Date(fecha_fin)) {
        return res.status(400).json({ error: 'La fecha de inicio debe ser anterior a la fecha de fin' });
    }


    if (!espacio_id || !fecha_inicio || !fecha_fin) {
      return res.status(400).json({ error: 'Datos incompletos' });
    }

    const conflictos = reservaModel.verificarDisponibilidad({
        espacio_id,
        fecha_inicio,
        fecha_fin
    });

    if (conflictos.length > 0) {
        return res.status(409).json({ error: 'Ese espacio ya está reservado en ese horario' });
    }

    reservaModel.crearReserva({ usuario_id, espacio_id, fecha_inicio, fecha_fin });
    res.status(201).json({ mensaje: 'Reserva creada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

function historial(req, res) {
  try {
    const usuario_id = req.usuario.id;
    const reservas = reservaModel.obtenerReservasDeUsuario(usuario_id);
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

function cancelar(req, res) {
  try {
    const usuario_id = req.usuario.id;
    const { id } = req.params;
    reservaModel.cancelarReserva(id, usuario_id);
    res.json({ mensaje: 'Reserva cancelada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  crear,
  historial,
  cancelar,
};
