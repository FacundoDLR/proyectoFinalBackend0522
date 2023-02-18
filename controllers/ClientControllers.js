const clientModel = require('../models/ClientModel');

const getClients = async (req, res) => {
    const clients = await clientModel.find();
    // res.send(`<h2>Lista de Clientes</h2>`)
    res.status(200).json(clients);
};

const postClient = async (req, res) => {
    const client = new clientModel(req.body);
    await client.save();

    res.status(201).json({
        clientName: client.clientName,
        clientLastName: client.clientLastName,
        clientPhone: client.clientPhone,
        clientType: client.clientType,
        clientService: client.clientService,
        clientRating: client.clientRating,
        clientVisits: [client.clientVisits],
        statusCode: 201,
        msg: "Cliente agregado correctamente"
    })
}

const putClient = async (req, res) => {
    try {
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
            msg: "Cliente actualizado correctamente"
        })
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
    postClient,
    putClient,
    deleteClient
};