<template>
  <section
    id="site-pulse"
    class="site-pulse-product"
    aria-labelledby="site-pulse-title"
  >
    <div class="site-pulse-container">
      <div class="site-pulse-copy">
        <span class="site-pulse-kicker"
          >Produk Digital WordPress | Sudah dipakai client</span
        >
        <h2 id="site-pulse-title">
          WP Agency Site Pulse untuk monitoring website WordPress.
        </h2>
        <p>
          Plugin WordPress Codesyariah Webdev yang sudah mulai digunakan di
          website company profile PT Sinar Berkat Abadi. Cocok untuk owner,
          agency, dan tim IT yang ingin memantau health website, report
          maintenance, serta status teknis WordPress dengan bahasa yang mudah
          dipahami.
        </p>

        <div class="site-pulse-trust">
          <span>Preview client: PT Sinar Berkat Abadi</span>
          <span>Checkout Freemius aktif</span>
          <span>Untuk UMKM, company, dan agency</span>
        </div>

        <div class="site-pulse-points">
          <span><i class="bx bx-check"></i> Health check WordPress</span>
          <span><i class="bx bx-check"></i> Report maintenance harian</span>
          <span><i class="bx bx-check"></i> License & subscription local</span>
          <span><i class="bx bx-check"></i> Cocok untuk company profile</span>
        </div>

        <div class="site-pulse-pricing">
          <strong>Harga resmi mengikuti paket Freemius</strong>
          <span>
            Checkout lisensi plugin tersedia langsung via Freemius. Untuk UMKM
            Indonesia, Codesyariah tetap membuka penawaran harga lokal dan
            bantuan setup lewat WhatsApp.
          </span>
          <div class="site-pulse-plan-grid">
            <a
              class="site-pulse-plan"
              href="https://checkout.freemius.com/plugin/33732/plan/55410/"
              target="_blank"
              rel="noopener"
            >
              <b>Starter</b>
              <small>$9/month</small>
              <em>Untuk 1 website aktif</em>
              <span>Checkout Freemius</span>
            </a>
            <a
              class="site-pulse-plan"
              href="https://checkout.freemius.com/plugin/33732/plan/55411/"
              target="_blank"
              rel="noopener"
            >
              <b>Agency</b>
              <small>$29/month</small>
              <em>Untuk pengelolaan beberapa website</em>
              <span>Checkout Freemius</span>
            </a>
            <a
              class="site-pulse-plan"
              href="https://checkout.freemius.com/plugin/33732/plan/55412/"
              target="_blank"
              rel="noopener"
            >
              <b>Pro</b>
              <small>$79/month</small>
              <em>Untuk agency dan kebutuhan lebih serius</em>
              <span>Checkout Freemius</span>
            </a>
          </div>
          <div class="site-pulse-umkm-offer">
            <div>
              <b>Butuh harga UMKM?</b>
              <span>
                Ajukan penawaran lokal untuk plugin, instalasi, training, dan
                setup awal website WordPress.
              </span>
            </div>
            <button type="button" @click="orderSitePulse">
              Minta Penawaran UMKM <i class="bx bxl-whatsapp"></i>
            </button>
          </div>
        </div>

        <button type="button" class="site-pulse-cta" @click="orderSitePulse">
          Konsultasi Plugin WordPress <i class="bx bxl-whatsapp"></i>
        </button>
      </div>

      <div class="site-pulse-preview">
        <div class="site-pulse-preview-badge">
          <span>Client preview</span>
          <strong>Terpasang di admin WordPress PT Sinar Berkat Abadi</strong>
        </div>
        <div class="site-pulse-preview-stack">
          <figure
            class="site-pulse-preview-main"
            role="button"
            tabindex="0"
            aria-label="Perbesar preview admin WordPress WP Agency Site Pulse"
            @click="openLightbox(previewImages[0])"
            @keyup.enter="openLightbox(previewImages[0])"
          >
            <img
              :src="previewImages[0].src"
              :alt="previewImages[0].alt"
            />
            <figcaption>
              {{ previewImages[0].caption }}
            </figcaption>
          </figure>
          <div class="site-pulse-preview-gallery">
            <figure
              v-for="image in previewImages.slice(1)"
              :key="image.src"
              class="site-pulse-preview-mini"
              role="button"
              tabindex="0"
              :aria-label="`Perbesar ${image.label}`"
              @click="openLightbox(image)"
              @keyup.enter="openLightbox(image)"
            >
              <span>{{ image.label }}</span>
              <img
                :src="image.src"
                :alt="image.alt"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>

    <transition name="site-pulse-lightbox">
      <div
        v-if="activeLightbox"
        class="site-pulse-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="activeLightbox.caption"
        @click="closeLightbox"
      >
        <button
          type="button"
          class="lightbox-close"
          aria-label="Tutup preview gambar"
          @click.stop="closeLightbox"
        >
          <i class="bx bx-x"></i>
        </button>

        <figure class="lightbox-frame" @click.stop>
          <img :src="activeLightbox.src" :alt="activeLightbox.alt" />
          <figcaption>
            <strong>{{ activeLightbox.label }}</strong>
            <span>{{ activeLightbox.caption }}</span>
          </figcaption>
        </figure>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeLightbox: null,
      previewImages: [
        {
          label: "Admin preview",
          src: "/assets/site-pulse/agency-site-pulse-sba-wordpress-admin.png",
          alt: "Preview plugin Agency Site Pulse di dashboard WordPress PT Sinar Berkat Abadi",
          caption:
            "Live WordPress admin preview: health score, license, report, dan subscription.",
        },
        {
          label: "Health snapshot",
          src: "/assets/site-pulse/Site-Health-Status-‹-SBA-Sinar-Berkat-Abadi-Company-Profile-—-WordPress.png",
          alt: "Preview site health status WP Agency Site Pulse",
          caption:
            "Snapshot health WordPress untuk melihat skor, item perhatian, dan status teknis website.",
        },
        {
          label: "Upgrade plans",
          src: "/assets/site-pulse/agency-site-pulse-sba-wordpress-upgrade-plans.png",
          alt: "Preview upgrade plans WP Agency Site Pulse di WordPress PT Sinar Berkat Abadi",
          caption:
            "Preview paket Starter, Agency, dan Pro yang terhubung dengan checkout Freemius.",
        },
      ],
    };
  },

  methods: {
    openLightbox(image) {
      this.activeLightbox = image;
    },
    closeLightbox() {
      this.activeLightbox = null;
    },
    orderSitePulse() {
      const message =
        "Halo Codesyariah, saya tertarik dengan WP Agency Site Pulse. Saya ingin minta penawaran harga plugin untuk UMKM Indonesia, termasuk instalasi, training singkat, dan setup awal website WordPress.";
      const url = `https://wa.me/6288222668778?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank", "noopener");
    },
  },
};
</script>

<style scoped>
.site-pulse-product {
  scroll-margin-top: 96px;
  padding: 88px 0;
  background:
    linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent 34%),
    linear-gradient(315deg, rgba(15, 118, 110, 0.1), transparent 34%),
    #f7fbfa;
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
  background: rgba(16, 185, 129, 0.14);
  color: #047857;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.site-pulse-copy h2 {
  margin: 0 0 16px;
  color: #111827;
  font-size: 42px;
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

.site-pulse-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.site-pulse-trust span {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 6px 10px;
  border: 1px solid rgba(15, 118, 110, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  color: #0f3d39;
  font-size: 12px;
  font-weight: 800;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
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
  gap: 8px;
  margin-bottom: 22px;
  color: #4b5563;
}

.site-pulse-pricing strong {
  color: #111827;
  font-size: 24px;
  line-height: 1.2;
}

.site-pulse-pricing > span {
  line-height: 1.6;
}

.site-pulse-plan-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 8px;
}

.site-pulse-plan {
  display: flex;
  min-height: 112px;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px;
  border: 1px solid rgba(15, 118, 110, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.07);
  text-decoration: none;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.site-pulse-plan:hover {
  border-color: rgba(16, 185, 129, 0.46);
  box-shadow: 0 18px 40px rgba(15, 118, 110, 0.16);
  transform: translateY(-2px);
}

.site-pulse-plan b {
  color: #0f3d39;
  font-size: 13px;
}

.site-pulse-plan small {
  color: #0f766e;
  font-size: 15px;
  font-weight: 900;
  line-height: 1.25;
}

.site-pulse-plan em {
  color: #64748b;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.35;
}

.site-pulse-plan span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 6px 8px;
  border-radius: 6px;
  background: #0f3d39;
  color: #ffffff;
  font-size: 11px;
  font-weight: 900;
}

.site-pulse-umkm-offer {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  margin-top: 10px;
  padding: 16px;
  border: 1px solid rgba(16, 185, 129, 0.28);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(16, 185, 129, 0.14), transparent 58%),
    rgba(255, 255, 255, 0.9);
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
}

.site-pulse-umkm-offer b {
  display: block;
  color: #0f3d39;
  font-size: 15px;
  font-weight: 900;
}

.site-pulse-umkm-offer span {
  display: block;
  margin-top: 4px;
  color: #52636f;
  font-size: 13px;
  line-height: 1.5;
}

.site-pulse-umkm-offer button,
.site-pulse-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  border-radius: 6px;
  font-weight: 900;
  cursor: pointer;
}

.site-pulse-umkm-offer button {
  min-height: 42px;
  padding: 10px 14px;
  background: #10b981;
  color: #052e2b;
  font-size: 13px;
  white-space: nowrap;
}

.site-pulse-cta {
  min-height: 46px;
  padding: 10px 18px;
  background: linear-gradient(135deg, #0f766e, #10b981);
  color: #ffffff;
  box-shadow: 0 18px 38px rgba(15, 118, 110, 0.22);
}

.site-pulse-cta i {
  font-size: 20px;
}

.site-pulse-preview {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  background:
    linear-gradient(135deg, rgba(15, 118, 110, 0.12), transparent 42%),
    #ffffff;
  box-shadow: 0 28px 70px rgba(15, 23, 42, 0.14);
}

.site-pulse-preview-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
  max-width: calc(100% - 32px);
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 8px;
  background: rgba(6, 32, 32, 0.82);
  color: #ffffff;
  box-shadow: 0 18px 34px rgba(15, 23, 42, 0.18);
  backdrop-filter: blur(12px);
}

.site-pulse-preview-badge span {
  color: #9ff3d8;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.site-pulse-preview-badge strong {
  font-size: 13px;
  line-height: 1.25;
}

.site-pulse-preview-stack {
  display: grid;
  gap: 0;
}

.site-pulse-preview-main,
.site-pulse-preview-mini {
  margin: 0;
}

.site-pulse-preview-main {
  position: relative;
  background: #f1f5f9;
  cursor: zoom-in;
}

.site-pulse-preview-main:after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 28%;
  content: "";
  background: linear-gradient(180deg, transparent, rgba(15, 23, 42, 0.48));
  pointer-events: none;
}

.site-pulse-preview-main figcaption {
  position: absolute;
  right: 16px;
  bottom: 14px;
  left: 16px;
  z-index: 2;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  line-height: 1.45;
  text-shadow: 0 2px 10px rgba(15, 23, 42, 0.44);
}

.site-pulse-preview-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  padding: 12px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(248, 250, 252, 0.92);
}

.site-pulse-preview-mini {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
  cursor: zoom-in;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.site-pulse-preview-main:focus,
.site-pulse-preview-mini:focus {
  outline: 3px solid rgba(16, 185, 129, 0.45);
  outline-offset: 3px;
}

.site-pulse-preview-mini:hover {
  border-color: rgba(16, 185, 129, 0.42);
  box-shadow: 0 18px 34px rgba(15, 118, 110, 0.16);
  transform: translateY(-2px);
}

.site-pulse-preview-mini span {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  padding: 5px 8px;
  border-radius: 999px;
  background: rgba(6, 32, 32, 0.82);
  color: #9ff3d8;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.site-pulse-preview img {
  display: block;
  width: 100%;
  height: auto;
}

.site-pulse-preview-mini img {
  max-height: 220px;
  object-fit: cover;
  object-position: top;
}

.site-pulse-lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: grid;
  place-items: center;
  padding: 28px;
  background: rgba(2, 12, 14, 0.88);
  backdrop-filter: blur(14px);
}

.lightbox-close {
  position: fixed;
  top: 22px;
  right: 22px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 28px;
  cursor: pointer;
}

.lightbox-frame {
  display: grid;
  width: min(1180px, 100%);
  max-height: calc(100svh - 56px);
  margin: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 34px 90px rgba(0, 0, 0, 0.42);
}

.lightbox-frame img {
  display: block;
  width: 100%;
  max-height: calc(100svh - 156px);
  object-fit: contain;
  background: #f8fafc;
}

.lightbox-frame figcaption {
  display: grid;
  gap: 4px;
  padding: 16px 18px;
  background: #061f22;
  color: #ffffff;
}

.lightbox-frame figcaption strong {
  color: #9ff3d8;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lightbox-frame figcaption span {
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.5;
}

.site-pulse-lightbox-enter-active,
.site-pulse-lightbox-leave-active {
  transition: opacity 0.2s ease;
}

.site-pulse-lightbox-enter,
.site-pulse-lightbox-leave-to {
  opacity: 0;
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

  .site-pulse-points,
  .site-pulse-plan-grid,
  .site-pulse-preview-gallery {
    grid-template-columns: 1fr;
  }

  .site-pulse-plan {
    min-height: auto;
    gap: 6px;
  }

  .site-pulse-umkm-offer {
    grid-template-columns: 1fr;
  }

  .site-pulse-umkm-offer button {
    width: 100%;
  }

  .site-pulse-preview-badge {
    top: 10px;
    left: 10px;
    padding: 8px 10px;
  }

  .site-pulse-preview-main figcaption {
    right: 10px;
    bottom: 10px;
    left: 10px;
    font-size: 12px;
  }

  .site-pulse-preview-gallery {
    gap: 10px;
    padding: 10px;
  }

  .site-pulse-preview-mini img {
    max-height: 160px;
  }

  .site-pulse-lightbox {
    padding: 14px;
  }

  .lightbox-close {
    top: 12px;
    right: 12px;
    width: 42px;
    height: 42px;
  }

  .lightbox-frame {
    max-height: calc(100svh - 28px);
  }

  .lightbox-frame img {
    max-height: calc(100svh - 142px);
  }
}
</style>
