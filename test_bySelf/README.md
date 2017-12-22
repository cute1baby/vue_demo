# test

> * 针对于这种情况：App组件作为一个总的路由源，只需要写router-view，而在其下面的路由组件放在routes数组中。
  从父级传递参数到子级的时候,使用sync可以在子级修改了该属性之后传给父级,并且不会报错;相反:如果没有加上sync修改子级的内容就会直接报错。
  【subinfo和son的例子就是解释这个问题的】（但是某些情况下的sync不生效）
  同时可以使用传递对象的方式给子级,这么如此就能修改子级的值而传给父级。

> * axios全局引入的方法：
在main.js文件中,引入：import axios from 'axios',Vue.prototype.$http = axios.
在各个组件使用的时候就:this.$http.get(),也就是说：
Vue.prototype 为注册全局方法  其他任何组件都可引用

> * 但是一般情况下axios的使用是：在哪一块地方需要用到就在该组件中引入axios模块，然后使用：
举个栗子：
import Axios from 'axios'
Axios.get(url)
   .then(response=>{
        ###
   })
   .catch(err => {
      ###
   })
