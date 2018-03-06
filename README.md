# vue_demo
这是关于学习vue的一些例子，供自己学习与参考
-------------------------------------------------------------------------------------------------
```
### 正确配置sass的方法：

一共有三个步骤：
（1）安装sass的安装包：
  > * npm install --save-dev sass-loader
  > * 同时sass-loader依赖于node-sass,所以执行以下语句：npm install --save-dev node-sass
（2）在build文件夹下的webpack.base.conf.js的rules里面添加以下配置：可以放到 test:/\.js$/之后
  `
  {
    test: /\.sass$/,
    loaders: ['style', 'css', 'sass']
  }
  
  `
  
 (3) 在.vue组件中的style标签内添加lang='scss'.

其实有了在build文件夹下面的配置就不用单独去配置ruby环境了，这是这种配置的一种很好的地方。
```

----------------------------------------------------------------------------
```
# 如果在项目中安装ruby并且能够让他运行：
一共有三个步骤：
（1）配置ruby环境。网址在这里：https://www.w3cplus.com/sassguide/，并且在ruby上安装上sass
（2）在vue项目上安装node-sass,sass-loader.输入npm install node-sass --save-dev ,npm install sass-loader --save-dev
 (3) 在style标签内添加lang='scss'.
```

--------------------------------------------------------------------------

> 特别需要注意的一个问题是：无论是VueResource,还是VueRouter都可以使用Vue.use(VueRouter)的方式。但是有一个不行
 那就是:
 
 const router = new VueRouter({
  mode: 'history',
  routes
})
export default new Vuex.Store({
  state
})
 ```
 **axios**不存在这种use的方法，切记切记。
 ```在main.js中这样设置:
 import axios from 'axios'
Vue.prototype.$http = axios
在组件中这样使用:this.$http.axios=...

配合路由做一些这样的操作：
<router-link :to="`detaile/${item.id}`"></router-link>
<router-link :to="'detaile/'+item.id"></router-link>

$router和$route的区别。这个用两个例子来弄一下就清楚了：
this.$router.push({path:'/item'})     //设置路由的时候使用router
this.$route.params.id               //获取参数的时候使用route


#我的博客中有一个例子：
 * < 就是在设置滚动条的时候，需要动态的修改该header上的颜色和背景,此时是一个渐变的过程。所以在监听window的scroll事件的时候，需要采用的是这样的逻辑：
 * < 首先mounted里面肯定需要做一些事情,mounted里面最好做些什么事呢？做监听。[监听只有写在vue的生命周期函数里面才是最好的选择]
 window.addEventListener('scroll',this.scrollFun);
 * < 在methods中写对应的函数,所以在window每次做scroll的时候就能执行该函数。
 scrollSet () {
      this.scrollTopNum = document.body.scrollTop || document.documentElement.scrollTop
      this.$refs.position.style.opacity = this.scrollTopNum / 600
      if (this.scrollTopNum > 480) {
        this.$refs.header.style.color = '#666'
        this.$refs.position.style.opacity = 1
        this.show = true
      } else {
        this.$refs.header.style.color = '#fff'
        this.show = false
      }
    }
 
 var obj = {'a':'123','b':'345'};
console.log(Object.keys(obj));  //['a','b']
Object.keys()   //这个方法的作用就是获取整个对象的属性名。


设置样式：
<div :style="{ 'opacity': !editableCheckNum ? 0.5 : 1 }">555</div>      // 三目运算符
<router-link to="/other" :class="{color666:show,colorfff:!show}">Demo</router-link>   //类名绑定

const router = new VueRouter({
  mode: 'history',   //清除地址栏中的#hash符号
  routes
})
 ```
 
 
 
 
 
 --------------------------------------------------------------------------------------------------------
 **filterBy过滤方法已经在vue2被废弃了，现在filter已经不存在内部过滤器。
 
 **
 <font style="color:red;">vue组间标签名不能是驼峰式，属性名不能是驼峰，事件名不能是驼峰。如下所示:
    <child-one @dede-show="setName"></child-one>
    <child-two :dede-con="setName1"></child-two>
 </font>
 这里有一个文件是子父级之间的信息传递的文件，这个文件中存在的模板中可以得到
 <template>
   <div>
    //这里存在多个标签的时候外面必须套一个外层标签进行包裹。
   </div>
 </template>
 ```

