import shop from '../../api/shop'
import {RECEIVE_PRODUCTS, ADD_TO_CART} from '../types'

const state = {   // products在全局定义
  productsVal: []
}

const mutations = {  // 为什么要传递products这个参数
  [RECEIVE_PRODUCTS] (state, {products}) {
    state.productsVal = products
  },
  [ADD_TO_CART] (state, {id}) {
    state.productsVal.find(p => p.id === id).inventory--
  }
}

const actions = {
  getProducts ({commit}) {
    shop.getProducts((products) => {
      commit(RECEIVE_PRODUCTS, {products})
    })
  }
}

const getters = {
  products (state) {
    return state.productsVal
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
