<template>
  <main id="main">

    <HomepageGalleryProduct/>

    <HomepageBlog/>
    
    <HomepageServices/>

    <HomepageTestimonial/>

    <HomepagePricing :products="products" :categories="categories" />

    <HomepageAbout/>

    <HomepageContact/>

  </main>
</template>

<script>
  export default {
    name: 'IndexPage',
    layout: 'default',
    
    async asyncData({$commerce, $axios, $config}){
      const {data: products} = await $commerce.products.list()
      const {data: categories} = await $commerce.categories.list()

      return {
        products,
        categories
      }
    },

    mounted(){
      $crisp.push(['do', 'chat:hide']);
    }
  };
</script>