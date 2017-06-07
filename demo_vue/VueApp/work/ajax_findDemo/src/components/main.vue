<template>
  <h2 v-show="firstView">请输入后搜索</h2>
  <h2 v-show="loading">loading...</h2>
  <h2 v-show="errorMsg">{{errorMsg}}</h2>
  <div class="row" v-show="users">
    <div class="card" v-for="user in users">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>
<script>
  //使用axios的方式单独在这个组件上引入
  import axios from 'axios'
    export default{
      props:['searchName'],
      data (){
          return {
            firstView:true,
            loading:false,
            errorMsg:false,
            users:false
          }
      },
      computed:{
          searchName: {
              set(value) {
                this.firstView = false;
                this.loading = true;
                this.errorMsg = false;
                this.users = false;
                  //发送ajax请求.
                const url=`https://api.github.com/search/users?q=${value}`
               // const url=`https://api.github.com/search/users?q=${value}`
                /*this.$http.get(url)
                  .then(response =>{
                      //success callback
                    this.loading = false;
                    this.errorMsg = false;
                    this.users = response.body.items;
                    //console.log(response);
                  },response =>{
                      //error callback
                    this.loading = false;
                    this.errorMsg = response.statusText;
                    this.users = false;
                })*/
                axios.get(url)
                  .then(response =>{
                  //success callback
                  console.log(response);
                  this.users=response.data.items;
                  this.loading= false
                  })
                  .catch(error =>{
                      //error callback
                    console.log(error);
                    this.loading =false;
                    this.errorMsg = error.statusText;
                  })
              }
          }
      }
    }
</script>
<style>

</style>
