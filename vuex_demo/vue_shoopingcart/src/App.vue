<template>
  <div id="app">
    <products></products>
    <div class="bashed"></div>
    <cart></cart>
  </div>
</template>

<script>
  import products from './components/products.vue'
  import cart from './components/cart.vue'

  export default {
    components: {
      products,
      cart
    }
  }
</script>

<style>
  ul,li{list-style:none;}
  .bashed{
    width:100%;
    height:0px;
    border:1px dashed green;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width:300px;
  border:1px solid blue;
  margin-top: 20px;
  font-size:13px;
}
</style>
