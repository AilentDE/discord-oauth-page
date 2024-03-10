import { createRouter, createWebHistory } from 'vue-router'
import { changeMetaTags } from '@/utils/seo'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/ClustersDiscord.vue'),
      beforeEnter: (to, from) => {
        if (to.query.code && to.query.state) {
          return true
        } else {
          window.alert('請從Clusters個人檔案頁面進入')
          location.href = 'https://clusters.tw/admin/profile/me'
          return false
        }
      },
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
