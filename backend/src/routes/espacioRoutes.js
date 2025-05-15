const express = require('express');
const router = express.Router();
const espacioController = require('../controllers/espacioController');
const { verificarToken, soloAdmin } = require('../middlewares/authMiddleware');

router.get('/', espacioController.listarEspacios);
router.post('/', verificarToken, soloAdmin, espacioController.crear);
router.put('/:id', verificarToken, soloAdmin, espacioController.actualizar);
router.delete('/:id', verificarToken, soloAdmin, espacioController.eliminar);
router.get('/disponibles', espacioController.disponiblesPorFecha);


module.exports = router;
