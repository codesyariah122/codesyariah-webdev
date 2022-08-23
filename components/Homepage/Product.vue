
<style lang="css">
	/*.portfolio-container{
		position: relative;
	}*/
	

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
	<section id="portfolio" class="portfolio">
		<div class="container">

			<div class="section-title">
				<span>Our Product</span>
				<h2>Our Product</h2>
				<p class="text-center">Product-product karya kami yang bisa anda pilih dan disesuaikan dengan kebutuhan dan ide bisnis anda</p>
			</div>
			
			<ul id="portfolio-flters" :class="`${$device.isDesktop ? 'd-inline-flex justify-content-center' : 'd-flex align-content-start flex-wrap'}`">
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
						<a :href="list.image" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" :title="list.title">
							<i class="bx bx-plus"></i>
						</a>
						<a href="portfolio-details.html" class="details-link" title="More Details">
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
				{id:3, name: 'blog', title: 'Blog/News'},
				{id:4, name: 'ecommerce', title: 'Ecommerce'},
				{id:5, name: 'portfolio', title: 'Portfolio/Branding'}
				];
			},
			WebsiteCategorySample(){
				this.lists = [
				{
					id: 1,
					title: 'Hiro Landing Page',
					categories: 'landing',
					image: require('~/assets/img/website-category/landing-page-1.jpg'),
					description: 'Hiro landing page dibuat dengan fundamental responsive website, bootstrap, scss dan package content pendukung yang kami sediakan untuk anda.',
					price: 2500000
				},
				{
					id: 2,
					title: 'Marshmallow Landing Page',
					categories: 'landing',
					image: require('~/assets/img/website-category/landing-page-2.jpg'),
					description: 'Design yang simple dan elegan menjadi keunggulan karya kami yang satu ini, dengan tambahan package content yang siap kami bangun untuk anda.',
					price: 2500000
				},
				{
					id: 3,
					title: 'ISO Business Website',
					categories: 'business',
					image: require('~/assets/img/website-category/business-page-1.png'),
					description: 'Dengan design clean dan fokus pada target project anda, menjadi booster dalam media pemasaran dan kuat mempresentasikan produk bisnis anda.',
					price: 2500000
				},
				{
					id: 4,
					title: 'Glorified Business Website',
					categories: 'business',
					image: require('~/assets/img/website-category/business-page-2.png'),
					description: 'Design website yang menyajikan kualitas UI/UX yang sedap dipandang, mempresentasikan target bisnis anda agar semakin terfokus, dan tools-tools bisnis yang siap kami bangun untuk memanage bisnis anda.',
					price: 2000000
				},
				{
					id: 5,
					title: 'Floral WebBlog',
					categories: 'blog',
					image: require('~/assets/img/website-category/blog-1.webp'),
					description: '',
					price: 1500000
				},
				{
					id: 5,
					title: 'Web Stories',
					categories: 'blog',
					image: require('~/assets/img/website-category/blog-2.webp'),
					description: '',
					price: 1500000
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