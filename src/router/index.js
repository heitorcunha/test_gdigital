import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
  path:'/',
  name: 'Home',
  component: HomeView

},
  {
    path: '/pratos',
    name: 'pratos',
    component: () => import(/* webpackChunkName: "pratos" */ '../views/Pratos.vue')
  },
  {
    path: '/reservas',
    name: 'Reservas',
    
    component: () => import(/* webpackChunkName: "reservas" */ '../views/Reservas.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
