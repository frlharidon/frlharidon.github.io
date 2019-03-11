<template>
  <article>
    {{ $prismic.dom.data }}
    <div v-html="$prismic.dom.RichText.asHtml(data.title)"></div>
    <p v-html="$prismic.dom.RichText.asHtml(data.content)"></p>
    <!-- <p>response: {{ $prismic.results }}</p> -->
    <nuxt-link :to="'/'">Back</nuxt-link>
  </article>
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
}
</script>

<style>

h1 {
  text-align: center;
}

.blog-body h2 {
}

.blog-body .block-img {
   text-align: center;
}

.blog-body .block-img img {
  max-width: 400px;
}


</style>
