'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

// IP del dispositivo
/*var os = require('os');
var networkInterfaces = os.networkInterfaces();
var ip = networkInterfaces.Ethernet[1].address;*/

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/MiniCore')
        .then(() => {
            console.log('Conectado a la base de datos');

           /* //Servidor network
            app.listen(port,ip, () => {
                console.log('Servidor corriendo en http://'+ip+':'+port);
            })*/
            // Servidor local
            app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
            })
    });

