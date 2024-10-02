import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ],
  linkActiveClass: 'vue-school-active-link'
})
export default router
