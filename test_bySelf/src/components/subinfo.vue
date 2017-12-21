<template>
  <div>
    <h3 class="title">设置使用sync将父级元素传给子级元素</h3>
    <div>
      <p v-if="menuList.length < 1">还没有对应的姓名和年龄</p>
      <ul v-else>
        <li v-for="(item,index) in menuList">
          <son :item.sync="item" :key="index" :statu="statu"></son>
        </li>
      </ul>
      <input type="text" v-model="myBoke">
      <button @click="getData">寻找GitHub账号</button>
      <hr>
      <div v-if="githubItems.length>0" style="overflow: hidden;">
        <div v-for="(item,index) in githubItems" :key="index" style="margin: 5px;text-align: center;float: left;">
          <img :src="item.avatar_url" alt="我的照片" style="width: 80px;height: 80px;display: block;">
          <a :href="item.html_url" style="color:green;font-size:12px;">我的博客</a>
        </div>
      </div>
      <div v-else>
        <p>目前没有找到对应的GitHub账号</p>
      </div>
    </div>
  </div>
</template>

<script>
  import son from './son/son'
    export default {
      name: "subinfo",
      data(){
        return {
          menuList:[],
          statu:false,
          myBoke:"cute1baby",
          githubItems:[]
        }
      },
      mounted(){
        setTimeout(function(){
          this.menuList = [
            {name:'11',age:12},
            {name:'22',age:24},
            {name:'33',age:69}
          ]
        }.bind(this),2000)
      },
      methods:{
        getData(){
          let myBoke=this.myBoke,
            url = `https://api.github.com/search/users?q=${myBoke}`;  //q=${myBoke}
          var that = this;
          this.$http.get(url)
            .then(function (response) {
              that.githubItems = response.data.items;
              console.log(response.data.items)
              console.log(this.githubItems)
              window.abc=response;
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      components:{
        son
      }
    }
</script>

<style scoped>
  .title{font-weight:300;color:red;}
</style>
