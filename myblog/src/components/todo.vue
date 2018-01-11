<template>
  <div>
    <appbg/>
    <div class="view page-transition">
      <div id="container">
        <article class="article-content markdown-body" ref="item" v-html="msg">

        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import appbg from './appbg'
  import marked from 'marked'
  export default {
    data () {
      return {
        msg: '<p>数据加载中...</p>'
      }
    },
    mounted () {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      })
      const param = this.$route.params.id
      const postPath = `/static/articles/art${param}.md`
      this.$http.get(postPath)
        .then((response) => {
          if (response && response.status === 200) {
            const data = marked(response.data)
            // const newHtml = this.compile(marked(response.data))
            // this.$compile(data)
            this.msg = data
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
/*  @import '../../static/darkdown.css'; 新插入的markdown文件只能读全局的css代码       */
  .view{transition: all .2s ease;}
  #container {
    position: relative;
    max-width: 95%;
    margin: 0 auto;
  }
  #container article {
    box-shadow: 3px 3px 36px #333;
    position: relative;
    padding: 40px 20px;
    margin: 40px auto;
    max-width: 950px;
    background: #eceaea;
  }
</style>
