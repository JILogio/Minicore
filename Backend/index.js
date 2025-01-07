'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.connect('mongodb+srv://freeacount34:sC9CYxqYuKMmoiEr@cluster0.0k7kz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => {
            console.log('Conectado a la base de datos');

            console.log('GOOGLE_APPLICATION_CREDENTIALS:', process.env.GOOGLE_APPLICATION_CREDENTIALS);

            if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
            console.error('La variable de entorno GOOGLE_APPLICATION_CREDENTIALS no está establecida.');
            process.exit(1); // Termina el proceso con un error
            }

            app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
            })
    });
