/**
 * Created by lizhong on 2018/1/7.
 */
import {ADD_TO_CART} from './types'
export default {
  [ADD_TO_CART] (state, {id}) {
    state.list.find(item => item.id === id).invatal--
  }
}
