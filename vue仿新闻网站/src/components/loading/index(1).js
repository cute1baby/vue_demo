const LoadingComponent = require('./Loading.vue')
const loading = {
  install: function(Vue) {
    Vue.component('loading', LoadingComponent)   //给vue添加了自身的组件
  }
}
module.exports = loading

