<template>
    <div class="wrapper">
      <p>这个用来测试会不会组件的异步加载</p>
      <div v-if="imgList.length" class="slider-wrapper" ref="sliderWrapper">
        <slider>
          <div v-for="(item,index) in imgList" :key="index">
            <a :href="item.linkUrl">
              <img class="needsclick" :src="item.picUrl">
            </a>
          </div>
        </slider>
      </div>
      <scroll ref="scrollTag" :data="recommend" class="listview">
        <!--牢记组件里面最外层必须有一个空的div套住-->
        <div>
          <ul>
            <li v-for="(item, index) in recommend" :key="index">
              <p>名字叫做：{{item.name}}</p>
              <p>年龄：{{item.age}}</p>
              <p>兴趣爱好：{{item.hobby}}</p>
            </li>
          </ul>
        </div>
      </scroll>
    </div>
</template>
<script>
import {data, imgList} from 'common/data'
import Scroll from 'components/scroll/scroll'
import Slider from 'components/slider/slider'
export default{
  data () {
    return {
      recommend: data,
      imgList: imgList
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scrollTag.refresh()
    })
  },
  components: {
    Scroll,
    Slider
  }
}
</script>
<style scoped>
.wrapper{
  position: fixed;
  width: 100%;
  top:50px;
  left:0px;
  overflow: hidden;
}
.slider-wrapper{
  position: relative;
  width: 100%;
  overflow: hidden;
}
.listview{
  height: 420px;
  overflow: hidden;
  margin-top:20px;
}
.needsclick{
  display: block;
  width: 100%;
}
ul li{
  width:100%;
  height:90px;
  list-style: none;
}
ul li p{
  height:30px;
}
</style>
