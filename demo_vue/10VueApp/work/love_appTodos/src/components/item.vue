<template>
  <li :style="{background:bgColor}" @mouseenter="toggleIn(true)" @mouseleave="toggleIn(false)">
    <label>
      <input type="checkbox" v-model="todo.autoComplete">
      <span>{{todo.text}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShowClear"  @click="deleteItem">删除</button>
  </li>
</template>
<script>
    export default{
      props: ['todo'],
      data (){
          return {
            bgColor:"#fff",
            isShowClear:false
          }
      },
      methods:{
        toggleIn(isEnter){
          if(isEnter){
            this.bgColor ="#666";
            this.isShowClear =true;
          }else{
            this.bgColor ="#fff";
            this.isShowClear =false;
          }
        },
        deleteItem(){
          //分发删除信息，这一块不怎么懂,自定义属性和方法
          this.$dispatch("todo_delete",this.todo)
        }
      }
    }
</script>
<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label {
    float: left;
    cursor: pointer;
  }
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
</style>
