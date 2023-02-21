const mongoose = require('mongoose');
require('dotenv').config()

const conection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL); // <- coloca tu propia url de MongoDB
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log(error.message, 'NO se puedo conectar con la base de datos')
    }
}

module.exports = conection