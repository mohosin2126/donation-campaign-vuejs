import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import DonationDetails from '@/views/donation/details/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'text-red-500',
  linkExactActiveClass: 'border-indigo-700',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/donations',
      name: 'donation',
      component: Home,
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Home,
    },
    {
      path: '/donation/:id',
      name: 'donationDetails',
      component: DonationDetails,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
