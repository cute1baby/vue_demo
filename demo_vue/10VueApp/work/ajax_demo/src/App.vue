<template>
  <div>
    <div class="container">
      <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <todo-search></todo-search>
      </section>
    </div>
    <todo-main></todo-main>
  </div>
</template>

<script>
import search from './components/search.vue'
import main from './components/main.vue'
export default {
  components: {
    'todo-search':search,
    'todo-main':main
  }
}
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
