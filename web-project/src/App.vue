<template>
  <header>
    <MainHeaderPage/>
  </header>
  <RouterView/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import MainHeaderPage from './components/MainHeaderPage.vue';
import { RouterView } from 'vue-router';

export default {
    name: "App",
    components: { MainHeaderPage, RouterView},

}
</script>
