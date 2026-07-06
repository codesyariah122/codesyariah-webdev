<template>
  <main id="main">
    <!-- Komponen halaman -->
    <HomepageServices />
    <HomepagePricing :categories="categories" />
    <HomepageGalleryProduct />
    <section class="site-pulse-product" aria-labelledby="site-pulse-title">
      <div class="site-pulse-container">
        <div class="site-pulse-copy">
          <span class="site-pulse-kicker">Produk Digital WordPress</span>
          <h2 id="site-pulse-title">WP Agency Site Pulse</h2>
          <p>
            Plugin WordPress untuk agency, developer, dan company yang mengelola
            banyak website klien. Pantau health website, kirim report otomatis,
            dan aktifkan fitur premium dengan sistem subscription license.
          </p>

          <div class="site-pulse-points">
            <span><i class="bx bx-check"></i> Site health snapshot</span>
            <span><i class="bx bx-check"></i> Daily maintenance report</span>
            <span><i class="bx bx-check"></i> License key subscription</span>
            <span><i class="bx bx-check"></i> Cocok untuk WordPress agency</span>
          </div>

          <div class="site-pulse-pricing">
            <strong>Mulai dari $9/bulan</strong>
            <span>Early access tersedia untuk agency pertama.</span>
          </div>

          <button type="button" class="site-pulse-cta" @click="orderSitePulse">
            Konsultasi Produk <i class="bx bxl-whatsapp"></i>
          </button>
        </div>

        <div class="site-pulse-preview">
          <img
            src="/assets/site-pulse/admin-preview-desktop.png"
            alt="Preview dashboard WP Agency Site Pulse"
          />
        </div>
      </div>
    </section>
    <HomepageTestimonial />
    <HomepageBlog />
    <HomepageAbout />
    <HomepageContact />

    <div class="whatsapp-float" :class="{ 'is-open': showChatbox }">
      <transition name="wa-chat">
        <section
          v-if="showChatbox"
          class="wa-widget-panel"
          aria-label="Chat WhatsApp Codesyariah"
        >
          <div class="wa-widget-header">
            <div class="wa-widget-profile">
              <img :src="admin.avatar" class="avatar" alt="Puji Ermanto" />
              <div>
                <strong>Codesyariah Webdev</strong>
                <span><i></i> Online, siap bantu konsultasi</span>
              </div>
            </div>
            <button
              type="button"
              aria-label="Tutup chat WhatsApp"
              @click="toggleChatbox"
            >
              <i class="bx bx-x"></i>
            </button>
          </div>

          <div class="wa-widget-body">
            <div class="wa-widget-date">Hari ini</div>
            <div class="wa-widget-bubble">
              Assalamualaikum, selamat datang di Codesyariah Webdev.
            </div>
            <div class="wa-widget-bubble">
              Ceritakan kebutuhan bisnisnya. Boleh mulai dari website company
              profile, landing page, sistem internal, atau perbaikan website
              lama.
            </div>
            <div class="wa-widget-replies">
              <button
                v-for="reply in quickReplies"
                :key="reply"
                type="button"
                @click="setMessage(reply)"
              >
                {{ reply }}
              </button>
            </div>
          </div>

          <form class="wa-widget-compose" @submit.prevent="sendWhatsAppMessage">
            <textarea
              v-model.trim="chatMessage"
              rows="1"
              aria-label="Tulis pesan WhatsApp"
              placeholder="Tulis pesan..."
              @keydown.enter.exact.prevent="sendWhatsAppMessage"
            ></textarea>
            <button type="submit" aria-label="Kirim pesan ke WhatsApp">
              <i class="bx bx-send"></i>
            </button>
          </form>
        </section>
      </transition>

      <button
        type="button"
        class="whatsapp-button"
        aria-label="Buka chat WhatsApp"
        @click="toggleChatbox"
      >
        <i class="bx bxl-whatsapp"></i>
      </button>
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

<script>
export default {
  name: "IndexPage",
  layout: "default",

  data() {
    return {
      whatsappUrl: "https://wa.me/6285971630027?text=Hallo%20codesyariah",
      showPopup: true,
      showChatbox: true,
      chatMessage:
        "Halo Codesyariah, saya ingin konsultasi kebutuhan website atau sistem bisnis.",
      categories: [],
      admins: [
        {
          name: "Puji Ermanto",
          position: "Consultant & Helpdesk",
          phone: "6285971630027",
          avatar: require("~/assets/img/kontak/puji.jpg"),
        },
      ],
      quickReplies: [
        "Saya ingin buat website company profile",
        "Saya ingin buat landing page untuk promosi",
        "Saya ingin konsultasi sistem bisnis atau aplikasi web",
      ],
    };
  },

  computed: {
    admin() {
      return this.admins[0];
    },
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
    setMessage(message) {
      this.chatMessage = message;
    },
    sendWhatsAppMessage() {
      const message =
        this.chatMessage ||
        "Halo Codesyariah, saya ingin konsultasi layanan website.";
      const url = `https://wa.me/${this.admin.phone}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank", "noopener");
    },
    orderSitePulse() {
      const message =
        "Halo Codesyariah, saya tertarik dengan WP Agency Site Pulse untuk monitoring dan report website WordPress.";
      const url = `https://wa.me/${this.admin.phone}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank", "noopener");
    },
    contactAdmin(admin) {
      const url = `https://wa.me/${admin.phone}?text=Hallo%20${admin.name}%2C%20saya%20tertarik%20dengan%20layanan%20Anda.`;
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.site-pulse-product {
  scroll-margin-top: 96px;
  padding: 88px 0;
  background: #f7fafc;
}

#site-pulse-title {
  scroll-margin-top: 96px;
}

.site-pulse-container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 42px;
  align-items: center;
}

.site-pulse-kicker {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 4px 10px;
  margin-bottom: 16px;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.12);
  color: #047857;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.site-pulse-copy h2 {
  margin: 0 0 16px;
  color: #111827;
  font-size: 40px;
  line-height: 1.12;
  font-weight: 900;
  letter-spacing: 0;
}

