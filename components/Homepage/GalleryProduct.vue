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
  color: #f3a200;
  border-color: #ffb727;
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
  color: #f3a200;
  border-color: #ffb727;
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
  color: #ffc041;
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
  border: 1px solid #ffb727;
}

.portfolio-details
  .portfolio-details-slider
  .swiper-pagination
  .swiper-pagination-bullet-active {
  background-color: #ffb727;
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
  font-size: 16px;
  font-weight: 600;
}

.browser-window h4 a {
  color: #333;
  text-decoration: none;
}

.browser-window h4 a:hover {
  color: #f3a200;
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
            <div class="spinner-border text-warning" role="status">
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
        { id: 12, name: "crm", title: "Management" },
        { id: 12, name: "compro", title: "Company Profile" },
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
          title: "Gudang Elektronik123",
          categories: "eccommerce",
          image: require("~/assets/img/website-category/grosir-elektronik-123.jpg"),
          description:
            "Website gudang elektronik123 adalah toko online modern yang menampilkan berbagai produk dengan tampilan bersih, responsif, dan mudah digunakan. Situs ini dirancang sebagai contoh e-commerce dengan fitur seperti katalog produk, detail produk, keranjang belanja, dan halaman checkout, cocok untuk pemilik bisnis yang ingin menjual produknya secara online.",
          price: 5000000,
          link: "https://grosirelektronik123.co.id/",
        },
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
          link: "hhttps://upfast.id/",
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
      ];
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
