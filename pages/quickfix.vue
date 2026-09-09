<template>
  <main class="quickfix-page">
    <section class="quickfix-hero" aria-labelledby="quickfix-title">
      <div class="quickfix-shell quickfix-hero-grid">
        <div>
          <span class="quickfix-kicker"><i class="bx bx-pulse"></i> Codesyariah QuickFix</span>
          <h1 id="quickfix-title">Website atau aplikasi bermasalah? Mari kita cari dan perbaiki.</h1>
          <p>
            Layanan diagnosis dan perbaikan untuk sistem yang sudah berjalan.
            Kirim detail error terlebih dahulu, kami cek scope-nya lalu berikan estimasi sebelum pekerjaan dimulai.
          </p>
          <div class="quickfix-actions">
            <a :href="whatsappLink" target="_blank" rel="noopener noreferrer">
              Konsultasikan Error <i class="bx bxl-whatsapp"></i>
            </a>
            <a href="#cara-kerja" class="quickfix-secondary">Lihat cara kerja <i class="bx bx-down-arrow-alt"></i></a>
          </div>
          <p class="quickfix-price-note"><i class="bx bx-check-circle"></i> Promo pelanggan baru mulai dari <strong>Rp199.000</strong>, sesuai hasil diagnosis.</p>
        </div>
        <aside class="quickfix-alert" aria-label="Ringkasan layanan QuickFix">
          <div class="quickfix-alert-head"><span></span><span></span><span></span><strong>QUICKFIX / ACTIVE</strong></div>
          <i class="bx bx-bug"></i>
          <strong>Jangan biarkan error kecil menghentikan bisnis.</strong>
          <p>Mulai dari satu issue. Bila ditemukan scope tambahan, quotation baru selalu dikonfirmasi sebelum dilanjutkan.</p>
        </aside>
      </div>
    </section>

    <section class="quickfix-promo" aria-labelledby="quickfix-promo-title">
      <div class="quickfix-shell quickfix-promo-shell">
        <div class="quickfix-promo-mark"><i class="bx bxs-bolt"></i></div>
        <div class="quickfix-promo-copy">
          <span>Promo launching · pelanggan baru</span>
          <h2 id="quickfix-promo-title">Ada error? Mulai perbaikannya tanpa takut biaya besar di awal.</h2>
          <p>Hemat untuk issue pertama: QuickFix Basic mulai Rp199rb atau QuickFix Standard mulai Rp399rb. Scope tetap kami konfirmasi sebelum pengerjaan.</p>
        </div>
        <a :href="promoLink" target="_blank" rel="noopener noreferrer">Ambil Promo <i class="bx bxl-whatsapp"></i></a>
      </div>
    </section>

    <section class="quickfix-problems" aria-labelledby="problems-title">
      <div class="quickfix-shell">
        <div class="quickfix-heading">
          <span>Yang bisa ditangani</span>
          <h2 id="problems-title">Bukan cuma bikin website baru. Kami juga memperbaiki sistem yang sudah ada.</h2>
          <p>Untuk masalah yang menghambat operasional, conversion, atau website production Anda.</p>
        </div>
        <div class="quickfix-problem-grid">
          <article v-for="problem in problems" :key="problem.title">
            <i :class="problem.icon"></i>
            <h3>{{ problem.title }}</h3>
            <p>{{ problem.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="quickfix-pricing" aria-labelledby="pricing-title">
      <div class="quickfix-shell">
        <div class="quickfix-heading centered">
          <span>Harga transparan dari awal</span>
          <h2 id="pricing-title">Pilih titik mulai, bukan janji perbaikan tanpa batas.</h2>
          <p>Harga final mengikuti tingkat masalah setelah assessment singkat. Satu package menangani satu issue yang telah disepakati.</p>
        </div>
        <div class="quickfix-price-grid">
          <article v-for="tier in tiers" :key="tier.name" :class="{ featured: tier.featured }" class="quickfix-price-card">
            <span>{{ tier.label }}</span>
            <h3>{{ tier.name }}</h3>
            <div class="quickfix-tier-price">
              <del v-if="tier.normalPrice">{{ tier.normalPrice }}</del>
              <strong>{{ tier.price }}</strong>
              <small v-if="tier.promo">{{ tier.promo }}</small>
            </div>
            <p>{{ tier.description }}</p>
            <ul><li v-for="item in tier.items" :key="item"><i class="bx bx-check"></i>{{ item }}</li></ul>
            <a :href="tier.link" target="_blank" rel="noopener noreferrer">Konsultasikan issue <i class="bx bxl-whatsapp"></i></a>
          </article>
        </div>
        <p class="quickfix-scope"><i class="bx bx-info-circle"></i> Jika diagnosis menemukan masalah yang lebih besar, Anda menerima quotation baru terlebih dahulu—tanpa pekerjaan tambahan berjalan diam-diam.</p>
      </div>
    </section>

    <section id="cara-kerja" class="quickfix-flow" aria-labelledby="flow-title">
      <div class="quickfix-shell">
        <div class="quickfix-heading"><span>Alur sederhana</span><h2 id="flow-title">Tidak perlu ticketing atau dashboard baru.</h2></div>
        <ol>
          <li v-for="step in steps" :key="step.title"><span>{{ step.number }}</span><div><h3>{{ step.title }}</h3><p>{{ step.description }}</p></div></li>
        </ol>
      </div>
    </section>

    <section class="quickfix-final-cta" aria-labelledby="quickfix-cta-title">
      <div class="quickfix-shell">
        <div><span>Mulai dari diagnosis</span><h2 id="quickfix-cta-title">Kirim empat hal ini agar kami bisa cek lebih cepat.</h2></div>
        <ol><li>Screenshot error</li><li>URL (jika ada)</li><li>Teknologi yang digunakan</li><li>Penjelasan singkat masalah</li></ol>
        <a :href="whatsappLink" target="_blank" rel="noopener noreferrer">Konsultasikan Error <i class="bx bxl-whatsapp"></i></a>
      </div>
    </section>
  </main>
</template>

<script>
const siteUrl = "https://codesyariah-webdev.vercel.app";
const title = "Codesyariah QuickFix | Jasa Perbaikan Website, Aplikasi & Server";
const description = "Butuh perbaikan website atau aplikasi? Codesyariah QuickFix membantu diagnosis dan perbaikan Laravel, WordPress, server, API, deployment, database, email, dan website down. Promo pelanggan baru mulai Rp199.000.";
const url = `${siteUrl}/quickfix`;

export default {
  name: "QuickFixPage",
  layout: "page",
  data() {
    return {
      whatsappLink: "https://wa.me/6288222668778?text=Halo%20Codesyariah%2C%20saya%20ingin%20konsultasi%20QuickFix.%0A%0A1.%20Screenshot%20error%3A%0A2.%20URL%20%28jika%20ada%29%3A%0A3.%20Teknologi%20yang%20digunakan%3A%0A4.%20Penjelasan%20singkat%20masalah%3A",
      promoLink: "https://wa.me/6288222668778?text=Halo%20Codesyariah%2C%20saya%20ingin%20menggunakan%20promo%20launching%20QuickFix%20untuk%20pelanggan%20baru.%0A%0A1.%20Screenshot%20error%3A%0A2.%20URL%20%28jika%20ada%29%3A%0A3.%20Teknologi%20yang%20digunakan%3A%0A4.%20Penjelasan%20singkat%20masalah%3A",
      problems: [
        { icon: "bx bx-code-curly", title: "Laravel, PHP & API", description: "Error production, endpoint bermasalah, queue, cron, integrasi API, atau aplikasi existing yang tidak berjalan semestinya." },
        { icon: "bx bxl-wordpress", title: "WordPress", description: "Plugin atau theme error, halaman blank, checkout gagal, update yang bentrok, malware cleanup dasar, dan issue konfigurasi." },
        { icon: "bx bx-server", title: "VPS, Nginx & Deploy", description: "Website down, konfigurasi Nginx, SSL, domain, DNS, environment, migrasi, deployment, dan recovery dasar." },
        { icon: "bx bx-data", title: "Database & Integrasi", description: "Koneksi database gagal, data tidak sinkron, SMTP/email, payment gateway, webhook, atau integrasi pihak ketiga." },
        { icon: "bx bx-tachometer", title: "Performance", description: "Website lambat, proses berat, bottleneck sederhana, cache, aset, atau masalah yang menurunkan pengalaman pengguna." },
        { icon: "bx bx-shield-quarter", title: "Audit Awal", description: "Belum tahu sumber error? Mulai dari diagnosis. Kami bantu memetakan masalah, risiko, dan langkah paling realistis untuk dibereskan." },
      ],
      tiers: [
        { label: "Issue kecil", name: "QuickFix Basic", normalPrice: "Normal Rp250rb", price: "Promo Rp199rb", promo: "Khusus pelanggan baru", description: "Untuk satu bug atau error kecil dengan scope yang jelas.", items: ["Diagnosis awal", "Satu issue yang disepakati", "Testing setelah perbaikan", "Ringkasan hasil kerja"], link: "https://wa.me/6288222668778?text=Halo%20Codesyariah%2C%20saya%20ingin%20menggunakan%20promo%20QuickFix%20Basic%20Rp199rb." },
        { label: "Paling umum", name: "QuickFix Standard", normalPrice: "Normal Rp500rb", price: "Promo Rp399rb", promo: "Khusus pelanggan baru", description: "Untuk debugging yang membutuhkan konfigurasi atau beberapa titik pengecekan.", items: ["Diagnosis lebih mendalam", "Debugging dan konfigurasi", "Testing alur terkait", "Arahan pencegahan dasar"], featured: true, link: "https://wa.me/6288222668778?text=Halo%20Codesyariah%2C%20saya%20ingin%20menggunakan%20promo%20QuickFix%20Standard%20Rp399rb." },
        { label: "Masalah kompleks", name: "QuickFix Advanced", price: "Mulai Rp1jt+", description: "Untuk masalah server, deployment, integrasi, atau production issue yang lebih kompleks.", items: ["Assessment scope", "Penanganan sesuai quotation", "Testing sebelum serah terima", "Rekomendasi tindak lanjut"], link: "https://wa.me/6288222668778?text=Halo%20Codesyariah%2C%20saya%20ingin%20konsultasi%20QuickFix%20Advanced." },
      ],
      steps: [
        { number: "01", title: "Kirim detail error", description: "Kirim screenshot, URL bila tersedia, teknologi yang dipakai, dan ringkasan masalah melalui WhatsApp." },
        { number: "02", title: "Kami diagnosis", description: "Kami cek indikasi masalah dan menentukan apakah issue dapat ditangani lewat QuickFix serta package yang sesuai." },
        { number: "03", title: "Setujui quotation", description: "Anda menerima estimasi harga dan scope. Pekerjaan dimulai setelah keduanya jelas dan disepakati." },
        { number: "04", title: "Perbaikan & laporan", description: "Kami lakukan perbaikan, testing, lalu menyampaikan hasil dan rekomendasi langkah berikutnya bila diperlukan." },
      ],
    };
  },
  head() {
    const image = `${siteUrl}/assets/img/codesyariah-og-flyer.png?v=20260701`;
    return { title, link: [{ hid: "canonical", rel: "canonical", href: url }], meta: [
      { hid: "description", name: "description", content: description }, { hid: "keywords", name: "keywords", content: "jasa perbaikan website, jasa perbaikan Laravel, WordPress error, website down, perbaikan VPS, Nginx, deployment, API, Codesyariah QuickFix" },
      { hid: "og:title", property: "og:title", content: title }, { hid: "og:description", property: "og:description", content: description }, { hid: "og:url", property: "og:url", content: url }, { hid: "og:image", property: "og:image", content: image },
      { hid: "twitter:title", name: "twitter:title", content: title }, { hid: "twitter:description", name: "twitter:description", content: description }, { hid: "twitter:image", name: "twitter:image", content: image },
    ], __dangerouslyDisableSanitizersByTagID: { "quickfix-schema": ["innerHTML"] }, script: [{ hid: "quickfix-schema", type: "application/ld+json", innerHTML: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: "Codesyariah QuickFix", serviceType: "Website, Application & Server Repair", url, description, provider: { "@type": "Organization", name: "Codesyariah Webdevelopment", url: siteUrl, telephone: "+6288222668778" }, areaServed: { "@type": "Country", name: "Indonesia" }, offers: [{ "@type": "Offer", name: "QuickFix Basic — Promo pelanggan baru", price: "199000", priceCurrency: "IDR" }, { "@type": "Offer", name: "QuickFix Standard — Promo pelanggan baru", price: "399000", priceCurrency: "IDR" }, { "@type": "Offer", name: "QuickFix Advanced", priceCurrency: "IDR" }] }) }] };
  },
};
</script>

