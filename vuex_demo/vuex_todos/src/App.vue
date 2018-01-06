<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <router-view/>-->
    <Appcom></Appcom>
  </div>
</template>

<script>
  import Appcom from './components/app.vue'
export default {
  name: 'app',
  components:{
    Appcom
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
  margin-top: 60px;
}
</style>
