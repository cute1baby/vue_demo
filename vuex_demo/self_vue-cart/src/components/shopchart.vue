<template>
  <div class="hello">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <span>{{item.id}}-&nbsp;{{item.title}}&nbsp;-￥{{item.price}}元</span>
          <button @click="addToChart" class="btnSet">加入购物车</button>
        </li>
      </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapState(['list'])
  },
  methods: {
    addToChart () {
      console.log(111)
    }
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
