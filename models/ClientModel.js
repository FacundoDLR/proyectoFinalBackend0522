const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ClientSchema = new Schema({
    clientName: {
        type: String,
        required: true,
        unique: false
    },
    clientLastName: {
        type: String,
        required: true,
        unique: false
    },
    clientPhone: {
        type: Number,
        required: true,
        unique: true
    },
    clientType: {
        type: String, //baby, child, teen, adult, mayor
        required: true,
        unique: false
    },
    clientService: {
        type: String, //corte, barba, facial, corte + barba
        required: true,
        unique: false
    },
    clientRating: {
        type: String,
        required: true,
        unique: false
    },
    clientVisits: {
        type: Date,
        required: true,
        unique: false
    },
});

const clientModel = mongoose.model('Client', ClientSchema);

module.exports = clientModel