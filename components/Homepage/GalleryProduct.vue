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

	.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet {
		width: 12px;
		height: 12px;
		background-color: #fff;
		opacity: 1;
		border: 1px solid #ffb727;
	}

	.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet-active {
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

	.portfolio-details .portfolio-info ul li+li {
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

</style>

<template>
	<section id="gallery" class="portfolio">
		<div class="container">

			<div class="section-title">
				<span>Gallery</span>
				<h2>Projects Gallery</h2>
				<p class="text-center">Gallery project yang beberapa waktu lalu telah rampung  kami kerjakan.</p>
			</div>
			
			<ul id="portfolio-flters" :class="`${$device.isDesktop ? 'd-inline-flex justify-content-center' : 'd-flex align-content-stretch flex-wrap'}`">
				<li @click="RemoveFilter" data-filter="*" :class="`${first ? 'filter-active' : ''}`">All</li>
				<li v-for="category in categories" :data-filter="`.filter-${category.name}`" @click="FilterLists(category.name); active_tab=category.name;" v-bind:class="`${active_tab === category.name ? 'filter-active' : ''}`">{{category.title}}</li>
			</ul>

			<div class="row portfolio-container">
				<div v-if="loading">
					<div class="d-flex justify-content-center">
						<div class="spinner-border text-warning" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					</div>
				</div>
				<div v-else v-for="list in filterWebLists" :class="`col-lg-4 col-md-6 portfolio-item filter-${list.categories}`">
					
					<div class="portfolio-img">
						<img :src="list.image" class="img-fluid" alt="">
					</div>
					<div class="portfolio-info">
						<h4>{{list.title}}</h4>
						<p>{{list.categories}}</p>
						<a :href="list.image" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" :data-title="list.title"
						:data-description="list.description">
						<i class="bx bx-plus"></i>
					</a>
					<a :href="list.link" class="details-link" title="More Details" target="_blank">
						<i class="bx bx-link"></i>
					</a>
				</div>
			</div>

		</div>
	</div>
</section>
</template>

<script>
	export default {
		data(){
			return {
				loading: null,
				webs: [],
				lists: [],
				categories: [],
				first: true,
				active_tab: null,
				filter: null
			}
		},

		mounted(){
			this.SetupLightBox(),
			this.WebsiteCategorySample(),
			this.CategoriesWebsite()
		},
		methods: {
			RemoveFilter(){
				this.loading = true
				setTimeout(() => {
					this.loading = false
					this.filter = false
					this.first = true
					this.active_tab = null
				}, 1000)
			},

			FilterLists(category){
				this.loading = true
				this.filter = true
				this.first = false
				const lists = this.lists.map(d => d)
				const web = lists.filter(d => d.categories == category)
				setTimeout(() => {
					this.loading = false
					this.webs = web
				}, 1500)
			},

			SetupLightBox(){
				window.addEventListener('load', () => {
					let portfolioContainer = select('.portfolio-container');
					if (portfolioContainer) {

						let portfolioFilters = select('#portfolio-flters li', true);

						on('click', '#portfolio-flters li', function(e) {
							e.preventDefault();
							portfolioFilters.forEach(function(el) {
								el.classList.remove('filter-active');
							});
							this.classList.add('filter-active');

							portfolioIsotope.arrange({
								filter: this.getAttribute('data-filter')
							});

						}, true);
					}

				});

				const portfolioLightbox = GLightbox({
					selector: '.portfolio-lightbox'
				});
			},

			CategoriesWebsite(){
				this.categories = [
					{id:1, name: 'landing', title: 'Landing Page'},
					{id:2, name: 'business', title: 'Business'},
					{id:2, name: 'professional', title: 'Professional'},
					{id:3, name: 'blog', title: 'Blog/News'},
					{id:4, name: 'eccommerce', title: 'Eccommerce'},
					{id:5, name: 'portfolio', title: 'Portfolio/Branding'},
					{id:6, name: 'sales', title: 'Sales Promotion'}
					];
			},
			WebsiteCategorySample(){
				this.lists = [
				{
					id: 1,
					title: 'Hiro Landing Page',
					categories: 'landing',
					image: require('~/assets/img/website-category/landing-page-1.jpg'),
					description: 'Landing page website ini berfokus langsung pada target alur bisnis dengan penyajian design penuh artistik dan minimalist, dengan fitur-fitur lengkap ditambah media content yang dapat menyesuaikan dengan format yang anda mau dan untuk kebutuhan bisnis logic yang bisa di sesuikan request yang telah di proses saat konsultasi bersama team kami.',
					price: 1500000,
					link: ''
				},
				{
					id: 2,
					title: 'Nia Bakery - Official',
					categories: 'landing',
					image: require('~/assets/img/website-category/nia-bakery2.png'),
					description: 'Nia Bakery merupakan sebuah gerai toko kue yang mempunyai produk unik nan langka yang saat ini sudah jarang di temui yaitu bolu jadul, dengan design website simple yang terfokus pada produk unggulan kami sajikan dalam satu rasa yang membuat orang penasaran untuk membeli produk dari gerai Nia Bakery secara langsung order di website.',
					price: 1500000,
					link: 'https://nia-bakery.vercel.app/'
				},
				{
					id: 3,
					title: 'Pesona Nirwana Waterpark',
					categories: 'business',
					image: require('~/assets/img/website-category/pesona-nirwana-waterpark3.png'),
					description: 'Pesona Nirwana Waterpark merupakan website untuk client kami yang menjalankan bisnis di bidang pariwisata waterpark di kabupaten Bandung',
					price: 3000000,
					link: 'https://pesonanirwanawaterpark.com/'
				},
				{
					id: 4,
					title: 'Rumah Brankas',
					categories: 'eccommerce',
					image: require('~/assets/img/website-category/rumahbrankas3.png'),
					description: 'Website yang di design sebagai eccommerce langsung dari client kami yang menjalankan lini bisnis di bidang alat-alat safe lock, dengan design CTA yang berfokus pada ketertarikan customer untuk membeli product secara online di website yang kami buat',
					price: 30000000,
					link: 'https://rumahbrankas.com/'
				},
				{
					id: 5,
					title: 'Evadne Beauty',
					categories: 'eccommerce',
					image: require('~/assets/img/website-category/evadne3.png'),
					description: 'Sebuah perusahaan kosmetik yang sedang berkembang di jakarta menghubungi kami untuk dibuatkan website eccomerce dengan skalan to point system dimana proses penghubung akan di lakukan dengan cepat sesaat customer tertarik dengan produk, berdasarkan detail dan harga dari produk tersebut.',
					price: 15000000,
					link: 'https://evadnebeauty.com/'
				},
				{
					id: 6,
					title: 'Toyota Djakarta',
					categories: 'sales',
					image: require('~/assets/img/website-category/toyota-djakarta1.png'),
					description: 'Sales promosi akan sangat mudah menjual unit sebagai target perusahaan, proses pemasaran produk semakin mudah dan meyakinkan calon pembeli, dengan media website sales semakin gencar menjual unitnya dan dapat meraih target omset yang memuaskan.',
					price: 2500000,
					link: 'https://toyota-djakarta.com/'
				},
				{
					id: 7,
					title: 'Toko Kelontong',
					categories: 'business',
					image: require('~/assets/img/website-category/tokokelonton1.png'),
					description: 'Toko Kelontong merupakan website company profile yang juga di fungsikan sebagai eccommerce bagi produk retail mereka , target market yang terencana dan akurat menjadi tujuan pembuatan website ini.',
					price: 1500000,
					link: 'https://toko-kelontong.vercel.app/'
				},
				{
					id: 8,
					title: 'Trans Holiday Bandung',
					categories: 'business',
					image: require('~/assets/img/website-category/transholiday.png'),
					description: 'Dekade ini sedang semarak sekali kegiatan pariwisata dan kegiatan pariwisata tentunya harus di tunjang juga oleh pengelola travel travel yang terbaik dan salah satu client kami ada di lini bisnis travel satu ini bernama trans holiday bandung',
					price: 7000000,
					link: ''
				},
				{
					id: 9,
					title: 'D & N Tour Travel And Rental',
					categories: 'professional',
					image: require('~/assets/img/website-category/dntourtravel.png'),
					description: 'Lagi lagi client kami yang juga bergerak di bidang jasa angkutan dan sewa mobil memang kegiatan bisnis di bidang perjalanan dan akomodasi kendaraan memang sangat memerlukan media promosi handal dan professional dengan mengembangkan target market yang lebih luas lagi',
					price: 3000000,
					link: ''
				}
				]
}
},

computed: {
	filterWebLists(){
		if(!this.filter) return this.lists 

			return this.webs
	}
}
}
</script>
