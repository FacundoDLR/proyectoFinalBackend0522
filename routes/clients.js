const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const ClientControllers = require('../controllers/ClientControllers');
const checkClient = require('../middlewares/checkClient');
const checkClientId = require('../middlewares/checkClientId');

//LISTA DE RUTAS
router.get('/', ClientControllers.getClients);

router.get('/buscar', ClientControllers.getClientByName);

router.post('/registro',[
    check("clientName").not().isEmpty().withMessage("El nombre del cliente es obligatorio"),
    check("clientLastName").not().isEmpty().withMessage("El Apellido del cliente es obligatorio"),
    check("clientPhone").not().isEmpty().withMessage("El Numero telefonico del cliente es obligatorio").isNumeric().withMessage("El telefono solo acepta caracteres numericos.").isLength({min:10, max:14}).withMessage("El minimo de caracteres son 10 digitos y maximo de 14 digitos"),
    check("clientType").not().isEmpty().withMessage("Por favor ingresar tipo de cliente: bebe, niño, adolescente, adulto o mayor"),
    check("clientService").not().isEmpty().withMessage("Por favor ingresa el servicio que solicito el cliente: Corte de cabello, Barba, Facial o Corte de cabello + barba"),
    check("clientRating").not().isEmpty().withMessage("Por favor ingresa una puntuacion para el cliente desde 1 a 5 puntos, Ej: N°/N°"),
    check("clientVisits").not().isEmpty().withMessage("Por favor ingresa la fecha de la ultima visita del cliente, Ej: DD-MM-AAAA"),

],checkClient, ClientControllers.postClient);

router.put('/actualizar/:id',[
    check("clientName").not().isEmpty().withMessage("El nombre del cliente es obligatorio"),
    check("clientLastName").not().isEmpty().withMessage("El Apellido del cliente es obligatorio"),
    check("clientPhone").not().isEmpty().withMessage("El Numero telefonico del cliente es obligatorio").isNumeric().withMessage("El telefono solo acepta caracteres numericos.").isLength({min:10, max:14}).withMessage("El minimo de caracteres son 10 digitos y maximo de 14 digitos"),
    check("clientType").not().isEmpty().withMessage("Por favor ingresar tipo de cliente: bebe, niño, adolescente, adulto o mayor"),
    check("clientService").not().isEmpty().withMessage("Por favor ingresa el servicio que solicito el cliente: Corte de cabello, Barba, Facial o Corte de cabello + barba"),
    check("clientRating").not().isEmpty().withMessage("Por favor ingresa una puntuacion para el cliente desde 1 a 5 puntos, Ej: N°/N°"),
    check("clientVisits").not().isEmpty().withMessage("Por favor ingresa la fecha de la ultima visita del cliente, Ej: DD-MM-AAAA"),

],checkClient, ClientControllers.putClient);

router.delete('/eliminar/:id',checkClientId, ClientControllers.deleteClient);

module.exports = router;