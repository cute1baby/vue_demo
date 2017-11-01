import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'
import './assets/animate.css'        /*在webpack.config.js中加上一些style-loader之类的。*/
//使用路由
Vue.use(VueRouter);
const router=new VueRouter(routerConfig);
new Vue({
    router,
  el: '#app',
  render: h => h(App)
})
