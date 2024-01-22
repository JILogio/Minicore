const Nota = require('../models/Nota')

var notaController = {
    addNota: async (req,res) => {
        try {  
            const nota = new Nota({
                nota: req.body.nota,
                fecha: req.body.fecha,
                idAlumno: req.body.idAlumno
            })

            const result = await nota.save()
            return res.send(result)
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos o inválidos'
            });
        }
    },

    getNotas: async (req,res) => {
        try {
            const notas = await Nota.find({}).exec();
            if(notas.length == 0){
                return res.status(200).json({
                    status: 'error',
                    message: 'No hay notas'
                });
            }

            return res.send({
                status: 'success',
                notas
            })
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Error al devolver datos'
            });
        }
    },

    search: async (req, res) => {
        try {
            const searchString = req.query.search;
    
            const nota = await Nota.find({"$or": [
                {"_id": searchString},
                {"nota": searchString}
            ]},).exec();
    
            if (!nota || nota.length <= 0) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay datos que coincidan con la búsqueda'
                });
            }
    
            return res.send({
                status: 'success',
                nota
            });
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error en la petición'
            });
        }
    },
}

module.exports = notaController;