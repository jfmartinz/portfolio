import { createRouter, createWebHistory } from 'vue-router'
import HeroPage from '@/components/HeroPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HeroPage',
      component: HeroPage
    }
  ]
})

export default router
