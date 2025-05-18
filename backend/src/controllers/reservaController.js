const reservaModel = require('../models/reservaModel');
const { crearReserva } = require('../factories/reservaFactory');

function crear(req, res) {
  try {
    const datosReserva = crearReserva({
      usuario_id: req.usuario.id,
      espacio_id: req.body.espacio_id,
      fecha_inicio: req.body.fecha_inicio,
      fecha_fin: req.body.fecha_fin
    });

    const conflictos = reservaModel.verificarDisponibilidad({
      espacio_id: datosReserva.espacio_id,
      fecha_inicio: datosReserva.fecha_inicio,
      fecha_fin: datosReserva.fecha_fin
    });

    if (conflictos.length > 0) {
      return res.status(409).json({ error: 'Ese espacio ya está reservado en ese horario' });
    }

    reservaModel.crearReserva(datosReserva);
    res.status(201).json({ mensaje: 'Reserva creada correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
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
