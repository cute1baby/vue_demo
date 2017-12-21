<template>
  <div>
    <header-sub @handleper-group="handleperGroup"></header-sub>
    <div id="container1">
      <sub-left :now-index="nowIndex" @handle-index="handleIndex"></sub-left>
      <sub-right :now-index="nowIndex" :per-group="perGroup"></sub-right>
    </div>
    <button @click="getData">请求</button>
  </div>
</template>

<script>
  import headerSub from './header/header'
  import subLeft from './subLeft/subLeft'
  import subRight from './subRight/subRight'
    export default {
      name: "subject",
      data(){
        return{
          nowIndex:0, //表示聊天对象,内容，敏感词[0,1,2,3]
          perGroup:0,   //表示个人和群组[0,1]
          timeIndex:1,     //当天，七天，本月，三个月
        }
      },
      methods:{
        handleIndex(index){
            this.nowIndex = index;
        },
        handleperGroup(index){
          this.perGroup = index;
        },
        getData(){
          let url = 'https://api.github.com/search/users?q=cute1';  //q=${value}
          this.$http.get(url)
            .then(function (response) {
              debugger;
              console.log(response);
            })
            .catch(function (error) {
              debugger;
              console.log(error);
            });
        }
      },
      components:{
        headerSub,
        subLeft,
        subRight
      }
    }
</script>

<style scoped>

</style>
