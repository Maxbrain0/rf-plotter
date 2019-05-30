import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuemeta'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/stylus/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
