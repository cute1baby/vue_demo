import Vue from 'vue'
import App from './App.vue'
import Mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'   //将store中的值挂载到vue组件中

Vue.use(Mintui);
new Vue({
    store,
  el: '#app',
  render: h => h(App)
})
