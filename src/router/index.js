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
      path: '/destination/:id/:slug',
      name: 'destination',
      component: () => import('../views/DesctinationsView.vue')
    }
    , {
      path: '/:catchAll(.*)', name: 'not-found', component: NotFounfView
    },
  ],
  linkActiveClass: 'vue-school-active-link'
})
export default router
