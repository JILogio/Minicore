const router = require('express').Router();
//const { encrypt, decrypt } = require('../kms');

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
/*
//Ruta de encriptación
router.post('/encrypt', async (req, res) => {
    const { text } = req.body;
    try {
      const ciphertext = await encrypt(text);
      res.json({ ciphertext });
    } catch (error) {
      console.error('Error encriptando:', error.message);
      res.status(500).send(error.message);
    }
  });

router.post('/decrypt', async (req, res) => {
    const { ciphertext } = req.body;
    try {
      if (typeof ciphertext === 'string') {
        const arr = ciphertext.split(',').map(Number);
        const plaintext = await decrypt(arr);
        return res.json({ plaintext });
      }
      const plaintext = await decrypt(ciphertext);
      res.json({ plaintext });
    } catch (error) {
      console.error('Error desencriptando:', error.message);
      res.status(500).send(error.message);
    }
  });*/

module.exports = router;
