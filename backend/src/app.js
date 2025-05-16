const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/prueba', (req, res) => {
  try {
    const result = db.prepare("SELECT datetime('now') as hora").get();
    res.json({ conexion: 'exitosa', hora: result.hora });
  } catch (error) {
    res.status(500).json({ conexion: 'fallida', error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Rutas de pruebas
const { verificarToken, soloAdmin } = require('./middlewares/authMiddleware');

app.get('/api/protegido', verificarToken, (req, res) => {
  res.json({ mensaje: 'Acceso autorizado', usuario: req.usuario });
});

app.get('/api/solo-admin', verificarToken, soloAdmin, (req, res) => {
  res.json({ mensaje: 'Bienvenida, administradora' });
});

const espacioRoutes = require('./routes/espacioRoutes');
app.use('/api/espacios', espacioRoutes);

const reservaRoutes = require('./routes/reservaRoutes');
app.use('/api/reservas', reservaRoutes);


module.exports = app;