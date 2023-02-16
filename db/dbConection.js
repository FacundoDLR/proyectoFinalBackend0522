const mongoose = require('mongoose');

const conection = async () => {
    try {
        await mongoose.connect('mongodb+srv://Facundo:test123@cluster0.ci37yb1.mongodb.net/test');
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log(error.message, 'NO se puedo conectar con la base de datos')
    }
}

module.exports = conection