<template>
  <section class="container">
    <div id="main">
      <!-- <bar></bar> -->

      <h1>Hi, I'm Thibaut Davoult<span class="easteregg clickappear" v-on:click="blog = true">.</span></h1>


      <div>
        <p>I work as Growth Engineer at <a target='_blank' href="https://livestorm.co">Livestorm</a>, so I do a bit of <span class="event" v-on:click="code = true">code</span> and a bit of <span class="event" v-on:click="marketing = true">marketing</span>. But <span class="event" v-on:click="life = true">there's more</span>.</p>

        <!-- code info -->
        <div class="block" v-if="code">
          <p>In 2017, I attended the <a target='_blank' href="http://ironhack.com">Ironhack</a> fullstack web development bootcamp. Where I did 3 projects:</p>
          <div class="smallblock">
            <ul>
              <li><a target='_blank' href="https://code-help.co">Code-Help</a> // Live coding sessions between students and teachers, built with a fellow student</li>
              <li><a target='_blank' href="http://bandaid-ih.herokuapp.com">Bandaid</a> // Music discovery app, scraping and sorting your bandcamp.com feed for you.</li>
              <li><a target='_blank' href="http://thibautdavoult.com/coolbloqs">Coolbloqs</a> // A game where you need to take control of colored tiles</li>
            </ul>
          </div>
        </div>
        <!-- marketing info -->
        <div class="block" v-if="marketing">
          <p>I've been working in SaaS marketing for {{ date.getFullYear() - 2012 }} years.</p>
          <div class="smallblock">
            <ul>
              <li>2012 - 2015: TOTEMS (acq. by Stripe) // Content Marketing</li>
              <li>2015 - 2017: Wisembly // Growth Marketing</li>
              <li>2017 - now: <a target='_blank' href="https://livestorm.co">Livestorm</a> // Growth Engineer</li>
            </ul>
          </div>
        </div>
        <!-- marketing info -->
        <div class="block" v-if="life">
          <p>I also <a target='_blank' href="https://twitter.com/thibautdavoult">tweet</a>, take <a target='_blank' href="https://instagram.com/thibautdavoult">photos</a>, etc.</p>
        </div>
      </div>
      <div class="block" v-if="blog">
        <h1>Index</h1>
        <div class="grid">
          <ul>
            <li v-for="article in articles" :key="article">
              <nuxt-link :to="`articles/${article.uid}`">{{ article.uid }}</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const Prismic = require('prismic-javascript');
import AppLogo from '~/components/AppLogo.vue'
import Bar from '~/components/Bar.vue'

export default {
  components: {
    Bar
  },
  title: 'Hey there',
  asyncData () {
    const apiEndpoint = "https://thibautdavoult.prismic.io/api/v2"
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

<style>

/* RESET STYLES */

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

#main {
  width: 800px;
  margin: auto;
  margin-top: 20px;
  padding: 20px 40px;
  z-index: 100;
}

h1, h2 {
  font-family: 'Josefin Slab', serif;
}

h1 {
  font-size: 1.8em;
  font-weight: 600;
  margin-bottom: 15px;
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
  min-height: 100vh;
  display: flex;
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
