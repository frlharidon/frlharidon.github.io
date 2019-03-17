<template>
  <nav class="navbar">
    <ul>
      <li><img :src="`${navbar[0].data.logo.url}`"></li>
      <li><nuxt-link :to="'/'">{{ navbar[0].data.title[0].text }}</nuxt-link></li>
    </ul>
    <ul>
      <li>{{ navbar[0].data.blog[0].text }}</li>
      <li>{{ navbar[0].data.presentation[0].text }}</li>
      <li>{{ navbar[0].data.nos_tarifs[0].text }}</li>
      <li>{{ navbar[0].data.rdv[0].text }}</li>
    </ul>
  </nav>
</template>

<script>
import Prismic from 'prismic-javascript'

export default {
  props: ['navbar']
}

</script>


<style lang="stylus">

$bleu-blavet = #2A4261

.navbar
  text-align center
  display flex
  justify-content space-between
  ul
    display flex
    align-items center
    li
      text-transform uppercase
      font-weight 400
      font-size 0.7em
      list-style-type none
      margin 0 20px 0 0
      color $bleu-blavet
      padding 10px 0
      img
        max-height 60px
      a
        color $bleu-blavet
        background-color white


</style>
