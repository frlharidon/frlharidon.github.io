<template>
  <section class="container">
    <bar></bar>
    <div id="blog--post">
      <h1 v-html="getTitle(data.title)"></h1>

      <div class="blog-body" v-html="getContent(data.content)"></div>

      <nuxt-link :to="'/'">Back</nuxt-link>
    </div>
  </section>
</template>

<script>
import Prismic from 'prismic-javascript'
import Bar from '~/components/Bar.vue'

export default {
  components: {
    Bar
  },
  asyncData ({params, error}) {
    const apiEndpoint = "https://frlharidon.prismic.io/api/v2"
    return Prismic.getApi(apiEndpoint).then((api) => {
      return api.query('')
    }).then((res) => {
      let article = ''
      res.results.forEach((item) => {
        if (item.uid == params.id) {
          article = item
        }
      })
      return article
    })
  },
  methods: {
    getContent(el) {
      return this.$prismic.dom.RichText.asHtml(el)
    },
    getTitle(el) {
      return this.$prismic.dom.RichText.asText(el)
    }
  }
}
</script>

<style lang="stylus">

.blog-body
  h3
    font-size 1.2em
    font-weight bold
    color #334C70

  .block-img
    img
      max-width 400px


</style>
