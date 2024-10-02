import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFounfView from '@/views/NotFounfView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/brasil',
      name: 'brasil',
      component: () => import('../views/BrasilView.vue')
    },
    {
      path: '/hawaii',
      name: 'hawaii',
      component: () => import('../views/HawaiiView.vue')
    },
    {
      path: '/jamaica',
      name: 'jamaica',
      component: () => import('../views/JamaicaView.vue')
    },
    {
      path: '/panama',
      name: 'panama',
      component: () => import('../views/PanamaView.vue'),
    },
    {
      path: '/destinations/:id',
      name: 'destinations',
      component: () => import('../views/DesctinationsView.vue'),
    },
    {
      path: '/:catchAll(.*)', name: 'not-found', component: NotFounfView
    },
  ],
  linkActiveClass: 'vue-school-active-link'
})
export default router
