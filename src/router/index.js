import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import main from '../views/main.vue'
import admin from '../views/admin.vue'
import not_found from '../views/not_found.vue'
import store from './../store'

Vue.use(VueRouter)

// const authorizeIsAdmin = (to, from, next) => {
//   const currentUser = store.state.currentUser
//   if (currentUser && !currentUser.isAdmin) {
//     next('/not-found')
//     return
//   }
//   next()
// }

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
    path: '/main',
    name: 'main',
    component: main
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/admin_main',
    name: 'admin_main',
    component: () => import('../views/admin_main.vue')
    // beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin_user',
    name: 'admin_user',
    component: () => import('../views/admin_user.vue')
    // beforeEnter: authorizeIsAdmin
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
