<template>
	<section id="pricing" class="pricing">
		<div class="container" data-aos="fade-up">
			<div class="section-title">
				<span>Pricing</span>
				<h2>Check Our Pricing</h2>
				<p class="text-center">Product digital kami selalu menghadirkan solusi terbaik bagi alur dan strategy perjalanan bisnis anda.</p>
			</div>

			<div class="row justify-content-center gy-4" data-aos="fade-left">
				<div v-if="products?.length > 0" v-for="product in products" :key="product.id" class="col-lg-3 col-md-3" data-aos="zoom-in" data-aos-delay="100">
					<div class="box">
						<span class="featured">Featured</span>
						<h3 style="color: #07d5c0;">{{ product.categories[0]?.name }}</h3>
						<!-- <div class="price">
							<sup>{{ product.price.formatted_with_code }}</sup>
						</div> -->
						<div v-for="category in product.categories" :key="category.id">
							<div v-for="icon in pricingicons" :key="icon.id">
								<img v-if="icon.name === category.slug" :src="icon.icon" class="img-fluid" alt="">
							</div>
						</div>
						<div class="d-grid gap-2">
							<a :href="`/products/detailed/${product.permalink}`" class="btn btn-primary rounded-pill btn-sm">
								<i class='bx bx-basket'></i> See Detailed
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['categories', 'carts'],

		data() {
			return {
				products: [
				{
					id: 1,
					permalink: 'product-1',
					price: { formatted_with_code: 'IDR 200,000' },
					categories: [
						{ id: 1, name: 'Ekonomis', slug: 'ekonomis' },
						],
				},
				{
					id: 2,
					permalink: 'product-2',
					price: { formatted_with_code: 'IDR 500,000' },
					categories: [
						{ id: 1, name: 'Professional', slug: 'professional' },
						],
				},
				{
					id: 3,
					permalink: 'product-3',
					price: { formatted_with_code: 'IDR 1,000,000' },
					categories: [
						{ id: 2, name: 'Business', slug: 'business' },
						],
				},
				],
				pricingicons: [
				{
					id: 1,
					name: 'ekonomis',
					icon: require('~/assets/img/pricing/landing.png'),
				},
				{
					id: 2,
					name: 'business',
					icon: require('~/assets/img/pricing/ecommerce.png'),
				},
				{
					id: 3,
					name: 'professional',
					icon: require('~/assets/img/pricing/branding.png'),
				},
				],
			};
		},
	};
</script>

<style lang="css">
	@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300;400;700&family=Lobster&family=Montserrat:wght@300;400&family=Roboto+Mono:wght@300;400&family=Ubuntu&display=swap');

	.truncate2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
	}

	.pricing .box {
		padding: 40px 20px;
		background: #fff;
		text-align: center;
		box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
		border-radius: 4px;
		position: relative;
		overflow: hidden;
		transition: 0.3s;
	}

	.pricing .box:hover {
		transform: scale(1.1);
		box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);
	}

	.pricing h3 {
		font-weight: 700;
		font-size: 18px;
		margin-bottom: 15px;
		font-family: 'Ubuntu';
	}

	.pricing .price {
		font-size: 36px;
		color: #444444;
		font-weight: 600;
		font-family: 'Poppins', sans-serif;
	}

	.pricing .price sup {
		font-size: 20px;
		top: -15px;
		left: -3px;
	}

	.pricing .price span {
		color: #bababa;
		font-size: 16px;
		font-weight: 300;
	}

	.pricing img {
		padding: 30px 40px;
	}

	.pricing ul {
		padding: 0;
		list-style: none;
		color: #444444;
		text-align: center;
		line-height: 26px;
		font-size: 16px;
		margin-bottom: 25px;
	}

	.pricing ul li {
		padding-bottom: 10px;
	}

	.pricing ul .na {
		color: #ccc;
		text-decoration: line-through;
	}

	.pricing .btn-buy {
		display: inline-block;
		padding: 8px 40px 10px 40px;
		border-radius: 50px;
		color: #fff;
		transition: none;
		font-size: 16px;
		font-weight: 400;
		font-family: 'Ubuntu', sans-serif;
		font-weight: 600;
		transition: 0.3s;
		border: 2px solid #e3e5e6;
	}

	.pricing .btn-buy:hover {
		background: #7fc5fa;
		color: #fff;
	}

	.pricing .featured {
		width: 200px;
		position: absolute;
		top: 18px;
		right: -68px;
		transform: rotate(45deg);
		z-index: 1;
		font-size: 14px;
		padding: 1px 0 3px 0;
		background: #4154f1;
		color: #fff;
	}
</style>
