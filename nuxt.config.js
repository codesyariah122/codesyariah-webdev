require('dotenv').config()
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
   CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
   CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
   CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'codesyariah-webdev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Satisfy'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/bootstrap/css/bootstrap.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/bootstrap/css/bootstrap-icons.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/boxicons/css/boxicons.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/glightbox/css/glightbox.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/swiper/css/swiper-bundle.min.css'}
    ],
    script: [
      { src: '/assets/vendor/purecounter/purecounter_vanilla.js'},
      { src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'},
      { src: '/assets/vendor/glightbox/js/glightbox.min.js'},
      { src: '/assets/vendor/isotope-layout/isotope.pkgd.min.js'},
      { src: '/assets/vendor/swiper/swiper-bundle.min.js'},
      { src: '/assets/vendor/waypoints/noframework.waypoints.js'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/contentful",
    "~/plugins/posts",
    "~/plugins/profiles"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
