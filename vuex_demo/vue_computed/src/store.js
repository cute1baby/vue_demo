/**
 * Created by lizhong on 2018/1/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {   //设置某个变量的默认值
  count:10
}

const mutations = {
  INCREATE (state,num1){   //做加法【参数的放置方式,在state同级】
      state.count +=num1;
  },
  DECREATE (state,num2){   //做减法
      state.count -=num2;
  }
}
const actions = {
  add({commit},num1){ //【参数的放置方式,在commit同级】
    commit('INCREATE',num1)
  },
  reduce({commit},num2){
    commit('DECREATE',num2)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

