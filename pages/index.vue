<template>
  <main id="main">
    <HomepageAbout/>
  </main>
</template>

<script>
  export default {
    name: 'IndexPage',
    layout: 'default',
    computed: {
     posts() {
       return this.$store.state.posts;
     }
   },
   head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/assets/css/style.css',
          type: 'text/css'
        }
      ],
      script: [
        {
          src: '/assets/js/main.js'
        }
      ],
    }
 };
</script>