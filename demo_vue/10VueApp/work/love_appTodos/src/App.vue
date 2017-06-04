<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :add-todo="addTodo"></todo-header>
      <todo-main :todos="todos"></todo-main>
      <todo-footer :todos="todos" :remove-all-com="removeAllCom" :update-todos-state="updateTodosState"></todo-footer>
    </div>
  </div>
</template>

<script>
import header from './components/header'
import main from './components/main'
import footer from './components/footer'
import keepStorage from './storage/keepStorage'
export default {
    //初始化数据
  data (){
      //这里给todos一个初始值，后面再header中是直接给todos里面插入值。
      return {
        todos:[
          /*{text:'尤雨溪大神',autoComplete:false},
          {text:'梦雪小宝宝',autoComplete:true},
          {text:'张鑫旭大神',autoComplete:false},
          {text:'阮一峰大神',autoComplete:false},
          {text:'李钟小牛',autoComplete:true}*/
        ]
      }
  },
  created (){
      //获取数据，在实例创建之后同步调用
    //created:在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。但是还没有开始 DOM 编译，$el 还不存在。
    //这个时候存储的有可能是字符串也有可能是一个空值string,null
    //this.todos = JSON.parse(window.localStorage.getItem('TODOS')||'[]');
    this.todos= keepStorage.fetch();
    console.log(11);
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo);
    },
    deleteTodo(todo){
        this.todos.$remove(todo); //删除方法，删除该下标中的todo对象
    },
    removeAllCom(){
        //过滤操作,留下未完成的false
      this.todos=this.todos.filter(todo =>{
          return !todo.autoComplete
      });
    },
    updateTodosState(allChecked){
        //allChecked=false的时候前面循环遍历的那些也是false,反之是true
      this.todos.forEach(todo =>{
        todo.autoComplete =allChecked;
      })
    }
  },
  events:{
      //自定义属性删除方法
    todo_delete(todo){
      this.deleteTodo(todo);
    }
  },
  watch:{
      //进行深复制
    'todos':{
      deep:true,
      /*handler:function(newTodos,oldTodos){
        //保存新值
        window.localStorage.setItem('TODOS',JSON.stringify(newTodos));
      }*/
      handler:keepStorage.save
    }
  },
  components: {
    'todo-header':header,
    'todo-main':main,
    'todo-footer':footer,
  }
}
</script>

<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
