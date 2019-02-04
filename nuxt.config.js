const Prismic = require('prismic-javascript')
const apiEndpoint = "https://thibautdavoult.prismic.io/api/v2"

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Thibaut Davoult',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Josefin+Slab:400,500|Open+Sans:300,400' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#68c5db' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
  ],
  generate: {
    routes () {
      Prismic.getApi(apiEndpoint).then(function(api) {
        console.log(api.query(""))
        return api.query(""); // An empty query will return all the documents
      }).then((res) => {
        var rts = []
        console.log(res.results)
        // res.results.forEach((d) => {
        //   rts.push('/articles/' + d.id)
        // })
      return rts
      }, function(err) {
        console.log("Something went wrong: ", err);
      });
    }
  }
}

