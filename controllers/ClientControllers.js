const clientModel = require('../models/ClientModel');

const getClients = async (req, res) => {
    const clients = await clientModel.find();
    // res.send(`<h2>Lista de Clientes</h2>`)
    res.status(200).json(clients);
};

const postClient = async (req, res) => {
    const client = new clientModel(req.body);
    // await client.save();

    res.status(200).json({
        clientName: client.clientName,
        clientLastName: client.clientLastName,
        clientPhone: client.clientPhone,
        clientType: client.clientType,
        clientService: client.clientService,
        clientRating: client.clientRating,
        clientVisits: [client.clientVisits],
        msg: "Cliente agregado correctamente"
    })
}

module.exports = {
    getClients, 
    postClient
};