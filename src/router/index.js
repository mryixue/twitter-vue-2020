import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import main from '../views/main.vue'
import admin from '../views/admin.vue'
import not_found from '../views/not_found.vue'
import store from './../store'

Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.role !== 'admin') {
    next('/not-found')
    return
  }
  next()
}

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
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/user.vue')
  },
  {
    path: '/users/:id',
    name: 'others',
    component: () => import('../views/others.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/setting.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/admin_main',
    name: 'admin_main',
    component: () => import('../views/admin_main.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin_user',
    name: 'admin_user',
    component: () => import('../views/admin_user.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/followers/:id',
    name: 'followers',
    component: () => import('../views/followers.vue')
  },
  {
    path: '/chatRoom/:id',
    name: 'chatRoom',
    component: () => import('../views/chatRoom.vue')
  },
  {
    path: '/reply_list/:tweetId',
    name: 'reply_list',
    component: () => import('../views/reply_list.vue')
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

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')
  const tokenInStore = store.state.token

  let isAuthenticated = store.state.isAuthenticated

  if (token && token !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  const pathsWithoutAuthentication = ['login', 'register', 'admin']

  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/login')
    return
  }

  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/main')
    return
  }

  next()
})

export default router
