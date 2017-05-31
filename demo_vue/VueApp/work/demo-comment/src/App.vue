<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <!--引入第一个commentAdd组件-->
    <div class="container">
      <comment-add :add="add"></comment-add>
      <!--这个时候需要把数据传到list中去，用于在item遍历。-->
      <comment-list :comments="comments" :remove="remove"></comment-list>
    </div>
  </div>
</template>

<script>
import commentAdd from './components/commentAdd'
import commentList from './components/commentList'
export default {
  data () {
    return {
      comments: []
    }
  },
  methods:{
    add:function (comment){
      this.comments.push(comment);
    }
  },
  creates (){
    // 模拟发送ajax请求，获取初始数据.这个地方获取数据的时候需要做一个延迟
    setTimeout(() =>{
        this.comments =[
          {
            id:1,
            name:'Tom',
            content:'Vue真的很好用'
          },
          {
            id : 2,
            name : "Bob",
            content : "Vue比较轻量级，与anglar比较的话比较适合初学者"
          }
        ]
    },1000)
  },
  components: {
    commentAdd,
    commentList
  }
}
</script>

<style>

</style>
