<style lang="css">
.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  margin: 0 10px 10px 10px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  padding: 7px 10px;
  text-transform: uppercase;
  color: #444444;
  transition: all 0.3s ease-in-out;
  border: 2px solid #fff;
}

.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.filter-active {
  color: #08946d;
  border-color: #18d19b;
}
.portfolio #portfolio-flters {
  list-style: none;
  margin-bottom: 20px;
}

.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  margin: 0 10px 10px 10px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  padding: 7px 10px;
  text-transform: uppercase;
  color: #444444;
  transition: all 0.3s ease-in-out;
  border: 2px solid #fff;
}

.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.filter-active {
  color: #08946d;
  border-color: #18d19b;
}

.portfolio .portfolio-item {
  position: relative;
  margin-bottom: 30px;
}

.portfolio .portfolio-item .portfolio-img {
  overflow: hidden;
}

.portfolio .portfolio-item .portfolio-img img {
  transition: all 0.8s ease-in-out;
}

.portfolio .portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 15px;
  bottom: 0;
  z-index: 3;
  right: 15px;
  transition: all ease-in-out 0.3s;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
}

.portfolio .portfolio-item .portfolio-info h4 {
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0px;
}

.portfolio .portfolio-item .portfolio-info p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 0;
}

.portfolio .portfolio-item .portfolio-info .preview-link,
.portfolio .portfolio-item .portfolio-info .details-link {
  position: absolute;
  right: 40px;
  font-size: 24px;
  top: calc(50% - 18px);
  color: #fff;
  transition: 0.3s;
  top: 45%;
}

.portfolio .portfolio-item .portfolio-info .preview-link:hover,
.portfolio .portfolio-item .portfolio-info .details-link:hover {
  color: #4fe0b4;
}

.portfolio .portfolio-item .portfolio-info .details-link {
  right: 10px;
}

.portfolio .portfolio-item:hover .portfolio-img img {
  transform: scale(1.2);
}

.portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
}

.portfolio-details {
  padding-top: 40px;
}

.portfolio-details .portfolio-details-slider img {
  width: 100%;
}

.portfolio-details .portfolio-details-slider .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.portfolio-details
  .portfolio-details-slider
  .swiper-pagination
  .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #18d19b;
}

.portfolio-details
  .portfolio-details-slider
  .swiper-pagination
  .swiper-pagination-bullet-active {
  background-color: #18d19b;
}

.portfolio-details .portfolio-info {
  padding: 30px;
  box-shadow: 0px 0 30px rgba(59, 67, 74, 0.08);
}

.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.portfolio-details .portfolio-info ul li + li {
  margin-top: 10px;
}

.portfolio-details .portfolio-description {
  padding-top: 30px;
}

.portfolio-details .portfolio-description h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

.portfolio-details .portfolio-description p {
  padding: 0;
}

.browser-windows {
  list-style: none;
  padding: 0;
  margin: 0;
}

.browser-window {
  text-align: center;
  margin-bottom: 30px;
}

.window-style {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
  position: relative;
}

.window-style .top-bar {
  background-color: #e0e0e0;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: flex-start;
}

.window-style .circles {
  display: flex;
  gap: 6px;
}

.circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.circle-red {
  background-color: #ff5f56;
}

.circle-yellow {
  background-color: #ffbd2e;
}

.circle-green {
  background-color: #27c93f;
}

.window-style .content {
  padding: 10px;
  background: #fff;
}

.window-style .content img {
  max-width: 100%;
  border-radius: 4px;
  display: block;
  margin: auto;
}

.browser-window h4 {
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
}

.browser-window h4 a {
  color: #333;
  text-decoration: none;
}

.browser-window h4 a:hover {
  color: #08946d;
}

.browser-window .project-summary {
  max-width: 94%;
  min-height: 58px;
  margin: 0 auto;
  color: #627277;
  font-size: 13px;
  line-height: 1.5;
}

.window-style .content {
  height: 320px; /* atau sesuai kebutuhan */
  overflow: hidden;
  padding: 0;
  background: #fff;
}

