const clientModel = require('../models/ClientModel');

const getClients = async (req, res) => {
    const clients = await clientModel.find();
    res.send(`<h2>Lista de Clientes</h2>`)
    // res.status(200).json(clients);
};

module.exports = {getClients};