<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>ROUTER BASIC -01</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-offset-2 col-xs-2">
        <div class="list-group">
          <!--指定带路由路径的链接-->
          <a v-link="{path:'/home'}"  class="list-group-item">Home</a>
          <a v-link="{path:'/about'}" class="list-group-item">About</a>
        </div>
      </div>
      <div class=" col-xs-8">
        <!--指定用来渲染当前路由组件的标签-->
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>

export default {

}
</script>

<style>

</style>
