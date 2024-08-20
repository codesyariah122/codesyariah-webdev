<template>
  <main id="main">

    <HomepageGalleryProduct/>

    <HomepageBlog/>
    
    <HomepageServices/>

    <HomepageTestimonial/>

    <HomepagePricing :products="products" :categories="categories" />

    <HomepageAbout/>

    <HomepageContact/>

    <div class="whatsapp-float">
      <a :href="whatsappUrl" target="_blank" class="whatsapp-button">
        <i class='bx bxl-whatsapp'></i>
      </a>
    </div>

  </main>
</template>

<style>
  .whatsapp-float {
    position: fixed;
    bottom: 250px;
    right: 20px;
    z-index: 1000;
  }

  .whatsapp-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: #25D366; /* WhatsApp Green */
    color: white;
    border-radius: 50%;
    font-size: 24px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    text-decoration: none;
  }

  .whatsapp-button:hover {
    background-color: #128C7E; /* Darker Green */
  }
</style>

<script>
  export default {
    name: 'IndexPage',
    layout: 'default',
    
    async asyncData({$commerce, $axios, $config}){
      const {data: products} = await $commerce.products.list()
      const {data: categories} = await $commerce.categories.list()

      console.log(categories)

      return {
        products,
        categories,
        whatsappUrl: 'https://wa.me/085971630027?text=Hallo%20codesyariah%20web%20development%2C%20saya%20ingin%20bertanya%20seputar%20jasa%20pembuatan%20website%20.'
      }
    },

    mounted(){
      $crisp.push(['do', 'chat:hide']);
    }
  };
</script>