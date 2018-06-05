<template>
  <div id="app">
    <router-view/>
    <niu></niu>
  </div>
</template>

<script>
import Niu from 'components/niu.vue'
export default {
  name: 'App',
  components: {
    Niu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{margin: 0;
  padding:0;}
</style>
