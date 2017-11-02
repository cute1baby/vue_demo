# vueX:是对数据的集中管理

执行顺序是：
#main.js
import store from './store'    //这样引入store
new Vue({
    store,   //同时将所接受的值传入到App.vue中
  el: '#app',
  render: h => h(App)
})
=================================================================
#接着我们看store里面的内容
首先引入vue和vuex两个以依赖文件。
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

//处理数据的逻辑(值得变化)
const mutationns = {
    increate(state){
        state.counter++;
    },
    decreate(state){
        state.counter--;
    }
}

//监听获取变化的值
const getters = {
    counter(state){
        return  state.counter;
    },
    getOdd(state){
        return  state.counter%2==0?'偶数':'奇数';
    }
}

//需要导出Store对象
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});
============================================================================

App.vue部分：
import {mapGetters,mapActions} from 'vuex';   //vuex自带额的两个方法
methods:mapActions([   //将方法收集起来,这里跟action对应起来的[这里用来对应action定义的这些方法]
  'increate',
  'decreate',
  'oddDecreate',
  'asynIncreate'
]),
computed:mapGetters([   //需要监听的写在模板中的数据,这里是跟getters相对应的。
  'counter',
  'getOdd'
])

最后总结一下这几个单词的意思：
(1)state：{状态}
(2)actions：{行动}
(3)mutations：{突变}
(4)getters：{获得者}



