<template>
  <div class="hello">
    <p>{{count}}</p>
    <button @click="add(10)">增加值</button>
    <button @click="reduce(2)">减少值</button>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
 computed:{
    ...mapState(['count'])
  },
   methods:{
    ...mapActions(['add','reduce'])
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
