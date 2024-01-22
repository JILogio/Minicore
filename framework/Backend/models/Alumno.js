const mongoose = require('mongoose')

const alumnoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
},{versionKey:false,collection: 'Alumno'});

module.exports = mongoose.model('Alumno',alumnoSchema)