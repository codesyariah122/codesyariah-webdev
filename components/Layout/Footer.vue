<template>
	<footer id="footer" class="site-footer">
		<div class="footer-shell">
			<div class="footer-main">
				<div class="footer-brand">
					<a href="#hero" class="brand-mark scrollto" aria-label="Codesyariah Webdevelopment">
						<span>CS</span>
						<div>
							<strong>Codesyariah</strong>
							<small>Webdevelopment</small>
						</div>
					</a>
					<p>
						Partner teknis untuk membangun website, memperbaiki sistem, deploy server, dan merapikan operasional digital bisnis dengan bahasa yang mudah dipahami.
					</p>
					<div class="footer-actions">
						<a :href="whatsappLink" target="_blank" rel="noreferrer" class="footer-cta">
							Konsultasi WhatsApp <i class="bx bxl-whatsapp"></i>
						</a>
						<a href="#services" class="footer-link scrollto">Lihat layanan</a>
					</div>
				</div>

				<div class="footer-column">
					<h4>Layanan</h4>
					<ul>
						<li v-for="service in services" :key="service">
							<i class="bx bx-check"></i>
							<span>{{ service }}</span>
						</li>
					</ul>
				</div>

				<div class="footer-column">
					<h4>Alur Kerja</h4>
					<ul>
						<li v-for="step in steps" :key="step">
							<i class="bx bx-right-arrow-alt"></i>
							<span>{{ step }}</span>
						</li>
					</ul>
				</div>

				<div class="footer-contact">
					<h4>Kontak</h4>
					<a :href="whatsappLink" target="_blank" rel="noreferrer">
						<i class="bx bxl-whatsapp"></i>
						<span>+62 859-7163-0027</span>
					</a>
					<a href="mailto:codesyariahwebdev@gmail.com">
						<i class="bx bx-envelope"></i>
						<span>codesyariahwebdev@gmail.com</span>
					</a>
					<a href="https://www.instagram.com/codesyariahwebdev/" target="_blank" rel="noreferrer">
						<i class="bx bxl-instagram"></i>
						<span>@codesyariahwebdev</span>
					</a>
					<div class="footer-status">
						<span></span>
						Support online untuk konsultasi project baru
					</div>
				</div>
			</div>

			<div class="footer-strip">
				<p>&copy; {{ year }} Codesyariah Webdevelopment. All Rights Reserved.</p>
				<div class="footer-social">
					<a href="https://www.instagram.com/codesyariahwebdev/" target="_blank" rel="noreferrer" aria-label="Instagram">
						<i class="bx bxl-instagram"></i>
					</a>
					<a :href="whatsappLink" target="_blank" rel="noreferrer" aria-label="WhatsApp">
						<i class="bx bxl-whatsapp"></i>
					</a>
					<a href="https://pujiermanto-portfolio.vercel.app/" target="_blank" rel="noreferrer" aria-label="Portfolio Puji Ermanto">
						<i class="bx bx-link-external"></i>
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			year: new Date().getFullYear(),
			whatsappLink: "https://wa.me/6288222668778?text=Halo%20Codesyariah%2C%20saya%20ingin%20konsultasi%20layanan%20website%20atau%20sistem%20bisnis.",
			services: [
				"Company profile & landing page",
				"Laravel, API & dashboard admin",
				"E-commerce, marketplace & katalog",
				"VPS, deploy, recovery & maintenance",
			],
			steps: [
				"Audit kebutuhan bisnis",
				"Rancang scope dan prioritas",
				"Development dan testing",
				"Launch, support, dan iterasi",
			],
		};
	},
};
</script>

<style scoped>
#footer.site-footer {
	position: relative;
	overflow: hidden;
	padding: 0;
	background:
		linear-gradient(135deg, rgba(4, 13, 23, 0.96) 0%, rgba(8, 38, 43, 0.94) 48%, rgba(5, 19, 24, 0.98) 100%),
		url("~/assets/img/webdev-footer2.jpg") center center / cover no-repeat;
	color: #ffffff;
	text-align: left;
}

#footer.site-footer:before {
	content: "";
	position: absolute;
	inset: 0;
	background:
		linear-gradient(90deg, rgba(24, 209, 155, 0.12), transparent 32%),
		radial-gradient(circle at 88% 18%, rgba(255, 183, 39, 0.16), transparent 28%);
	pointer-events: none;
}

