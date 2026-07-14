<template>
	<section id="tools" class="opensource-tools">
		<div class="container">
			<div class="tools-heading">
				<div>
					<p class="tools-eyebrow">Kontribusi Open Source</p>
					<h2>Tools Python di PyPI untuk workflow developer yang lebih cepat dan rapi.</h2>
				</div>
				<p>
					Selain mengerjakan website dan sistem bisnis, Codesyariah juga membangun tooling yang bisa dipakai developer untuk mempercepat setup project, standarisasi workflow, dan mengurangi pekerjaan teknis yang berulang.
				</p>
			</div>

			<div class="tools-layout">
				<article class="pypi-card">
					<div class="package-top">
						<div class="package-cubes">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div>
							<span class="package-label">PyPI Package</span>
							<h3>devcore-cli</h3>
						</div>
						<strong>Sole Owner</strong>
					</div>

					<p class="package-description">
						DevCore - WordPress & Laravel project automation CLI untuk membantu developer menyiapkan project lebih konsisten, cepat, dan minim langkah manual.
					</p>

					<div class="install-command">
						<span>Install</span>
						<code>pip install devcore-cli</code>
					</div>

					<div class="package-meta">
						<span><i class="bx bx-calendar"></i> Last released Nov 11, 2025</span>
						<span><i class="bx bxl-python"></i> Python CLI</span>
						<span><i class="bx bx-code-block"></i> WordPress & Laravel automation</span>
					</div>

					<div class="package-actions">
						<a href="https://pypi.org/project/devcore-cli/" target="_blank" rel="noreferrer">
							Lihat di PyPI <i class="bx bx-link-external"></i>
						</a>
						<a :href="whatsappLink" target="_blank" rel="noreferrer">
							Konsultasi Automation <i class="bx bxl-whatsapp"></i>
						</a>
					</div>
				</article>

				<div class="tools-proof">
					<div v-for="item in highlights" :key="item.title" class="proof-item">
						<i :class="item.icon"></i>
						<div>
							<h3>{{ item.title }}</h3>
							<p>{{ item.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			highlights: [
				{
					icon: "bx bx-terminal",
					title: "CLI automation",
					description: "Workflow setup project dibuat repeatable supaya developer tidak mengulang langkah teknis yang sama setiap mulai project.",
				},
				{
					icon: "bx bxl-wordpress",
					title: "WordPress & Laravel focus",
					description: "Cocok untuk kebutuhan agency atau developer yang sering berpindah antara project WordPress, Laravel, dan deployment.",
				},
				{
					icon: "bx bx-shield-quarter",
					title: "Credibility signal",
					description: "Publikasi package di PyPI menjadi bukti bahwa Codesyariah juga membangun tool developer, bukan hanya halaman company profile.",
				},
			],
		};
	},
	computed: {
		profiles() {
			return this.$store.state.profiles?.[0];
		},
		whatsappLink() {
			const phone = this.profiles?.fields?.phone || "6288222668778";
			return `https://wa.me/${phone}?text=${encodeURIComponent("Halo Codesyariah, saya ingin konsultasi automation tools atau kebutuhan developer workflow.")}`;
		},
	},
};
</script>

<style scoped>
.opensource-tools {
	padding: 86px 0;
	background:
		linear-gradient(135deg, rgba(5, 19, 24, 0.96), rgba(8, 39, 43, 0.94)),
		radial-gradient(circle at 12% 18%, rgba(24, 209, 155, 0.2), transparent 32%);
	color: #ffffff;
}

.tools-heading {
	display: grid;
	grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
	gap: 28px;
	align-items: end;
	margin-bottom: 34px;
}

.tools-eyebrow {
	margin: 0 0 12px;
	color: #18d19b;
	font-size: 12px;
	font-weight: 900;
	letter-spacing: 0.6px;
	text-transform: uppercase;
}

.tools-heading h2 {
	margin: 0;
	font-size: clamp(30px, 4vw, 52px);
	line-height: 1.08;
	font-weight: 900;
}

.tools-heading > p {
	margin: 0;
	color: rgba(255, 255, 255, 0.74);
	font-size: 16px;
	line-height: 1.75;
}

.tools-layout {
	display: grid;
	grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
	gap: 22px;
	align-items: stretch;
}

