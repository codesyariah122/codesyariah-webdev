<template>
	<section id="about" class="about capability-section">
		<div class="container">
			<div class="capability-hero">
				<div class="capability-copy">
					<p class="capability-eyebrow">Kapabilitas Codesyariah</p>
					<h2>Partner teknis yang membantu bisnis masuk digital dengan arahan yang mudah dipahami.</h2>
					<article v-if="profileAbout" v-html="$md.render(profileAbout)"></article>
					<p v-else>
						Kami membantu owner bisnis, sekolah, tim sales, dan operasional membangun website, aplikasi, dashboard, serta landing page yang siap dipakai untuk promosi dan pekerjaan harian.
					</p>
					<div class="capability-actions">
						<a :href="whatsappLink" target="_blank" rel="noreferrer" class="primary-action">
							Konsultasi Project <i class="bx bxl-whatsapp"></i>
						</a>
						<a href="#gallery" class="secondary-action scrollto">Lihat Portfolio</a>
					</div>
				</div>

				<div class="profile-panel">
					<div class="profile-photo" :style="profileImageStyle"></div>
					<div class="profile-content">
						<span>Lead Developer</span>
						<h3>{{ profiles.fields.name }}</h3>
						<p>Full stack web developer untuk website bisnis, aplikasi internal, landing page, e-commerce, server, dan maintenance.</p>
						<div class="profile-links">
							<a :href="profiles.fields.website" target="_blank" rel="noreferrer">
								<i class="bx bx-globe"></i>
								Website
							</a>
							<a :href="`https://www.instagram.com/${profiles.fields.instagram}`" target="_blank" rel="noreferrer">
								<i class="bx bxl-instagram"></i>
								Instagram
							</a>
							<a :href="`mailto:${profiles.fields.email}`">
								<i class="bx bx-envelope"></i>
								Email
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="capability-grid">
				<div v-for="metric in metrics" :key="metric.label" class="metric-card">
					<i :class="metric.icon"></i>
					<strong>{{ metric.value }}</strong>
					<span>{{ metric.label }}</span>
				</div>
			</div>

			<div class="focus-stack">
				<div class="focus-card">
					<h3>Yang biasa kami bantu rapikan</h3>
					<ul>
						<li v-for="focus in focusAreas" :key="focus">
							<i class="bx bx-check-circle"></i>
							<span>{{ focus }}</span>
						</li>
					</ul>
				</div>
				<div class="stack-card">
					<h3>Stack & kebutuhan teknis</h3>
					<div>
						<span v-for="stack in stacks" :key="stack">{{ stack }}</span>
					</div>
				</div>
			</div>

			<div class="map-panel">
				<GlobalsMap :city="profiles.fields.city" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			metrics: [
				{ value: "12+", label: "kategori kebutuhan digital", icon: "bx bx-grid-alt" },
				{ value: "6", label: "layanan utama untuk bisnis", icon: "bx bx-layer" },
				{ value: "1:1", label: "komunikasi langsung", icon: "bx bx-conversation" },
			],
			focusAreas: [
				"Menjelaskan kebutuhan teknis dengan bahasa bisnis yang mudah dipahami.",
				"Membangun halaman yang membuat calon customer cepat paham layanan dan cara order.",
				"Merapikan workflow manual menjadi dashboard, sistem, atau automation sederhana.",
				"Menyiapkan website agar siap online: domain, hosting, SSL, deployment, dan support awal.",
			],
			stacks: ["Laravel", "Vue", "Nuxt", "WordPress", "REST API", "MySQL", "Linux VPS", "Nginx", "Payment", "WhatsApp CTA"],
		};
	},
	computed: {
		profiles() {
			return this.$store.state.profiles[0];
		},
		profileAbout() {
			return this.profiles?.fields?.about;
		},
		profileImageStyle() {
			const image = this.profiles?.fields?.image?.fields?.file?.url;
			return image ? `background-image: url(${image});` : "";
		},
		whatsappLink() {
			return `https://wa.me/${this.profiles.fields.phone}?text=${encodeURIComponent("Halo Codesyariah, saya ingin konsultasi kebutuhan website atau aplikasi bisnis.")}`;
		},
	},
};
</script>

