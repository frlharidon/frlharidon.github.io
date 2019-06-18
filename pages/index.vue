<template>
  <div>
    <div class="container-large">
    <bar :navbar="navbar"></bar>
    </div>
    <div class="cover">
      <div class="container titles">
        <section class="header">

          <h1>{{ home[0].data.title[0].text }}</h1>
          <hr class="separator">
          <h2>{{ home[0].data.description[0].text }}</h2>
        </section>
      </div>
    </div>
    <section class="content">
      <div class="container">
        <div ref='form' class="form">
          <form id="rdv" method="post" action="https://hooks.zapier.com/hooks/catch/3194274/nr868m/">
            <div>
              <label for="prenom">Prénom:</label>
              <input name="prenom" type="text" placeholder="prenom">
            </div>
            <div>
              <label for="nom">Nom:</label>
              <input name="nom" type="text" placeholder="nom">
            </div>
            <div>
              <label for="email">Email:</label>
              <input name="email" type="email" placeholder="address email">
            </div>
            <div>
              <label for="description">Description du problème:</label>
              <input name="description" type="text" placeholder="description du probleme">
            </div>
            <div>
              <input name="envoyer" type="submit" placeholder="envoyer">
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <!-- add image carousel here -->
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
      return api.query('')
    }).then((response) => {
      return {
        articles: response.results.filter(x => x.type == "blog_post"),
        home: response.results.filter(y => y.type == "home"),
        navbar: response.results.filter(z => z.type == "navbar")
      }
    })
  },
  methods: {
    submit() {
      this.$refs.form.addEventListener('submit', event => {
        event.preventDefault()
      })
    }
  }
}
</script>

<style lang="stylus">

/* RESET STYLES */

$bleu-blavet = #2A4261

.cover
  background-image url('https://prismic-io.s3.amazonaws.com/frlharidon%2F9dd3864e-96fa-4c57-b51e-7a1617e80d4e_neonbrand-717862-unsplash.jpg')
  background-size cover
  position relative
  height 400px
  &:before
    position absolute
    content ''
    top 0
    left 0
    width 100%
    height 100%
    background-color #00134a
    opacity .5
    z-index 0
    display block

.cover *
  position relative

.header
  max-width 800px
  margin auto

  h1
    margin 70px 0 20px
    font-size 3em
    font-weight 1000
    line-height 1.2em
    text-align center
    color white
  h2
    text-align center
    font-size 1.2em
    font-weight 400
    margin 15px 0 10px
    color white

.articles-list
  list-style none

.container-large
  max-width 1000px
  margin auto

.form
  border 3px solid #eee
  border-radius 5px
  background-color white
  display flex
  max-width 70%
  margin 0 auto
  padding 20px

  div
    text-align left
    flex-direction column
    margin-bottom 10px

    label
      font-size 0.8em

    input
      padding 5px

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
  margin: 0 auto
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
