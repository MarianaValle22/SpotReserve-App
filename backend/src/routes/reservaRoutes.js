const express = require('express');
const router = express.Router();
const { crear, historial, cancelar } = require('../controllers/reservaController');
const { verificarToken } = require('../middlewares/authMiddleware');

router.post('/', verificarToken, crear);
router.get('/mis-reservas', verificarToken, historial);
router.delete('/:id', verificarToken, cancelar);

module.exports = router;
