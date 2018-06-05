<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots" :key="index"></span>
    </div>
  </div>
</template>
<script>
import {addClass} from 'common/data'
import BScroll from 'better-scroll'
export default{
  name: 'slider',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  mounted () {
    setTimeout(() => {
      this._setSliderWidth()
      /* 初始化下标节点 */
      this._initDots()
      this._initSlider()
      if (this.autoPlay) {
        this._play()
      }
    }, 20)
    // 窗口大小发生改变的时候
    window.addEventListener('resize', () => {
      // 这个this.slider没有太明白
      if (!this.slider) {
        return
      }
      this._setSliderWidth(true)
      this.slider.refresh()
    })
  },
  methods: {
    _setSliderWidth (flag) {
      this.children = this.$refs.sliderGroup.children
      let width = 0
      let slideWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')
        child.style.width = slideWidth + 'px'
        width += slideWidth
      }
      // 在首次页面渲染的时候需要将多加两张图片的宽度
      if (this.loop && !flag) {
        width += 2 * slideWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initDots () {
      this.dots = new Array(this.children.length)
    },
    _play () {
      let pageIndex = this.currentPageIndex + 1
      if (this.loop) {
        pageIndex += 1
      }
      this.timer = setTimeout(() => {
        this.slider.goToPage(pageIndex, 0, 400)
      }, this.interval)
    },
    _initSlider () {
      // 下面设置了click:true才能使轮播图可以点击
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400,
        click: true
      })
      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        if (this.loop) {
          pageIndex -= 1
        }
        this.currentPageIndex = pageIndex
        if (this.autoPlay) {
          // 清除计时器，将手动的拖动轮播图部分的影响给弄掉
          clearTimeout(this.timer)
          this._play()
        }
      })
    }
  },
  // 节点销毁的时候将组建中的计时器全部删除掉
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>
<style>

  .slider{
    min-height: 1px;
    position: relative;
    overflow: hidden;
  }
  .slider .slider-group{
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }
  .slider-group .slider-item{
    float: left;
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;
  }
  .slider-group .slider-item a{
    display: block;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
  }
  .slider-group .slider-item img{
    display: block;
    width: 100%;
  }
  .slider .dots{
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;
  }
  .slider .dot{
    display: inline-block;
    margin: 0 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
  }
  .slider .active{
    width: 20px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.8);
  }

</style>