.pypi-card,
.proof-item {
	border-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0.12);
	background: rgba(255, 255, 255, 0.08);
	box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
	backdrop-filter: blur(18px);
}

.pypi-card {
	padding: 26px;
}

.package-top {
	display: grid;
	grid-template-columns: auto minmax(0, 1fr) auto;
	gap: 16px;
	align-items: center;
	margin-bottom: 22px;
}

.package-cubes {
	position: relative;
	width: 58px;
	height: 52px;
}

.package-cubes span {
	position: absolute;
	width: 24px;
	height: 24px;
	border-radius: 4px;
	background: #ffffff;
	box-shadow: inset 0 0 0 1px rgba(8, 39, 43, 0.12);
}

.package-cubes span:nth-child(1) {
	left: 0;
	top: 14px;
}

.package-cubes span:nth-child(2) {
	left: 18px;
	top: 2px;
	background: #d9fff1;
}

.package-cubes span:nth-child(3) {
	left: 18px;
	top: 26px;
	background: #18d19b;
}

.package-cubes span:nth-child(4) {
	left: 36px;
	top: 14px;
	background: #ffffff;
}

.package-label {
	display: block;
	margin-bottom: 5px;
	color: #18d19b;
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.package-top h3 {
	margin: 0;
	font-size: clamp(28px, 4vw, 46px);
	font-weight: 900;
}

.package-top strong {
	justify-self: end;
	padding: 8px 10px;
	border-radius: 6px;
	background: rgba(24, 209, 155, 0.16);
	color: #a9f7df;
	font-size: 11px;
	text-transform: uppercase;
	white-space: nowrap;
}

.package-description {
	margin: 0 0 18px;
	color: rgba(255, 255, 255, 0.78);
	font-size: 17px;
	line-height: 1.7;
}

.install-command {
	display: grid;
	grid-template-columns: auto minmax(0, 1fr);
	gap: 10px;
	align-items: center;
	margin-bottom: 18px;
	padding: 12px;
	border-radius: 8px;
	background: rgba(0, 0, 0, 0.24);
	border: 1px solid rgba(255, 255, 255, 0.1);
}

.install-command span {
	color: rgba(255, 255, 255, 0.62);
	font-size: 12px;
	font-weight: 800;
	text-transform: uppercase;
}

.install-command code {
	color: #d9fff1;
	font-size: 14px;
	white-space: normal;
	word-break: break-word;
}

.package-meta {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 22px;
}

.package-meta span {
	display: inline-flex;
	align-items: center;
	gap: 7px;
	padding: 9px 10px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.08);
	color: rgba(255, 255, 255, 0.78);
	font-size: 12px;
	font-weight: 800;
}

.package-meta i {
	color: #18d19b;
	font-size: 17px;
}

.package-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}

.package-actions a {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	min-height: 46px;
	padding: 12px 16px;
	border-radius: 8px;
	font-size: 13px;
	font-weight: 900;
}

.package-actions a:first-child {
	background: #18d19b;
	color: #05201a;
}

.package-actions a:last-child {
	color: #ffffff;
	border: 1px solid rgba(255, 255, 255, 0.2);
	background: rgba(255, 255, 255, 0.08);
}

.tools-proof {
	display: grid;
	gap: 14px;
}

.proof-item {
	display: grid;
	grid-template-columns: auto minmax(0, 1fr);
	gap: 14px;
	align-items: start;
	padding: 20px;
}

.proof-item > i {
	display: grid;
	place-items: center;
	width: 48px;
	height: 48px;
	border-radius: 8px;
	background: rgba(24, 209, 155, 0.16);
	color: #18d19b;
	font-size: 25px;
}

.proof-item h3 {
	margin: 0 0 7px;
	font-size: 18px;
	font-weight: 900;
}

.proof-item p {
	margin: 0;
	color: rgba(255, 255, 255, 0.72);
	line-height: 1.65;
}

@media (max-width: 991px) {
	.tools-heading,
	.tools-layout {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 575px) {
	.opensource-tools {
		padding: 68px 0;
	}

	.pypi-card {
		padding: 18px;
	}

	.package-top {
		grid-template-columns: auto minmax(0, 1fr);
	}

	.package-top strong {
		grid-column: 1 / -1;
		justify-self: start;
	}

	.package-actions a {
		width: 100%;
	}
}
</style>
