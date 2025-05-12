const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/prueba', (req, res) => {
  try {
    const result = db.prepare('SELECT datetime("now") as hora').get();
    res.json({ conexion: 'exitosa', hora: result.hora });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ conexion: 'fallida', error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
