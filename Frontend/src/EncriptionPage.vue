<template>
    <div>
      <h1>Encriptar y Desencriptar Datos</h1>
      <input v-model="text" placeholder="Introduce texto para encriptar">
      <button @click="encryptText">Encriptar</button>
      <p>Encriptado: {{ encryptedText }}</p>
      <button @click="decryptText">Desencriptar</button>
      <p>Desencriptado: {{ decryptedText }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Global from './Global'
  
  export default {
    data() {
      return {
        text: '',
        encryptedText: '',
        decryptedText: '',
      };
    },
    methods: {
      async encryptText() {
        const url = Global.url;
        try {
          const response = await axios.post(url+'encrypt', { text: this.text });
          this.encryptedText = response.data.ciphertext.data;
        } catch (error) {
          console.error('Error encriptando texto:', error);
        }
      },
      async decryptText() {
        const url = Global.url;
        try {
          console.log(this.encryptedText)
          const response = await axios.post(url+'decrypt', { ciphertext: this.encryptedText });
          this.decryptedText = response.data.plaintext;
        } catch (error) {
          console.error('Error desencriptando texto:', error);
        }
      },
    },
  };
</script>
  