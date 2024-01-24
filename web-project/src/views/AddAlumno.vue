<template>
    <h1>Añadir Alumno</h1>
    <div class="center">
       <form @submit.prevent="handleSubmit">
         <label for="name">Nombre:</label>
         <input type="text" id="nombre" v-model="nombre" required />

         <button type="submit">Enviar</button>
       </form>
    </div>
</template>

<style scoped src="@/assets/css/AddAlumnoStyle.css"></style>
   
<script>
import axios from 'axios';
import Global from '../Global'

export default {
    name: 'AddAlumno',
    data() {
       return {
         nombre: ''
       };
    },
    methods: {
        async handleSubmit() {
         const alumno = {
           nombre: this.nombre
        };
        const url = Global.url;

         try {
           const response = await axios.post(url+'Alumno/add',alumno);
           if(response.data.status != 'error'){

            alert('Alumno agregado con éxito');
            this.nombre = ''

            this.$router.push('/aditional');
           } else{
            alert('Error al agregar alumno');
            console.log(response.data)
           }
         } catch (error) {
           console.log(error);
         }
       }
    }
   };
</script>