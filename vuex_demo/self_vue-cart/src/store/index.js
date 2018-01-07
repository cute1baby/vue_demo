/**
 * Created by lizhong on 2018/1/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state = {
  list: [
    {
      'id': 1,
      'title': '连衣裙',
      'price': 20,
      'invatal': 3
    },
    {
      'id': 2,
      'title': '眼镜',
      'price': 40,
      'invatal': 1
    },
    {'id': 3,
      'title': '手机',
      'price': 54,
      'invatal': 1
    },
    {'id': 4,
      'title': '裤子',
      'price': 80,
      'invatal': 2
    }
  ]
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
