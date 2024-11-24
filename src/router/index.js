import { createRouter, createWebHistory } from 'vue-router'
import HeroView from '@/views/HeroView.vue'
import ProjectView from '@/views/ProjectView.vue'
import BlogView from '@/views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HeroView',
      component: HeroView
    },
    {
      path: '/projects',
      name: 'ProjectView',
      component: ProjectView
    },
    {
      path: '/blog',
      name: 'BlogView',
      component: BlogView
    }
  ]
})

export default router
