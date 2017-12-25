import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './components/store/index'
import axios from 'axios'
import  ElementUI from 'element-ui'
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.prototype.$http = axios
const router = new VueRouter({
  mode:'history',   //清除地址栏中的#符号
  routes
})

new Vue({     //记住vuex的方法和属性暴露的接口在这里挂载在全局。引入vuex的任务放在store的index.js中
  router,
  store,
  el: '#app',
  render: h => h(App)
})
