import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AxiosPlugin from 'vue-axios-cors'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(AxiosPlugin)

Vue.use(
  new VueSocketIO({
    connection: 'http://localhost:3000'
  })
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
