import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//将所有对应的vuex相关的部分都引入进来
Vue.use(Vuex)

const state = {
  todos: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
