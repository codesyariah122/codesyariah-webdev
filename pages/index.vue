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

    <!-- Promo Popup -->
    <div v-if="showPopup" class="promo-popup" @click="handleOutsideClick">
      <div class="popup-content" @click.stop>
        <span class="close-popup" @click="closePopup">&times;</span>
        <h2>Promo Pembuatan Website</h2>
        <blockquote>Pesan website di bulan ini dan dapatkan bonus T-shirt eksklusif!</blockquote>
        <button @click="whatsOrder" class="btn btn-outline-success mt-2">Order Sekarang <i class='bx bxl-whatsapp'></i></button>
        <img src="~/assets/img/tshirt-codesyariah.jpeg" alt="Bonus T-shirt" class="promo-image"/>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .whatsapp-float {
    position: fixed;
    bottom: 90px;
    right: 13px;
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
    font-size: 37px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    text-decoration: none;
  }

  .whatsapp-button:hover {
    background-color: #128C7E; /* Darker Green */
  }

  .promo-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
    overflow: auto;
  }

  .popup-content {
    background: url('~/assets/img/bg-pattern.png') repeat, white; /* Background pattern */
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    max-width: 500px;
    width: 90%;
    max-height: 100%;
    overflow-y: auto; /* Enable scroll if content overflows */
    position: relative; /* Position for close button */
  }

  .popup-content h2 {
    margin-top: 0;
    color: #333;
    font-size: 1.5rem; /* Adjusted for better visibility */
    font-weight: 700;
  }

  .popup-content p {
    color: #666;
    font-size: 1rem; /* Adjust font size for better readability */
  }

  .promo-image {
    width: 100%;
    max-width: 300px;
    margin: 20px 0;
  }

  .close-popup {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: #333; /* Color of the close icon */
    cursor: pointer;
  }

  .close-popup:hover {
    color: #ed2d56; /* Change color on hover for better UX */
  }
</style>

<script>
  export default {
    name: 'IndexPage',
    layout: 'default',

    async asyncData({ $commerce, $axios, $config }) {
      const { data: products } = await $commerce.products.list();
      const { data: categories } = await $commerce.categories.list();

      console.log(categories);

      return {
        products,
        categories,
        whatsappUrl: 'https://wa.me/085971630027?text=Hallo%20codesyariah%20web%20development%2C%20saya%20ingin%20bertanya%20seputar%20jasa%20pembuatan%20website%20.',
      };
    },

    data() {
      return {
        showPopup: true
      };
    },

    mounted() {
      $crisp.push(['do', 'chat:hide']);
      setTimeout(() => {
        this.showPopup = true;
      }, 500); // Show popup after 500ms
    },

    methods: {
      closePopup() {
        this.showPopup = false;
      },
      handleOutsideClick(event) {
        // Check if click is outside of popup-content
        const popupContent = this.$el.querySelector('.popup-content');
        if (!popupContent.contains(event.target)) {
          this.closePopup();
        }
      },
      whatsOrder(){
        const message = `Saya ingin order PROMO jasa pembuatan website Codesyariah Webdev`;
        const whatsappNumber = '6285971630027'; // Ganti dengan nomor WhatsApp Anda
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      }
    },

    beforeDestroy() {
      window.removeEventListener('click', this.handleOutsideClick);
    }
  };
</script>
