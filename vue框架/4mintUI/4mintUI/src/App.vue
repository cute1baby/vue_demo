<template>
  <div id="app">
    <mt-header fixed title="我就是长天"></mt-header>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="./assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="分类">
        <img slot="icon" src="./assets/logo.png">
        分类
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="./assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <div class="dingTop">
     <!-- <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>-->
    </div>

    <!-- 单选框 -->
    <mt-radio
      title="请选择您的性别"
      v-model="value"
      :options="['男', '女', '人妖']">
    </mt-radio>
    <mt-cell title="标题文字" value="超级英雄">{{value}}</mt-cell>

    <div class="page-swipe">
      <mt-swipe :auto="0" :show-indicators="false">
        <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
        <mt-swipe-item :class="{slide2:true}">2</mt-swipe-item>
        <mt-swipe-item :class="{slide3:true}">3</mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value:'人妖',
      selected: ''
    }
  },
  methods:{
      open(){
          Indicator.open('加载中...');

        /*axios.get(xxx,{}).then(function(response){
         Indicator.close();
         }).catch()*/

          setTimeout(()=>{
              Indicator.close();
          },2000);
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.dingTop{
  margin-top:50px;
}
.page-swipe .mint-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.page-swipe .mint-swipe-item {
  line-height: 200px;
}
.page-swipe .slide1 {
  background-color: #0089dc;
  color: #fff;
}
.page-swipe .slide2 {
  background-color: #ffd705;
  color: #000;
}
.page-swipe .slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
.page-swipe-desc {
  text-align: center;
  color: #666;
  margin-bottom: 5px;
}

.my-btn-box{
  margin-top:50px;
}
</style>
