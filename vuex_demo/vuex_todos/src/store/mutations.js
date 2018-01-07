import {RECEIVE_TODOS, ADD_TODO, REMOVE_TODO, DELETE_DONE, UPDATE_ALL_TODOS} from './types'

export default { //函数的默认第一个参数是state
  [RECEIVE_TODOS] (state, {todos}) {
    state.todos = todos  //将todos存储到全局的vuex中
  },

  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo) //添加数据到todos中
  },

  [REMOVE_TODO] (state, {index}) {
    state.todos.splice(index, 1)  //删除当前选中的数据
  },

  [DELETE_DONE] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },   //删除选中的选项

  [UPDATE_ALL_TODOS] (state, {isCheck}) {
    state.todos.forEach(todo => todo.complete = isCheck)
  }    //选中或者反选所有
}
