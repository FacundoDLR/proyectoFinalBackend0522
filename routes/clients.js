const express = require('express');
const router = express.Router();
const ClientControllers = require('../controllers/ClientControllers');

//LISTA DE RUTAS
router.get('/', ClientControllers.getClients);

router.post('/registro', ClientControllers.postClient);

router.put('/actualizar/:id', ClientControllers.putClient);

router.delete('/eliminar/:id', ClientControllers.deleteClient);

module.exports = router;