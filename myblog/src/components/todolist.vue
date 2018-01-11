<template>
  <div>
    <appbg/>
    <div class="view page-transition">
      <div id="container">
        <article class="article" v-for="(item,index) in listAtr" :key="index">
          <time>{{item.date}}</time>
          <h2 class="title">
            <router-link to="/article/1">{{item.title}}</router-link>
          </h2>
          <span>
            <i>{{item.type}}</i>
          </span>
          <section class="article-content markdown-body">
            <p>{{item.description}}</p>
          </section>
          <footer>
            <router-link :to="'article/'+item.id">阅读全文</router-link>
            <!--<router-link :to="`article/${item.id}`">阅读全文</router-link>-->
          </footer>
        </article>
      </div>
    </div>
  </div>

</template>

<script>
  import appbg from './appbg'
  export default {
    data () {
      return {
        listAtr: []
      }
    },
    mounted () {
      const fileGet = '/static/config/page_config.json'
      // 记住如果不适用箭头操作那么this就不存在
      this.$http.get(fileGet)
        .then((result) => {
          if (result && result.status === 200) {
            if (result.data.length > 0) {
              this.listAtr = result.data
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    components: {
      appbg
    }
  }
</script>

<style scoped>
.view{transition: all .2s ease;}
#container {
  position: relative;
  max-width: 95%;
  margin: 0 auto;
}
.article {
  box-shadow: 5px 5px 25px #dadada;
}
.article {
  position: relative;
  padding: 0 20px;
  margin: 40px auto;
  max-width: 950px;
  background: #fff;
  text-align: center;
}
.article>time {
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  padding: 4px 5px 0;
  color: #999;
}
.article>h2 {
  padding: 35px 0 35px;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  line-height: 1.225;
}
.article>h2 a {color:#333;}
.article>span {
  position: absolute;
  top: 0;
  right: 0;
  color: #999;
  padding: 3px 10px;
  background: #f1f1f1;
  font-size: 14px;
}
.article section {
  text-align: left;
  padding: 10px;
  font-size: 16px;
}
.markdown-body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: #333;
  font-family: \\5FAE\8F6F\96C5\9ED1,Helvetica,Segoe UI,Arial,freesans,sans-serif;
  font-size: 16px;
  line-height: 1.6;
  word-wrap: break-word;
}
.markdown-body>:first-child {
  margin-top: 0!important;
}
.markdown-body h2 {
  padding-bottom: .3em;
  font-size: 1.75em;
  line-height: 1.225;
  border-bottom: 1px solid #eee;
}
.markdown-body>:last-child {
  margin-bottom: 0!important;
}
.markdown-body img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
  box-sizing: content-box;
  background-color: #fff;
}
.markdown-body img {
  border-style: none;
}
.article p {
  font-size: 1em;
  margin: 1.5em 0;
}
.article footer {
  padding: 25px 0 20px;
}
.article footer a {
  display: inline-block;
  color: #18bc9c;
  cursor: pointer;
  padding: 4px 20px;
  border-radius: 5px;
  transition: all .5s;
  border: 1px solid #18bc9c;
}
.article footer a:hover {
  box-shadow: 2px 3px 10px rgba(25,181,150,0.3);
}
</style>
