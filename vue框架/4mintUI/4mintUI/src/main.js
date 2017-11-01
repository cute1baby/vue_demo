import Vue from 'vue'
import App from './App.vue'
import Mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mintui);
new Vue({
  el: '#app',
  render: h => h(App)
})
