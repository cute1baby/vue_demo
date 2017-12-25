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
          <a :href="item.html_url" style="color:green;font-size:12px;">{{item.login}}</a>
        </div>
      </div>
      <div v-else>
        <p>目前没有找到对应的GitHub账号</p>
      </div>
    </div>
    <hr>
    <p>倒计时准备：</p>
    <div>
      <input type="text" style="width:150px;height:40px;">
      <button v-if="show" @click="getCode">获取验证码</button>
      <span v-else class="count">{{count}}</span>
    </div>

    <hr>
    <button @click="INCREMENT({age:10})">改变下面p标签内容的值</button>
    <button @click="menuClick">点击</button>
    <p>{{exampleNum}}</p>
  </div>

</template>

<script>
  import {mapState,mapMutations} from 'vueX'
  import son from './son/son'
    export default {
      name: "subinfo",
      data(){
        return {
          menuList:[],
          statu:false,
          myBoke:"",
          githubItems:[],

          show: true,
          count: '',
          timer: null,
        }
      },
      computed:{
        ...mapState(['exampleNum']),
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
        ...mapMutations(['INCREMENT']),
        menuClick(){
          //...mapMutations(['INCREMENT'])第一种方式获取全局,下面这种方式属于第二种
          this.$store.commit('INCREMENT',{age:10});
        },
        getData(){
          let myBoke=this.myBoke.trim(),
            url = `https://api.github.com/search/users?q=${myBoke}`;  //q=${myBoke}
          var that = this;
          if(!myBoke){
            alert('请输入搜索名称!')
            return
          }
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
        },
        getCode(){
          const TIME_COUNT = 60;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
              } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
              }
            }, 1000)
          }
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