.scroll-box {
  height: 100%;
  overflow-y: auto;
  padding: 10px;
}

/* Optional: custom scrollbar styling */
.scroll-box::-webkit-scrollbar {
  width: 6px;
}

.scroll-box::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.scroll-box img {
  width: 100%;
  display: block;
  border-radius: 4px;
}

#portfolio-flters {
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
}

#portfolio-flters li {
  white-space: nowrap;
}
</style>

<template>
  <section id="gallery" class="portfolio">
    <div class="container">
      <div class="section-title">
        <span>Gallery</span>
        <h2>Projects Gallery</h2>
        <p class="text-center">
          Gallery project yang beberapa waktu lalu telah rampung kami kerjakan.
        </p>
      </div>

      <ul id="portfolio-flters" class="d-flex flex-wrap justify-content-center">
        <li
          @click="RemoveFilter"
          data-filter="*"
          :class="`${first ? 'filter-active' : ''}`"
        >
          All
        </li>
        <li
          v-for="category in categories"
          :key="category.id"
          :data-filter="`.filter-${category.name}`"
          @click="
            FilterLists(category.name);
            active_tab = category.name;
          "
          v-bind:class="`${
            active_tab === category.name ? 'filter-active' : ''
          }`"
        >
          {{ category.title }}
        </li>
      </ul>

      <div class="row portfolio-container">
        <div v-if="loading">
          <div class="d-flex justify-content-center">
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>

        <ul class="browser-windows row row-cols-1 row-cols-md-3 g-4">
          <li
            class="browser-window"
            v-for="list in filterWebLists"
            :key="list.id"
          >
            <div class="window-style">
              <div class="top-bar">
                <div class="circles">
                  <div class="circle circle-red"></div>
                  <div class="circle circle-yellow"></div>
                  <div class="circle circle-green"></div>
                </div>
              </div>
              <div class="content">
                <div class="scroll-box">
                  <a :href="list.link" target="_blank">
                    <img :src="list.image" :alt="list.title" />
                  </a>
                </div>
              </div>
            </div>
            <h4>
              <a :href="list.link" target="_blank">{{ list.title }}</a>
            </h4>
            <p class="project-summary">
              {{ shortDescription(list.description) }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loading: null,
      webs: [],
      lists: [],
      categories: [],
      first: true,
      active_tab: null,
      filter: null,
    };
  },

  mounted() {
    this.SetupLightBox(),
      this.WebsiteCategorySample(),
      this.CategoriesWebsite();
  },
  methods: {
    RemoveFilter() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.filter = false;
        this.first = true;
        this.active_tab = null;
      }, 1000);
    },

    FilterLists(category) {
      this.loading = true;
      this.filter = true;
      this.first = false;
      const lists = this.lists.map((d) => d);
      const web = lists.filter((d) => d.categories == category);
      setTimeout(() => {
        this.loading = false;
        this.webs = web;
      }, 1500);
    },

    SetupLightBox() {
      window.addEventListener("load", () => {
        let portfolioContainer = select(".portfolio-container");
        if (portfolioContainer) {
          let portfolioFilters = select("#portfolio-flters li", true);

          on(
            "click",
            "#portfolio-flters li",
            function (e) {
              e.preventDefault();
              portfolioFilters.forEach(function (el) {
                el.classList.remove("filter-active");
              });
              this.classList.add("filter-active");

              portfolioIsotope.arrange({
                filter: this.getAttribute("data-filter"),
              });
            },
            true
          );
        }
      });

      const portfolioLightbox = GLightbox({
        selector: ".portfolio-lightbox",
      });
    },

    CategoriesWebsite() {
      this.categories = [
        { id: 1, name: "landing", title: "Landing Page" },
        { id: 2, name: "business", title: "Business" },
        { id: 2, name: "professional", title: "Professional" },
        { id: 3, name: "blog", title: "Blog/News" },
        { id: 4, name: "eccommerce", title: "Eccommerce" },
        { id: 5, name: "portfolio", title: "Portfolio/Branding" },
        { id: 6, name: "sales", title: "Sales Promotion" },
        { id: 7, name: "education", title: "Education" },
        { id: 8, name: "property", title: "Property" },
        { id: 9, name: "gaming", title: "Gaming Service" },
        { id: 10, name: "system", title: "system" },
        { id: 11, name: "tourism", title: "Tourism" },
        { id: 12, name: "crm", title: "Customer Relationship Management" },
        { id: 13, name: "ai-crm", title: "AI CRM Dashboard" },
        { id: 14, name: "api-docs", title: "API Docs / Internal Tools" },
        { id: 15, name: "compro", title: "Company Profile" },
        { id: 16, name: "reservation-booking", title: "Reservation / Booking" },
      ];
    },
    WebsiteCategorySample() {
      this.lists = [
        {
          id: 1,
          title: "Pesona Nirwana Waterpark",
          categories: "tourism",
          image: require("~/assets/img/website-category/pesonanirwana-waterpark-project-web.png"),
          description:
            "Website resmi Pesona Nirwana Waterpark yang menyajikan informasi lengkap seputar wahana, harga tiket, fasilitas, galeri foto, serta kontak dan lokasi wisata air di Soreang, Bandung. Dirancang untuk memudahkan pengunjung dalam merencanakan kunjungan wisata keluarga.",
          price: 3000000,
          link: "http://pesonanirwanawaterpark.com",
        },
        {
          id: 2,
          title: "Snatchlab Store",
          categories: "eccommerce",
          image: require("~/assets/img/website-category/SNATCH-—-Lab-Tested-Snatch-Approved.png"),
          description: `Snatchlab Store adalah toko online modern yang menampilkan berbagai produk dengan tampilan bersih, responsif, dan mudah digunakan. Situs ini dirancang sebagai contoh e-commerce dengan fitur seperti katalog produk, detail produk, keranjang belanja, dan halaman checkout, cocok untuk pemilik bisnis yang ingin menjual produknya secara online.`,
          price: 3000000,
          link: "https://snatchlab.store/",
        },
        // {
        //   id: 2,
        //   title: "Gudang Elektronik123",
        //   categories: "eccommerce",
        //   image: require("~/assets/img/website-category/grosir-elektronik-123.jpg"),
        //   description:
        //     "Website gudang elektronik123 adalah toko online modern yang menampilkan berbagai produk dengan tampilan bersih, responsif, dan mudah digunakan. Situs ini dirancang sebagai contoh e-commerce dengan fitur seperti katalog produk, detail produk, keranjang belanja, dan halaman checkout, cocok untuk pemilik bisnis yang ingin menjual produknya secara online.",
        //   price: 5000000,
        //   link: "https://grosirelektronik123.co.id/",
        // },
        {
          id: 3,
          title: "alfihuraiyah",
          categories: "eccommerce",
          image: require("~/assets/img/website-category/alfihurayiah-project-web.png"),
          description:
            "Website alfihuraiyah.demo-tokoweb.my.id adalah website toko online modern yang menampilkan berbagai produk dengan tampilan bersih, responsif, dan mudah digunakan. Situs ini dirancang sebagai contoh e-commerce dengan fitur seperti katalog produk, detail produk, keranjang belanja, dan halaman checkout, cocok untuk pemilik bisnis yang ingin menjual produknya secara online.",
          price: 7000000,
          link: "https://alfihuraiyah.demo-tokoweb.my.id/",
        },
        {
          id: 4,
          title: "Upfast",
          categories: "gaming",
          image: require("~/assets/img/website-category/upfast-topup-game-web-project.png"),
          description:
            "UpFast.id adalah platform top-up dan voucher game tercepat dan terpercaya di Indonesia. Menyediakan layanan isi ulang item dan voucher untuk berbagai game populer seperti Mobile Legends, Free Fire, COD Mobile, hingga Genshin Impact medibuddy.in+3upfast.id+3 upfast.id+3. Pengguna cukup memilih produk, mengisi data akun game, lalu memilih metode pembayaran (QRIS, transfer bank, e‑wallet, minimarket, dsb.) upfast.id. Setelah pembayaran, item/game voucher dikirim langsung—biasanya instan—dengan dukungan customer service 24/7",
          price: 15000000,
          link: "https://upfast.id/",
        },

        {
          id: 5,
          title: "Kotabaru Parahyangan Property",
          categories: "property",
          image: require("~/assets/img/website-category/kotabaru-parahyangan-website.png"),
          description: `otabaruParahyangan.co.id adalah situs resmi properti dan pengembang kawasan Kota Baru Parahyangan, sebuah kota mandiri di Padalarang, Bandung Barat. Situs ini menyediakan:
              💼 Informasi lengkap listing hunian: rumah, ruko, tanah, dengan detail tipe, spesifikasi, dan harga.
              🎓 Penekanan pada konsep berwawasan pendidikan, fasilitas formal & non formal (sekolah, universitas, taman edukatif).
              🏙️ Fasilitas kota modern: IKEA, hotel, rumah sakit, klub olahraga, waterpark.
              🌱 Visi pembangunan berkelanjutan: kolaborasi ekonomi, sosial, dan lingkungan “Hayu Hejo!”.
              Situs ini juga menyediakan download brosur, opsi konsultasi via WhatsApp, serta update berita dan event pengembang kota`,
          price: 5000000,
          link: "https://kotabaruparahyangan.co.id/",
        },

        {
          id: 6,
          title: "Fitri Cake & Bakery",
          categories: "professional",
          image: require("~/assets/img/website-category/fitri-cake-project-web.png"),
          description: `Fitri Cake adalah toko kue online kreatif dan modern, menampilkan:
          🎂 Katalog kue dan roti lengkap: dari birthday cakes, cupcakes, hingga cake slice, ditampilkan dengan visual menarik dan intuitif.
          🛒 Fitur e‑commerce sederhana, memungkinkan pengguna memilih produk, melihat harga, dan melakukan pemesanan secara langsung.
          🌟 Tampilan gaya gallery minimalis, menonjolkan estetika visual kue-kue kreasi yang menggugah selera.
          📱 Responsif dan mobile-friendly, memudahkan akses dari berbagai perangkat.`,
          price: 3000000,
          link: "https://fitri-cake.vercel.app/",
        },
        {
          id: 7,
          title: "Damarakain",
          categories: "eccommerce",
          image: require("~/assets/img/website-category/damarakain-project-web.png"),
          description: `Damara Kain (damarakain.official) adalah toko kain fashion premium yang berlokasi di Bandung dan Jakarta, melayani pembelian secara online dan offline. Website/platform ini menyediakan:
          🎨 Ragam produk tekstil berkualitas tinggi: berbagai jenis kain modern untuk kebutuhan konveksi, brand fashion, dan fashion designer.
          🌐 Penjualan daring & offline: supplier lengkap yang melayani pesanan via chat WhatsApp, serta kehadiran di pameran seperti Indo Intertex 2025 Hall D Booth D15 .
          📍 Fokus pada pelanggan profesional: banyak digunakan oleh desainer dan pemilik brand untuk memenuhi suplai kain premium .`,
          price: 7000000,
          link: "https://www.damarakain.com/",
        },
        {
          id: 8,
          title: "Al-Azhar Syifa Budi Parahyangan",
          categories: "education",
          image: require("~/assets/img/website-category/alazhar-sbp-project-web.png"),
          description: `Al Azhar Syifa Budi Parahyangan (SBP) adalah sekolah Islam terpadu di Padalarang, Bandung Barat, yang melayani jenjang PG-TK, SD, SMP, hingga SMA. Website ini menyediakan informasi tentang program pendidikan, fasilitas, prestasi, dan pendaftaran online (PPDB). Sekolah ini berkomitmen pada pendidikan holistik berbasis keimanan dan akhlak mulia.`,
          price: 30000000,
          link: "https://alazhar-sbp.sch.id/",
        },
        {
          id: 9,
          title: "Al-Azhar | PPDB Admin",
          categories: "system",
          image: require("~/assets/img/website-category/alazhar-ppdb-system.png"),
          description: `Al Azhar Syifa Budi Parahyangan system PPDB admin , ini adalah dashboard untuk mengelola dan mengatur flow system PPDB untuk sekolah AlAzhar Syifa Budi Parahyangan`,
          price: 30000000,
          link: "https://alazhar-sbp.sch.id/ppdb/admin/administrator",
        },
        {
          id: 10,
          title: "WinseeOptik",
          categories: "eccommerce",
          image: require("~/assets/img/website-category/screencapture-winseeoptik-2025-07-13-01_57_41.png"),
          description: `Winsee Optik (winseeoptik.com) adalah toko optik modern yang menawarkan kacamata berkualitas tinggi dengan harga grosir. Website ini memudahkan pengunjung memilih kategori (pria, wanita, anak, sunglasses, anti-radiasi), melihat detail frame & paket lensa, serta mengakses promo menarik seperti frame Rp78K atau paket gratis lensa. Winsee menjual merek ternama (Armani, Ray‑Ban, Essilor, HOYA) langsung dari pabrik sehingga bisa memberikan harga kompetitif dan transparan. Dilengkapi panduan pemesanan online, lokasi beberapa cabang, dan dukungan pelanggan via chat, situs ini cocok untuk kamu yang ingin beli kacamata stylish dan fungsional dengan mudah.`,
          price: 3000000,
          link: "https://winseeoptik.com",
        },
        {
          id: 11,
          title: "Portomanagement",
          categories: "blog",
          image: require("~/assets/img/website-category/portomanagement-project-web.png"),
          description: `Porto Management (demo-tokoweb) adalah sebuah demo website manajemen portofolio/services berbasis template Porto, ditujukan untuk menunjukkan tampilan profesional sebuah dashboard atau corporate site. Fitur utamanya meliputi:
          - Tampilan dashboard minimalis modern, menggunakan layout grid responsif.
          - Elemen browser-window previews yang menyerupai jendela aplikasi desktop, lengkap dengan tiga tombol window-styled di bagian atas.
          -Navigasi bersih dengan menu kategori layanan/portofolio.
          -Visualisasi konten berupa gambar, link detail, dan judul project yang interaktif.

          Cocok digunakan sebagai contoh website bisnis atau portal manajemen portofolio berbasis Tokoweb dengan nuansa profesional, informatif, dan mudah dinavigasi.`,
          price: 2500000,
          link: "https://portomanagement.demo-tokoweb.my.id/",
        },
        {
          id: 12,
          title: "Puji Ermanto Portfolio",
          categories: "portfolio",
          image: require("~/assets/img/website-category/pujiermanto-portfolio-web.png"),
          description: `Puji Ermanto’s Portfolio (https://pujiermanto-portfolio.vercel.app/) adalah website pribadi modern yang menampilkan karya dan profil seorang web developer full-stack. Fitur utamanya:
          🎨 Tampilan kreatif ala galeri: highlight proyek dengan visual menarik (screenshot, mockup).
          🔧 Profil & keahlian jelas: memperlihatkan teknologi yang digunakan (WordPress, Laravel, JS, Tailwind, Python, Electron).
          📁 Bagian proyek terdokumentasi: link ke GitHub menyediakan bukti kerja nyata.
          📞 Kontak dan identitas profesional: info tersedia untuk klien atau recruiter.
          Sederhana, responsif, mudah dinavigasi — cocok untuk branding personal sebagai developer yang punya gaya estetis dan teknis.`,
          price: 2000000,
          link: "https://pujiermanto-portfolio.vercel.app/",
        },
        {
          id: 13,
          title: "Mindpsparks Landing",
          categories: "landing",
          image: require("~/assets/img/website-category/mindsparks-landing-page.png"),
          description: `MindSparks adalah platform edukasi yang menyediakan layanan pelatihan profesional, pendampingan teknologi pendidikan, dan berbagai acara edukatif (seminar, lokakarya). Dirancang untuk membantu pendidik dan institusi dalam meningkatkan kemampuan mengajar, menerapkan metode pembelajaran inovatif, serta memperluas jejaring kolaborasi antara sekolah, bisnis, dan komunitas.`,
          price: 2500000,
          link: "https://mindsparks.id",
        },
        {
          id: 13,
          title: "Fujicco Foods",
          categories: "compro",
          image: require("~/assets/img/website-category/fujicco-foods-compro.png"),
          description: `Fujicco Foods Prototype on Vercel is a clean and visually appealing food product showcase, inspired by Fujicco Co., Ltd.'s range of Japanese ingredients like kombu, beans, and soybean rice . It features a modern gallery layout with enticing food visuals and functional navigation. Ideal for brands looking to present traditional food products in an engaging, user-friendly web format.
          Let me know if you'd like a version that highlights specific features like ingredients, recipes, or brand storytelling!`,
          price: 3000000,
          link: "https://fujicco-foods-prototype.vercel.app/",
        },
        {
          id: 14,
          title: "CRM & Project Management Website System",
          categories: "crm",
          image: require("~/assets/img/website-category/crm-project-management-web.png"),
          description: `Codesyariah Project Management UI adalah website CRM prototype dengan tampilan dashboard modern untuk mengelola proyek dan tugas secara efisien. Desainnya minimalis, responsif, dan mudah digunakan`,
          price: 10000000,
          link: "https://codesyariah-project-management-ui.vercel.app/",
        },
        {
          id: 15,
          title: "SBA CRM AI Marketing Analysis Dashboard",
          categories: "ai-crm",
          image: require("~/assets/img/website-category/sba-crm-ai-analysis-preview.png"),
          description: `SBA CRM AI Marketing Analysis Dashboard adalah sistem analisis marketing dan sales berbasis AI untuk membantu owner, manager, dan tim sales membaca data Excel yang biasanya masih dicek manual. Dashboard ini menampilkan revenue analysed, total tonase, best region, ranking wilayah dan tim sales, grafik performa, executive summary, risk analysis, rekomendasi follow-up, serta monitoring customer. Cocok untuk perusahaan distribusi, sales force, B2B, retail, dan bisnis yang ingin mengubah data penjualan harian menjadi insight yang mudah dipahami tanpa harus membaca spreadsheet satu per satu.`,
          price: 25000000,
          link: "https://codesyariah-webdev.vercel.app/#contact",
        },
        {
          id: 16,
          title: "SBA CRM Internal API Documentation Hub",
          categories: "api-docs",
          image: require("~/assets/img/website-category/sba-crm-api-docs.png"),
          description: `SBA CRM Internal API Documentation Hub adalah dokumentasi teknis internal untuk membantu tim developer memahami integrasi CRM dengan lebih cepat dan rapi. Fitur utamanya mencakup halaman access key yang diproteksi server-side Laravel session, overview API, auth contract, access control, flow bisnis, dokumentasi endpoint, contoh request-response, interactive API tester, response pattern, dan QA checklist. Cocok untuk project CRM, ERP, mobile apps, dashboard admin, dan sistem internal yang membutuhkan dokumentasi developer agar maintenance, onboarding tim, dan integrasi lintas aplikasi lebih aman dan terukur.`,
          price: 12000000,
          link: "https://codesyariah-webdev.vercel.app/#contact",
        },
        {
          id: 17,
          title: "Toyota Djakarta Promo Kredit",
          categories: "sales",
          image: require("~/assets/img/website-category/toyota-djakarta1.png"),
          description: `Sales promotion website untuk kebutuhan campaign otomotif, menampilkan promo bulanan, simulasi kredit, CTA konsultasi cepat, dan informasi produk yang mudah discan calon pembeli. Cocok untuk dealer, sales force, dan brand yang membutuhkan landing page promosi dengan fokus konversi leads WhatsApp.`,
          price: 4500000,
          link: "https://toyota-djakarta.com/",
        },
        // {
        //   id: 16,
        //   title: "Digital Marketing Promo Page",
        //   categories: "sales",
        //   image: require("~/assets/img/website-category/Landing Page adalah Kunci Keberhasilan Pemasaran Digital Anda.jpg"),
        //   description: `Konsep halaman promosi untuk campaign digital marketing dengan headline kuat, visual produk/jasa, penawaran utama, tombol CTA, dan narasi benefit yang membantu customer awam memahami alasan mereka perlu mulai promosi digital.`,
        //   price: 2500000,
        //   link: "https://codesyariah-webdev.vercel.app/#contact",
        // },
        // {
        //   id: 17,
        //   title: "Product Launch Campaign",
        //   categories: "sales",
        //   image: require("~/assets/img/website-category/landing-page-1.jpg"),
        //   description: `Template campaign untuk launching produk digital, event, kelas, atau layanan baru. Struktur halaman dirancang untuk memperkenalkan value proposition, highlight fitur, bukti sosial, paket harga, dan CTA agar visitor lebih cepat mengambil keputusan.`,
        //   price: 3000000,
        //   link: "https://codesyariah-webdev.vercel.app/#pricing",
        // },
        // {
        //   id: 18,
        //   title: "Lead Generation Landing Page",
        //   categories: "sales",
        //   image: require("~/assets/img/website-category/landing-page-2.jpg"),
        //   description: `Landing page penawaran yang fokus mengumpulkan prospek dari iklan, WhatsApp, atau social media. Cocok untuk promo jasa, campaign seasonal, webinar, konsultasi gratis, dan penawaran terbatas dengan copywriting yang jelas dan mobile friendly.`,
        //   price: 3500000,
        //   link: "https://dev-grandia.netlify.app/",
        // },
        {
          id: 19,
          title: "Booking Hotel Admin Dashboard",
          categories: "system",
          image: require("~/assets/img/website-category/Admin-Grandia.png"),
          description: `Admin dashboard untuk sistem booking hotel, menampilkan manajemen kamar, reservasi, pembayaran, dan laporan. Desain modern dan responsif memudahkan staf hotel mengelola operasional secara efisien.`,
          price: 3000000,
          link: "https://dev-admin-grandia.netlify.app/",
        },
        {
          id: 20,
          title: "Reservation & Booking System",
          categories: "reservation-booking",
          image: require("~/assets/img/website-category/Grandia-Hotel-Bandung-Akomodasi-Nyaman-Strategis.png"),
          description: `Sistem reservasi dan booking online untuk berbagai jenis bisnis, termasuk restoran, spa, dan layanan profesional. Fitur meliputi kalender ketersediaan, konfirmasi otomatis, integrasi pembayaran, dan dashboard admin untuk mengelola pemesanan dengan mudah.`,
          price: 4000000,
          link: "https://dev-grandia.netlify.app/",
        },
        {
          id: 21,
          title: "SaaS Payroll & HR Management System",
          categories: "system",
          image: require("~/assets/img/website-category/PayrollSystem.png"),
          description: `SaaS Payroll & HR Management System adalah platform berbasis web untuk mengelola penggajian, absensi, dan data karyawan secara efisien. Fitur utama meliputi perhitungan gaji otomatis, manajemen cuti, laporan keuangan, dan integrasi dengan sistem akuntansi. Desain responsif dan user-friendly memudahkan HR dan manajer dalam mengelola sumber daya manusia perusahaan.`,
          price: 5000000,
          link: "https://citrarasakulinerindonesia.com",
        },
        {
          id: 22,
          title: "Assessment Student Web Apps",
          categories: "education",
          image: require("~/assets/img/website-category/Student-Assessment.png"),
          description: `Student Assessment Web Apps adalah platform berbasis web untuk mengelola penilaian dan evaluasi siswa secara digital. Fitur utama meliputi pembuatan kuis, ujian online, pelacakan hasil belajar, dan laporan kinerja siswa. Desain responsif dan intuitif memudahkan guru dan siswa dalam proses pembelajaran dan penilaian.`,
          price: 6000000,
          link: "https://admin-student-assessment.netlify.app/dashboard/student",
        },
        {
          id: 23,
          title: "HD Living Desain Interior",
          categories: "professional",
          image: require("~/assets/img/website-category/HD-Living-–-Home-Decor.png"),
          description: `HD Living Desain Interior adalah platform berbasis web untuk mengelola desain interior rumah dan kantor secara digital. Fitur utama meliputi pembuatan desain 3D, galeri inspirasi, konsultasi online, dan laporan proyek. Desain responsif dan intuitif memudahkan pengguna dalam merancang ruangan mereka.`,
          price: 1000000,
          link: "https://hd-living-showcase.vercel.app/",
        },
        {
          id: 24,
          title: "Sinar Berkat Abadi - SBA Compro",
          categories: "compro",
          image: require("~/assets/img/website-category/SBA-Sinar-Berkat-Abadi-–-Company-Profile-–-Company-profile-SBA-Sinar-Berkat-Abadi-anak-perusahaan-Pertamina--07-01-2026_02_44_AM.png"),
          description: `Sinar Berkat Abadi - SBA Compro adalah website resmi yang menampilkan informasi lengkap tentang perusahaan. Situs ini menyediakan profil perusahaan, visi dan misi, serta layanan yang ditawarkan. Desain modern dan responsif memudahkan pengunjung dalam memahami identitas dan nilai-nilai perusahaan.`,
          price: 10000000,
          link: "https://dev-sinarberkatabadi.wangun.co",
        },
        {
          id: 25,
          title: "SaaS WA Business Generator",
          categories: "business",
          image: require("~/assets/img/website-category/WALink.png"),
          description: `SaaS WA Business Generator adalah platform berbasis web yang memungkinkan bisnis untuk membuat tautan WhatsApp khusus untuk komunikasi dengan pelanggan. Fitur utama meliputi pembuatan link WA, integrasi dengan situs web, dan analitik penggunaan. Desain responsif dan user-friendly memudahkan bisnis dalam meningkatkan interaksi dengan pelanggan melalui WhatsApp.`,
          price: 10000000,
          link: "https://codesyariah-webdev.vercel.app/#pricing",
        },
        {
          id: 26,
          title: "Tracer Study UMAHA Admin Panel",
          categories: "study",
          image: require("~/assets/img/website-category/Admin-Panel-Tracer-Study-UMAHA.png"),
          description: `Tracer Study UMAHA Admin Panel adalah platform administrasi untuk mengelola data tracer study mahasiswa. Fitur utama meliputi input data, analisis statistik, dan laporan hasil tracer study. Desain responsif dan user-friendly memudahkan administrator dalam mengelola informasi tracer study.`,
          price: 10000000,
          link: "https://tracer-stury-umaha.tokoweb.live/",
        },
        {
          id: 27,
          title: "Hasiwa Japanese Academy – Bridge Beyond Border",
          categories: "education",
          image: require("~/assets/img/website-category/Hashiwa-Japanese-Academy-–-Bridge-Beyond-Border-07-01-2026_03_02_AM.png"),
          description: `Hasiwa Japanese Academy adalah platform edukasi berbasis web yang menyediakan kursus bahasa Jepang dan program pertukaran budaya. Situs ini menampilkan informasi tentang program pembelajaran, jadwal kelas, dan pendaftaran online. Desain modern dan responsif memudahkan siswa dalam mengakses materi pembelajaran dan berinteraksi dengan pengajar.`,
          price: 10000000,
          link: "https://hashiwa.id",
        },
      ];
    },
    shortDescription(description) {
      const text = String(description || "")
        .replace(/<[^>]+>/g, " ")
        .replace(/[🎂🛒🌟📱🎨🌐📍💼🎓🏙️🌱📁📞🔧-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      return text.length > 118 ? `${text.slice(0, 118)}...` : text;
    },
  },

  computed: {
    filterWebLists() {
      if (!this.filter) return this.lists;

      return this.webs;
    },
  },
};
</script>
