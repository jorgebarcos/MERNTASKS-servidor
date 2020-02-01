const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController')


// Crea proyectos
// api/proyectos
router.post('/',
    proyectoController.creaProyecto
)

module.exports = router;