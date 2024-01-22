const Nota = require('../models/Nota')
const Alumno = require('../models/Alumno')

var progresoController = {

    obtenerCantidadNotasProgreso: async (req,res) => {
        try {
            const fechaInicial = req.body.inicial;
            const fechaFinal = req.body.final

            if(fechaFinal > fechaInicial){
                const resultado = await Alumno.aggregate([
                    {
                        $lookup: {
                          from: "Notas",
                          localField: "_id",
                          foreignField: "idAlumno",
                          as: "notas",
                        },
                      },
                      {
                        $unwind: "$notas",
                      },
                      {
                        $match: {
                          "notas.fecha": {
                            $gte: new Date(fechaInicial),
                            $lte: new Date(fechaFinal),
                          },
                        },
                      },
                      {
                        $group: {
                          _id: "$nombre",
                          id: {
                            $first: "$_id",
                          },
                          cantidadNotas: {
                            $sum: 1,
                          },
                        },
                      },
                      {
                        $project: {
                          _id: 0,
                          id: "$id",
                          nombre: "$_id",
                          cantidadNotas: "$cantidadNotas",
                        },
                      },
                ]);

                return res.status(200).json(resultado)
            } else{
                return res.status(404).json({ error: 'Error in dates' });
            }
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Error en la peticion'
            });
        }
    },

    obtenerCalificacionesProgreso: async (req,res) =>{
        try {
            const fechaInicial = req.body.inicial;
            const fechaFinal = req.body.final

            if(fechaFinal > fechaInicial){
                const resultado = await Alumno.aggregate([
                    {
                        $lookup: {
                          from: "Notas",
                          localField: "_id",
                          foreignField: "idAlumno",
                          as: "notas",
                        },
                      },
                      {
                        $match: {
                          "notas.fecha": {
                            $gte: new Date(fechaInicial),
                            $lte: new Date(fechaFinal),
                          },
                        },
                      },
                      {
                        $project: {
                          _id: 1,
                          nombre: 1,
                          notas: "$notas.nota",
                        },
                      },
                ]);

                return res.status(200).json(resultado)
            } else{
                return res.status(404).json({ error: 'Error in dates' });
            }
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Error en la peticion'
            });
        }
    }
}

module.exports = progresoController;