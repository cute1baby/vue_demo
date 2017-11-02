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



    <input type="button" value="增加" @click="increate">
    <input type="button" value="减少" @click="decreate">
    <input type="button" value="偶数减少" @click="oddDecreate">
    <input type="button" value="异步增加" @click="asynIncreate">
    <br>
    <br>
    <div>
      此时的值是：{{counter}},他是一个{{getOdd}}
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value:'人妖',
      selected: ''
    }
  },
  methods:mapActions([   //将方法收集起来,这里跟action对应起来的
      'increate',
      'decreate',
      'oddDecreate',
      'asynIncreate'
  ]),
  computed:mapGetters([   //需要监听的写在模板中的数据,这里是跟getters相对应的。
      'counter',
      'getOdd'
  ])
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
