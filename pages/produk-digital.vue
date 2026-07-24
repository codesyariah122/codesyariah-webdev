<template>
  <main class="digital-product-page">
    <section class="digital-product-hero" aria-labelledby="digital-product-title">
      <div class="digital-product-shell">
        <span>Produk Digital WordPress</span>
        <h1 id="digital-product-title">
          Plugin WordPress produksi Codesyariah Webdev yang siap dijual dan dipakai client.
        </h1>
        <p>
          Halaman ini merangkum produk digital WP Agency Site Pulse: bukti
          implementasi di client, preview admin WordPress, paket Freemius, dan
          opsi penawaran UMKM via WhatsApp.
        </p>
      </div>
    </section>

    <HomepageSitePulseProduct />
  </main>
</template>

<script>
export default {
  name: "ProdukDigitalPage",
  layout: "page",
  head() {
    return {
      title: "Produk Digital WordPress - WP Agency Site Pulse",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "WP Agency Site Pulse adalah produk digital WordPress Codesyariah Webdev untuk monitoring health website, report maintenance, dan license subscription.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.digital-product-page {
  background: #f7fbfa;
}

.digital-product-hero {
  padding: 150px 0 72px;
  background:
    linear-gradient(120deg, rgba(6, 32, 32, 0.96), rgba(15, 118, 110, 0.7)),
    url("~/assets/img/new-hero-bg-1-desktop.jpg") center / cover;
  color: #ffffff;
}

.digital-product-shell {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.digital-product-shell span {
  display: inline-flex;
  min-height: 28px;
  align-items: center;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.16);
  color: #9ff3d8;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.digital-product-shell h1 {
  max-width: 940px;
  margin: 18px 0 16px;
  font-size: clamp(38px, 6vw, 72px);
  line-height: 0.98;
  font-weight: 900;
  letter-spacing: 0;
}

.digital-product-shell p {
  max-width: 760px;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 18px;
  line-height: 1.7;
}

@media (max-width: 575px) {
  .digital-product-hero {
    padding: 120px 0 54px;
  }

  .digital-product-shell p {
    font-size: 16px;
  }
}
</style>
