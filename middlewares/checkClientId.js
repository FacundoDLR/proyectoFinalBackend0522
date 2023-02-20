const clientModel = require('../models/ClientModel');

const checkClientId = async (req, res, next) => {
    const clientID = await clientModel.findById(req.params._id);

    if(clientID){
        res.status(400).json({
            msg: "El ID del cliente ingrsado NO existe, verifique o intente con otro ID"
        });
    }else{
        next();
    }
};

module.exports = checkClientId;