Vue.js是什么?
111111111111111111111
一位华裔前Google工程师开发的前端js库
一个MVVM的框架
核心概念
数据绑定
组件
与angular.js类似的是声明式开发，但性能高于angular，体积小很多, 比较适合移动端开发
它本身不是全能框架, 只关注UI, 如果需要router/ajax, 可以使用对应插件或使用别的库来实现
基本使用

引入vue.js
创建Vue对象(vm), 指定选项(配置)对象
el : 指定dom标签容器的选择器
data : 指定初始化状态属性数据的对象 对象/函数(返回一个对象)
页面中
使用v-model: 实现双向数据绑定
使用{{}}: 显示数据
Vue对象的选项

el
指定dom标签容器的选择器
Vue就会管理对应的标签及其子标签
data
对象或函数类型
指定初始化状态属性数据的对象
vue对象可以直接访问其属性
页面中可以直接访问使用
数据代理: 由vm对象来代理对data中所有属性的操作(读/写)
methods
包含多个方法的对象
供页面中的事件指令来绑定回调
回调函数默认有event参数, 但也可以指定自己的参数
所有的方法由vue对象来调用, 访问data中的属性直接使用this.xxx
computed
包含多个方法的对象
对状态属性进行计算返回一个新的数据, 供页面获取显示
一般情况下是相当于是一个只读的属性
利用set/get方法来实现属性数据的计算读取, 同时监视属性数据的变化
如何给对象定义get/set属性
在创建对象时指定: get name () {return xxx} / set name (value) {}
对象创建之后指定: Object.defineProperty(obj, age, {get(){}, set(value){}})
watch
Vue.$watch()
=======
###Vue.js是什么?

>  一位华裔前Google工程师开发的前端js库   
> 一个MVVM的框架   
> 核心概念   
> 数据绑定   
> 组件   
> 与angular.js类似的是声明式开发，但性能高于angular，体积小很多, 比较适合移动端开发   
> 它本身不是全能框架, 只关注UI, 如果需要router/ajax, 可以使用对应插件或使用别的库来实现   
> 基本使用   

###引入vue.js
创建Vue对象(vm), 指定选项(配置)对象   
el : 指定dom标签容器的选择器   
data : 指定初始化状态属性数据的对象 对象/函数(返回一个对象)   
页面中:   
使用v-model: 实现双向数据绑定   
使用{{}}: 显示数据   
Vue对象的选项   

###el
指定dom标签容器的选择器   
Vue就会管理对应的标签及其子标签   

###data:   
  对象或函数类型   
  指定初始化状态属性数据的对象   
  vue对象可以直接访问其属性   
  页面中可以直接访问使用   
  数据代理: 由vm对象来代理对data中所有属性的操作(读/写)   
###methods:   
  包含多个方法的对象   
  供页面中的事件指令来绑定回调   
  回调函数默认有event参数, 但也可以指定自己的参数   
  所有的方法由vue对象来调用, 访问data中的属性直接使用this.xxx   
###computed:   
  包含多个方法的对象   
  对状态属性进行计算返回一个新的数据, 供页面获取显示   
  一般情况下是相当于是一个只读的属性   
  利用set/get方法来实现属性数据的计算读取, 同时监视属性数据的变化   
  
###如何给对象定义get/set属性
  在创建对象时指定: ```get name () {return xxx} / set name (value) {}```
  对象创建之后指定: ```Object.defineProperty(obj, age, {get(){}, set(value){}})```
     
#watch
###Vue.$watch()
>>>>>>> origin/master
包含多个属性监视的对象
  分为一般监视和深度监视
  ```
  'xxx' : {
    deep : true,
    handler : fun(value)
  }
  ```
  
###扩展数组

