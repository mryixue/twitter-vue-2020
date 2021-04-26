import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      avatar: '',
      introduction: '',
      role: '',
      account: '',
      cover: ''
    },
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication (state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser ({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        const { id, name, account, email, avatar } = data.currentUser
        commit('setCurrentUser', {
          id,
          name,
          account,
          email,
          avatar
        })
        return true
      } catch (error) {
        console.error('Can not fetch user information')
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {}
})
