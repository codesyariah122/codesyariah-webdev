require('dotenv').config()

const siteUrl = 'https://codesyariah-webdev.vercel.app/'
const siteTitle = 'Codesyariah Webdevelopment - Jasa Website, Web App, API & Server'
const siteDescription = 'Codesyariah Webdevelopment membantu bisnis membangun company profile, landing page, web app, dashboard, API, VPS, deploy, dan maintenance dengan arahan yang mudah dipahami.'
const siteKeywords = 'jasa pembuatan website, jasa web development, landing page bisnis, company profile, web app, dashboard bisnis, API, VPS, deploy website, maintenance website, Codesyariah Webdevelopment'
const siteImage = `${siteUrl}assets/img/codesyariah-og-flyer.png?v=20260701`
const buildVersion = process.env.VERCEL_GIT_COMMIT_SHA || process.env.NUXT_APP_VERSION || `local-${Date.now()}`

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
    CONTENTFUL_ENVIRONMENT: process.env.NUXT_APP_CONTENTFUL_ENVIRONMENT,
    APP_VERSION: buildVersion
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
  title: siteTitle,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: siteDescription },
    { hid: 'keywords', name: 'keywords', content: siteKeywords },
    { hid: 'author', name: 'author', content: 'Codesyariah Webdevelopment' },
    { hid: 'robots', name: 'robots', content: 'index, follow' },
    { hid: 'theme-color', name: 'theme-color', content: '#061b20' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: siteUrl },
    { hid: 'og:title', property: 'og:title', content: siteTitle },
    { hid: 'og:description', property: 'og:description', content: siteDescription },
    { hid: 'og:image', property: 'og:image', content: siteImage },
    { hid: 'og:image:url', property: 'og:image:url', content: siteImage },
    { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: siteImage },
    { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
    { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
    { hid: 'og:image:height', property: 'og:image:height', content: '630' },
    { hid: 'og:image:alt', property: 'og:image:alt', content: 'Codesyariah Webdevelopment - layanan pembuatan website, web app, API, VPS, dan maintenance.' },
    { hid: 'og:site_name', property: 'og:site_name', content: 'Codesyariah Webdevelopment' },
    { hid: 'og:locale', property: 'og:locale', content: 'id_ID' },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', name: 'twitter:title', content: siteTitle },
    { hid: 'twitter:description', name: 'twitter:description', content: siteDescription },
    { hid: 'twitter:image', name: 'twitter:image', content: siteImage },
    { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Codesyariah Webdevelopment - Website dan sistem bisnis siap jalan.' },
    { name: 'format-detection', content: 'telephone=no' }
    ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: siteUrl },
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
  { src: "~/plugins/cache-version", mode: "client" },
  { src: "~/plugins/contentful" },
  { src: "~/plugins/posts" },
  { src: "~/plugins/profiles" },
  { src: '~/plugins/nuxt-leaflet', mode: 'client', ssr: false },
  { src: '~/plugins/isotope', mode: 'client', ssr: false },
  { src: '~/plugins/disqus', mode: 'client', ssr: false },
  { src: '~/plugins/commerce' }
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
    skipWaiting: true,
    clientsClaim: true,
    cleanupOutdatedCaches: true
  },
    // offline: true,
    // offlineStrategy: 'NetworkFirst',
    // offlinePage: null,
    // offlineAssets: [],
  runtimeCaching: [
  {
    urlPattern: '/assets/css/.*',
    handler: 'staleWhileRevalidate',
    method: 'GET',
    strategyOptions: {
      cacheName: `codesyariah-css-${buildVersion}`,
      cacheableResponse: { statuses: [0, 200] },
      expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 7 }
    }
  },
  {
    urlPattern: '/assets/fonts/.*',
    handler: 'cacheFirst',
    method: 'GET',
    strategyOptions: {
      cacheName: `codesyariah-fonts-${buildVersion}`,
      cacheableResponse: { statuses: [0, 200] },
      expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 30 }
    }
  },
  {
    urlPattern: '/assets/img/.*',
    handler: 'staleWhileRevalidate',
    method: 'GET',
    strategyOptions: {
      cacheName: `codesyariah-images-${buildVersion}`,
      cacheableResponse: { statuses: [0, 200] },
      expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 7 }
    }
  },
  {
    urlPattern: '/assets/js/.*',
    handler: 'staleWhileRevalidate',
    method: 'GET',
    strategyOptions: {
      cacheName: `codesyariah-js-${buildVersion}`,
      cacheableResponse: { statuses: [0, 200] },
      expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 7 }
    }
  },
  {
    urlPattern: '/assets/scss/.*',
    handler: 'networkFirst',
    method: 'GET',
    strategyOptions: {
      cacheName: `codesyariah-scss-${buildVersion}`,
      cacheableResponse: { statuses: [0, 200] },
      expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 7 }
    }
  },
  {
    urlPattern: '/assets/vendor/.*',
    handler: 'staleWhileRevalidate',
    method: 'GET',
    strategyOptions: {
      cacheName: `codesyariah-vendor-${buildVersion}`,
      cacheableResponse: { statuses: [0, 200] },
      expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 }
    }
  },
  {
    urlPattern: 'https://cdn.contentful.com/.*',
    handler: 'networkFirst',
    method: 'GET',
    strategyOptions: {
      cacheName: `codesyariah-contentful-${buildVersion}`,
      networkTimeoutSeconds: 8,
      cacheableResponse: { statuses: [0, 200] },
      expiration: { maxEntries: 30, maxAgeSeconds: 60 * 10 }
    }
  }
  ]
},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
pwa: {
  meta: {
    title: siteTitle,
    author: 'Codesyariah Webdevelopment',
    icon: true,
    canonical: siteUrl,
    description: siteDescription,
    keywords: siteKeywords,
    ogUrl: siteUrl,
    ogType: 'website',
    ogSiteName: 'Codesyariah Webdevelopment',
    ogTitle: siteTitle,
    ogDescription: siteDescription,
    ogImage: '/assets/img/codesyariah-og-flyer.png',
    ogImageWidth: '1200',
    ogImageHeight: '630'
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
