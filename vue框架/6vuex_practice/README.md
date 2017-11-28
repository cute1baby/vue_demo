vueX:是对数据的集中管理
=====================================================================================
#子父级之间的通信：
在vue2.0中知道：一般从父级传递信息给子级是通过动态属性传过去，然后子级用props接收该属性。但是有一点就是在传递的时候vue是一种单向数据流,子级修改了这个属性但是不允许传递过去修改父级的属性。所以，如果需要修改父级的属性值，那么需要用到自定义事件，在父级定义自定义事件，然后在子级通过$emit()调用这个事件，从而达到了修改父级元素的效果。
下面是具体的一个例子：

a）兄弟组件间的信息传递
父组件有一个属性set，设置的属性值是set=false;
子组件a对属性值set进行了修改，修改为true;
子组件b对父组件传来的set进行接收,并且拿到在父组件中修改后的值，做逻辑处理。
point:
1）属性set无需传给子组件a,需要通过$emit修改父级属性。如何进行设置呢?在自定义事件中传递一个参数给父级组件设置的自定事件对应的函数,在函数中写与set相关联的逻辑代码
2）属性set需要传值给子组件b,通过props进行接收之后做逻辑操作。

============================================================

#执行顺序是：
```
main.js
import store from './store'    //这样引入store
new Vue({
    store,   //同时将所接受的值挂载到App.vue中
  el: '#app',
  render: h => h(App)
})
```
=================================================================
 
#接着我们看store里面的内容
首先引入vue和vuex两个以依赖文件。
```
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const state={
    counter:10   //里面存储的是全局的数据
} 

//方法中有commit和state值两个参数。
const actions = {
    increate:({commit})=> {
        commit('increate');
    },
    oddDecreate:({commit,state})=>{
        if(state.counter%2==0){
            commit('decreate');  //做减法
        }
    }
    。。。
}
```
//处理数据的逻辑(值得变化)
```
const mutationns = {
    increate(state){
        state.counter++;
    },
    decreate(state){
        state.counter--;
    }
}
```
//监听获取变化的值
```
const getters = {
    counter(state){
        return  state.counter;
    },
    getOdd(state){
        return  state.counter%2==0?'偶数':'奇数';
    }
}  
```
//需要导出Store对象
``
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});
```
============================================================================

#App.vue部分：


import {mapGetters,mapActions} from 'vuex';   //vuex自带额的两个方法
methods:mapActions([   //将方法收集起来,这里跟action对应起来的[这里用来对应action定义的这些方法]
  'increate',
  'decreate',
  'oddDecreate',
  'asynIncreate'
]),
computed:mapGetters([           //需要监听的写在模板中的数据,这里是跟getters相对应的。
  'counter',
  'getOdd'
])

最后总结一下这几个单词的意思：
(1)state：{状态}
(2)actions：{行动}
(3)mutations：{突变}
(4)getters：{获得者}

```
#看下下面的两种定义的特别方式：
```
methods: {
  ...mapActions([
    'foo',
    'bar'
  ])，
  nextItem(){
	if (this.choosedNum !== null) {
		this.choosedNum = null;
		//保存答案, 题目索引加一，跳到下一题
		this.addNum(this.choosedId)
	}else{
		alert('您还没有选择答案哦')
	}
   }
}
=>则相当于这样进行定义：存在于既有mutations中定义的函数，也有自定义的函数时会用这种写法。
methods: {
  foo(...args) {
    return this.$store.dispatch.apply(this.$store, ['foo'].concat(args))
  }
  bar(...args) {
    return this.$store.dispatch.apply(this.$store, ['bar'].concat(args))
  }
}
```
