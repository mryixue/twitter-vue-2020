import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
import admin from '../views/admin.vue'
import admin_main from '../views/admin_main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/admin',
    component: admin
  },
  {
    path: '/admin_main',
    component: admin_main
  },
]

const router = new VueRouter({
  routes
})

export default router
