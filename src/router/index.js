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
      name: 'Product',
      component: () => import('../views/product/Index.vue')
    },
    {
      path: '/product/:id',
      name: 'Product.Show',
      component: () => import('../views/product/Show.vue')
    }
  ]
})



export default router
