import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import PageAditional from '@/views/PageAditional.vue'
import AddAlumno from '@/views/AddAlumno.vue'
import AlumnosPage from '@/views/AlumnosPage.vue'
import AddNota from '@/views/AddNota.vue'
import NotasPage from '@/views/NotasPage.vue'
import ProgresoPage from '@/views/ProgresoPage.vue'
import store from '@/store'

const routes = [
    {path: '/',component: HomePage},
    {path: '/home',component: HomePage},
    {path: '/aditional' ,component: PageAditional},
    {path: '/Addalumno' ,component: AddAlumno},
    {path: '/alumnos' ,component: AlumnosPage},
    {path: '/Addnota' ,component: AddNota},
    {path: '/notas' ,component: NotasPage},
    {path: '/progreso' ,component: ProgresoPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')