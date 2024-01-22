<template>
    <div class="center">
        <h1>Calificaciones</h1>
        <table>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Notas</th>
                <th>Fecha</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="alumno in alumnos" :key="alumno._id">
                <td>{{ alumno.nombre }}</td>
                <td>
                    <div v-for="nota in notas" :key="nota._id">
                    <div v-if="nota.nota !== '' && nota.idAlumno === alumno._id">
                        {{ nota.nota }}
                    </div>
                    </div>
                </td>
                <td>
                    <div v-for="nota in notas" :key="nota._id">
                    <div v-if="nota.nota !== '' && nota.idAlumno === alumno._id">
                        {{ formatDate(nota.fecha) }}
                    </div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped src="@/assets/css/AdminProductStyle.css"></style>

<script>
import axios from 'axios';
import Global from '../Global'
import { format, parseISO } from 'date-fns';

export default {
    name: 'AlumnosPage',
    
    mounted(){
        this.getAlumnos();
        this.getNotas();
    },
    data(){
        return {
            url: Global.url,
            alumnos: {},
            notas: {},
        }
    },
    methods: {
        getAlumnos(){
            axios.get(this.url+'Alumnos')
                .then(res => {
                    if(res.data.status == 'success'){
                        this.alumnos = res.data.alumnos;
                    }
                })
                .catch (err => {
                    console.log(err)
                })
        },
        getNotas(){
            axios.get(this.url+'Notas')
                .then(res => {
                    if(res.data.status == 'success'){
                        this.notas = res.data.notas;
                    }
                })
                .catch (err => {
                    console.log(err)
                })
        },
        formatDate(date) {
            return format(parseISO(date), 'dd/MM/yyyy');
        }
    },
}
</script>