import TodoList from '../components/todolist.vue'
import todo from '../components/todo.vue'
import Other from '../components/other.vue'

export default [
  {
    path: '/',
    component: TodoList,
    children: [
      {
        path: 'article/:id',
        component: todo
      }
    ]
  },
  {path: '/other', component: Other}
]
