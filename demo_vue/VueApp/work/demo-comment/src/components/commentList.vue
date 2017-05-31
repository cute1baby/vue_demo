<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group" v-show="comments.length">
      <li class="list-group-item" v-for=""></li>
      <!--取出来显示comment-->
      <comment-item v-for="c in comments" :comment="c" :delete-comment="deleteComment"></comment-item>
    </ul>
  </div>
</template>
<script>
  import commentItem from './commentItem'
  export default{
      //props:['comments']   这是第一种语法
      props:{
          comments:{
              type:Array,
              required:true  //必填项
          }
      }
  },
  component:{
    commentItem
  }
</script>
<style>

</style>
