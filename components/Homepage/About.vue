<template>
	<section id="about" class="about">
		<div class="container">
			<div class="section-title">
				<span>About Me</span>
				<h2>About Me</h2>
				<article v-html="$md.render(profiles.fields.about)"></article>
			</div>

			<div class="row">
				<div :style="`background: url(${profiles.fields.image.fields.file.url}) center center no-repeat;`" class="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
				<div class="col-lg-8 d-flex flex-column align-items-stretch">
					<div class="content ps-lg-4 d-flex flex-column justify-content-center">
						<div class="row">
							<div class="col-lg-6">
								<ul>
									<li><i class="bi bi-chevron-right"></i> <strong>{{profiles.fields.name}}</strong></li>
									<li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <a :href="profiles.fields.website">
										<span>{{profiles.fields.name}}</span>
									</a> </li>
									<li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{{profiles.fields.phone}}</span></li>
								</ul>
							</div>
							<div class="col-lg-6">
								<ul>
									<li><i class="bi bi-chevron-right"></i> <strong>Github : </strong> <a :href="profiles.fields.github">
										<span>{{profiles.fields.github}}</span>
									</a> </li>
									<li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
									<li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{{profiles.fields.email}}</span></li>
								</ul>
							</div>
						</div>
						<div class="row mt-n4">
							<div class="col-md-12 mt-5 d-md-flex align-items-md-stretch">
								<div class="count-box">
									<i class="bi bi-emoji-smile" style="color: #20b38e;"></i>
									<span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="1" class="purecounter"></span>
									<p><strong>Happy Clients</strong> is our top priority and be part of our best service.</p>
								</div>
							</div>

							<div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
								<div class="count-box">
									<i class="bi bi-journal-richtextr" style="color: #8a1ac2;"></i>
									<span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="1" class="purecounter"></span>
									<p><strong>Projects</strong> of the three projects that we have worked on from the middle and upper-middle scale</p>
								</div>
							</div>

							<div class="col-md-6 mt-5 d-md-flex align-items-md-stretch">
								<div class="count-box">
									<i class="bi bi-clock" style="color: #2cbdee;"></i>
									<span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="1" class="purecounter"></span>
									<p><strong>Years of experience</strong> With this five year's experience we can handle every project as well as possible</p>
								</div>
							</div>

						</div>
					</div>

					<div class="skills-content ps-lg-4">
						<div class="progress">
							<span class="skill">satisfaction value <i class="val">100%</i></span>
							<div class="progress-bar-wrap">
								<div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
						</div>

						<div class="progress">
							<span class="skill">Build Projects <i class="val">90%</i></span>
							<div class="progress-bar-wrap">
								<div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
						</div>

						<div class="progress">
							<span class="skill">Work Experience <i class="val">95%</i></span>
							<div class="progress-bar-wrap">
								<div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-12 col-sm-12 d-flex flex-column align-items-stretch mt-3">
					<GlobalsMap :city="profiles.fields.city"/>
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