import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { authGuard } from '@auth0/auth0-vue'

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
      beforeEnter: authGuard,
      component: () => import('../views/SitesListView.vue')
    },
    {
      path: '/sites/new',
      name: 'new-site',
      beforeEnter: authGuard,
      component: () => import('../views/AddSiteView.vue')
    },
    {
      path: '/sites/:id',
      name: 'site-detail',
      beforeEnter: authGuard,
      component: () => import('../views/SiteDetailView.vue')
    },
    {
      path: '/sites/:id/update',
      name: 'update-site',
      beforeEnter: authGuard,
      component: () => import('../views/UpdateSiteView.vue')
    }
  ]
})

export default router
