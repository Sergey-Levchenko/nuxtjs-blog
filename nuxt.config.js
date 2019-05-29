const pkg = require('./package')


module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: 'tomato' },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/main.scss'
  ],
  plugins: [
    '~/plugins/global'
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-element-ui'
  ],
  elementUI: {
    components: [],
    locale: 'ua',
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
