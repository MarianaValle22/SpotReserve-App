const espacioModel = require('../models/espacioModel');

function listarEspacios(req, res) {
  try {
    const espacios = espacioModel.obtenerEspacios();
    res.json(espacios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

function crear(req, res) {
  try {
    const { nombre, tipo, capacidad } = req.body;
    espacioModel.crearEspacio({ nombre, tipo, capacidad });
    res.status(201).json({ mensaje: 'Espacio creado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

function actualizar(req, res) {
  try {
    const { id } = req.params;
    const { nombre, tipo, capacidad, estado } = req.body;
    espacioModel.actualizarEspacio(id, { nombre, tipo, capacidad, estado });
    res.json({ mensaje: 'Espacio actualizado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

function eliminar(req, res) {
  try {
    const { id } = req.params;
    espacioModel.eliminarEspacio(id);
    res.json({ mensaje: 'Espacio eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

function disponiblesPorFecha(req, res) {
  try {
    const { fecha } = req.query;
    if (!fecha) return res.status(400).json({ error: 'Debes especificar una fecha' });

    const disponibles = espacioModel.obtenerDisponiblesPorFecha(fecha);
    res.json(disponibles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = {
    listarEspacios,
    crear,
    actualizar,
    eliminar,
    disponiblesPorFecha,
};
