vue:
    两种：
        1、直接页面级开发,script直接引入vue.js
        2、工程性开发，webpack+loader\v-cli脚手架方式
------------------------------------------------------
webapck  可配置多文件入口
-------------------------------------------------
webapck 打包之后文件很大?
        bundle.js
        build.js
    如何解决:
        a).webapck代码拆分:code-spliting
        b).提取公共部分(css,js等)
        c).预渲染:prerender-spa-plugin
        d).后台-开启压缩，gzip
        e).异步加载组件
----------------------------------------------------------------
<router-link to="/home"></router-link>
----------------------------------------------------------------
main.js:
    new Vue.Store();  //这里的Store必须要大写

之前是：
module:{
    loaders:[
        {test:/\.css$/,loader:'style!css'}
    ]
}
现在是：
module:{
    rules:[
        {test:/\.css$/,loader:'style-loader!css-loader'}
    ]
}

组件之间的通信：
    vue1.0  -> props ->子组件可以更改父组件数据  .sync
    vue2.0不让修改
    解决问题：
        1、$emit  单一事件管理
        单独创建一个Store.js
                var Event =new Vue()
                export default Event
        2、对象之间引用：
            msg:'hello',
            改为：msg:{title:'hello'}  修改的是引用类型
        3、vuex的使用：
            管理状态:[如头部尾部的显示隐藏]
--------------------------------------------------------
axios（不能进行use）
那么如何跟vuex一样在全局使用呢?
Vue.prototype.$http = axios;
this.$http.get(...);   //因为此时的this.$http就相当于是axios
-----------------------------------------------------
#vue如何引入百度地图：
http://lbsyun.baidu.com/  => JavaScript API  => 实例demo
引入秘钥：
    1、<script.src = "http://api.map.baidu.com/api?v=2.0&ak=您的密钥&callback=init"></script>
需要在index.js引入,不然单独在某个模块引入
    2、单独创建一个组件：map.vue
    template
        <div id="app" :style="style"></div>
    script
        export default{
            data:{
                   style:{
                        width:'100%'
                        height:this.height+'px'
                   }
            },
            props:{
                height:{
                    type:Number,
                    default:3000
                },
                longitude:{},  //经度纬度
                latitude:{}
            },
            mounted(){
                		var map = new BMap.Map("app");            // 创建Map实例,括号是id
                		var point = new BMap.Point(120.915, 39.915); // 创建点坐标
                		map.centerAndZoom(point,15);
                		map.enableScrollWheelZoom();                 //启用滚轮放大缩小
            }
        }

如果要传入到App.vue中使用：
tempalte:
        <mapView :height="300" :longitude="120"></mapView>
script:
import mapView from  './components/map.vue'
export default {
    components:{
        mapView
    },
    mounted(){
        //初始化这些高度和经度纬度这些属性
    }
}
------------------------------
vue:
    指令：
    属性：
    事件：
    数据：
        data,props/computed
    生命周期：
-----------------------------------------------
http://bbs.zhinengshe.com  智能社论坛

vue2使用的虚拟DOM节点，即使一个json模拟DOM节点树。


-g  当成命令环境来用的


#最后最重要的部分：
看一下loading.vue模块如何install作用于全局,明天看。
