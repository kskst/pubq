import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Constants from '@/Constants'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/receive',
    name: Constants.PAGE_RECEIVED,
    component: () => import('@/components/pages/ReceiveListPage.vue')
  },
  {
    path: '/send',
    name: Constants.PAGE_SEND,
    component: () => import('@/components/pages/SendListPage.vue')
  },
  {
    path: '/settings',
    name: Constants.PAGE_SETTINGS,
    component: () => import('@/components/pages/SettingsPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
