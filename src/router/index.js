import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/travels/HomeView.vue'
import DestinationView from '../views/travels/DestinationView.vue'
import AboutView from '../views/travels/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destinations',
      name: 'destination',
      component: DestinationView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