<style scoped>
#about.capability-section {
	padding: 86px 0;
	background: #ffffff;
	color: #102d35;
}

.capability-hero {
	display: grid;
	grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
	gap: 34px;
	align-items: stretch;
}

.capability-eyebrow {
	margin: 0 0 12px;
	color: #08946d;
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.capability-copy h2 {
	margin: 0 0 18px;
	color: #102d35;
	font-size: clamp(28px, 4vw, 48px);
	line-height: 1.12;
	font-weight: 900;
}

.capability-copy article,
.capability-copy p {
	color: #5b6d72;
	font-size: 16px;
	line-height: 1.78;
}

.capability-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
	margin-top: 26px;
}

.primary-action,
.secondary-action {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 46px;
	padding: 0 18px;
	border-radius: 999px;
	font-weight: 900;
}

.primary-action {
	gap: 8px;
	background: #18d19b;
	color: #042018;
}

.secondary-action {
	border: 1px solid #cfe4e2;
	color: #102d35;
	background: #f6fbfa;
}

.profile-panel {
	overflow: hidden;
	border-radius: 8px;
	background: #0d2b33;
	color: #ffffff;
	box-shadow: 0 24px 70px rgba(17, 51, 60, 0.14);
}

.profile-photo {
	min-height: 260px;
	background: url("~/assets/img/me.jpg") center center / cover no-repeat;
}

.profile-content {
	padding: 26px;
}

.profile-content span {
	color: #18d19b;
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.profile-content h3 {
	margin: 8px 0 10px;
	color: #ffffff;
	font-weight: 900;
}

.profile-content p {
	color: rgba(255, 255, 255, 0.72);
	line-height: 1.65;
}

.profile-links {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 10px;
	margin-top: 18px;
}

.profile-links a {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 6px;
	min-height: 72px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.08);
	color: #ffffff;
	font-weight: 800;
	font-size: 13px;
}

.profile-links i {
	color: #18d19b;
	font-size: 24px;
}

.capability-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 16px;
	margin: 28px 0;
}

.metric-card {
	padding: 22px;
	border-radius: 8px;
	border: 1px solid #e0eeee;
	background: #f8fcfc;
	box-shadow: 0 14px 36px rgba(17, 51, 60, 0.06);
}

.metric-card i {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 42px;
	height: 42px;
	border-radius: 8px;
	background: #e7fbf4;
	color: #08946d;
	font-size: 24px;
}

.metric-card strong,
.metric-card span {
	display: block;
}

.metric-card strong {
	margin: 14px 0 5px;
	color: #102d35;
	font-size: 30px;
	line-height: 1;
}

.metric-card span {
	color: #5d7075;
}

.focus-stack {
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(320px, 0.82fr);
	gap: 20px;
}

.focus-card,
.stack-card,
.map-panel {
	padding: 26px;
	border-radius: 8px;
	background: #ffffff;
	border: 1px solid #e1eeee;
	box-shadow: 0 18px 46px rgba(17, 51, 60, 0.08);
}

.focus-card h3,
.stack-card h3 {
	margin: 0 0 18px;
	color: #102d35;
	font-weight: 900;
}

.focus-card ul {
	display: grid;
	gap: 13px;
	margin: 0;
	padding: 0;
	list-style: none;
}

.focus-card li {
	display: flex;
	gap: 10px;
	color: #526970;
	line-height: 1.6;
}

.focus-card i {
	color: #18d19b;
	font-size: 22px;
	margin-top: 1px;
}

.stack-card div {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}

.stack-card span {
	padding: 8px 11px;
	border-radius: 999px;
	background: #ecf8f6;
	color: #31585f;
	font-size: 13px;
	font-weight: 800;
}

.map-panel {
	margin-top: 20px;
	padding: 12px;
	overflow: hidden;
}

@media (max-width: 991px) {
	.capability-hero,
	.capability-grid,
	.focus-stack {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 575px) {
	#about.capability-section {
		padding: 66px 0;
	}

	.profile-links {
		grid-template-columns: 1fr;
	}
}
</style>
