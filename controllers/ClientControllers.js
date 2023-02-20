const { validationResult } = require('express-validator');
const clientModel = require('../models/ClientModel');

const getClients = async (req, res) => {
    try {
        const clients = await clientModel.find();

        if(clients){
            res.status(200).json({
                msg: "Lista de Clientes",
                clients
            });
        }else{
            res.status(404).json({
                clients: null,
                statusCode: 404,
                msg: "No se encontro la lista de usuarios, intente mas tarde"
            });
        }
    } catch (error) {
        res.status(500).json({
            clients,
            statusCode: 500,
            msg: "Error - " + error.message,
        })
    }

};

const getClientByName = async (req, res) => {
    const name = req.query.name;
    const client = await clientModel.find({clientName: name});

    if(client){
        res.status(200).json({
            client,
            statusCode: 200,
        })
    }else{
        res.status(404).json({
            client: null,
            statusCode: 404,
            msg: "Cliente no encontrado, revise letras mayusculas y/o minusculas o intente con otro nombre"
        })
    }
}
/* -------------------------------------------------------- */
const postClient = async (req, res) => {
    try {
        const validationError = validationResult(req)

        if (validationError.isEmpty()) {
            const client = new clientModel(req.body);
            // await client.save();
        
            res.status(201).json({
                clientName: client.clientName,
                clientLastName: client.clientLastName,
                clientPhone: client.clientPhone,
                clientType: client.clientType,
                clientService: client.clientService,
                clientRating: client.clientRating,
                clientVisits: [client.clientVisits],
                statusCode: 201,
                msg: "Cliente agregado correctamente",
                error: null
            })

        }else{
            res.status(400).json({
                clientName: null,
                clientLastName: null,
                clientPhone: null,
                clientType: null,
                clientService: null,
                clientRating: null,
                clientVisits: [null],
                statusCode: 400,
                msg: "Los datos ingresados son incorrectos, por favor revisa los campos con errores",
                error: validationError.errors
            })
        }

    } catch (error) {
        res.status(500).json({
            clientName: req.body.clientName,
            clientLastName: req.body.clientLastName,
            clientPhone: req.body.clientPhone,
            clientType: req.body.clientType,
            clientService: req.body.clientService,
            clientRating: req.body.clientRating,
            clientVisits: [req.body.clientVisits],
            statusCode: 500,
            msg: "Error - " + error.message
        })
    }

}

const putClient = async (req, res) => {
    try {
        const validationError = validationResult(req)

        
        if (validationError.isEmpty()) {
            await clientModel.findByIdAndUpdate(req.params.id, req.body);

            res.status(200).json({
                clientName: req.body.clientName,
                clientLastName: req.body.clientLastName,
                clientPhone: req.body.clientPhone,
                clientType: req.body.clientType,
                clientService: req.body.clientService,
                clientRating: req.body.clientRating,
                clientVisits: [req.body.clientVisits],
                statusCode: 200,
                msg: "Cliente actualizado correctamente",
                error: null
            })
        }else{
            res.status(400).json({
                clientName: null,
                clientLastName: null,
                clientPhone: null,
                clientType: null,
                clientService: null,
                clientRating: null,
                clientVisits: [null],
                statusCode: 400,
                msg: "Los datos ingresados son incorrectos, por favor revisa los campos con errores",
                error: validationError.errors
            })
        }

    } catch (error) {
        res.status(500).json({
            clientName: req.body.clientName,
            clientLastName: req.body.clientLastName,
            clientPhone: req.body.clientPhone,
            clientType: req.body.clientType,
            clientService: req.body.clientService,
            clientRating: req.body.clientRating,
            clientVisits: [req.body.clientVisits],
            statusCode: 500,
            msg: "Error - " + error.message
        })
    }
}

const deleteClient = async (req, res) => {
    try {
        const client = await clientModel.findByIdAndDelete(req.params.id);
        if(client){
            res.status(200).json({
                clientName: req.body.clientName,
                clientLastName: req.body.clientLastName,
                clientPhone: req.body.clientPhone,
                clientType: req.body.clientType,
                clientService: req.body.clientService,
                clientRating: req.body.clientRating,
                clientVisits: [req.body.clientVisits],
                statusCode: 200,
                msg: "Cliente eliminado correctamente"
            });
        }else{
            res.status(404).json({
                clientName: null,
                clientLastName:null,
                clientPhone: null,
                clientType: null,
                clientService: null,
                clientRating: null,
                clientVisits: null,
                statusCode: 404,
                msg: "El ID ingresado es invalido, intente corregir el ID"
            });
        }
    } catch (error) {
        res.status(500).json({
            clientName: req.body.clientName,
            clientLastName: req.body.clientLastName,
            statusCode: 500,
            msg: "Error - " + error.message,
        });
    }
}

module.exports = {
    getClients,
    getClientByName, 
    postClient,
    putClient,
    deleteClient
};