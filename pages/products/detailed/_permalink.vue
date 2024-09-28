<template>
	<div id="product" class="container mt-5 mb-5">
		<div class="card mb-5">
			<div style="margin-left: 1rem; margin-top: 1rem;" class="row justify-content-center text-center">
				<div class="col-lg-12 col-sm-12">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item" aria-current="page">
								{{ product?.name }}
							</li>
							<li class="breadcrumb-item"><a href="/#pricing">
								Back to pricelist
							</a></li>
						</ol>
					</nav>
				</div>
			</div>
			<div class="row g-0">
				<div class="col-md-6 border-end">
					<div class="d-flex flex-column justify-content-center">
						<div class="main_image">
							<img 
							v-if="product.image" 
							:src="product.image.url" 
							id="main_product_image" 
							width="350"
							>
						</div>
						<div class="thumbnail_images">
							<ul id="thumbnail">
								<li v-for="asset in product.assets" :key="asset.id">
									<img @click="changeImage(asset.url)" :src="asset.url" width="70">
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="p-3 right-side">
						<div class="d-flex justify-content-between align-items-center">
							<h3>{{ product.name }}</h3>
							<span class="heart">
								<i class='bx bx-heart'></i>
							</span>
						</div>
						<div class="mt-2 pr-3 content">
							<p v-html="product.description"></p>
						</div>
						<!-- <h3>{{ product.price.formatted_with_code }}</h3> -->
						
						<div class="buttons d-flex flex-row mt-5 gap-3">
							<button @click="openOrder" class="btn btn-outline-dark"><i class='bx bx-chat'></i> Live Order Now</button>
						</div>

						<div class="buttons d-flex flex-row mt-3 gap-3">
							<button @click="whatsOrder" class="btn btn-outline-success">Order Via Whatsapp <i class='bx bxl-whatsapp'></i></button>
						</div>
						<!-- <div class="search-option">
							<i class='bx bx-search-alt-2 first-search'></i>
							<div class="inputs">
								<input type="text" name="">
							</div>
							<i class='bx bx-share-alt share'></i>
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'products',
		data() {
			return {
				products: [
				{
					id: 1,
					permalink: 'product-1',
					price: { formatted_with_code: 'IDR 200,000' },
					name: 'Produk Ekonomis',
					description: 'Produk Ekonomis dirancang khusus untuk Anda yang ingin mendapatkan kualitas terbaik dengan budget yang terjangkau. Dengan bahan berkualitas dan desain yang fungsional, produk ini cocok untuk penggunaan sehari-hari. Anda tidak perlu mengorbankan kebutuhan tanpa harus mengeluarkan biaya berlebih. Ideal untuk individu atau keluarga yang mencari solusi praktis tanpa menguras kantong.',
					image: { url: require('~/assets/img/website-category/landing-page-1.jpg') },
					assets: [
						{ id: 1, url: require('~/assets/img/website-category/landing-page-1.jpg') },
						{ id: 2, url: require('~/assets/img/website-category/landing-page-2.jpg') },
						{ id: 3, url: require('~/assets/img/website-category/draet-diet-consult1.png') },
						],
				},
				{
					id: 2,
					permalink: 'product-2',
					price: { formatted_with_code: 'IDR 500,000' },
					name: 'Produk Profesional',
					description: 'Produk Bisnis hadir untuk mendukung kebutuhan profesional Anda. Dirancang dengan fitur unggulan dan material premium, produk ini membantu meningkatkan efisiensi dan produktivitas di lingkungan kerja. Cocok untuk perusahaan kecil hingga besar yang ingin memberikan nilai tambah kepada klien dan karyawan. Dengan desain elegan dan performa handal, Produk Bisnis adalah investasi yang tepat untuk kesuksesan usaha Anda.',
					image: { url: require('~/assets/img/website-category/business-page-2.png') },
					assets: [
						{ id: 1, url: require('~/assets/img/website-category/business-page-2.png') },
						{ id: 2, url: require('~/assets/img/website-category/pesona-nirwana-waterpark1.png') },
						{ id: 3, url: require('~/assets/img/website-category/saved5.png') },
						],
				},
				{
					id: 3,
					permalink: 'product-3',
					price: { formatted_with_code: 'IDR 1,000,000' },
					name: 'Produk Bisnis',
					description: 'Produk Profesional adalah pilihan sempurna untuk Anda yang menginginkan kualitas tanpa kompromi. Didesain untuk memenuhi standar tertinggi dalam industri, produk ini menawarkan kinerja luar biasa dan fitur inovatif. Sangat ideal untuk para profesional yang membutuhkan alat yang dapat diandalkan dalam setiap proyek. Dengan Produk Profesional, Anda akan siap menghadapi tantangan dengan percaya diri, menghasilkan karya terbaik setiap saat.',
					image: { url: require('~/assets/img/website-category/al-azhar2.png') },
					assets: [
						{ id: 1, url: require('~/assets/img/website-category/al-azhar2.png') },
						{ id: 2, url: require('~/assets/img/website-category/dntourtravel.png') },
						{ id: 3, url: require('~/assets/img/website-category/business-website.jpg') },
						],
				},
				],
				product: {},
				change: {
					status: null,
					asset: '',
				},
				permalink: this.$route.params.permalink
			}
		},
		mounted() {
			this.fetchProduct();
		},
		methods: {
			fetchProduct() {
				this.product = this.products.find(p => p.permalink === this.permalink);
				if (!this.product) {
					// Handle case where product is not found
					console.error('Product not found');
				}
			},
			changeImage(asset) {
				this.change.status = true;
				this.change.asset = asset;
			},
			openOrder() {
				// Logic untuk membuka chat live
			},
			whatsOrder() {
				const message = `Saya ingin order jasa pembuatan website ${this.product.name}`;
				window.open(`https://wa.me/6285971630027?text=${encodeURIComponent(message)}`, '_blank');
			}
		}
	}
</script>

<style>
/* CSS untuk thumbnail images */
#thumbnail {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
	gap: 10px; /* Jarak antar gambar */
	max-height: 280px; /* Maksimum tinggi thumbnail container */
	overflow-y: auto; /* Tambahkan scrollbar jika diperlukan */
}

#thumbnail img {
	width: 100%;
	object-fit: cover; /* Menjaga rasio gambar */
}
</style>