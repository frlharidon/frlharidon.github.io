<template>
  <article>
    <h1></h1>
    <p></p>
    <nuxt-link :to="'/'">Back</nuxt-link>
  </article>
</template>

<script>
import Prismic from 'prismic-javascript'

export default {
  validate ({params}) {
    return !isNaN(+params.uid)
  },
  async asyncData({params, error}) {
    const apiEndpoint = "https://thibautdavoult.prismic.io/api/v2"
    const api = await Prismic.getApi(apiEndpoint)
    const {data} = await api.getByUID(+params.uid)
    console.log(data)
    return data
  }
}
</script>
