import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
    },
    {
      path: '/sites/update/:id',
      name: 'update-site',
      component: () => import('../views/UpdateSiteView.vue')
    }
  ]
})

export default router
