<template>
  <main class="legal-page">
    <section class="legal-hero">
      <div class="legal-shell">
        <span>Codesyariah Webdevelopment</span>
        <h1>Terms of Service</h1>
        <p>Terakhir diperbarui: 9 September 2026</p>
      </div>
    </section>
    <article class="legal-shell legal-content">
      <p>Dengan menggunakan website Codesyariah Webdevelopment atau menghubungi kami untuk konsultasi, Anda menyetujui ketentuan berikut.</p>
      <h2>Informasi website</h2>
      <p>Informasi layanan, portfolio, estimasi harga, dan artikel pada website ini bersifat informasi awal. Harga, timeline, deliverables, dan batas pekerjaan yang berlaku untuk sebuah project adalah yang tercantum dalam quotation atau kesepakatan tertulis.</p>
      <h2>Konsultasi dan quotation</h2>
      <p>Konsultasi awal tidak otomatis membentuk kontrak kerja. Kami dapat meminta detail tambahan untuk memahami kebutuhan, terutama untuk layanan Codesyariah QuickFix. Pekerjaan dimulai setelah scope, biaya, dan ketentuan pembayaran disetujui kedua pihak.</p>
      <h2>Hak kekayaan intelektual</h2>
      <p>Materi, desain, tulisan, kode, dan aset pada website ini dilindungi hak yang berlaku. Penggunaan ulang materi website tanpa izin tertulis tidak diperbolehkan. Hak atas hasil project klien mengikuti kesepakatan project masing-masing.</p>
      <h2>Batas tanggung jawab</h2>
      <p>Kami berupaya menjaga informasi website tetap akurat dan layanan berjalan baik, tetapi tidak menjamin website selalu bebas gangguan. Kami tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan website atau layanan pihak ketiga yang ditautkan dari website ini.</p>
      <h2>Perubahan ketentuan</h2>
      <p>Kami dapat memperbarui ketentuan ini sewaktu-waktu. Versi terbaru akan dipublikasikan di halaman ini. Jika Anda memiliki pertanyaan, hubungi <a href="mailto:codesyariahwebdev@gmail.com">codesyariahwebdev@gmail.com</a>.</p>
    </article>
  </main>
</template>

<script>
export default {
  name: "TermsPage",
  layout: "page",
  head() {
    const title = "Terms of Service | Codesyariah Webdevelopment";
    const description = "Ketentuan penggunaan website dan layanan Codesyariah Webdevelopment.";
    const url = "https://codesyariah-webdev.vercel.app/terms";
    return { title, link: [{ hid: "canonical", rel: "canonical", href: url }], meta: [{ hid: "description", name: "description", content: description }, { hid: "robots", name: "robots", content: "index,follow" }, { hid: "og:title", property: "og:title", content: title }, { hid: "og:description", property: "og:description", content: description }, { hid: "og:url", property: "og:url", content: url }] };
  },
};
</script>

<style scoped>
.legal-page { min-height: 100vh; background: #fff; color: #17353b; }.legal-shell { width: min(860px, calc(100% - 32px)); margin: 0 auto; }.legal-hero { padding: 145px 0 62px; color: #fff; background: linear-gradient(125deg, #061b20, #0d3a38); }.legal-hero span { color: #8ee9ce; font-size: 12px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }.legal-hero h1 { margin: 14px 0 8px; font-size: clamp(40px, 6vw, 65px); font-weight: 900; }.legal-hero p { margin: 0; color: rgba(255,255,255,.72); }.legal-content { padding: 64px 0 84px; font-size: 17px; line-height: 1.8; }.legal-content h2 { margin: 42px 0 10px; color: #082027; font-size: 27px; font-weight: 900; }.legal-content p { color: #50646a; }.legal-content a { color: #087f63; font-weight: 800; } @media (max-width: 575px) { .legal-hero { padding-top: 118px; }.legal-content { padding-top: 45px; font-size: 16px; } }
</style>
