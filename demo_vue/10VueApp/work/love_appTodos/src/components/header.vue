<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="inputTodo" @keyup.enter="addToList"/>
  </div>
</template>
<script>
export default{
  //将addTodo传递过来之后就可以直接去使用了，相当于本组件定义的属性和方法一样。
  props:{
    addTodo:Function
  },
  data (){
      //给输入框一个初始值
      return {
          inputTodo:''
      }
  },
  methods:{
      //这是用来添加的方法，前面在app.vue中写到的只是一个初始值。
    addToList(){
      //检查数据合法性
      const inputTodo = this.inputTodo.trim();
      if(!inputTodo){
        this.inputTodo="";
        return
      }
      //根据输入创建todo对象
      const todo ={
          text:inputTodo,
          autoComplete:false
      }
      //添加
      this.addTodo(todo);
      //清空输入
      this.inputTodo =""
    }
  }
}
</script>
<style>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
