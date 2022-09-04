<template>
	<section id="contact" class="contact">
		<div class="container">

			<div class="section-title">
				<span>Contact</span>
				<h2>Our Contact</h2>
				<p>Kontak kami selalu aktif di jam kerja 1x24jam senin - sabtu</p>
			</div>

			<div class="row">

				<div class="col-lg-6">

					<div class="row">
						<div class="col-md-12">
							<div class="info-box">
								<i class="bx bx-share-alt"></i>
								<h3>Social Profiles</h3>
								<div class="social-links">
									<a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
									<a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
									<a :href="`https://www.instagram.com/${profiles.fields.instagram}`" class="instagram" target="_blank"><i class="bi bi-instagram"></i></a>
									<a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
									<a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="info-box mt-4">
								<i class="bx bx-envelope"></i>
								<h3>Email Me</h3>
								<a :href="`mailto:${profiles.fields.email}`" target="_blank">{{profiles.fields.email}}</a>
							</div>
						</div>
						<div class="col-md-6">
							<div class="info-box mt-4">
								<i class="bx bx-phone-call"></i>
								<h3>Call Me</h3>
								<a :href="`https://wa.me/${profiles.fields.phone}?text=I'm%20interested%20in%20your%20product%20for%20sale`" target="_blank">{{profiles.fields.phone}}</a>
							</div>
						</div>
					</div>

				</div>

				<div class="col-lg-6">
					<form action="forms/contact.php" method="post" role="form" class="php-email-form">
						<div class="row">
							<div class="col-md-6 form-group">
								<input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
							</div>
							<div class="col-md-6 form-group mt-3 mt-md-0">
								<input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
							</div>
						</div>
						<div class="form-group mt-3">
							<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
						</div>
						<div class="form-group mt-3">
							<textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
						</div>
						<div class="my-3">
							<div class="loading">Loading</div>
							<div class="error-message"></div>
							<div class="sent-message">Your message has been sent. Thank you!</div>
						</div>
						<div class="text-center"><button type="submit">Send Message</button></div>
					</form>
				</div>

			</div>

		</div>
	</section>
</template>

<script>
	export default {
		computed: {
			profiles() {
				return this.$store.state.profiles[0]
			}
		}
	}
</script>