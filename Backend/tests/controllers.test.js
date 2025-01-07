const request = require('supertest'); // Para simular solicitudes
const app = require('../app'); // Reemplaza con la configuración de tu app
const Alumno = require('../models/Alumno');
const Nota = require('../models/Nota');

jest.mock('../models/Alumno');
jest.mock('../models/Nota');

describe('Controladores', () => {
  describe('AlumnoController', () => {
    it('debería agregar un alumno correctamente', async () => {
      Alumno.prototype.save = jest.fn().mockResolvedValue({ nombre: 'Juan Pérez' });

      const response = await request(app)
        .post('/api/Alumno/add')
        .send({ nombre: 'Juan Pérez' });

      expect(response.status).toBe(200);
      expect(response.body.nombre).toBe('Juan Pérez');
    });
  });

  describe('NotaController', () => {
    it('debería devolver un error si no hay notas', async () => {
      Nota.find = jest.fn().mockResolvedValue([]);

      const response = await request(app).get('/api/Notas');

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('error');
    });
  });

  describe('ProgresoController', () => {
    it('debería devolver cantidad de notas en rango de fechas', async () => {
      Alumno.aggregate = jest.fn().mockResolvedValue([
        { id: '1', nombre: 'Juan', cantidadNotas: 3 },
        { id: '2', nombre: 'María', cantidadNotas: 5 },
      ]);

      const response = await request(app)
        .post('/api/CantidadProgreso')
        .send({ inicial: '2023-01-01', final: '2023-12-31' });

      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        { id: '1', nombre: 'Juan', cantidadNotas: 3 },
        { id: '2', nombre: 'María', cantidadNotas: 5 },
      ]);
    });
  });
});
