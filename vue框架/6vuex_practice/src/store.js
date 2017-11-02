import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//用来存储数据
const state ={
    counter:10
}

//处理你做什么操作,调用那个方法
const actions = {
    increate:({commit})=> {  //从App.vue中mapActions传过来的四个方法分别有commit和state值传来。
        commit('increate');
    },
    decreate:({commit})=>{
        commit('decreate');
    },
    oddDecreate:({commit,state})=>{
        if(state.counter%2==0){
            commit('decreate');  //做减法
        }
    },
    asynIncreate:({commit})=>{
        new Promise((resolve)=>{
            setTimeout(()=>{
                commit('increate');  //做加法
            },2000)
        })
    }
}

//处理数据的变化(数据的具体逻辑)
const mutations = {
    increate(state){
        state.counter++;
    },
    decreate(state){
        state.counter--;
    }
}

const getters ={
    counter(state){
        return  state.counter;
    },
    getOdd(state){
        return  state.counter%2==0?'偶数':'奇数';
    }
}

//将上面的值暴露出去给main.js使用
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})