.footer-shell {
	position: relative;
	z-index: 2;
	width: min(1160px, calc(100% - 32px));
	margin: 0 auto;
	padding: 72px 0 26px;
}

.footer-main {
	display: grid;
	grid-template-columns: minmax(280px, 1.45fr) minmax(190px, 0.8fr) minmax(190px, 0.8fr) minmax(250px, 0.95fr);
	gap: 34px;
	align-items: start;
}

.brand-mark {
	display: inline-flex;
	align-items: center;
	gap: 12px;
	color: #ffffff;
}

.brand-mark span {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	border-radius: 8px;
	background: #18d19b;
	color: #042018;
	font-weight: 900;
}

.brand-mark strong,
.brand-mark small {
	display: block;
	line-height: 1.1;
}

.brand-mark strong {
	font-size: 22px;
}

.brand-mark small {
	color: rgba(255, 255, 255, 0.66);
	font-size: 13px;
}

#footer.site-footer .footer-brand p {
	max-width: 500px;
	margin: 22px 0 24px;
	color: rgba(255, 255, 255, 0.74);
	font-size: 16px;
	line-height: 1.75;
}

.footer-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
	align-items: center;
}

.footer-cta,
.footer-link {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 44px;
	padding: 0 17px;
	border-radius: 999px;
	font-weight: 800;
}

.footer-cta {
	gap: 8px;
	background: #18d19b;
	color: #042018;
}

.footer-link {
	color: #ffffff;
	border: 1px solid rgba(255, 255, 255, 0.22);
	background: rgba(255, 255, 255, 0.08);
}

.footer-column h4,
.footer-contact h4 {
	margin: 0 0 18px;
	color: #ffffff;
	font-size: 16px;
	font-weight: 900;
	text-transform: uppercase;
	letter-spacing: 0;
}

.footer-column ul {
	display: grid;
	gap: 12px;
	margin: 0;
	padding: 0;
	list-style: none;
}

.footer-column li {
	display: flex;
	gap: 9px;
	align-items: flex-start;
	color: rgba(255, 255, 255, 0.72);
	line-height: 1.45;
}

.footer-column i {
	color: #18d19b;
	font-size: 20px;
	margin-top: 1px;
}

.footer-contact {
	display: grid;
	gap: 12px;
}

.footer-contact a {
	display: flex;
	align-items: center;
	gap: 10px;
	color: rgba(255, 255, 255, 0.76);
	line-height: 1.35;
}

.footer-contact a:hover,
.footer-link:hover,
.brand-mark:hover {
	color: #ffffff;
}

.footer-contact i {
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 auto;
	width: 36px;
	height: 36px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.1);
	color: #18d19b;
	font-size: 20px;
}

.footer-status {
	display: flex;
	align-items: center;
	gap: 10px;
	margin-top: 8px;
	padding: 12px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.08);
	color: rgba(255, 255, 255, 0.76);
	line-height: 1.45;
}

.footer-status span {
	width: 9px;
	height: 9px;
	border-radius: 50%;
	background: #18d19b;
	box-shadow: 0 0 0 7px rgba(24, 209, 155, 0.12);
}

.footer-strip {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 18px;
	margin-top: 48px;
	padding-top: 24px;
	border-top: 1px solid rgba(255, 255, 255, 0.12);
}

#footer.site-footer .footer-strip p {
	margin: 0;
	color: rgba(255, 255, 255, 0.62);
	font-size: 14px;
	font-style: normal;
}

.footer-social {
	display: flex;
	gap: 10px;
}

.footer-social a {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.1);
	color: #ffffff;
	font-size: 20px;
}

.footer-social a:hover {
	background: #18d19b;
	color: #042018;
}

@media (max-width: 991px) {
	.footer-main {
		grid-template-columns: 1fr 1fr;
	}
}

@media (max-width: 640px) {
	.footer-shell {
		padding-top: 56px;
	}

	.footer-main,
	.footer-strip {
		grid-template-columns: 1fr;
	}

	.footer-main {
		display: grid;
	}

	.footer-strip {
		align-items: flex-start;
		flex-direction: column;
	}
}
</style>
