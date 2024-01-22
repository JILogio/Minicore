const router = require('express').Router();
const AlumnoController = require('../controllers/AlumnoController');
const NotaController = require('../controllers/NotaController');
const progresoController = require('../controllers/ProgresoController');

//Rutas del Schema Alumno
router.post('/Alumno/add',AlumnoController.addAlumno);
router.get('/Alumnos', AlumnoController.getAlumnos); 
router.get('/Alumno',AlumnoController.search);

//Rutas del Schema Nota
router.post('/Nota/add', NotaController.addNota);
router.get('/Notas', NotaController.getNotas); 
router.get('/Nota', NotaController.search);

//Rutas Progreso
router.post('/CantidadProgreso', progresoController.obtenerCantidadNotasProgreso);
router.post('/Progreso', progresoController.obtenerCalificacionesProgreso);

module.exports = router;