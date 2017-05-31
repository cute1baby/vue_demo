import Vue from 'vue'
import App from './app'

/* eslint-disable no-new */
/*只需要引入最上层的App.vue组件就可，其他的组件都是附着在他的身上，mail.js作为入口文件*/
new Vue({
  el: 'body',
  components: { App }
})
