<template>
  <div class="hello">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <span>{{item.id}}-&nbsp;{{item.title}}&nbsp;-￥{{item.price}}元</span>
          <button @click="addTochart(item)" class="btnSet" :disabled="item.invatal===0">加入购物车</button>
        </li>
      </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['list'])
  },
  methods: {
    ...mapActions(['addTochart'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btnSet{margin-left:50px;cursor: pointer;}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {margin-bottom:20px;}
</style>
