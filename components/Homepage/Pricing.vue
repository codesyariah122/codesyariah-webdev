<style lang="css">
	@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300;400;700&family=Lobster&family=Montserrat:wght@300;400&family=Roboto+Mono:wght@300;400&family=Ubuntu&display=swap');
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
		font-family: "Poppins", sans-serif;
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
		font-family: "Ubuntu", sans-serif;
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

<template>
	<section id="pricing" class="pricing">

		<div class="container" data-aos="fade-up">

			<div class="section-title">
				<span>Pricing</span>
				<h2>Check Our Pricing</h2>
				<p class="text-center">Product kategori kami selalu menghadirkan solusi terbaik bagi alur dan strategy perjalanan bisnis anda.</p>
			</div>

			<div class="row gy-4" data-aos="fade-left">

				<div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
					<div class="box">
						<h3 style="color: #07d5c0;">Free Plan</h3>
						<div class="price"><sup>$</sup>0<span> / mo</span></div>
						<img :src="require('~/assets/img/pricing/pricing-free.png')" class="img-fluid" alt="">
						<ul>
							<li>Aida dere</li>
							<li>Nec feugiat nisl</li>
							<li>Nulla at volutpat dola</li>
							<li class="na">Pharetra massa</li>
							<li class="na">Massa ultricies mi</li>
						</ul>
						<a href="#" class="btn-buy">Buy Now</a>
					</div>
				</div>

				<div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
					<div class="box">
						<span class="featured">Featured</span>
						<h3 style="color: #65c600;">Starter Plan</h3>
						<div class="price"><sup>$</sup>19<span> / mo</span></div>
						<img :src="require('~/assets/img/pricing/pricing-starter.png')" class="img-fluid" alt="">
						<ul>
							<li>Aida dere</li>
							<li>Nec feugiat nisl</li>
							<li>Nulla at volutpat dola</li>
							<li>Pharetra massa</li>
							<li class="na">Massa ultricies mi</li>
						</ul>
						<a href="#" class="btn-buy">Buy Now</a>
					</div>
				</div>

				<div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
					<div class="box">
						<h3 style="color: #ff901c;">Business Plan</h3>
						<div class="price"><sup>$</sup>29<span> / mo</span></div>
						<img :src="require('~/assets/img/pricing/pricing-business.png')" class="img-fluid" alt="">
						<ul>
							<li>Aida dere</li>
							<li>Nec feugiat nisl</li>
							<li>Nulla at volutpat dola</li>
							<li>Pharetra massa</li>
							<li>Massa ultricies mi</li>
						</ul>
						<a href="#" class="btn-buy">Buy Now</a>
					</div>
				</div>

				<div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
					<div class="box">
						<h3 style="color: #ff0071;">Ultimate Plan</h3>
						<div class="price"><sup>$</sup>49<span> / mo</span></div>
						<img :src="require('~/assets/img/pricing/pricing-ultimate.png')" class="img-fluid" alt="">
						<ul>
							<li>Aida dere</li>
							<li>Nec feugiat nisl</li>
							<li>Nulla at volutpat dola</li>
							<li>Pharetra massa</li>
							<li>Massa ultricies mi</li>
						</ul>
						<a href="#" class="btn-buy">Buy Now</a>
					</div>
				</div>

			</div>

		</div>

	</section>
</template>

<script>
	export default {
	}
</script>