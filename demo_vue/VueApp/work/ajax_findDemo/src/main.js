import Vue from 'vue'
//引入第三方插件
import VueResource from 'vue-resource'
import App from './App'
//使用插件,所有的组件都可以使用了
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
