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
                message: 'Error en la peticion:' + err
            });
        }
    },

    obtenerCalificacionesProgreso: async (req,res) =>{
        try {
            const fechaInicial1 = new Date(req.body.inicial1);
            const fechaFinal1 = new Date(req.body.final1);
            const cantidad1 = req.body.cantidad1;
            const fechaInicial2 = new Date(req.body.inicial2);
            const fechaFinal2 = new Date(req.body.final2);
            const cantidad2 = req.body.cantidad2;

            if((fechaFinal1 > fechaInicial1) && (fechaFinal2 > fechaInicial2)){
                const resultado1 = await Alumno.aggregate([
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
                            $gte: fechaInicial1,
                            $lte: fechaFinal1,
                          },
                        },
                      },
                      {
                        $group: {
                          _id: "$_id",
                          nombre: {
                            $first: "$nombre",
                          },
                          notas: {
                            $push: "$notas.nota",
                          },
                        },
                      },
                ]);

                const resultado2 = await Alumno.aggregate([
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
                          $gte: fechaInicial2,
                          $lte: fechaFinal2,
                        },
                      },
                    },
                    {
                      $group: {
                        _id: "$_id",
                        nombre: {
                          $first: "$nombre",
                        },
                        notas: {
                          $push: "$notas.nota",
                        },
                      },
                    },
              ]);

              var data1 = []

              for(let i = 0; i < resultado1.length; i++) {
                var sum = 0
                for(let j = 0; j < resultado1[i].notas.length; j++){
                  sum += (resultado1[i].notas[j])
                }

                var promedio = (sum/cantidad1)*0.25

                var alumno = {
                  _id: resultado1[i]._id,
                  nombre: resultado1[i].nombre,
                  promedio: promedio.toFixed(2)
                }
                data1.push(alumno)
              }

              var data2 = []

              for(let i = 0; i < resultado2.length; i++) {
                var sum = 0
                for(let j = 0; j < resultado2[i].notas.length; j++){
                  sum += (resultado2[i].notas[j])
                }

                var promedio = (sum/cantidad2)*0.35

                var alumno = {
                  _id: resultado1[i]._id,
                  nombre: resultado2[i].nombre,
                  promedio: promedio.toFixed(2)
                }
                data2.push(alumno)
              }

              var data = []

              for(let i = 0; i < data1.length; i++){
                let promedio3 = 0
                for(let j = 0; j < data2.length; j++){
                  if((data1[i].nombre == data2[j].nombre)){
                    promedio3 = 6 - (Number(data1[i].promedio) + Number(data2[j].promedio))
                    var alumno = {
                      _id: data1[i]._id,
                      nombre: data1[i].nombre,
                      promedio1: data1[i].promedio,
                      promedio2: data2[j].promedio,
                      promedio3: promedio3.toFixed(2).toString()
                    }
                    data.push(alumno)
                    break;
                  }
                }
              }

              return res.status(200).json(data)

            } else{
                return res.status(404).json({ error: 'Error in dates' });
            }

        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Error en la peticion' + err
            });
        }
    }
}

module.exports = progresoController;
