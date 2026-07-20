<template>
	<main class="builder-page">
		<section class="builder-hero">
			<div class="builder-container">
				<div class="builder-hero-copy">
					<p class="builder-eyebrow">Website Builder Preview</p>
					<h1>Rancang gambaran website bisnis Anda sebelum mulai project.</h1>
					<p>
						Pilih jenis bisnis, gaya visual, halaman, dan fitur yang dibutuhkan. Preview di samping akan berubah otomatis supaya calon client bisa membayangkan arah website yang akan dibuat Codesyariah Webdev.
					</p>
					<div class="builder-hero-actions">
						<a href="#builder-workspace" class="primary-action scrollto">
							Mulai Custom <i class="bx bx-slider-alt"></i>
						</a>
						<a :href="whatsappLink" target="_blank" rel="noreferrer" class="secondary-action">
							Konsultasi <i class="bx bxl-whatsapp"></i>
						</a>
					</div>
				</div>

				<div class="builder-trust-panel">
					<div>
						<span>Output preview</span>
						<strong>{{ selectedBusiness.title }}</strong>
					</div>
					<ul>
						<li v-for="proof in trustSignals" :key="proof">
							<i class="bx bx-check-circle"></i>
							{{ proof }}
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section id="builder-workspace" class="builder-workspace">
			<div class="builder-container">
				<div class="builder-heading">
					<div>
						<p class="builder-eyebrow">Simulasi Scope</p>
						<h2>Custom kebutuhan, lihat preview, lalu kirim brief awal.</h2>
					</div>
					<p>
						Ini bukan final design, tapi simulasi arah struktur, prioritas konten, dan fitur agar diskusi awal lebih jelas walaupun belum familiar dengan istilah teknis.
					</p>
				</div>

				<div class="builder-grid">
					<aside class="builder-controls" aria-label="Pengaturan website">
						<div class="control-group">
							<label for="businessType">Jenis bisnis</label>
							<select id="businessType" v-model="form.businessType">
								<option v-for="item in businessTypes" :key="item.id" :value="item.id">
									{{ item.title }}
								</option>
							</select>
						</div>

						<div class="control-group">
							<label for="brandName">Nama brand</label>
							<input id="brandName" v-model="form.brandName" type="text" placeholder="Contoh: Al Mubarok Furniture">
						</div>

						<div class="control-group">
							<label for="mainOffer">Penawaran utama</label>
							<input id="mainOffer" v-model="form.mainOffer" type="text" :placeholder="selectedBusiness.offer">
						</div>

						<div class="control-group">
							<label>Style visual</label>
							<div class="segmented-control">
								<button
									v-for="style in visualStyles"
									:key="style.id"
									type="button"
									:class="{ active: form.visualStyle === style.id }"
									@click="form.visualStyle = style.id"
								>
									{{ style.title }}
								</button>
							</div>
						</div>

						<div class="control-group">
							<label>Warna utama</label>
							<div class="color-options">
								<button
									v-for="color in colorPalettes"
									:key="color.id"
									type="button"
									:class="{ active: form.colorPalette === color.id }"
									:style="{ background: color.swatch }"
									:aria-label="color.title"
									@click="form.colorPalette = color.id"
								></button>
							</div>
						</div>

						<div class="control-group">
							<label>Halaman penting</label>
							<div class="checkbox-list">
								<label v-for="page in availablePages" :key="page">
									<input v-model="form.pages" type="checkbox" :value="page">
									<span>{{ page }}</span>
								</label>
							</div>
						</div>

						<div class="control-group">
							<label>Fitur tambahan</label>
							<div class="checkbox-list">
								<label v-for="feature in availableFeatures" :key="feature">
									<input v-model="form.features" type="checkbox" :value="feature">
									<span>{{ feature }}</span>
								</label>
							</div>
						</div>
					</aside>

					<section class="builder-preview-area" aria-label="Preview website">
						<div class="preview-toolbar">
							<div>
								<span>Live Preview</span>
								<strong>{{ previewBrand }}</strong>
							</div>
							<div class="view-toggle">
								<button type="button" :class="{ active: previewMode === 'desktop' }" @click="previewMode = 'desktop'">
									<i class="bx bx-desktop"></i>
								</button>
								<button type="button" :class="{ active: previewMode === 'mobile' }" @click="previewMode = 'mobile'">
									<i class="bx bx-mobile-alt"></i>
								</button>
							</div>
						</div>

						<div class="preview-shell" :class="[previewMode, activeStyle.id]" :style="previewCssVars">
							<div class="mock-website">
								<header class="mock-nav">
									<strong>{{ previewBrand }}</strong>
									<nav>
										<span v-for="item in previewPages.slice(0, 4)" :key="item">{{ item }}</span>
									</nav>
								</header>

								<section class="mock-hero">
									<div>
										<span class="mock-badge">{{ selectedBusiness.badge }}</span>
										<h3>{{ previewHeadline }}</h3>
										<p>{{ previewSubcopy }}</p>
										<div class="mock-actions">
											<span>Konsultasi Sekarang</span>
											<span>Lihat Layanan</span>
										</div>
									</div>
									<div class="mock-visual">
										<div class="visual-card">
											<i :class="selectedBusiness.icon"></i>
											<strong>{{ selectedBusiness.metric }}</strong>
											<span>{{ selectedBusiness.metricLabel }}</span>
										</div>
									</div>
								</section>

								<section class="mock-sections">
									<article v-for="item in previewSections" :key="item.title">
										<i :class="item.icon"></i>
										<h4>{{ item.title }}</h4>
										<p>{{ item.description }}</p>
									</article>
								</section>

								<section class="mock-feature-strip">
									<span v-for="feature in previewFeatures.slice(0, 4)" :key="feature">
										<i class="bx bx-check"></i>
										{{ feature }}
									</span>
								</section>
							</div>
						</div>
					</section>
				</div>

				<div class="builder-summary">
					<div class="summary-block">
						<span>Rekomendasi paket</span>
						<strong>{{ packageRecommendation.name }}</strong>
						<p>{{ packageRecommendation.description }}</p>
					</div>
					<div class="summary-block">
						<span>Estimasi kompleksitas</span>
						<strong>{{ complexityLabel }}</strong>
						<p>{{ form.pages.length }} halaman, {{ form.features.length }} fitur prioritas.</p>
					</div>
					<button type="button" @click="sendBrief">
						Kirim Brief Preview ke WhatsApp <i class="bx bxl-whatsapp"></i>
					</button>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	name: "WebsiteBuilderPage",
	layout: "page",
	head() {
		return {
			title: "Website Builder Preview - Codesyariah Webdevelopment",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"Simulasi website builder Codesyariah Webdevelopment untuk membantu calon client melihat preview struktur website, fitur, dan arah visual sebelum konsultasi project.",
				},
			],
		};
	},
	data() {
		return {
			previewMode: "desktop",
			form: {
				businessType: "company",
				brandName: "",
				mainOffer: "",
				visualStyle: "modern",
				colorPalette: "emerald",
				pages: ["Home", "Layanan", "Portfolio", "Kontak"],
				features: ["WhatsApp CTA", "SEO Basic", "Responsive Design"],
			},
			businessTypes: [
				{
					id: "company",
					title: "Company Profile",
					badge: "Business Profile",
					offer: "Website profesional untuk meningkatkan kredibilitas bisnis",
					headline: "Bangun company profile yang membuat bisnis terlihat siap dipercaya.",
					subcopy: "Struktur halaman dibuat agar calon customer cepat paham layanan, bukti kerja, dan cara menghubungi tim Anda.",
					icon: "bx bx-buildings",
					metric: "24/7",
					metricLabel: "brand presence",
				},
				{
					id: "landing",
					title: "Landing Page Promosi",
					badge: "Campaign Ready",
					offer: "Landing page untuk campaign, iklan, atau launching produk",
					headline: "Ubah traffic iklan menjadi lead dengan halaman promosi yang fokus.",
					subcopy: "Konten, benefit, bukti sosial, dan CTA disusun agar visitor tidak bingung mengambil langkah berikutnya.",
					icon: "bx bx-rocket",
					metric: "1 CTA",
					metricLabel: "fokus konversi",
				},
				{
					id: "catalog",
					title: "Katalog Produk",
					badge: "Product Showcase",
					offer: "Katalog online untuk produk, paket, atau layanan",
					headline: "Tampilkan produk dengan rapi tanpa membuat customer harus tanya satu per satu.",
					subcopy: "Cocok untuk toko, supplier, jasa, dan brand yang butuh katalog online dengan tombol order cepat.",
					icon: "bx bx-store",
					metric: "100+",
					metricLabel: "produk siap tampil",
				},
				{
					id: "system",
					title: "Web App / Dashboard",
					badge: "Operational Tools",
					offer: "Dashboard admin untuk workflow bisnis internal",
					headline: "Rapikan proses manual menjadi dashboard yang lebih mudah dipantau.",
					subcopy: "Data customer, order, laporan, user role, dan workflow internal bisa dibuat bertahap sesuai prioritas bisnis.",
					icon: "bx bx-data",
					metric: "Role",
					metricLabel: "akses terkontrol",
				},
			],
			visualStyles: [
				{ id: "modern", title: "Modern" },
				{ id: "premium", title: "Premium" },
				{ id: "friendly", title: "Friendly" },
			],
			colorPalettes: [
				{ id: "emerald", title: "Emerald", swatch: "linear-gradient(135deg, #18d19b, #0f766e)", primary: "#18d19b", dark: "#082027", soft: "#d9fff1" },
				{ id: "blue", title: "Blue", swatch: "linear-gradient(135deg, #38bdf8, #1d4ed8)", primary: "#38bdf8", dark: "#0f1f3d", soft: "#e0f2fe" },
				{ id: "rose", title: "Rose", swatch: "linear-gradient(135deg, #fb7185, #be123c)", primary: "#fb7185", dark: "#35151d", soft: "#ffe4e6" },
				{ id: "gold", title: "Gold", swatch: "linear-gradient(135deg, #facc15, #b45309)", primary: "#facc15", dark: "#2f2410", soft: "#fef3c7" },
			],
			availablePages: ["Home", "Tentang", "Layanan", "Produk", "Portfolio", "Testimoni", "Blog", "Kontak"],
			availableFeatures: ["WhatsApp CTA", "SEO Basic", "Responsive Design", "Form Konsultasi", "Katalog Produk", "Payment Gateway", "Dashboard Admin", "Blog CMS"],
			trustSignals: [
				"Preview membantu diskusi scope lebih cepat.",
				"Cocok untuk owner yang belum paham teknis.",
				"Bisa dikirim sebagai brief awal via WhatsApp.",
			],
		};
	},
	computed: {
		profiles() {
			return this.$store.state.profiles?.[0];
		},
		whatsappPhone() {
			return this.profiles?.fields?.phone || "6288222668778";
		},
		whatsappLink() {
			return `https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent("Halo Codesyariah, saya ingin mencoba Website Builder Preview.")}`;
		},
		selectedBusiness() {
			return this.businessTypes.find((item) => item.id === this.form.businessType) || this.businessTypes[0];
		},
		activeStyle() {
			return this.visualStyles.find((item) => item.id === this.form.visualStyle) || this.visualStyles[0];
		},
		activePalette() {
			return this.colorPalettes.find((item) => item.id === this.form.colorPalette) || this.colorPalettes[0];
		},
		previewCssVars() {
			return {
				"--builder-primary": this.activePalette.primary,
				"--builder-dark": this.activePalette.dark,
				"--builder-soft": this.activePalette.soft,
			};
		},
		previewBrand() {
			return this.form.brandName || "Nama Brand Anda";
		},
		previewHeadline() {
			return this.form.mainOffer || this.selectedBusiness.headline;
		},
		previewSubcopy() {
			return this.selectedBusiness.subcopy;
		},
		previewPages() {
			return this.form.pages.length ? this.form.pages : ["Home", "Layanan", "Kontak"];
		},
		previewFeatures() {
			return this.form.features.length ? this.form.features : ["WhatsApp CTA", "Responsive Design"];
		},
		previewSections() {
			return [
				{
					icon: "bx bx-message-square-check",
					title: "Value utama",
					description: this.selectedBusiness.offer,
				},
				{
					icon: "bx bx-layer",
					title: "Struktur halaman",
					description: `${this.previewPages.slice(0, 3).join(", ")} dibuat jelas untuk alur visitor.`,
				},
				{
					icon: "bx bx-target-lock",
					title: "CTA prioritas",
					description: this.previewFeatures.includes("WhatsApp CTA") ? "Visitor diarahkan ke konsultasi WhatsApp." : "CTA bisa disesuaikan dengan target bisnis.",
				},
			];
		},
		complexityScore() {
			return this.form.pages.length + this.form.features.length;
		},
		complexityLabel() {
			if (this.complexityScore >= 11) return "Advanced";
			if (this.complexityScore >= 8) return "Medium";
			return "Simple";
		},
		packageRecommendation() {
			if (this.form.businessType === "system" || this.form.features.includes("Dashboard Admin") || this.form.features.includes("Payment Gateway")) {
				return {
					name: "Custom Web App",
					description: "Cocok untuk kebutuhan dashboard, integrasi, database, dan workflow internal.",
				};
			}

			if (this.complexityScore >= 9) {
				return {
					name: "Company Profile Pro",
					description: "Cocok untuk website bisnis dengan banyak halaman, portfolio, blog, dan form konsultasi.",
				};
			}

			return {
				name: "Starter Website",
				description: "Cocok untuk validasi awal brand, company profile ringan, atau landing promosi.",
			};
		},
	},
	methods: {
		sendBrief() {
			const message = [
				"Halo Codesyariah, saya ingin konsultasi dari Website Builder Preview.",
				`Nama brand: ${this.previewBrand}`,
				`Jenis bisnis: ${this.selectedBusiness.title}`,
				`Style visual: ${this.activeStyle.title}`,
				`Warna utama: ${this.activePalette.title}`,
				`Penawaran utama: ${this.previewHeadline}`,
				`Halaman: ${this.previewPages.join(", ")}`,
				`Fitur: ${this.previewFeatures.join(", ")}`,
				`Rekomendasi paket: ${this.packageRecommendation.name}`,
				`Kompleksitas: ${this.complexityLabel}`,
			].join("\n");

			window.open(`https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
		},
	},
};
</script>

<style scoped>
.builder-page {
	background: #f7fbfb;
	color: #102d35;
}

.builder-container {
	width: min(1180px, calc(100% - 32px));
	margin: 0 auto;
}

.builder-hero {
	position: relative;
	overflow: hidden;
	padding: 138px 0 76px;
	background:
		linear-gradient(135deg, rgba(5, 20, 25, 0.96), rgba(9, 48, 53, 0.92)),
		url("~/assets/img/new-hero-bg-1-desktop.jpg") center / cover no-repeat;
	color: #ffffff;
}

.builder-hero::before {
	content: "";
	position: absolute;
	inset: 0;
	background: radial-gradient(circle at 70% 20%, rgba(24, 209, 155, 0.22), transparent 34%);
	pointer-events: none;
}

.builder-hero .builder-container {
	position: relative;
	display: grid;
	grid-template-columns: minmax(0, 1.12fr) minmax(300px, 0.88fr);
	gap: 34px;
	align-items: center;
}

.builder-eyebrow {
	margin: 0 0 12px;
	color: #18d19b;
	font-size: 12px;
	font-weight: 900;
	letter-spacing: 0.7px;
	text-transform: uppercase;
}

.builder-hero h1,
.builder-heading h2 {
	margin: 0;
	font-weight: 900;
	line-height: 1.08;
}

.builder-hero h1 {
	font-size: clamp(38px, 6vw, 72px);
	max-width: 820px;
}

.builder-hero-copy > p:not(.builder-eyebrow),
.builder-heading > p {
	margin: 18px 0 0;
	color: rgba(255, 255, 255, 0.76);
	font-size: 17px;
	line-height: 1.75;
}

.builder-hero-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 26px;
}

.primary-action,
.secondary-action,
.builder-summary button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 9px;
	min-height: 48px;
	padding: 13px 18px;
	border: 0;
	border-radius: 8px;
	font-weight: 900;
	cursor: pointer;
}

.primary-action,
.builder-summary button {
	background: #18d19b;
	color: #05201a;
}

.secondary-action {
	color: #ffffff;
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.18);
}

.builder-trust-panel {
	padding: 24px;
	border-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0.14);
	background: rgba(255, 255, 255, 0.08);
	box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
	backdrop-filter: blur(18px);
}

.builder-trust-panel span,
.summary-block span,
.preview-toolbar span {
	display: block;
	margin-bottom: 5px;
	color: rgba(255, 255, 255, 0.62);
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.builder-trust-panel strong {
	display: block;
	color: #ffffff;
	font-size: 30px;
	line-height: 1.15;
}

.builder-trust-panel ul {
	display: grid;
	gap: 11px;
	margin: 22px 0 0;
	padding: 0;
	list-style: none;
}

.builder-trust-panel li {
	display: flex;
	gap: 9px;
	color: rgba(255, 255, 255, 0.78);
	line-height: 1.5;
}

.builder-trust-panel i {
	color: #18d19b;
	font-size: 20px;
}

.builder-workspace {
	padding: 84px 0;
}

.builder-heading {
	display: grid;
	grid-template-columns: minmax(0, 1.08fr) minmax(280px, 0.92fr);
	gap: 28px;
	align-items: end;
	margin-bottom: 30px;
}

.builder-heading h2 {
	color: #102d35;
	font-size: clamp(30px, 4vw, 52px);
}

.builder-heading > p {
	color: #5b6d72;
}

.builder-grid {
	display: grid;
	grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.15fr);
	gap: 20px;
	align-items: start;
}

.builder-controls,
.builder-preview-area,
.builder-summary {
	border: 1px solid #dcebea;
	border-radius: 8px;
	background: #ffffff;
	box-shadow: 0 18px 46px rgba(17, 51, 60, 0.08);
}

.builder-controls {
	display: grid;
	gap: 18px;
	padding: 20px;
}

.control-group {
	display: grid;
	gap: 9px;
}

.control-group > label {
	margin: 0;
	color: #16343c;
	font-size: 13px;
	font-weight: 900;
}

.control-group input,
.control-group select {
	width: 100%;
	min-height: 44px;
	border: 1px solid #cfe0df;
	border-radius: 8px;
	padding: 10px 12px;
	color: #102d35;
	background: #f8fcfc;
	outline: 0;
}

.control-group input:focus,
.control-group select:focus {
	border-color: #18d19b;
	box-shadow: 0 0 0 3px rgba(24, 209, 155, 0.14);
}

.segmented-control {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 6px;
}

.segmented-control button,
.view-toggle button {
	border: 1px solid #d4e5e4;
	border-radius: 8px;
	background: #f7fbfb;
	color: #315059;
	font-weight: 900;
	cursor: pointer;
}

.segmented-control button {
	min-height: 40px;
	font-size: 12px;
}

.segmented-control button.active,
.view-toggle button.active {
	background: #102d35;
	color: #ffffff;
	border-color: #102d35;
}

.color-options {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.color-options button {
	width: 38px;
	height: 38px;
	border: 2px solid #ffffff;
	border-radius: 8px;
	box-shadow: 0 0 0 1px #cfe0df;
	cursor: pointer;
}

.color-options button.active {
	box-shadow: 0 0 0 3px rgba(16, 45, 53, 0.18);
}

.checkbox-list {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 8px;
}

.checkbox-list label {
	display: flex;
	align-items: center;
	gap: 8px;
	min-height: 38px;
	margin: 0;
	padding: 8px;
	border-radius: 8px;
	background: #f7fbfb;
	color: #315059;
	font-size: 12px;
	font-weight: 800;
}

.checkbox-list input {
	width: 16px;
	height: 16px;
	min-height: auto;
	padding: 0;
	accent-color: #18d19b;
}

.builder-preview-area {
	overflow: hidden;
}

.preview-toolbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	padding: 16px;
	border-bottom: 1px solid #e3eeee;
}

.preview-toolbar span,
.summary-block span {
	color: #75898e;
}

.preview-toolbar strong {
	color: #102d35;
	font-size: 18px;
}

.view-toggle {
	display: flex;
	gap: 7px;
}

.view-toggle button {
	display: grid;
	place-items: center;
	width: 42px;
	height: 38px;
	font-size: 20px;
}

.preview-shell {
	display: grid;
	place-items: center;
	min-height: 620px;
	padding: 18px;
	background:
		linear-gradient(135deg, #e7f4f2, #f8fcfc);
}

.preview-shell.mobile .mock-website {
	width: min(360px, 100%);
}

.mock-website {
	width: 100%;
	min-height: 540px;
	overflow: hidden;
	border-radius: 8px;
	background: #ffffff;
	box-shadow: 0 24px 70px rgba(16, 45, 53, 0.2);
}

.mock-nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 18px;
	min-height: 66px;
	padding: 0 24px;
	background: var(--builder-dark);
	color: #ffffff;
}

.mock-nav strong {
	max-width: 220px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.mock-nav nav {
	display: flex;
	gap: 14px;
	color: rgba(255, 255, 255, 0.74);
	font-size: 12px;
	font-weight: 800;
	text-transform: uppercase;
}

.mock-hero {
	display: grid;
	grid-template-columns: minmax(0, 1.1fr) minmax(220px, 0.9fr);
	gap: 22px;
	align-items: center;
	min-height: 250px;
	padding: 32px;
	background:
		linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.76)),
		linear-gradient(135deg, var(--builder-soft), #ffffff);
}

.mock-badge {
	display: inline-flex;
	margin-bottom: 12px;
	padding: 7px 10px;
	border-radius: 999px;
	background: var(--builder-soft);
	color: var(--builder-dark);
	font-size: 11px;
	font-weight: 900;
	text-transform: uppercase;
}

.mock-hero h3 {
	margin: 0;
	color: var(--builder-dark);
	font-size: clamp(30px, 4vw, 54px);
	line-height: 1.05;
	font-weight: 900;
}

.mock-hero p {
	margin: 14px 0 0;
	color: #51676d;
	line-height: 1.6;
}

.mock-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 9px;
	margin-top: 18px;
}

.mock-actions span {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 38px;
	padding: 9px 12px;
	border-radius: 8px;
	font-size: 12px;
	font-weight: 900;
}

.mock-actions span:first-child {
	background: var(--builder-primary);
	color: #06201a;
}

.mock-actions span:last-child {
	color: var(--builder-dark);
	border: 1px solid rgba(16, 45, 53, 0.18);
}

.mock-visual {
	display: grid;
	place-items: center;
	min-height: 200px;
	border-radius: 8px;
	background: linear-gradient(135deg, var(--builder-dark), rgba(16, 45, 53, 0.82));
}

.visual-card {
	display: grid;
	gap: 6px;
	place-items: center;
	width: min(190px, 80%);
	padding: 22px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.1);
	color: #ffffff;
}

.visual-card i {
	color: var(--builder-primary);
	font-size: 36px;
}

.visual-card strong {
	font-size: 32px;
	line-height: 1;
}

.visual-card span {
	color: rgba(255, 255, 255, 0.72);
	font-size: 12px;
	font-weight: 800;
	text-transform: uppercase;
}

.mock-sections {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 12px;
	padding: 18px;
}

.mock-sections article {
	min-height: 150px;
	padding: 16px;
	border-radius: 8px;
	background: #f7fbfb;
	border: 1px solid #e3eeee;
}

.mock-sections i {
	color: var(--builder-primary);
	font-size: 26px;
}

.mock-sections h4 {
	margin: 12px 0 7px;
	color: #102d35;
	font-size: 16px;
	font-weight: 900;
}

.mock-sections p {
	margin: 0;
	color: #60777d;
	font-size: 13px;
	line-height: 1.55;
}

.mock-feature-strip {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	padding: 0 18px 20px;
}

.mock-feature-strip span {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 8px 10px;
	border-radius: 999px;
	background: var(--builder-soft);
	color: var(--builder-dark);
	font-size: 12px;
	font-weight: 900;
}

.preview-shell.premium .mock-website {
	background: #101820;
}

.preview-shell.premium .mock-hero,
.preview-shell.premium .mock-sections article {
	background: #17242d;
	border-color: rgba(255, 255, 255, 0.1);
}

.preview-shell.premium .mock-hero h3,
.preview-shell.premium .mock-sections h4 {
	color: #ffffff;
}

.preview-shell.premium .mock-hero p,
.preview-shell.premium .mock-sections p {
	color: rgba(255, 255, 255, 0.7);
}

.preview-shell.friendly .mock-website,
.preview-shell.friendly .mock-sections article,
.preview-shell.friendly .mock-visual {
	border-radius: 8px;
}

.preview-shell.mobile .mock-nav {
	padding: 0 16px;
}

.preview-shell.mobile .mock-nav nav {
	display: none;
}

.preview-shell.mobile .mock-hero,
.preview-shell.mobile .mock-sections {
	grid-template-columns: 1fr;
}

.preview-shell.mobile .mock-hero {
	padding: 22px;
}

.preview-shell.mobile .mock-hero h3 {
	font-size: 32px;
}

.builder-summary {
	display: grid;
	grid-template-columns: minmax(0, 0.85fr) minmax(0, 0.85fr) auto;
	gap: 18px;
	align-items: center;
	margin-top: 20px;
	padding: 18px;
}

.summary-block strong {
	display: block;
	color: #102d35;
	font-size: 22px;
	line-height: 1.2;
}

.summary-block p {
	margin: 7px 0 0;
	color: #60777d;
	line-height: 1.55;
}

.builder-summary button {
	min-width: 240px;
}

@media (max-width: 1100px) {
	.builder-grid,
	.builder-summary {
		grid-template-columns: 1fr;
	}

	.builder-summary button {
		width: 100%;
	}
}

@media (max-width: 991px) {
	.builder-hero {
		padding: 118px 0 64px;
	}

	.builder-hero .builder-container,
	.builder-heading {
		grid-template-columns: 1fr;
	}

	.builder-trust-panel {
		max-width: 560px;
	}
}

@media (max-width: 767px) {
	.builder-container {
		width: min(100% - 24px, 1180px);
	}

	.builder-hero h1 {
		font-size: 40px;
	}

	.builder-workspace {
		padding: 62px 0;
	}

	.checkbox-list,
	.mock-sections {
		grid-template-columns: 1fr;
	}

	.preview-shell {
		min-height: auto;
		padding: 12px;
	}

	.mock-website {
		min-height: auto;
	}

	.mock-hero {
		grid-template-columns: 1fr;
		padding: 22px;
	}

	.mock-nav nav {
		display: none;
	}
}
</style>
