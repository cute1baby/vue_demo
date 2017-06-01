<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header></todo-header>
      <todo-main :todos="todos"></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import header from './components/header'
import main from './components/main'
import footer from './components/footer'
export default {
    //初始化数据
  data (){
      return {
        todos:[
          {text:'尤雨溪大神',autoComplete:false},
          {text:'梦雪小宝宝',autoComplete:true},
          {text:'张鑫旭大神',autoComplete:false},
          {text:'阮一峰大神',autoComplete:false},
          {text:'李钟小牛',autoComplete:true}
        ]
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
