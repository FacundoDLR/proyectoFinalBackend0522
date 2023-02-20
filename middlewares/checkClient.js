const clientModel = require('../models/ClientModel');

const checkClient = async (req, res, next) => {
    const client = await clientModel.find({
        clientName: req.body.clientName,
        clientLastName: req.body.clientLastName
    });

    if(client){
        res.status(400).json({
            msg: "El cliente ya ha sido registrado en la base de datos con anterioridad"
        });
    }else{
        next();
    }
};

module.exports = checkClient;