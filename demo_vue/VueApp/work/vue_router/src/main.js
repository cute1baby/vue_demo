//引入vue和vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入根主键和路由主键
import App from './App.vue'
import home from './components/home.vue'
import about from './components/about.vue'

//声明使用插件
Vue.use(VueRouter);

//创建路由器
const router =new VueRouter({
  //添加配置
  linkActiveClass: 'active', //指定当前路由链接的样式名
  history: true //去掉#!
});
//注册路由,路由路径和组件关联起来。
router.map({
  '/home':{
    component:home
  },
  '/about':{
    component:about
  }
})
//启动应用，该App就是上面引入的主键App.
router.start(App,"#app");
//请求默认路由
router.go("/home");
/* eslint-disable no-new */

