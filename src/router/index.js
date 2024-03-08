import { createRouter, createWebHistory } from 'vue-router'
import { changeMetaTags } from '@/utils/seo'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/ClustersDiscord.vue'),
      meta: {
        title: 'Discord Clusters'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to) => {
  changeMetaTags(to.meta)
})

export default router
