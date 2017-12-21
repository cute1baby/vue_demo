<template>
      <div id="left">
        <h4 class="audiType">审计类型</h4>
        <ul id="left_select">
          <li v-for="(item,index) in datanum" :class="{show_left:index==nowIndex}" @click="handleToggle(index)">
            <span :key="index">{{item.name}}</span>
          </li>
        </ul>
      </div>
</template>

<script>
    export default {
      name: "sub-left",
      props:['nowIndex'],
      data(){
        return {
          datanum:[
            {'prop':'dx','name':'聊天对象'},
            {'prop':'nr','name':'聊天内容'},
            {'prop':'key','name':'敏感词'},
            {'prop':'focus','name':'热词'}
          ]
        }
      },
      methods:{
        handleToggle(index){
          this.$emit('handle-index',index);
        }
      }
    }
</script>

<style scoped>

</style>
