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
        <h2>Progreso 3</h2>
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
        </table>
    </div>

    <!-- Alumno Template -->
    <div v-if="tabSelected === 'alumno'">
        <h2>Alumnos</h2>
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
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped src="@/assets/css/AdminProductStyle.css"></style>
 
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
       progreso3: [],
       fechaInicial1: '',
       fechaFinal1: '',
       fechaInicial2: '',
       fechaFinal2: '',
       fechaInicial3: '',
       fechaFinal3: '',
       tabSelected: '',
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
    async getProgreso3() {
        try {
            var dates = {
                inicial: this.fechaInicial3.toString(),
                final: this.fechaFinal3.toString()
            }

            const response = await axios.post(this.url+'CantidadProgreso',dates);
            this.progreso3 = response.data;
        } catch (error) {
            console.error('Error progreso:', error);
        }
    },
    async AlumnoView(){
        this.tabSelected = 'alumno'
    },
  },

};
</script>