.site-pulse-copy p {
  margin: 0;
  color: #4b5563;
  font-size: 16px;
  line-height: 1.75;
}

.site-pulse-points {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin: 24px 0;
}

.site-pulse-points span {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1f2937;
  font-size: 14px;
  font-weight: 700;
}

.site-pulse-points i {
  color: #10b981;
  font-size: 20px;
}

.site-pulse-pricing {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 22px;
  color: #4b5563;
}

.site-pulse-pricing strong {
  color: #111827;
  font-size: 20px;
}

.site-pulse-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 10px 18px;
  border: 0;
  border-radius: 6px;
  background: #0f766e;
  color: #ffffff;
  font-weight: 800;
  box-shadow: 0 18px 38px rgba(15, 118, 110, 0.22);
  cursor: pointer;
}

.site-pulse-cta i {
  font-size: 20px;
}

.site-pulse-preview {
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  background: #ffffff;
  box-shadow: 0 28px 70px rgba(15, 23, 42, 0.14);
}

.site-pulse-preview img {
  display: block;
  width: 100%;
  height: auto;
}

.whatsapp-float {
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 1000;
  font-family: "Inter", "Open Sans", Arial, sans-serif;
}

.whatsapp-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 62px;
  border: 0;
  background: linear-gradient(135deg, #20d59f, #10b981);
  color: white;
  border-radius: 50%;
  font-size: 38px;
  box-shadow: 0 18px 38px rgba(16, 185, 129, 0.35);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.whatsapp-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 48px rgba(16, 185, 129, 0.42);
}

.wa-widget-panel {
  width: min(370px, calc(100vw - 32px));
  margin-bottom: 14px;
  background: #efeae2;
  border-radius: 8px;
  box-shadow: 0 28px 70px rgba(5, 18, 23, 0.32);
  overflow: hidden;
  border: 1px solid rgba(6, 95, 70, 0.14);
}

.wa-chat-enter-active,
.wa-chat-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.wa-chat-enter,
.wa-chat-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.wa-widget-header {
  background: linear-gradient(135deg, #075e54, #128c7e);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  min-height: 68px;
  padding: 10px 12px;
  margin-top: -2rem;
}

.wa-widget-profile {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.wa-widget-profile .avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.72);
}

.wa-widget-profile strong,
.wa-widget-profile span {
  display: block;
}

.wa-widget-profile strong {
  font-size: 14px;
  line-height: 1.2;
}

.wa-widget-profile span {
  margin-top: 3px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.82);
}

.wa-widget-profile span i {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 5px;
  border-radius: 999px;
  background: #38ef7d;
}

.wa-widget-header button {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
  font-size: 22px;
  cursor: pointer;
}

.wa-widget-body {
  min-height: 232px;
  max-height: 334px;
  overflow-y: auto;
  padding: 14px;
  background: linear-gradient(
      rgba(239, 234, 226, 0.88),
      rgba(239, 234, 226, 0.88)
    ),
    radial-gradient(
      circle at 15% 20%,
      rgba(18, 140, 126, 0.16),
      transparent 28%
    ),
    radial-gradient(
      circle at 82% 72%,
      rgba(37, 211, 102, 0.18),
      transparent 30%
    );
}

.wa-widget-date {
  width: fit-content;
  margin: 0 auto 12px;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  color: #64748b;
  font-size: 11px;
  font-weight: 700;
}

.wa-widget-bubble {
  position: relative;
  width: fit-content;
  max-width: 88%;
  margin-bottom: 9px;
  padding: 10px 12px;
  border-radius: 4px 8px 8px 8px;
  background: #ffffff;
  color: #1f2937;
  font-size: 13px;
  line-height: 1.45;
  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.08);
}

.wa-widget-replies {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 12px;
}

.wa-widget-replies button {
  border: 1px solid rgba(18, 140, 126, 0.22);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.82);
  color: #075e54;
  padding: 7px 10px;
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
}

.wa-widget-compose {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 10px;
  background: #f0f2f5;
}

.wa-widget-compose textarea {
  flex: 1;
  min-height: 70px;
  max-height: 150px;
  resize: none;
  border: 0;
  outline: 0;
  border-radius: 8px;
  padding: 12px 13px;
  color: #17212b;
  background: #ffffff;
  font-size: 13px;
  line-height: 1.35;
}

.wa-widget-compose button {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  border: 0;
  border-radius: 50%;
  background: #128c7e;
  color: #ffffff;
  font-size: 22px;
  cursor: pointer;
}

@media (max-width: 575px) {
  .site-pulse-product {
    padding: 58px 0;
  }

  .site-pulse-container {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .site-pulse-copy h2 {
    font-size: 30px;
  }

  .site-pulse-points {
    grid-template-columns: 1fr;
  }

  .whatsapp-float {
    left: 14px;
    bottom: 14px;
  }

  .wa-widget-panel {
    width: calc(100vw - 28px);
    margin-bottom: 10px;
  }

  .whatsapp-button {
    width: 56px;
    height: 56px;
    font-size: 34px;
  }

  .wa-widget-header {
    min-height: 64px;
    padding: 9px 12px;
  }

  .wa-widget-body {
    min-height: 204px;
    max-height: 44vh;
    padding: 12px 14px;
  }

  .wa-widget-compose {
    padding: 9px;
  }
}
</style>
