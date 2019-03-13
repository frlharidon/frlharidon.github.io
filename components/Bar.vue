<template>
  <nav class="navbar">
    <ul>
      <li><nuxt-link :to="'/'">Plomberie du Blavet</nuxt-link></li>
    </ul>
    <ul>
      <li>Blog</li>
      <li>Présentation</li>
      <li>Nos tarifs</li>
      <li>Prendre RDV</li>
    </ul>
  </nav>
</template>

<script>

</script>


<style lang="stylus">

$bleu-blavet = #2A4261

.navbar
  text-align center
  display flex
  justify-content space-between
  ul
    display flex
    li
      text-transform uppercase
      font-weight 400
      font-size 0.8em
      list-style-type none
      margin 0 20px 20px 0
      color $bleu-blavet
      a
        color $bleu-blavet
        background-color white


</style>
