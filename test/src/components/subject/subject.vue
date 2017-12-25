<template>
  <div>
    <header-sub @handleper-group="handleperGroup" @changewxqq="changeWXqq" :per-group="perGroup"></header-sub>
    <div id="noticeRecord">
      <span class="wxQQSel">{{wxqq[wxQQ]}}</span>&nbsp;&gt;&nbsp;
      <span class="perGroupSel" datanum="0">{{perGroup==0?"个人":"群组"}}</span>&nbsp;&gt;&nbsp;
      <span class="chatObjSel" datanum="dx">{{objSize[nowIndex]}}</span>&nbsp;&gt;&nbsp;
      <span class="dateSel" style="display:none;" datanum="1">{{dateIndex[timeIndex]}}</span>
      <span id="dateUpdate">{{timeNow}}</span>
    </div>
    <div id="container1">
      <sub-left :now-index="nowIndex" @handle-index="handleIndex"></sub-left>
      <sub-right :now-index="nowIndex" :per-group="perGroup" :time-index="timeIndex" :time-now="timeNow" @time-index-fun="timeIndexFun"></sub-right>
    </div>
  </div>
</template>

<script>
  import headerSub from './header/header'
  import subLeft from './subLeft/subLeft'
  import subRight from './subRight/subRight'
  import Moment from 'moment'
  import {mapState} from 'vueX'
    export default {
      name: "subject",
      data(){
        return{
          timeNow:"",
          wxQQ:0,    //0:表示微信；1:表示QQ
          nowIndex:0, //表示聊天对象,内容，敏感词[0,1,2,3]
          perGroup:0,   //表示个人和群组[0,1]
          timeIndex:1,     //当天，七天，本月，三个月
          getPost:true        //true:接收+发送，false:无接收和发送
        }
      },
      computed:{
        ...mapState([
          'wxqq',
          'objSize',
          'dateIndex'
        ]),
        getCurrentDate(){   //当前的时间无法做到实时监测的效果
          return Moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
        }
      },
      mounted(){
        setInterval(()=>{
          this.timeNow =Moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
        },1000)
      },
      methods:{
        handleIndex(index){
            this.nowIndex = index;
        },
        handleperGroup(index){
          this.perGroup = index;
        },
        timeIndexFun(index){
          this.timeIndex = index;
        },
        changeWXqq(index){
          this.wxQQ = index;
        }
      },
      components:{
        headerSub,
        subLeft,
        subRight
      }
    }
</script>

<style scoped>

</style>
