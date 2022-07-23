import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/main/Index.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/product/Index.vue')
    },
  ]
})

export default router
