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
    <div class="container">
      <!--注意：这里的add方法，remove方法，comments字段以comment-list为媒介传递到commentItem中，bind作为动态绑定属性的功能正好起到这样的作用。-->
      <comment-add :add="add"></comment-add>
      <comment-list :comments="comments" :remove="remove"></comment-list>
    </div>
  </div>
</template>

<script>
import commentAdd from './components/commentAdd'
import commentList from './components/commentList'
export default {
  data() {
      return {
          comments: []
      }
  },
  created(){
//模拟发送ajax请求，获取初始值，这是用到计时器的原因。这里用到箭头操作符是因为这样能让thsi指向vm.
    setTimeout(()=>{
        this.comments=[
          {
              id:1,
              name:'Bob',
              content:'相传Vue是大神尤雨溪写出来的'
          },
          {
            id:2,
            name:'Tom',
            content:'Vue相比其他js的框架更加短小实用'
          }
        ]
    },1500)
  },
  methods:{
      //这个是评论的添加方法，本来是应该在commentAdd组件中被使用，现在放在父级，并且传递了参数
    add(comment){
        this.comments.push(comment)
    },
    remove(index){
        this.comments.splice(index,1)
    }
  },
  events:{
      //没有明白这个函数的意图
    'comment.delete' (index){
      this.comments.splice(index, 1)
    }
  },
  components: {
    commentAdd,
    commentList
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
