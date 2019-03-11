<template>
  <section class="container">
    <div id="main">
      <h1 v-html="getTitle(data.title)"></h1>

      <div class="blog-body" v-html="getContent(data.content)"></div>

      <nuxt-link :to="'/'">Back</nuxt-link>
    </div>
  </section>
</template>

<script>
import Prismic from 'prismic-javascript'

export default {
  // validate ({params}) {
  //   return !isNaN(+params.id)
  // },
  asyncData ({params, error}) {
    const apiEndpoint = "https://thibautdavoult.prismic.io/api/v2"
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

<style>

h1 {
}

.blog-body h2 {
}

.blog-body .block-img {
}

.blog-body .block-img img {
  max-width: 400px;
}


</style>
