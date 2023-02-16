const express = require('express');
const router = express.Router();
const ClientControllers = require('../controllers/ClientControllers');

//LISTA DE RUTAS
router.get('/', ClientControllers.getClients);

module.exports = router;