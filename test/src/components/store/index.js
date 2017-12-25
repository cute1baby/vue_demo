import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import action from './action'

Vue.use(Vuex)

const state = {
  wxqq:['微信审计','QQ审计'],
  objSize:['聊天对象','聊天内容','敏感词','热词'],
  dateIndex:['今天','最近7天','近一个月','近三个月'],
  exampleNum:0
}

export default new Vuex.Store ({
  state,
  action,
  mutations
})
