import Vue from 'vue'
import VueDisqus from 'vue-disqus'

Vue.use(VueDisqus, {
  shortname: process.env.NUXT_ENV_DISQUS_SHORTNAME
})