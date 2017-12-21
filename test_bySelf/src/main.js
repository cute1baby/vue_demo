import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/router'
import VueX from 'vuex'
import axios from 'axios'
import  ElementUI from 'element-ui'
Vue.use(VueRouter)
Vue.use(VueX)
Vue.use(ElementUI);
Vue.prototype.$http = axios
const router = new VueRouter({
  mode:'history',   //清除地址栏中的#符号
  routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
