<template>
  <main id="main">
    <!-- Komponen halaman -->
    <HomepageGalleryProduct />
    <HomepageBlog />
    <HomepageServices />
    <HomepageTestimonial />
    <HomepagePricing :categories="categories" />
    <HomepageAbout />
    <HomepageContact />

    <!-- Tombol WhatsApp Floating -->
    <div class="whatsapp-float">
      <div class="whatsapp-button" @click="toggleChatbox">
        <i class="bx bxl-whatsapp"></i>
      </div>

      <!-- Chatbox WhatsApp -->
      <div v-if="showChatbox" class="whatsapp-chatbox">
        <div class="chatbox-header">
          <span>Hubungi Admin</span>
          <button @click="toggleChatbox">&times;</button>
        </div>
        <div class="chatbox-body">
          <div v-for="(admin, index) in admins" :key="index" class="admin-chat">
            <img :src="admin.avatar" class="avatar" alt="avatar" />
            <div class="chat-info">
              <strong>{{ admin.name }}</strong>
              <p>{{ admin.position }}</p>
              <button @click="contactAdmin(admin)">Hubungi Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Promo Popup -->
    <div v-if="showPopup" class="promo-popup" @click="handleOutsideClick">
      <div class="popup-content" @click.stop>
        <span class="close-popup" @click="closePopup">&times;</span>
        <h2>Promo Pembuatan Website</h2>
        <blockquote>
          Pesan website di bulan ini dan dapatkan bonus T-shirt eksklusif!
        </blockquote>
        <button @click="whatsOrder" class="btn btn-outline-success mt-2">
          Order Sekarang <i class="bx bxl-whatsapp"></i>
        </button>
        <img
          src="~/assets/img/tshirt-codesyariah.jpeg"
          alt="Bonus T-shirt"
          class="promo-image"
        />
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
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  font-size: 37px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.whatsapp-chatbox {
  position: absolute;
  bottom: 70px;
  right: 0;
  width: 300px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  font-family: Arial, sans-serif;
}

.chatbox-header {
  background: #075e54;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbox-body {
  max-height: 300px;
  overflow-y: auto;
  background: #f0f0f0;
  padding: 10px;
}

.admin-chat {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background: white;
  padding: 8px;
  border-radius: 6px;
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-info strong {
  display: block;
  color: #333;
}

.chat-info p {
  margin: 0;
  font-size: 0.8rem;
  color: #888;
}

.chat-info button {
  margin-top: 5px;
  background: #25d366;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.chat-info button:hover {
  background: #128c7e;
}
</style>

<script>
export default {
  name: "IndexPage",
  layout: "default",

  data() {
    return {
      whatsappUrl: "https://wa.me/085971630027?text=Hallo%20codesyariah",
      showPopup: true,
      showChatbox: false,
      categories: [],
      admins: [
        {
          name: "Deddy Ndi",
          position: "Marketing & Sales",
          phone: "6289621142235",
          avatar: require("~/assets/img/kontak/deddy.jpg"),
        },
        {
          name: "Puji Ermanto",
          position: "Support & Helpdesk",
          phone: "6285971630027",
          avatar: require("~/assets/img/kontak/puji.jpg"),
        },
      ],
    };
  },

  mounted() {
    setTimeout(() => {
      this.showPopup = false;
    }, 500);
  },

  methods: {
    closePopup() {
      this.showPopup = false;
    },
    handleOutsideClick(event) {
      const popupContent = this.$el.querySelector(".popup-content");
      if (!popupContent.contains(event.target)) {
        this.closePopup();
      }
    },
    whatsOrder() {
      const message = `Saya ingin order PROMO jasa pembuatan website Codesyariah Webdev`;
      const whatsappNumber = "6285971630027";
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    },
    toggleChatbox() {
      this.showChatbox = !this.showChatbox;
    },
    contactAdmin(admin) {
      const url = `https://wa.me/${admin.phone}?text=Hallo%20${admin.name}%2C%20saya%20tertarik%20dengan%20layanan%20Anda.`;
      window.open(url, "_blank");
    },
  },
};
</script>
