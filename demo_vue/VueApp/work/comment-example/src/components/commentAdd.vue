<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="comment.name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" style="resize:none;" v-model="comment.content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addComment">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  //props方法类似于data一样的使用方式。
  //comment设置初始值是一个空对象.
    export default{
        props:{
            add:Function
        },
        data (){
            return {
              comment:{}
            }
        },
        mehtods:{
          addComment(){
              //const是用来声明常量的。一旦声明，其值就不能改变。
              //得到comment对象
            const comment = this.comment;
            comment.id=Date.now();  //随机数
            //保存comment
            this.add(comment);
            //在保存之后清理输入
            this.comment={}
          }
        }
    }
</script>
<style>

</style>
