import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入全局css样式
import './assets/css/bootstrap.min.css'
import './assets/css/basic.css'

import axios from 'axios'
Vue.prototype.$axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
