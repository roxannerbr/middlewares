const express = require('express');
const router = express.Router();
const {main, list, crear, editar, eliminar,} = require('../controllers/adminController');
const adminLog = require('../middlewares/adminLog')

/* lista */
router.get('/',adminLog,list);

/* crear */
router.get('/crearProducto',crear);

/* editar */
router.get('/editarProducto',editar);

/* eliminar */
router.get('/eliminarProducto',eliminar);

module.exports = router;