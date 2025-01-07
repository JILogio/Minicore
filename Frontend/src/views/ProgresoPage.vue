<template>
    <button @click="ProgresoView">Obtener Progreso</button>
    <button @click="AlumnoView">Alumnos</button>

    <!-- Progreso Template -->
    <div v-if="tabSelected === 'progreso'">
        <h2>Progreso 1</h2>
        <input type='date' v-model="fechaInicial1">
        <input type="date" v-model="fechaFinal1">
        <button @click="getProgreso1">Obtener</button>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad Notas</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="progreso in progreso1" :key="progreso._id">
                    <td>{{ progreso.nombre }}</td>
                    <td>{{ progreso.cantidadNotas }}</td>
                </tr>
            </tbody>
        </table>
        <h2>Progreso 2</h2>
        <input type='date' v-model="fechaInicial2">
        <input type="date" v-model="fechaFinal2">
        <button @click="getProgreso2">Obtener</button>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad Notas</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="progreso in progreso2" :key="progreso._id">
                    <td>{{ progreso.nombre }}</td>
                    <td>{{ progreso.cantidadNotas }}</td>
                </tr>
            </tbody>
        </table>
<!--    <h2>Progreso 3</h2>
        <input type='date' v-model="fechaInicial3">
        <input type="date" v-model="fechaFinal3">
        <button @click="getProgreso3">Obtener</button>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad Notas</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="progreso in progreso3" :key="progreso._id">
                    <td>{{ progreso.nombre }}</td>
                    <td>{{ progreso.cantidadNotas }}</td>
                </tr>
            </tbody>
        </table>-->
    </div>

    <!-- Alumno Template -->
    <div v-if="tabSelected === 'alumno'">
        <h1>Alumnos</h1>
        <div class="row">
            <div class="half-row">
                <h2>Progreso 1</h2>
                <input type='date' v-model="fechaInicial1">
                <input type="date" v-model="fechaFinal1">
                <p>Cantidad de notas</p>
                <input type="number" v-model="notas1">
            </div>
            <div class="half-row">
                <h2>Progreso 2</h2>
                <input type='date' v-model="fechaInicial2">
                <input type="date" v-model="fechaFinal2">
                <p>Cantidad de notas</p>
                <input type="number" v-model="notas2">
            </div>
            <button @click="getProgreso3">Obtener</button>
        </div>
        
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Alumno</th>
                        <th>P1</th>
                        <th>P2</th>
                        <th>P3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="nota in notas" :key="nota._id">
                        <td>{{ nota.nombre }}</td>
                        <td>{{ nota.promedio1 }}</td>
                        <td>{{ nota.promedio2 }}</td>
                        <td>{{ nota.promedio3 }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped src="@/assets/css/ProgresoStyle.css"></style>
 
<script>
import axios from 'axios';
import Global from '@/Global';
 
export default {
  name: "ProgresoPage",
  data() {
     return {
       url: Global.url,
       progreso: [],
       progreso1: [],
       progreso2: [],
       fechaInicial1: '',
       fechaFinal1: '',
       fechaInicial2: '',
       fechaFinal2: '',
       tabSelected: '',
       notas: ''
     };
  },
  methods: {
    async ProgresoView() {
        this.tabSelected = 'progreso'
    },
    async getProgreso1() {
        try {
            var dates = {
                inicial: this.fechaInicial1.toString(),
                final: this.fechaFinal1.toString()
            }

            const response = await axios.post(this.url+'CantidadProgreso',dates);
            this.progreso1 = response.data;
        } catch (error) {
            console.error('Error progreso:', error);
        }
    },
    async getProgreso2() {
        try {
            var dates = {
                inicial: this.fechaInicial2.toString(),
                final: this.fechaFinal2.toString()
            }

            const response = await axios.post(this.url+'CantidadProgreso',dates);
            this.progreso2 = response.data;
        } catch (error) {
            console.error('Error progreso:', error);
        }
    },
    async AlumnoView(){
        this.tabSelected = 'alumno'
    },
    async getProgreso3() {
        try {
            var data = {
                inicial1: this.fechaInicial1.toString(),
                final1: this.fechaFinal1.toString(),
                cantidad1: this.notas1,
                inicial2: this.fechaInicial2.toString(),
                final2: this.fechaFinal2.toString(),
                cantidad2: this.notas2,
            }

            const response = await axios.post(this.url+'Progreso',data);
            this.notas = response.data;
        } catch (error) {
            console.error('Error progreso:', error);
        }
    },
  },

};
</script>
