<template>
  <div class="container">
    <section class="header">

      <bar></bar>

      <h1>Plomberie du Blavet</h1>

    </section>

    <hr class="separator">

    <section class="content">

      <h2>Interventions de plomberie à Lanester</h2>

      <div class="block-blog">
        <h3>Récents articles :</h3>
        <div class="grid">
          <ul class="articles-list">
            <li v-for="article in articles" :key="article.id">
              <nuxt-link :to="`articles/${article.uid}`">{{ article.data.title[0].text }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
const Prismic = require('prismic-javascript');
import Bar from '~/components/Bar.vue'

export default {
  components: {
    Bar
  },
  title: 'Plomberie du Blavet',
  asyncData () {
    const apiEndpoint = "https://frlharidon.prismic.io/api/v2"
    return Prismic.getApi(apiEndpoint).then((api) => {
      return api.query(
        Prismic.Predicates.at('document.type', 'blog_post')
      )
    }).then((response) => {
      return { articles: response.results  }
    })
  },
  data() {
    return {
      date: new Date(),
      code: false,
      marketing: false,
      life: false,
      blog: false,
    }
  },
}
</script>

<style lang="stylus">

/* RESET STYLES */


.header
  max-width 800px
  margin auto

  h1
    font-size 4em
    font-weight 1000
    margin-bottom 20px
    line-height 1.2em
    text-align center
  h2
    font-size 1.2em
    font-weight 400
    margin 15px 0 10px

.articles-list
  list-style none

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	/*list-style: none;*/
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* MY OWN STYLE */

html, body {
  margin: 0;
  color: #333;
  font-family: 'Open Sans', sans-serif;
  font-weight: 100;
  font-size: 1.2em;
  line-height: 1.5em;
}


h1, h2 {
  font-family: 'Open Sans', sans-serif;
}

#main h1 {
  text-align: center;
  font-size: 4em;
  font-weight: 1000;
  margin-bottom: 20px;
  line-height: 1.2em;
}

#main h2 {
  text-align: center;
  font-size: 1.2em;
  font-weight: 400;
  margin: 15px 0px 10px;
  color: blue;
}

p {
	margin-top: 15px;
}

p strong {
  font-weight: 500;
}

a {
  color: black;
  background-color: #68C5DB;
  text-decoration: none;
  padding: 0px 3px;
}

.separator {
  max-width: 100px;
  margin: 15px auto;
  border: 0;
  border-top: 1px solid #eee;
  border-width: 4px;
}

.block {
  margin-top: 20px;
}

.smallblock {
  margin-top: 10px;
}

.event {
  background-color: #FF1654;
  padding: 0px 3px;
  cursor: pointer;
}

.hidden {
  visibility: hidden;
}

.easteregg {
  color: #FF1654;
}

/* Mobile (stolen 100% from gflandre) */

@media (max-width: 835px) {
  html, body {
    width: 100%;
  }

  body {
    padding-left: 20px;
  }

  #main {
    width: auto;
    margin-top: 20px;
  }
}

.container {
  margin: 20px auto 0;
  max-width: 800px;
  padding: 20px 40px;
}

.content {
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
