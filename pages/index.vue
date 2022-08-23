<template>
  <main id="main">
    
    <HomepageProduct/>

    <HomepageServices/>

    <HomepageTestimonial/>

    <HomepageAbout/>

    <HomepageContact/>

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
   }
   
 };
</script>