<style scoped>
.quickfix-page { background: #fff; color: #102d35; }
.quickfix-shell { width: min(1120px, calc(100% - 32px)); margin: 0 auto; }
.quickfix-hero { padding: 142px 0 78px; color: #fff; background: radial-gradient(circle at 78% 18%, rgba(249, 115, 22, .3), transparent 24%), linear-gradient(125deg, #061b20, #0d3a38); }
.quickfix-hero-grid { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, .75fr); gap: 62px; align-items: center; }
.quickfix-kicker, .quickfix-heading > span, .quickfix-final-cta span { display: inline-flex; align-items: center; gap: 7px; padding: 6px 11px; border-radius: 999px; background: rgba(249,115,22,.16); color: #fb923c; font-size: 12px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }
.quickfix-hero h1 { max-width: 790px; margin: 18px 0; font-size: clamp(40px, 5.7vw, 70px); line-height: .99; font-weight: 900; letter-spacing: -.03em; }
.quickfix-hero p { max-width: 710px; color: rgba(255,255,255,.78); font-size: 18px; line-height: 1.7; }
.quickfix-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
.quickfix-actions a, .quickfix-price-card a, .quickfix-final-cta a { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 49px; padding: 12px 18px; border-radius: 7px; background: #f97316; color: #fff; font-weight: 900; text-decoration: none; }
.quickfix-actions .quickfix-secondary { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,.25); }
.quickfix-price-note { margin-top: 20px; font-size: 14px !important; }.quickfix-price-note i { color: #fb923c; }.quickfix-price-note strong { color: #fff; }
.quickfix-alert { padding: 22px; border: 1px solid rgba(251,146,60,.35); border-radius: 10px; background: rgba(3,15,18,.48); box-shadow: 0 24px 60px rgba(0,0,0,.2); }.quickfix-alert-head { display: flex; align-items: center; gap: 6px; color: rgba(255,255,255,.55); font-size: 10px; letter-spacing: .09em; }.quickfix-alert-head span { width: 8px; height: 8px; border-radius: 50%; background: #f97316; }.quickfix-alert-head span:nth-child(2) { background: #fbbf24; }.quickfix-alert-head span:nth-child(3) { background: #34d399; }.quickfix-alert-head strong { margin-left: auto; }.quickfix-alert > i { display: block; margin: 42px 0 16px; color: #fb923c; font-size: 52px; }.quickfix-alert > strong { display: block; font-family: Raleway, sans-serif; font-size: 25px; line-height: 1.18; }.quickfix-alert p { font-size: 14px; }
.quickfix-promo { position: relative; overflow: hidden; padding: 26px 0; background: #f97316; color: #fff; }.quickfix-promo:before { position: absolute; top: -130px; right: 8%; width: 300px; height: 300px; border: 52px solid rgba(255,255,255,.12); border-radius: 50%; content: ""; }.quickfix-promo-shell { position: relative; display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 22px; align-items: center; }.quickfix-promo-mark { display: flex; align-items: center; justify-content: center; width: 58px; height: 58px; border-radius: 50%; background: #fff; color: #ea580c; font-size: 31px; box-shadow: 0 12px 28px rgba(110,35,0,.18); }.quickfix-promo-copy span { display: inline-flex; color: #ffedd5; font-size: 12px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }.quickfix-promo-copy h2 { margin: 5px 0 4px; font-size: clamp(23px, 3vw, 34px); line-height: 1.15; font-weight: 900; }.quickfix-promo-copy p { max-width: 730px; margin: 0; color: rgba(255,255,255,.88); line-height: 1.55; }.quickfix-promo a { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 48px; padding: 11px 17px; border-radius: 7px; background: #fff; color: #c2410c; font-weight: 900; text-decoration: none; white-space: nowrap; }
.quickfix-problems, .quickfix-pricing, .quickfix-flow { padding: 86px 0; }.quickfix-problems { background: #f7fbfb; }.quickfix-heading { max-width: 790px; margin-bottom: 34px; }.quickfix-heading h2 { margin: 15px 0 12px; font-size: clamp(31px, 4.3vw, 50px); line-height: 1.08; font-weight: 900; letter-spacing: -.02em; }.quickfix-heading p { color: #586a70; line-height: 1.7; }.centered { margin-right: auto; margin-left: auto; text-align: center; }
.quickfix-problem-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }.quickfix-problem-grid article { padding: 25px; border: 1px solid #e2eeee; border-radius: 8px; background: #fff; box-shadow: 0 16px 42px rgba(16,45,53,.06); }.quickfix-problem-grid i { color: #ea580c; font-size: 33px; }.quickfix-problem-grid h3 { margin: 15px 0 8px; font-size: 20px; font-weight: 900; }.quickfix-problem-grid p { margin: 0; color: #5e6d72; line-height: 1.65; }
.quickfix-pricing { background: #fff; }.quickfix-price-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }.quickfix-price-card { display: flex; flex-direction: column; padding: 28px; border: 1px solid #e2eeee; border-radius: 9px; background: #fff; }.quickfix-price-card.featured { border: 2px solid #f97316; background: linear-gradient(180deg, #fff7ed, #fff); transform: translateY(-8px); box-shadow: 0 22px 50px rgba(234,88,12,.13); }.quickfix-price-card > span { color: #c2410c; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: .07em; }.quickfix-price-card h3 { margin: 14px 0 8px; font-size: 25px; font-weight: 900; }.quickfix-tier-price { display: grid; gap: 3px; }.quickfix-tier-price del { color: #8c9aa0; font-size: 13px; font-weight: 800; }.quickfix-tier-price strong { color: #ea580c; font-size: 29px; line-height: 1.1; }.quickfix-tier-price small { color: #c2410c; font-size: 12px; font-weight: 800; }.quickfix-price-card p { color: #5e6d72; line-height: 1.65; }.quickfix-price-card ul { display: grid; gap: 9px; margin: 8px 0 25px; padding: 0; list-style: none; }.quickfix-price-card li { display: flex; gap: 7px; color: #3f5359; line-height: 1.4; }.quickfix-price-card li i { color: #ea580c; font-size: 19px; }.quickfix-price-card a { margin-top: auto; background: #0b3135; }.quickfix-price-card.featured a { background: #ea580c; }.quickfix-scope { max-width: 800px; margin: 30px auto 0; color: #5e6d72; text-align: center; line-height: 1.6; }.quickfix-scope i { color: #ea580c; }
.quickfix-flow { background: #edf7f5; }.quickfix-flow ol { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; padding: 0; margin: 0; list-style: none; }.quickfix-flow li { padding: 22px; border-top: 4px solid #f97316; background: #fff; }.quickfix-flow li > span { color: #ea580c; font-weight: 900; }.quickfix-flow h3 { margin: 14px 0 8px; font-size: 20px; font-weight: 900; }.quickfix-flow p { margin: 0; color: #5e6d72; line-height: 1.6; }
.quickfix-final-cta { padding: 70px 0; background: #082027; color: #fff; }.quickfix-final-cta .quickfix-shell { display: grid; grid-template-columns: 1.1fr .9fr auto; gap: 32px; align-items: center; }.quickfix-final-cta h2 { margin: 15px 0 0; font-size: clamp(29px, 3vw, 42px); line-height: 1.1; font-weight: 900; }.quickfix-final-cta ol { display: grid; gap: 9px; margin: 0; padding-left: 20px; color: rgba(255,255,255,.8); line-height: 1.5; }.quickfix-final-cta a { white-space: nowrap; }

/* Codesyariah brand palette: deep teal and mint. */
.quickfix-kicker, .quickfix-heading > span, .quickfix-final-cta span { background: rgba(24, 209, 155, .14); color: #18d19b; }
.quickfix-actions a, .quickfix-price-card a, .quickfix-final-cta a { background: #18d19b; color: #042018; }
.quickfix-price-note i, .quickfix-alert > i { color: #18d19b; }
.quickfix-alert { border-color: rgba(24, 209, 155, .35); }.quickfix-alert-head span { background: #18d19b; }.quickfix-alert-head span:nth-child(2) { background: #a7f3d0; }.quickfix-alert-head span:nth-child(3) { background: #34d399; }
.quickfix-promo { background: linear-gradient(120deg, #062b2a, #0b4e46); }.quickfix-promo-mark { color: #087756; box-shadow: 0 12px 28px rgba(0, 0, 0, .2); }.quickfix-promo-copy span { color: #9ff3d8; }.quickfix-promo a { background: #18d19b; color: #042018; }
.quickfix-problem-grid i, .quickfix-price-card li i, .quickfix-scope i { color: #08946d; }
.quickfix-price-card.featured { border-color: #18d19b; background: linear-gradient(180deg, #f2fffb, #fff); box-shadow: 0 22px 50px rgba(8, 148, 109, .13); }.quickfix-price-card > span, .quickfix-tier-price small { color: #087756; }.quickfix-tier-price strong { color: #08946d; }.quickfix-price-card.featured a { background: #18d19b; color: #042018; }
.quickfix-flow li { border-top-color: #18d19b; }.quickfix-flow li > span { color: #08946d; }
@media (max-width: 991px) { .quickfix-hero-grid { grid-template-columns: 1fr; gap: 34px; }.quickfix-promo-shell { grid-template-columns: auto 1fr; }.quickfix-promo a { grid-column: 2; width: fit-content; }.quickfix-problem-grid { grid-template-columns: repeat(2, 1fr); }.quickfix-flow ol { grid-template-columns: repeat(2, 1fr); }.quickfix-final-cta .quickfix-shell { grid-template-columns: 1fr; } }
@media (max-width: 575px) { .quickfix-hero { padding: 120px 0 58px; }.quickfix-hero p { font-size: 16px; }.quickfix-promo { padding: 32px 0; }.quickfix-promo-shell { grid-template-columns: 1fr; gap: 15px; }.quickfix-promo-mark { width: 50px; height: 50px; }.quickfix-promo a { grid-column: auto; width: 100%; }.quickfix-problems, .quickfix-pricing, .quickfix-flow { padding: 58px 0; }.quickfix-problem-grid, .quickfix-price-grid, .quickfix-flow ol { grid-template-columns: 1fr; }.quickfix-price-card.featured { transform: none; }.quickfix-actions a, .quickfix-final-cta a { width: 100%; }.quickfix-final-cta { padding: 56px 0; } }
</style>
