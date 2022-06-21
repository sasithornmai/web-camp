import { createRouter, createWebHashHistory } from 'vue-router'
import AbOut from '../views/AboutUs.vue'
import AccesSories from '../views/AccesSories.vue'
import  ReView from '../views/ReView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AbOut
  },
  {
    path: '/accessories',
    name: 'accessories',
    component: AccesSories
  },
  {
    path: '/review',
    name: 'review',
    component: ReView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
