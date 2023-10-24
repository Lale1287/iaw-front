import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '../views/LogInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogInView
    },
    {
      path: '/sites',
      name: 'sites',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SitesListView.vue')
    },
    {
      path: '/sites/new',
      name: 'new-site',
      component: () => import('../views/AddSiteView.vue')
    },
    {
      path: '/sites/:id',
      name: 'site-detail',
      component: () => import('../views/SiteDetailView.vue')
    }
  ]
})

export default router
