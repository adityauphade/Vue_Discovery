import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')   //  THIS WAS IMPORTED ABOVE
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/world',
    name: 'World',
    component: () => import('../views/World/World.vue')   //  THIS WAS IMPORTED ABOVE
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../views/Experience.vue')   //  THIS WAS IMPORTED ABOVE
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery/Gallery.vue')   //  THIS WAS IMPORTED ABOVE
  },
  {
    path: '/press',
    name: 'Press',
    component: () => import('../views/Press.vue')   //  THIS WAS IMPORTED ABOVE
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')   //  THIS WAS IMPORTED ABOVE
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
