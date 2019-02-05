<template>
  <article>
    <h1></h1>
    <!-- <p>response: {{ results[0].id }}</p> -->
    <p>response: </p>
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
  }
}
</script>
