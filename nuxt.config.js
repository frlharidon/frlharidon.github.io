import axios from 'axios'

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
  loading: { color: '#3B8070' },
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
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          var rts = []
          res.data.forEach((d) => {
            rts.push('/articles/' + d.id)
          })
          return rts
        })
    }
  }
}
