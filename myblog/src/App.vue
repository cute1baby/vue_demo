<template>
  <div id="app">
    <header id="header">
      <nav>
        <ul>
          <li>
            <router-link to="/" class="v-link-active">首页</router-link>
            <router-link to="/other">Demo</router-link>
          </li>
        </ul>
        <div class="my-info">
          <figure @mouseenter="imgShow=true" @mouseleave="imgShow=false"></figure>
          <span>订阅我</span>
          <div id="myQrcode" v-if="imgShow">
            <img src="./assets/weixin.png" alt="我的公众号二维码" title="我的公众号二维码">
            <!--<p>来关注我啊!</p>-->
          </div>
        </div>
      </nav>
    </header>
    <div id="bg">
      <div id="covers"></div>
      <p>
        什么叫实践派？<br><i>什么都没正经学过，概念都没搞懂</i><br>却偏偏能弄出点动静来
      </p>
    </div>
    <router-view>

    </router-view>
  </div>
</template>

<script>
import todolist from './components/todolist'

export default {
  name: 'app',
  data () {
    return {
      imgShow: false
    }
  },
  components: {
    todolist
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 66px;
  color: #fff;
  z-index: 9999;
  transition: all .3s;
}
#header nav{
  position: relative;
  width: 80%;
  margin: 0 auto;
}
#header nav li{
  border: 0;
  display: inline-block;
  height: 66px;
  line-height: 66px;
  font-size: 16px;
  position: relative;
  cursor: pointer;
}
#header nav li a {
  display: inline-block;
  padding: 0 12px;
  white-space: nowrap;
  color: #fff;
}
#header nav .my-info{
  position: absolute;
  top: 8px;
  right: 0;
}
#header nav figure, #header nav span {
  display: inline-block;
  vertical-align: middle;
}
#header nav figure {
  height: 50px;
  width: 50px;
  background: url(./assets/myself.jpg) no-repeat;
  background-size: cover;
  border-radius: 50%;
}
#header nav span {
  font-size: 18px;
  margin: 0 10px;
}
#header nav span {
  font-size: 18px;
  margin: 0 10px;
}
#header nav figure, #header nav span {
  display: inline-block;
  vertical-align: middle;
}
#myQrcode {
  position: absolute;
  left: -45px;
  top: 70px;
  background: #fff;
  text-align: center;
  font-size: 12px;
  width: 200px;
  padding: 6px 0;
  border-radius: 2px;
  box-shadow: 0 0 21px rgba(0,0,0,.28);
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
}
#myQrcode img {
  width: 94%;
  vertical-align: middle;
}
#myQrcode p {
  color: #444;
}
#bg {
  position: relative;
  background-image: url(./assets/bg3.gif);
  /*linear-gradient(to bottom, #000, #999);*/
  background-repeat:no-repeat;
  background-size: cover;
}
#bg:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.6);
  z-index: 1;
}
#bg p {
  position: relative;
  padding: 95px 0 70px;
  color: hsla(0,0%,100%,.9);
  text-align: center;
  font-size: 14px;
  line-height: 2;
  z-index: 2;
  letter-spacing: 2.5px;
  text-shadow: 0 3px 25px rgba(0,0,0,0.3);
  cursor: progress;
}
@media only screen and (min-width: 768px) {
  #bg p {
    padding: 210px 0;
  }
}
@media only screen and (min-width: 640px) {
  #bg p {
    font-size: 26px;
  }
}
#bg p i {
  text-decoration: line-through;
  font-size: 12px;
  color: hsla(0,0%,100%,.8);
  text-shadow: 0 0 0 transparent;
}
@media only screen and (min-width: 640px) {
  #bg p i {
    font-size: 22px;
  }
}
</style>
