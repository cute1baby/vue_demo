/**
 * Created by lizhong on 2018/1/7.
 */
import {ADD_TO_CART} from './types'
export default {
  addTochart ({commit}, item) {
    if (item.invatal) {
      commit(ADD_TO_CART, {id: item.id})
    }
  }
}
