import Vue from 'vue'
import App from './App.vue'
import Loading from './components/loading'

Vue.use(Loading);   //注意：在此处直接使用Loading相当于全局覆盖了。
new Vue({
  el: '#app',
  render: h => h(App)
})
