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
import LoginPage from './views/LoginPage.vue'
import LogoutPage from './views/LogoutPage.vue'
import UserPage from './views/UserPage.vue'
import EncriptionPage from './EncriptionPage.vue'
import { createAuth0 } from '@auth0/auth0-vue'

const routes = [
    {path: '/',component: HomePage},
    {path: '/home',component: HomePage},
    {path: '/aditional' ,component: PageAditional},
    {path: '/Addalumno' ,component: AddAlumno},
    {path: '/alumnos' ,component: AlumnosPage},
    {path: '/Addnota' ,component: AddNota},
    {path: '/notas' ,component: NotasPage},
    {path: '/progreso' ,component: ProgresoPage},
    {path: '/login' ,component: LoginPage},
    {path: '/logout' ,component: LogoutPage},
    {path: '/user' ,component: UserPage},
    {path: '/encrypt' ,component: EncriptionPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)

app.use(
    createAuth0({
      domain: "dev-z544bfsjzgmra2rl.us.auth0.com",
      clientId: "RyLeHM3j5T8b4o8fig4uQy0p6j8Ezweu",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  );

app.use(router)
app.mount('#app')