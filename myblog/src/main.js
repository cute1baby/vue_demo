// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './routes/index'
import '../static/reset.css'
import '../static/markdown.css'

Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes
})
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
