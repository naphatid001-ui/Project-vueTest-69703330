import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
   {
    path: '/grade',
    name: 'Grade',
    component: () => import('../views/Grade.vue')
  },
   {
    path: '/golds',
    name: 'Golds',
    component: () => import('../views/Api_golds.vue')
  },
   {
    path: '/product_api',
    name: 'product_api',
    component: () => import('../views/Product_api.vue')
  },
   {
    path: '/products_table',
    name: 'Products_table',
    component: () => import('../views/Product_table.vue')
  },
   {
    path: '/users',
    name: 'Users',
    component: () => import('../views/user.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
