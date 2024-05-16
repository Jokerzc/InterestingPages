import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/ScollBoxs',
      name: 'ScollBoxs',
      component: () => import('../views/ScollBoxs.vue')
    },
    {
      path: '/Earth_3d',
      name: 'Earth_3d',
      component: () => import('../views/Earth_3d.vue')
    },
    {
      path: '/TwoPage',
      name: 'TwoPage',
      component: () => import('../views/TwoPage.vue')
    },
    {
      path: '/Test',
      name: 'Test',
      component: () => import('../views/Test.vue')
    },
    {
      path: '/CssDoodle',
      name: 'CssDoodle',
      component: () => import('../views/CssDoodle.vue')
    }
  ]
})

export default router