对数组的常用方法进行了包装(用于数据绑定)
```
  $remove(item) : 删除数组中对应的元素
  $set(index, ele) : 给数组中指定下标指定对应的元素
```
###过渡

利用vue去操控css的动画
  transition/animation
使用
  定义css样式
  ```
    .xxx-transition: 在其中去指定transition/animation
    .xxx-enter
    .xxx-leave
  ```   
###动画的钩子函数
> 生命周期

*vm/组件对象
*生命周期图   
*主要的生命周期函数(钩子)   
```
  created(): 启动异步任务(发送ajax请求, 启动定时器)   
  beforeDestroy(): 做一些收尾的工作 
 ``` 
 
*页面指令
```
  v-text/v-html: 指定标签体   
  v-text : 当作纯文本   
  v-html : 将value作为html标签来解析   
  (v-if v-else v-show)   
    v-if : 如果vlaue为true, 当前标签会输出在页面中   
    v-else : 与v-if一起使用, 如果value为false, 将当前标签输出到页面中   
    v-show: 就会在标签中添加display样式, 如果vlaue为true, display=block, 否则是none   
    v-for : 遍历   
 ```
 
遍历数组 :``` v-for="person in persons"  $index   ```
遍历对象 : ```v-for="value in person"  $key```

v-on : 绑定事件监听
v-on:事件名, 可以缩写为: @事件名
  监视具体的按键:<font style="color:pink;"> @keyup.keyCode @keyup.enter</font>
  阻止事件的冒泡和事件默认行为:<font style="color:pink;"> @click.stop  &&   @click.prevent</font>
  隐含对象:<font style="color:pink;"> $event </font>
v-bind : 强制绑定解析表达式  (:)
```
  很多属性值是不支持表达式的, 就可以使用v-bind
  可以缩写为: :id='name'
  :class
  :class="a"
  :class="{classA : isA, classB : isB}"
  :class="[classA, classB]"
  :style :style="{color : color}"
```  
v-model(双向数据绑定)   
  v-el : 标识某个标签   
  v-el:xxx   
  读取得到标签对象:```<font style="color:pink;"> this.$els.xxx</font> ```  
        
过滤器  
内置:   
```
capitalize : 首字母大小   
uppercase : 全部大写   
lowercase : 全部小写   
currency : 货币化   
pluralize : 单数/复数处理   
json : json格式化   
limitBy : 限定数组的部分元素(下标)   
filterBy : 限定数组的部分元素(值)   
orderBy : 对数组进行排序   
  ```  
###自定义
全局过滤器:
```
Vue.filter('过滤器名', function(value, xxx, yyy) {
  //处理逻辑
  return result;
})
局部过滤器
new Vue({
  filters : {
    '过滤器名' : function(value, xxx, yyy) {
        //处理逻辑
        return result;
    }
  }
})
```

###指令
内置:   
```
  v-text : 更新元素的 textContent（指的是把所有的元素包括url的细节都显示出来了）   
  v-html : 更新元素的 innerHTML（指的是有链接的网址）   
  v-if : 如果为true, 当前标签才会输出到页面     
  v-else: 如果为false, 当前标签才会输出到页面     
  v-show : 通过控制display样式来控制显示/隐藏    
  v-for : 遍历数组/对象    
  v-on : 绑定事件监听, 一般简写为@    
  v-bind : 强制绑定解析表达式, 可以省略v-bind    
  v-model : 双向数据绑定   
  v-el : 为某个元素注册一个唯一标识, vue对象通过$els属性访问这个元素对象     
  v-cloak : 使用它防止闪现表达式, 与css配合: [v-cloak] { display: none }   
  ```
###自定义
注册全局指令：
```
Vue.directive('my-directive', function(value){
  this.el.innerHTML = value.toUpperCase();
})
```
注册局部指令：
```
directives : {
  'my-directive' : function(value) {
    this.el.innerHTML = value;
  }
}
```
使用指令:
```
v-my-directive='xxx'
```
使用方式跟v-html类似，但是注意自定义属性不能包含驼峰的格式，显示的时候用连接符"-"替代。
