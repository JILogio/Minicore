const mongoose = require('mongoose')

const notaSchema = new mongoose.Schema({
    nota: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    idAlumno: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
},{versionKey:false,collection: 'Notas'});

module.exports = mongoose.model('Nota', notaSchema)