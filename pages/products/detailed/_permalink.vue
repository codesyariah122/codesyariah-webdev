<template>
  <div id="product" class="container mt-5 mb-5">
    <div class="card mb-5">
      <div
        class="row justify-content-center text-center"
        style="margin-left: 1rem; margin-top: 1rem"
      >
        <div class="col-lg-12 col-sm-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" aria-current="page">
                {{ product?.name }}
              </li>
              <li class="breadcrumb-item">
                <a href="/#pricing"> Back to pricelist </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row g-0">
        <div class="col-md-6 border-end">
          <div class="d-flex flex-column justify-content-center">
            <div class="browser-window">
              <div class="browser-header">
                <span class="circle red"></span>
                <span class="circle yellow"></span>
                <span class="circle green"></span>
              </div>
              <div class="main_image">
                <img
                  v-if="product.image"
                  :src="product.image.url"
                  id="main_product_image"
                  width="100%"
                />
              </div>
            </div>
            <div class="thumbnail_images mt-3 horizontal-scroll">
              <div
                class="browser-window"
                v-for="asset in product.assets"
                :key="asset.id"
              >
                <div class="browser-header">
                  <span class="circle red"></span>
                  <span class="circle yellow"></span>
                  <span class="circle green"></span>
                </div>
                <div class="thumb-box" @click="changeImage(asset.url)">
                  <img :src="asset.url" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="p-3 right-side">
            <div class="d-flex justify-content-between align-items-center">
              <h3>{{ product.name }}</h3>
              <span class="heart">
                <i class="bx bx-heart"></i>
              </span>
            </div>
            <div class="mt-2 pr-3 content">
              <p v-html="product.description"></p>
            </div>
            <!-- <div class="buttons d-flex flex-row mt-5 gap-3">
              <button @click="openOrder" class="btn btn-outline-dark">
                <i class="bx bx-chat"></i> Live Order Now
              </button>
            </div> -->
            <div class="buttons d-flex flex-row mt-3 gap-3">
              <button @click="toggleChatbox" class="btn btn-outline-success">
                Order Via Whatsapp <i class="bx bxl-whatsapp"></i>
              </button>
            </div>
            <!-- Chatbox -->
            <div v-if="showChatbox" class="chatbox">
              <div class="chatbox-header">
                <span>Hubungi Admin</span>
                <button @click="toggleChatbox">&times;</button>
              </div>
              <ul class="chatbox-body">
                <li v-for="admin in admins" :key="admin.phone">
                  <a
                    :href="`https://wa.me/${
                      admin.phone
                    }?text=${encodeURIComponent(admin.message)}`"
                    target="_blank"
                  >
                    <div class="chatbox-left">
                      <img :src="admin.avatar" alt="avatar" class="avatar" />
                      <div class="info">
                        <strong>{{ admin.name }}</strong>
                        <p>{{ admin.position }}</p>
                      </div>
                    </div>
                    <div class="chatbox-icon">
                      <i class="bx bxl-whatsapp"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  data() {
    return {
      products: [
        {
          id: 1,
          permalink: "product-1",
          price: { formatted_with_code: "IDR 200,000" },
          name: "Produk Ekonomis",
          description:
            "Produk Ekonomis dirancang khusus untuk Anda yang ingin mendapatkan kualitas terbaik dengan budget yang terjangkau. Dengan bahan berkualitas dan desain yang fungsional, produk ini cocok untuk penggunaan sehari-hari. Anda tidak perlu mengorbankan kebutuhan tanpa harus mengeluarkan biaya berlebih. Ideal untuk individu atau keluarga yang mencari solusi praktis tanpa menguras kantong.",
          image: {
            url: require("~/assets/img/website-category/pesonanirwana-waterpark-project-web.png"),
          },
          assets: [
            {
              id: 1,
              url: require("~/assets/img/website-category/pesonanirwana-waterpark-project-web.png"),
            },
            {
              id: 2,
              url: require("~/assets/img/website-category/fitri-cake-project-web.png"),
            },
            {
              id: 3,
              url: require("~/assets/img/website-category/screencapture-winseeoptik-2025-07-13-01_57_41.png"),
            },
          ],
        },
        {
          id: 2,
          permalink: "product-2",
          price: { formatted_with_code: "IDR 500,000" },
          name: "Produk Profesional",
          description:
            "Produk Bisnis hadir untuk mendukung kebutuhan profesional Anda. Dirancang dengan fitur unggulan dan material premium, produk ini membantu meningkatkan efisiensi dan produktivitas di lingkungan kerja. Cocok untuk perusahaan kecil hingga besar yang ingin memberikan nilai tambah kepada klien dan karyawan. Dengan desain elegan dan performa handal, Produk Bisnis adalah investasi yang tepat untuk kesuksesan usaha Anda.",
          image: {
            url: require("~/assets/img/website-category/grosir-elektronik-123.jpg"),
          },
          assets: [
            {
              id: 1,
              url: require("~/assets/img/website-category/grosir-elektronik-123.jpg"),
            },
            {
              id: 2,
              url: require("~/assets/img/website-category/alfihurayiah-project-web.png"),
            },
            {
              id: 3,
              url: require("~/assets/img/website-category/upfast-topup-game-web-project.png"),
            },
          ],
        },
        {
          id: 3,
          permalink: "product-3",
          price: { formatted_with_code: "IDR 1,000,000" },
          name: "Produk Bisnis",
          description:
            "Produk Profesional adalah pilihan sempurna untuk Anda yang menginginkan kualitas tanpa kompromi. Didesain untuk memenuhi standar tertinggi dalam industri, produk ini menawarkan kinerja luar biasa dan fitur inovatif. Sangat ideal untuk para profesional yang membutuhkan alat yang dapat diandalkan dalam setiap proyek. Dengan Produk Profesional, Anda akan siap menghadapi tantangan dengan percaya diri, menghasilkan karya terbaik setiap saat.",
          image: {
            url: require("~/assets/img/website-category/pesona-nirwana-waterpark4.png"),
          },
          assets: [
            {
              id: 1,
              url: require("~/assets/img/website-category/alazhar-sbp-project-web.png"),
            },
            {
              id: 2,
              url: require("~/assets/img/website-category/crm-project-management-web.png"),
            },
            {
              id: 3,
              url: require("~/assets/img/website-category/alazhar-ppdb-system.png"),
            },
          ],
        },
      ],
      product: {},
      change: { status: null, asset: "" },
      permalink: this.$route.params.permalink,
      showChatbox: true,
      admins: [
        {
          name: "Deddy Ndi",
          position: "Marketing & Sales",
          phone: "6289621142235",
          avatar: require("~/assets/img/kontak/deddy.jpg"),
          message: "Halo Admin, saya ingin order produk ini.",
        },
        {
          name: "Puji Ermanto",
          position: "Support & Helpdesk",
          phone: "6285971630027",
          avatar: require("~/assets/img/kontak/puji.jpg"),
          message: "Halo Admin, saya tertarik dengan produk ini.",
        },
      ],
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      this.product = this.products.find((p) => p.permalink === this.permalink);
      if (!this.product) console.error("Product not found");
    },
    changeImage(asset) {
      this.change.status = true;
      this.change.asset = asset;
    },
    openOrder() {},
    toggleChatbox() {
      this.showChatbox = !this.showChatbox;
    },
  },
};
</script>

<style>
/* Browser-style Container */
.browser-window {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  margin-bottom: 1rem;
}

.browser-header {
  background: #f5f5f5;
  padding: 8px 12px;
  display: flex;
  gap: 6px;
}

.browser-header .circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.circle.red {
  background-color: #ff5f56;
}

.circle.yellow {
  background-color: #ffbd2e;
}

.circle.green {
  background-color: #27c93f;
}
.main_image {
  max-height: 400px;
  overflow-y: auto;
}
.main_image {
  max-height: 400px;
  overflow-y: auto;
}

.main_image img {
  width: 100%;
  height: auto;
  display: block;
}
.horizontal-scroll {
  display: flex;
  flex-direction: row;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 6px;
  scroll-behavior: smooth;
}

.horizontal-scroll .browser-window {
  flex: 0 0 140px; /* Atur lebar setiap thumbnail */
  height: 120px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
}

.horizontal-scroll .browser-header {
  background: #f5f5f5;
  padding: 6px 10px;
  display: flex;
  gap: 6px;
}

.horizontal-scroll .circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.horizontal-scroll .red {
  background-color: #ff5f56;
}
.horizontal-scroll .yellow {
  background-color: #ffbd2e;
}
.horizontal-scroll .green {
  background-color: #27c93f;
}

.horizontal-scroll .thumb-box {
  height: calc(100% - 24px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
}

.horizontal-scroll .thumb-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 4px;
}

/* Gaya thumbnail mini browser window */
.thumb-box {
  cursor: pointer;
  max-height: 150px;
  overflow: hidden;
}

.thumb-box img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* Thumbnail Produk */
#thumbnail {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  gap: 10px;
  max-height: 280px;
  overflow-y: auto;
  padding: 10px;
}

#thumbnail img {
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
}

/* Chatbox Container */
.chatbox {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
  background-color: #fff;
  max-width: 300px;
}

/* Chatbox Header */
.chatbox-header {
  background-color: #25d366;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

/* Chatbox Body */
.chatbox-body {
  list-style: none;
  margin: 0;
  padding: 10px;
}

.chatbox-body li {
  margin-bottom: 10px;
}

.chatbox-body a {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 10px 12px;
  border-radius: 6px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  gap: 10px;
}

.chatbox-body a:hover {
  background-color: #e2ffe5;
  color: #25d366;
}

.chatbox-left {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex: 1;
}

.chatbox-left .avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.chatbox-left .info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.chatbox-left .info strong {
  font-size: 0.95rem;
  margin-bottom: 2px;
}

.chatbox-left .info p {
  margin: 0;
  font-size: 0.8rem;
  color: #888;
}

.chatbox-icon {
  display: flex;
  align-items: center;
  color: #25d366;
  font-size: 1.2rem;
}
</style>
