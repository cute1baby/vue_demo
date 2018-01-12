<template>
  <div id="app">
    <header id="header" ref="header">
      <div id="position" ref="position"></div>
      <nav>
        <ul>
          <li>
            <router-link to="/" :class="{color666:show,colorfff:!show}">首页</router-link>
            <router-link to="/other" :class="{color666:show,colorfff:!show}">Demo</router-link>
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
    <router-view>

    </router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      imgShow: false,
      show: false
    }
  },
  computed: {
    ...mapState['scrollTopNum']
  },
  methods: {
    scrollSet () {
      this.scrollTopNum = document.body.scrollTop || document.documentElement.scrollTop
      this.$refs.position.style.opacity = this.scrollTopNum / 600
      if (this.scrollTopNum > 480) {
        this.$refs.header.style.color = '#666'
        this.$refs.position.style.opacity = 1
        this.show = true
      } else {
        this.$refs.header.style.color = '#fff'
        this.show = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollSet)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.color666{color:#666;}
.colorfff{color:#fff;}
#header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 66px;
  color:#fff;
  z-index: 9999;
  transition: all .3s;
}
#position{
  position:absolute;
  width: 100%;
  height: 66px;
  left:0;
  top:0;
  background:#FAFFF1;
  opacity:0;
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
</style>
