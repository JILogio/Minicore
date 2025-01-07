<template>
    <div class="center">
        <h1>Alumnos</h1>
        <table>
            <thead>
            <tr>
                <th>Nombre</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="alumno in alumnos" :key="alumno._id">
                <td>{{ alumno.nombre }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped src="@/assets/css/ProgresoStyle.css"></style>

<script>
import axios from 'axios';
import Global from '../Global'

export default {
    name: 'AlumnosPage',

    mounted(){
        this.getAlumnos();
    },
    data(){
        return {
            url: Global.url,
            alumnos: {},
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
    }
}
</script>