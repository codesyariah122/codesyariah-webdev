<template>
	<section id="testimonials" class="testimonials">
		<div class="container position-relative">

			<div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
				<div class="swiper-wrapper">

					<div class="swiper-slide">
						<div class="testimonial-item">
							<img :src="require('~/assets/img/testimonials/kevin.jpg')" class="testimonial-img" alt="">
							<h3>Kevin Shield</h3>
							<h4>Ceo &amp; Founder MBV Marketplace</h4>
							<p>
								<i class="bx bxs-quote-alt-left quote-icon-left"></i>
								Terima kasih codesyariah webdevelopment, sangat membantu bagi kami yang menjalankan bisnis secara digital, tanpa ribet dan proses yang tidak lama.
								<i class="bx bxs-quote-alt-right quote-icon-right"></i>
							</p>
						</div>
					</div><!-- End testimonial item -->

					<div class="swiper-slide">
						<div class="testimonial-item">
							<img :src="require('~/assets/img/testimonials/lucy.jpg')" class="testimonial-img" alt="">
							<h3>Lucy Straus</h3>
							<h4>Designer</h4>
							<p>
								<i class="bx bxs-quote-alt-left quote-icon-left"></i>
								Halo codesyariah webdev, sekarang saya punya wadah untuk dokumentasi gallery, serasa punya gallery sendiri dalam bentuk digital, asyiik banget.
								<i class="bx bxs-quote-alt-right quote-icon-right"></i>
							</p>
						</div>
					</div><!-- End testimonial item -->

				</div>
				<div class="swiper-pagination"></div>
			</div>

		</div>
	</section>
</template>