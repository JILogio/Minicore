const Alumno = require('../models/Alumno')

var AlumnoController = {
    addAlumno: async (req,res) => {
        try {
            const alumno = new Alumno({
                nombre: req.body.nombre
            })

            const result = await alumno.save()
            return res.send(result)
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos o inválidos:' + err
            });
        }
    },

    getAlumnos: async (req,res) => {
        try {
            const alumnos = await Alumno.find({}).exec();
            if(alumnos.length == 0){
                return res.status(200).json({
                    status: 'error',
                    message: 'No hay alumnos'
                });
            }

            return res.send({
                status: 'success',
                alumnos
            })
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Error al devolver datos:' + err
            });
        }
    },

    search: async (req, res) => {
        try {
            const searchString = req.query.search;

            const alumno = await Alumno.find({"$or": [
                {"_id": searchString},
                {"nombre": searchString}
            ]},).exec();

            if (!alumno || alumno.length <= 0) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay datos que coincidan con la búsqueda'
                });
            }

            return res.send({
                status: 'success',
                alumno
            });
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error en la petición:' + err
            });
        }
    },
}

module.exports = AlumnoController;
