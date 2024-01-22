'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/MiniCore')
        .then(() => {
            console.log('Conectado a la base de datos');

            app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
            })
    });

