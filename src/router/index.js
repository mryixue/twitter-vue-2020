import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import admin from '../views/admin.vue'
import admin_main from '../views/admin_main.vue'
import admin_user from '../views/admin_user.vue'
import not_found from '../views/not_found.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/admin',
    component: admin
  },
  {
    path: '/admin_main',
    component: admin_main
  },
  {
    path: '/admin_user',
    component: admin_user
  },
  {
    path: '*',
    name: 'not_found',
    component: not_found
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
