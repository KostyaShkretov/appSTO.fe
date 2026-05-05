import MainPage from '@/pages/MainPage.vue'
import MastersPage from '@/pages/MastersPage.vue'
import MasterPage from '@/pages/MasterPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    }, {
      path: '/masters',
      name: 'masters',
      component: MastersPage
    },
    {
      path: '/masters/:master',
      name: 'master',
      component: MasterPage
    }

  ],
})

export default router
