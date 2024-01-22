<template>
    <h1>Añadir Nota</h1>
    <div class="center">
        <h1>Alumnos</h1>
        <table>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Nota</th>
                <th>Fecha</th>
                <th>Acción</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="alumno in alumnos" :key="alumno._id">
                <td>{{ alumno.nombre }}</td>
                <td><input type="number" :ref="'input-'+alumno._id"></td>
                <td><input type="date" :ref="'input-'+alumno._id"></td>
                <td>
                    <button @click="añadirNota(alumno._id, $event)">Añadir Nota</button>
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

export default {
    name: 'AddAlumno',

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
        async añadirNota(id,event) {
            event.preventDefault();
            try {
                let Datanota = this.$refs['input-'+id][0].value;
                let Datafecha = this.$refs['input-'+id][1].value;

                let data = {
                    nota: Datanota,
                    fecha: Datafecha,
                    idAlumno: id
                }

                await axios.post(this.url+'Nota/add',data)

                alert('Nota Agregada correctamente');
                this.$router.push('/aditional');
            } catch(error) {
                alert('Error al agregar nota al Alumno');
            }
        }
    }
};
</script>