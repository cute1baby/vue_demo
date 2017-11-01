<template>
  <div id="app">
    <!--按钮-->
    <el-button type="danger" @click="setInfo">危险按钮</el-button>
    <el-button type="primary">首要按钮</el-button>
    <el-button type="warning" icon="el-icon-search">搜索</el-button>
    <el-button type="default" icon="el-icon-delete">搜索</el-button>
    <!--布局-->
    <el-row>
      <el-col :span="4">
        <div class="myStyle">

        </div>
      </el-col>
      <el-col :span="20">
        <div class="myStyle">
          <Button1 @click.native="setInfo"></Button1>
          <!--当存在给外部组件提供本地的方法的时候,需要给click时间增加native.-->
          <Nav1></Nav1>
          <Tab></Tab>
        </div>
      </el-col>
    </el-row>


  </div>
</template>

<script>
import Button1 from './components/Button.vue'
import Nav1 from './components/Nav.vue'
import Tab from './components/tab.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      setInfo(){
          alert('这里有危险信息');
      }
  },
  components:{
      Nav1,
      Button1,
      Tab
  }
}
</script>

<style>
.myStyle{border:1px solid red;height:500px;}
</style>
