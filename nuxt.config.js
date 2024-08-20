require('dotenv').config()
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  mode: 'spa',
  loading: {
    color: '#323332',
    height: '11px'
  },
  env: {
    CONTENTFUL_SPACE: process.env.NUXT_APP_CONTENTFUL_SPACE,
    CONTENTFUL_ACCESS_TOKEN: process.env.NUXT_APP_CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.NUXT_APP_CONTENTFUL_ENVIRONMENT
  },
  generate: {
   dir: 'dist',
   cache: {
    ignore: [
      'docs'
      ]
  }
},
body: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
head: {
  title: 'Codesyariah - Webdevelopment',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' }
    ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Satisfy'},
    { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/bootstrap/css/bootstrap.min.css', ssr: false},
    { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css', ssr: false},
    { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/boxicons/css/boxicons.min.css', ssr: false},
    { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/glightbox/css/glightbox.min.css', ssr: false},
    { rel: 'stylesheet', type: 'text/css', href: '/assets/vendor/swiper/swiper-bundle.min.css', ssr: false},
      // { rel: 'stylesheet', href: '/assets/css/style.css', type: 'text/css' }
    ],
  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', ssr: false},
    { src: '/assets/vendor/purecounter/purecounter_vanilla.js', ssr: false},
    { src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js', ssr: false},
    { src: '/assets/vendor/glightbox/js/glightbox.min.js', ssr: false},
    { src: '/assets/vendor/swiper/swiper-bundle.min.js', ssr: false},
    { src: '/assets/vendor/waypoints/noframework.waypoints.js', ssr: false},
      // { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3504444534054185', crossorigin: 'anonymous', ssr: false},
      // {
      //   src: 'https://www.googletagmanager.com/gtag/js?id=G-EET58GS9QJ'
      // },
      // {
      //   src: '/assets/js/g-tag-manager.js'
      // }
    ]
},

  // Global CSS: https://go.nuxtjs.dev/config-css
css: [
  '@assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
plugins: [
  { src: "~/plugins/contentful" },
  { src: "~/plugins/posts" },
  { src: "~/plugins/profiles" },
  { src: '~/plugins/nuxt-leaflet', mode: 'client', ssr: false },
  { src: '~/plugins/isotope', mode: 'client', ssr: false },
  { src: '~/plugins/disqus', mode: 'client', ssr: false },
  { src: '~/plugins/commerce' },
  { src: '~/plugins/crisp', mode: 'client', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
buildModules: [
  '@nuxtjs/dotenv',
  '@nuxtjs/device',
  '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
modules: [
    // https://go.nuxtjs.dev/axios
  '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
  '@nuxtjs/pwa',
  '@nuxtjs/markdownit'
  ],

device: {
  refreshOnResize: true
},

styleResources: {
  scss: [
    '~assets/scss/_variables.scss',
    '~assets/scss/_blog.scss'
    ]
},

markdownit: {
  injected: true
},
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  baseURL: '/',
},

workbox: {
  workboxOptions: {
    skipWaiting: true
  },
    // offline: true,
    // offlineStrategy: 'NetworkFirst',
    // offlinePage: null,
    // offlineAssets: [],
  runtimeCaching: [
  {
    urlPattern: '/assets/css/.*',
    handler: 'cacheFirst',
    method: 'GET',
    strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
  },
  {
    urlPattern: '/assets/fonts/.*',
    handler: 'cacheFirst',
    method: 'GET',
    strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
  },
  {
    urlPattern: '/assets/img/.*',
    method: 'GET',
    strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
  },
  {
    urlPattern: '/assets/js/.*',
    method: 'GET',
    strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
  },
  {
    urlPattern: '/assets/scss/.*',
    method: 'GET',
    strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
  },
  {
    urlPattern: '/assets/vendor/.*',
    method: 'GET',
    strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
  }
  ]
},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
pwa: {
  meta: {
    title: 'Codesyariah WebDev',
    author: 'Puji',
    icon: true,
    canonical: 'https://codesyariah-webdev.vercel.app/',
    description: 'Jasa pembuatan website sesuai permintaan dengan harga yang bersahabat dan bersaudara.',
    keywords: 'Jasa Pembuatan Website - Codesyariah WebDev',
    ogUrl: 'https://codesyariah-webdev.vercel.app/',
    ogType: 'website',
    ogSiteName: 'Codesyariah WebDev',
    ogTitle: 'Codesyariah WebDev',
    ogImage: '/icon.png',
    ogImageWidth: '600',
    ogImageHeight: '400'
  },
  manifest: {
    lang: 'en',
    name: 'Codesyariah WebDevelopment',
    short_name: 'Codesyariah WebDev',
    description : "Jasa Pembuatan Website - Codesyariah WebDev",
    start_url: '/',
    lang: 'en',
    display: 'standalone',
    theme_color: '#000',
    background_color: '#000',
    icons: [
    {
      "src": "/icon-48x48.png",
      "sizes": "48x48",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
    ]
  },
},
robots: {
  UserAgent: '*',
  Disallow: '/'
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
build: {
}
}
