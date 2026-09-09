<template>
  <main class="legal-page">
    <section class="legal-hero">
      <div class="legal-shell">
        <span>Codesyariah Webdevelopment</span>
        <h1>Privacy Policy</h1>
        <p>Terakhir diperbarui: 9 September 2026</p>
      </div>
    </section>
    <article class="legal-shell legal-content">
      <p>Codesyariah Webdevelopment menghargai privasi setiap pengunjung. Halaman ini menjelaskan data yang dapat kami proses ketika Anda mengunjungi website atau menghubungi kami untuk konsultasi layanan.</p>
      <h2>Data yang dapat kami terima</h2>
      <p>Jika Anda menghubungi kami melalui WhatsApp, email, formulir pihak ketiga, atau layanan chat, kami dapat menerima informasi yang Anda kirimkan, seperti nama, nomor kontak, alamat email, URL website, kebutuhan project, dan detail teknis yang relevan. Mohon jangan mengirimkan password, API key, atau data sensitif lain melalui kanal publik.</p>
      <h2>Penggunaan data</h2>
      <p>Data digunakan untuk menjawab konsultasi, menyusun estimasi atau quotation, menjalankan layanan yang disepakati, dan meningkatkan pengalaman website. Kami tidak menjual data pribadi pengunjung.</p>
      <h2>Cookies dan layanan pihak ketiga</h2>
      <p>Website dapat memakai layanan pengukuran trafik, fitur chat, dan layanan pihak ketiga lain yang menggunakan cookies atau teknologi serupa. Jika iklan Google ditayangkan pada website ini di masa mendatang, Google dan partnernya dapat menggunakan cookies untuk menayangkan atau mengukur iklan sesuai kebijakan mereka.</p>
      <h2>Keamanan dan penyimpanan</h2>
      <p>Kami menerapkan langkah yang wajar untuk menjaga informasi yang diberikan. Namun, pengiriman data melalui internet tidak dapat dijamin sepenuhnya aman. Data disimpan hanya selama diperlukan untuk tujuan layanan atau kewajiban yang berlaku.</p>
      <h2>Hak dan kontak</h2>
      <p>Anda dapat meminta akses, koreksi, atau penghapusan data konsultasi Anda dengan menghubungi <a href="mailto:codesyariahwebdev@gmail.com">codesyariahwebdev@gmail.com</a>. Untuk pertanyaan mengenai halaman ini, Anda juga dapat menghubungi kami melalui WhatsApp.</p>
    </article>
  </main>
</template>

<script>
export default {
  name: "PrivacyPolicyPage",
  layout: "page",
  head() {
    const title = "Privacy Policy | Codesyariah Webdevelopment";
    const description = "Kebijakan privasi Codesyariah Webdevelopment untuk pengunjung website dan calon pelanggan layanan digital.";
    const url = "https://codesyariah-webdev.vercel.app/privacy-policy";
    return { title, link: [{ hid: "canonical", rel: "canonical", href: url }], meta: [{ hid: "description", name: "description", content: description }, { hid: "robots", name: "robots", content: "index,follow" }, { hid: "og:title", property: "og:title", content: title }, { hid: "og:description", property: "og:description", content: description }, { hid: "og:url", property: "og:url", content: url }] };
  },
};
</script>

<style scoped>
.legal-page { min-height: 100vh; background: #fff; color: #17353b; }.legal-shell { width: min(860px, calc(100% - 32px)); margin: 0 auto; }.legal-hero { padding: 145px 0 62px; color: #fff; background: linear-gradient(125deg, #061b20, #0d3a38); }.legal-hero span { color: #8ee9ce; font-size: 12px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }.legal-hero h1 { margin: 14px 0 8px; font-size: clamp(40px, 6vw, 65px); font-weight: 900; }.legal-hero p { margin: 0; color: rgba(255,255,255,.72); }.legal-content { padding: 64px 0 84px; font-size: 17px; line-height: 1.8; }.legal-content h2 { margin: 42px 0 10px; color: #082027; font-size: 27px; font-weight: 900; }.legal-content p { color: #50646a; }.legal-content a { color: #087f63; font-weight: 800; } @media (max-width: 575px) { .legal-hero { padding-top: 118px; }.legal-content { padding-top: 45px; font-size: 16px; } }
</style>
