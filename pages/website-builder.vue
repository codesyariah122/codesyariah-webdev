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
							<div v-if="isDashboardPreview" class="mock-website dashboard-mock">
								<aside class="dashboard-sidebar">
									<div class="dashboard-brand">
										<span>{{ previewBrand.slice(0, 2).toUpperCase() }}</span>
										<strong>{{ previewBrand }}</strong>
									</div>
									<nav>
										<span v-for="item in dashboardMenu" :key="item.label" :class="{ active: item.active }">
											<i :class="item.icon"></i>
											{{ item.label }}
										</span>
									</nav>
								</aside>

								<section class="dashboard-main">
									<header class="dashboard-topbar">
										<div>
											<span>{{ selectedBusiness.badge }}</span>
											<h3>{{ previewHeadline }}</h3>
										</div>
										<div class="dashboard-user">
											<i class="bx bx-bell"></i>
											<strong>Owner</strong>
										</div>
									</header>

									<section class="dashboard-kpi-grid">
										<article v-for="metric in dashboardMetrics" :key="metric.label">
											<span>{{ metric.label }}</span>
											<strong>{{ metric.value }}</strong>
											<small>{{ metric.trend }}</small>
										</article>
									</section>

									<section class="dashboard-workspace">
										<div class="dashboard-panel large">
											<div class="dashboard-panel-heading">
												<div>
													<span>Operational Flow</span>
													<h4>ERP / Project pipeline</h4>
												</div>
												<strong>Live</strong>
											</div>
											<div class="dashboard-chart">
												<span v-for="bar in dashboardBars" :key="bar.label" :style="{ height: bar.value }">
													<small>{{ bar.label }}</small>
												</span>
											</div>
										</div>

										<div class="dashboard-panel">
											<div class="dashboard-panel-heading">
												<div>
													<span>Approval</span>
													<h4>Task urgent</h4>
												</div>
											</div>
											<ul class="dashboard-task-list">
												<li v-for="task in dashboardTasks" :key="task">
													<i class="bx bx-check-circle"></i>
													{{ task }}
												</li>
											</ul>
										</div>
									</section>

									<section class="dashboard-table-panel">
										<div class="dashboard-panel-heading">
											<div>
												<span>Data Management</span>
												<h4>Order, invoice, dan status pekerjaan</h4>
											</div>
											<button type="button">Tambah Data</button>
										</div>
										<div class="dashboard-table">
											<div class="dashboard-table-row head">
												<span>Client</span>
												<span>Module</span>
												<span>Status</span>
												<span>Amount</span>
											</div>
											<div v-for="row in dashboardRows" :key="row.client" class="dashboard-table-row">
												<span>{{ row.client }}</span>
												<span>{{ row.module }}</span>
												<span>
													<i :class="row.statusClass"></i>
													{{ row.status }}
												</span>
												<span>{{ row.amount }}</span>
											</div>
										</div>
									</section>

									<section class="dashboard-module-grid">
										<article v-for="module in dashboardModules" :key="module.title">
											<i :class="module.icon"></i>
											<h5>{{ module.title }}</h5>
											<p>{{ module.description }}</p>
										</article>
									</section>
								</section>
							</div>

							<div v-else class="mock-website">
								<header class="mock-nav">
									<strong>{{ previewBrand }}</strong>
									<nav :class="{ open: mockMenuOpen }">
										<span v-for="item in previewPages.slice(0, 4)" :key="item">{{ item }}</span>
									</nav>
									<button
										type="button"
										class="mock-menu-toggle"
										:aria-label="mockMenuOpen ? 'Tutup menu preview' : 'Buka menu preview'"
										@click="mockMenuOpen = !mockMenuOpen"
									>
										<i :class="mockMenuOpen ? 'bx bx-x' : 'bx bx-menu'"></i>
									</button>
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

								<section class="mock-about-section">
									<div>
										<span class="mock-section-label">Tentang Brand</span>
										<h4>{{ previewBrand }} dibuat untuk customer yang ingin keputusan lebih mudah.</h4>
										<p>{{ selectedBusiness.about }}</p>
									</div>
									<div class="mock-stats">
										<div v-for="stat in mockStats" :key="stat.label">
											<strong>{{ stat.value }}</strong>
											<span>{{ stat.label }}</span>
										</div>
									</div>
								</section>

								<section class="mock-content-section">
									<div class="mock-section-heading">
										<span class="mock-section-label">Layanan / Fitur</span>
										<h4>Bagian yang menjelaskan apa yang bisa dibantu.</h4>
									</div>
									<div class="mock-service-grid">
										<article v-for="service in mockServices" :key="service.title">
											<i :class="service.icon"></i>
											<h5>{{ service.title }}</h5>
											<p>{{ service.description }}</p>
										</article>
									</div>
								</section>

								<section v-if="shouldShowCatalog" class="mock-content-section alt">
									<div class="mock-section-heading">
										<span class="mock-section-label">{{ selectedBusiness.catalogLabel }}</span>
										<h4>{{ selectedBusiness.catalogTitle }}</h4>
									</div>
									<div class="mock-portfolio-grid">
										<article v-for="item in mockPortfolio" :key="item.title">
											<div class="mock-thumb">
												<i :class="item.icon"></i>
											</div>
											<h5>{{ item.title }}</h5>
											<span>{{ item.caption }}</span>
										</article>
									</div>
								</section>

								<section v-if="previewPages.includes('Testimoni')" class="mock-testimonial-section">
									<div>
										<span class="mock-section-label">Testimoni</span>
										<h4>Calon customer melihat bukti bahwa bisnis Anda bisa dipercaya.</h4>
									</div>
									<blockquote>
										"Informasinya jelas, mudah dipahami, dan kami jadi lebih cepat menghubungi tim {{ previewBrand }}."
									</blockquote>
								</section>

								<section v-if="previewPages.includes('Blog')" class="mock-content-section">
									<div class="mock-section-heading">
										<span class="mock-section-label">Insight / Blog</span>
										<h4>Konten edukasi untuk bantu SEO dan menjawab pertanyaan customer.</h4>
									</div>
									<div class="mock-blog-grid">
										<article v-for="post in mockBlogPosts" :key="post">
											<span>Artikel</span>
											<h5>{{ post }}</h5>
										</article>
									</div>
								</section>

								<section class="mock-pricing-section">
									<div class="mock-section-heading">
										<span class="mock-section-label">Paket / Penawaran</span>
										<h4>Area yang membantu visitor paham langkah berikutnya.</h4>
									</div>
									<div class="mock-price-grid">
										<article v-for="plan in mockPlans" :key="plan.name" :class="{ featured: plan.featured }">
											<span>{{ plan.name }}</span>
											<strong>{{ plan.price }}</strong>
											<p>{{ plan.description }}</p>
										</article>
									</div>
								</section>

								<section class="mock-contact-section">
									<div>
										<span class="mock-section-label">Kontak</span>
										<h4>Siap dibahas lebih lanjut?</h4>
										<p>Visitor bisa langsung menghubungi via WhatsApp, mengisi form, atau melihat lokasi bisnis.</p>
									</div>
									<div class="mock-contact-card">
										<span v-if="previewFeatures.includes('WhatsApp CTA')"><i class="bx bxl-whatsapp"></i> WhatsApp CTA aktif</span>
										<span v-if="previewFeatures.includes('Form Konsultasi')"><i class="bx bx-message-square-detail"></i> Form konsultasi</span>
										<span><i class="bx bx-map"></i> Area service / lokasi</span>
									</div>
								</section>

								<footer class="mock-footer">
									<strong>{{ previewBrand }}</strong>
									<span>{{ selectedBusiness.title }} - {{ packageRecommendation.name }}</span>
								</footer>
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

				<section class="builder-license" aria-labelledby="builder-license-title">
					<div>
						<span>License & Ownership Notice</span>
						<h2 id="builder-license-title">Website Builder Preview adalah karya original Codesyariah Webdev.</h2>
						<p>
							Konsep implementasi, source code, UI/UX, copywriting, struktur preview, dan materi visual pada fitur ini dibuat dan dikembangkan oleh Puji Ermanto selaku engineer / developer Codesyariah Webdev. Dilarang menyalin, mendistribusikan ulang, menjual ulang, atau membuat turunan komersial dari fitur ini tanpa izin tertulis.
						</p>
					</div>
					<div class="builder-license-card">
						<strong>Copyright © {{ currentYear }} Codesyariah Webdev</strong>
						<span>Creator & Developer: Puji Ermanto</span>
						<a href="/WEBSITE-BUILDER-LICENSE.txt" target="_blank" rel="noreferrer">
							Baca license notice <i class="bx bx-link-external"></i>
						</a>
					</div>
				</section>
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
			mockMenuOpen: false,
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
					about: "Bagian ini menjelaskan siapa bisnis Anda, masalah customer yang diselesaikan, dan alasan kenapa calon customer aman untuk mulai bertanya.",
					catalogLabel: "Portfolio",
					catalogTitle: "Contoh project atau dokumentasi pekerjaan yang bisa memperkuat kepercayaan.",
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
					about: "Landing page menonjolkan problem, benefit, bukti, dan CTA agar visitor dari iklan tidak kehilangan konteks saat masuk halaman.",
					catalogLabel: "Campaign Highlights",
					catalogTitle: "Bagian visual untuk menampilkan benefit, bonus, atau alasan visitor harus action sekarang.",
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
					about: "Katalog membantu customer melihat kategori, detail produk, harga awal, dan cara order tanpa harus scroll chat panjang.",
					catalogLabel: "Produk Unggulan",
					catalogTitle: "Grid produk yang rapi untuk membantu customer memilih sebelum menghubungi admin.",
					icon: "bx bx-store",
					metric: "100+",
					metricLabel: "produk siap tampil",
				},
				{
					id: "mobile-sales",
					title: "Sales Mobile / Canvassing",
					badge: "Field Sales Ready",
					offer: "Website sales mobile untuk tim lapangan, reseller, atau sales canvassing",
					headline: "Bantu sales menjelaskan produk lebih cepat dari HP.",
					subcopy: "Cocok untuk sales lapangan yang butuh katalog ringkas, script penawaran, tombol WhatsApp, dan form lead sederhana saat bertemu calon customer.",
					about: "Website sales mobile dibuat ringan, cepat dibuka, dan fokus membantu sales menjelaskan value produk tanpa membawa brosur fisik terlalu banyak.",
					catalogLabel: "Sales Kit",
					catalogTitle: "Materi penjualan mobile yang bisa dibuka cepat saat follow up calon customer.",
					icon: "bx bx-mobile-alt",
					metric: "1 tap",
					metricLabel: "hubungi prospek",
				},
				{
					id: "travel",
					title: "Tour Travel WhatsApp Order",
					badge: "Trip Booking",
					offer: "Website tour travel dengan pemesanan paket langsung via WhatsApp",
					headline: "Tampilkan paket wisata rapi, lalu arahkan booking ke WhatsApp.",
					subcopy: "Paket trip, itinerary, fasilitas, harga mulai, jadwal keberangkatan, dan tombol tanya admin dibuat jelas agar customer mudah booking tanpa checkout rumit.",
					about: "Website tour travel WhatsApp cocok untuk agen perjalanan yang ingin menampilkan paket secara profesional, tapi tetap menerima order lewat chat admin.",
					catalogLabel: "Paket Tour",
					catalogTitle: "Preview paket wisata lengkap dengan highlight destinasi, durasi, dan CTA tanya jadwal.",
					icon: "bx bx-map-alt",
					metric: "WA",
					metricLabel: "booking cepat",
				},
				{
					id: "system",
					title: "Web App / Dashboard",
					badge: "Operational Tools",
					offer: "Dashboard admin untuk workflow bisnis internal",
					headline: "Rapikan proses manual menjadi dashboard yang lebih mudah dipantau.",
					subcopy: "Data customer, order, laporan, user role, dan workflow internal bisa dibuat bertahap sesuai prioritas bisnis.",
					about: "Web app atau dashboard fokus pada data, proses, dan akses user supaya operasional tidak bergantung pada catatan manual.",
					catalogLabel: "Dashboard Modules",
					catalogTitle: "Preview modul admin untuk melihat data penting, status, dan aktivitas bisnis.",
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
		isDashboardPreview() {
			return this.form.businessType === "system";
		},
		dashboardMenu() {
			return [
				{ icon: "bx bx-grid-alt", label: "Overview", active: true },
				{ icon: "bx bx-user", label: "Customers", active: false },
				{ icon: "bx bx-package", label: "Orders", active: false },
				{ icon: "bx bx-receipt", label: "Invoices", active: false },
				{ icon: "bx bx-bar-chart-alt-2", label: "Reports", active: false },
				{ icon: "bx bx-lock-alt", label: "Roles", active: false },
			];
		},
		dashboardMetrics() {
			return [
				{ label: "Revenue", value: "Rp 86,4jt", trend: "+18% bulan ini" },
				{ label: "Active Orders", value: "128", trend: "24 perlu follow up" },
				{ label: "Inventory", value: "96%", trend: "stok aman" },
				{ label: "SLA Support", value: "1,8 jam", trend: "response rata-rata" },
			];
		},
		dashboardBars() {
			return [
				{ label: "Lead", value: "46%" },
				{ label: "Deal", value: "74%" },
				{ label: "Prod", value: "58%" },
				{ label: "QA", value: "88%" },
				{ label: "Done", value: "67%" },
			];
		},
		dashboardTasks() {
			return [
				"Approve invoice vendor minggu ini",
				"Follow up 8 order yang masih pending",
				"Cek laporan stok dan aktivitas user",
			];
		},
		dashboardRows() {
			return [
				{ client: "PT Sinar Abadi", module: "Procurement", status: "In review", amount: "Rp 18,5jt", statusClass: "bx bx-time-five warning" },
				{ client: "Grandia Hotel", module: "Booking", status: "Running", amount: "Rp 42jt", statusClass: "bx bx-check-circle success" },
				{ client: "Alazhar School", module: "Admission", status: "Deploy", amount: "Rp 27jt", statusClass: "bx bx-cloud-upload info" },
				{ client: "Retail Store", module: "Inventory", status: "Pending", amount: "Rp 9,8jt", statusClass: "bx bx-error-circle danger" },
			];
		},
		dashboardModules() {
			return [
				{ icon: "bx bx-data", title: "Master Data", description: "Customer, produk, supplier, cabang, dan kategori dibuat terpusat." },
				{ icon: "bx bx-transfer-alt", title: "Workflow Approval", description: "Alur request, validasi, revisi, dan approval bisa dipantau." },
				{ icon: "bx bx-shield-quarter", title: "Role Permission", description: "Owner, admin, finance, dan staff punya akses berbeda." },
				{ icon: "bx bx-line-chart", title: "Report Export", description: "Ringkasan performa bisa diekspor untuk evaluasi bisnis." },
			];
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
		mockStats() {
			return [
				{ value: this.selectedBusiness.metric, label: this.selectedBusiness.metricLabel },
				{ value: `${this.previewPages.length}+`, label: "halaman utama" },
				{ value: `${this.previewFeatures.length}+`, label: "fitur prioritas" },
			];
		},
		mockServices() {
			const serviceMap = {
				company: [
					{ icon: "bx bx-id-card", title: "Profil bisnis", description: "Menjelaskan perusahaan, layanan, legalitas, dan value utama." },
					{ icon: "bx bx-briefcase", title: "Portfolio", description: "Menampilkan bukti pekerjaan atau dokumentasi aktivitas." },
					{ icon: "bx bx-phone-call", title: "Lead contact", description: "CTA WhatsApp dan form agar visitor mudah menghubungi." },
				],
				landing: [
					{ icon: "bx bx-target-lock", title: "Offer fokus", description: "Headline, benefit, dan CTA disusun untuk campaign." },
					{ icon: "bx bx-bar-chart-alt-2", title: "Conversion flow", description: "Section dibuat mengikuti alur keputusan visitor." },
					{ icon: "bx bx-badge-check", title: "Trust proof", description: "Testimoni, bonus, garansi, atau bukti sosial." },
				],
				catalog: [
					{ icon: "bx bx-category", title: "Kategori produk", description: "Produk dikelompokkan supaya customer cepat menemukan pilihan." },
					{ icon: "bx bx-cart", title: "Order CTA", description: "Tombol order diarahkan ke WhatsApp atau checkout." },
					{ icon: "bx bx-filter-alt", title: "Detail item", description: "Harga, variasi, stok, atau informasi penting tampil jelas." },
				],
				"mobile-sales": [
					{ icon: "bx bx-mobile-alt", title: "Sales kit mobile", description: "Materi produk, benefit, dan FAQ bisa dibuka cepat dari HP sales." },
					{ icon: "bx bx-user-plus", title: "Lead capture", description: "Data prospek bisa dicatat dari form sederhana atau diarahkan ke WhatsApp." },
					{ icon: "bx bx-conversation", title: "Follow up script", description: "CTA dan pesan WhatsApp dibuat siap kirim untuk mempercepat closing." },
				],
				travel: [
					{ icon: "bx bx-map-pin", title: "Paket destinasi", description: "Trip dikelompokkan berdasarkan kota, durasi, harga, atau tipe perjalanan." },
					{ icon: "bx bx-calendar-check", title: "Jadwal trip", description: "Tanggal keberangkatan, kuota, dan fasilitas dibuat mudah dipahami." },
					{ icon: "bx bxl-whatsapp", title: "Booking WhatsApp", description: "Customer langsung tanya jadwal atau booking paket via admin WhatsApp." },
				],
				system: [
					{ icon: "bx bx-user-check", title: "User role", description: "Akses admin, staff, dan owner bisa dibedakan." },
					{ icon: "bx bx-data", title: "Database", description: "Data customer, order, atau laporan tersimpan lebih rapi." },
					{ icon: "bx bx-line-chart", title: "Dashboard", description: "Ringkasan status bisnis dapat dipantau dari satu tempat." },
				],
			};

			return serviceMap[this.form.businessType] || serviceMap.company;
		},
		mockPortfolio() {
			const portfolioMap = {
				company: [
					{ icon: "bx bx-buildings", title: "Company profile", caption: "Tentang, layanan, portfolio" },
					{ icon: "bx bx-image", title: "Gallery activity", caption: "Dokumentasi dan kredibilitas" },
					{ icon: "bx bx-message-square-check", title: "Inquiry page", caption: "CTA dan kontak cepat" },
				],
				landing: [
					{ icon: "bx bx-gift", title: "Promo benefit", caption: "Alasan visitor action" },
					{ icon: "bx bx-timer", title: "Campaign urgency", caption: "Periode dan bonus" },
					{ icon: "bx bx-like", title: "Social proof", caption: "Review dan bukti" },
				],
				catalog: [
					{ icon: "bx bx-package", title: "Produk utama", caption: "Foto, harga, detail" },
					{ icon: "bx bx-purchase-tag", title: "Paket bundling", caption: "Promo dan rekomendasi" },
					{ icon: "bx bx-support", title: "Order assist", caption: "Tanya admin cepat" },
				],
				"mobile-sales": [
					{ icon: "bx bx-id-card", title: "Profil sales", caption: "Nama, area, kontak cepat" },
					{ icon: "bx bx-carousel", title: "Produk pitch", caption: "Benefit dan materi demo" },
					{ icon: "bx bx-message-rounded-check", title: "Lead follow up", caption: "Pesan WA siap kirim" },
				],
				travel: [
					{ icon: "bx bx-landscape", title: "Open trip", caption: "Destinasi dan itinerary" },
					{ icon: "bx bx-hotel", title: "Fasilitas paket", caption: "Hotel, transport, guide" },
					{ icon: "bx bxl-whatsapp", title: "Tanya jadwal", caption: "Booking via WhatsApp" },
				],
				system: [
					{ icon: "bx bx-grid-alt", title: "Admin overview", caption: "Status dan ringkasan" },
					{ icon: "bx bx-table", title: "Data management", caption: "CRUD dan filter" },
					{ icon: "bx bx-lock-alt", title: "Access control", caption: "Role dan permission" },
				],
			};

			return portfolioMap[this.form.businessType] || portfolioMap.company;
		},
		mockBlogPosts() {
			return [
				`Cara memilih ${this.selectedBusiness.title.toLowerCase()} yang tepat`,
				"Pertanyaan customer yang paling sering muncul",
				"Tips menyiapkan konten sebelum website dibuat",
			];
		},
		mockPlans() {
			return [
				{ name: "Starter", price: "Basic", description: "Cocok untuk validasi awal dan halaman inti.", featured: false },
				{ name: this.packageRecommendation.name, price: "Recommended", description: this.packageRecommendation.description, featured: true },
				{ name: "Scale", price: "Custom", description: "Untuk fitur lanjutan, integrasi, atau dashboard.", featured: false },
			];
		},
		shouldShowCatalog() {
			return this.previewPages.includes("Portfolio") || this.previewPages.includes("Produk") || this.form.businessType !== "company";
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

			if (this.form.businessType === "mobile-sales") {
				return {
					name: "Mobile Sales Kit",
					description: "Cocok untuk sales lapangan, katalog mobile, lead capture, dan follow up WhatsApp.",
				};
			}

			if (this.form.businessType === "travel") {
				return {
					name: "Travel WhatsApp Landing",
					description: "Cocok untuk paket tour, itinerary, jadwal trip, dan order langsung via WhatsApp admin.",
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
		currentYear() {
			return new Date().getFullYear();
		},
	},
	watch: {
		previewMode(value) {
			if (value !== "mobile") {
				this.mockMenuOpen = false;
			}
		},
		"form.businessType"(value) {
			this.mockMenuOpen = false;

			const presets = {
				"mobile-sales": {
					pages: ["Home", "Produk", "Testimoni", "Kontak"],
					features: ["WhatsApp CTA", "Responsive Design", "Katalog Produk", "Form Konsultasi"],
				},
				travel: {
					pages: ["Home", "Layanan", "Produk", "Testimoni", "Kontak"],
					features: ["WhatsApp CTA", "SEO Basic", "Responsive Design", "Katalog Produk"],
				},
				system: {
					pages: ["Home", "Layanan", "Portfolio", "Kontak"],
					features: ["Responsive Design", "Dashboard Admin", "Form Konsultasi"],
				},
			};

			if (presets[value]) {
				this.form.pages = presets[value].pages;
				this.form.features = presets[value].features;
			}
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
	align-items: flex-end;
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
	align-items: flex-start;
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
	height: 720px;
	padding: 18px;
	background:
		linear-gradient(135deg, #e7f4f2, #f8fcfc);
}

.preview-shell.mobile .mock-website {
	width: min(360px, 100%);
}

.mock-website {
	width: 100%;
	height: 100%;
	overflow-y: auto;
	border-radius: 8px;
	background: #ffffff;
	box-shadow: 0 24px 70px rgba(16, 45, 53, 0.2);
}

.mock-nav {
	position: sticky;
	top: 0;
	z-index: 3;
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

.mock-menu-toggle {
	display: none;
	place-items: center;
	width: 40px;
	height: 40px;
	border: 1px solid rgba(255, 255, 255, 0.16);
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.1);
	color: #ffffff;
	font-size: 24px;
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

.mock-about-section,
.mock-content-section,
.mock-testimonial-section,
.mock-pricing-section,
.mock-contact-section {
	padding: 28px 32px;
	border-top: 1px solid #e3eeee;
}

.mock-about-section {
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(240px, 0.8fr);
	gap: 22px;
	align-items: center;
	background: #ffffff;
}

.mock-section-label {
	display: inline-flex;
	margin-bottom: 10px;
	color: var(--builder-primary);
	font-size: 11px;
	font-weight: 900;
	letter-spacing: 0.5px;
	text-transform: uppercase;
}

.mock-about-section h4,
.mock-section-heading h4,
.mock-testimonial-section h4,
.mock-contact-section h4 {
	margin: 0;
	color: var(--builder-dark);
	font-size: clamp(22px, 3vw, 34px);
	line-height: 1.16;
	font-weight: 900;
}

.mock-about-section p,
.mock-contact-section p {
	margin: 12px 0 0;
	color: #60777d;
	line-height: 1.65;
}

.mock-stats {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 10px;
}

.mock-stats div {
	padding: 14px;
	border-radius: 8px;
	background: var(--builder-soft);
	color: var(--builder-dark);
}

.mock-stats strong,
.mock-stats span {
	display: block;
}

.mock-stats strong {
	font-size: 24px;
	line-height: 1;
}

.mock-stats span {
	margin-top: 7px;
	font-size: 11px;
	font-weight: 900;
	text-transform: uppercase;
}

.mock-content-section {
	background: #f7fbfb;
}

.mock-content-section.alt {
	background: #ffffff;
}

.mock-section-heading {
	display: grid;
	grid-template-columns: minmax(0, 0.9fr) minmax(180px, 0.45fr);
	gap: 18px;
	align-items: flex-end;
	margin-bottom: 18px;
}

.mock-service-grid,
.mock-portfolio-grid,
.mock-blog-grid,
.mock-price-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 12px;
}

.mock-service-grid article,
.mock-portfolio-grid article,
.mock-blog-grid article,
.mock-price-grid article {
	padding: 16px;
	border-radius: 8px;
	background: #ffffff;
	border: 1px solid #e3eeee;
}

.mock-service-grid i {
	color: var(--builder-primary);
	font-size: 28px;
}

.mock-service-grid h5,
.mock-portfolio-grid h5,
.mock-blog-grid h5 {
	margin: 12px 0 7px;
	color: #102d35;
	font-size: 15px;
	font-weight: 900;
	line-height: 1.25;
}

.mock-service-grid p,
.mock-price-grid p {
	margin: 0;
	color: #60777d;
	font-size: 13px;
	line-height: 1.55;
}

.mock-thumb {
	display: grid;
	place-items: center;
	aspect-ratio: 4 / 3;
	border-radius: 8px;
	background: linear-gradient(135deg, var(--builder-dark), rgba(16, 45, 53, 0.8));
	color: var(--builder-primary);
	font-size: 34px;
}

.mock-portfolio-grid span,
.mock-blog-grid span {
	color: #75898e;
	font-size: 12px;
	font-weight: 800;
}

.mock-testimonial-section {
	display: grid;
	grid-template-columns: minmax(0, 0.9fr) minmax(260px, 1fr);
	gap: 22px;
	align-items: center;
	background: var(--builder-dark);
	color: #ffffff;
}

.mock-testimonial-section h4 {
	color: #ffffff;
}

.mock-testimonial-section blockquote {
	margin: 0;
	padding: 20px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.1);
	color: rgba(255, 255, 255, 0.84);
	font-size: 18px;
	line-height: 1.65;
}

.mock-blog-grid article {
	min-height: 120px;
}

.mock-pricing-section {
	background: #ffffff;
}

.mock-price-grid article.featured {
	background: var(--builder-dark);
	color: #ffffff;
	border-color: var(--builder-dark);
	transform: translateY(-4px);
}

.mock-price-grid span,
.mock-price-grid strong {
	display: block;
}

.mock-price-grid span {
	color: #75898e;
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.mock-price-grid strong {
	margin: 8px 0;
	color: var(--builder-dark);
	font-size: 22px;
}

.mock-price-grid article.featured span,
.mock-price-grid article.featured p {
	color: rgba(255, 255, 255, 0.72);
}

.mock-price-grid article.featured strong {
	color: var(--builder-primary);
}

.mock-contact-section {
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(240px, 0.8fr);
	gap: 18px;
	align-items: center;
	background:
		linear-gradient(135deg, var(--builder-soft), #ffffff);
}

.mock-contact-card {
	display: grid;
	gap: 9px;
	padding: 16px;
	border-radius: 8px;
	background: #ffffff;
	border: 1px solid rgba(16, 45, 53, 0.12);
}

.mock-contact-card span {
	display: flex;
	align-items: center;
	gap: 8px;
	color: #315059;
	font-size: 13px;
	font-weight: 900;
}

.mock-contact-card i {
	color: var(--builder-primary);
	font-size: 20px;
}

.mock-footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	padding: 18px 32px;
	background: var(--builder-dark);
	color: #ffffff;
}

.mock-footer strong,
.mock-footer span {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.mock-footer span {
	color: rgba(255, 255, 255, 0.68);
	font-size: 12px;
	font-weight: 800;
}

.dashboard-mock {
	display: grid;
	grid-template-columns: 210px minmax(0, 1fr);
	background: #eef5f6;
	color: #102d35;
}

.dashboard-sidebar {
	position: sticky;
	top: 0;
	align-self: flex-start;
	min-height: 100%;
	padding: 18px 14px;
	background:
		linear-gradient(180deg, var(--builder-dark), #07171d);
	color: #ffffff;
}

.dashboard-brand {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 8px 8px 20px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.dashboard-brand span {
	display: grid;
	place-items: center;
	width: 36px;
	height: 36px;
	border-radius: 8px;
	background: var(--builder-primary);
	color: #06201a;
	font-size: 12px;
	font-weight: 900;
}

.dashboard-brand strong {
	min-width: 0;
	overflow: hidden;
	color: #ffffff;
	font-size: 14px;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.dashboard-sidebar nav {
	display: grid;
	gap: 7px;
	margin-top: 18px;
}

.dashboard-sidebar nav span {
	display: flex;
	align-items: center;
	gap: 10px;
	min-height: 40px;
	padding: 9px 10px;
	border-radius: 8px;
	color: rgba(255, 255, 255, 0.64);
	font-size: 12px;
	font-weight: 900;
}

.dashboard-sidebar nav span.active {
	background: rgba(255, 255, 255, 0.1);
	color: #ffffff;
}

.dashboard-sidebar i {
	color: var(--builder-primary);
	font-size: 19px;
}

.dashboard-main {
	display: grid;
	gap: 16px;
	padding: 20px;
}

.dashboard-topbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 18px;
	padding: 18px;
	border: 1px solid #dbe9ea;
	border-radius: 8px;
	background: #ffffff;
}

.dashboard-topbar span,
.dashboard-panel-heading span {
	display: block;
	margin-bottom: 5px;
	color: var(--builder-primary);
	font-size: 11px;
	font-weight: 900;
	text-transform: uppercase;
}

.dashboard-topbar h3 {
	margin: 0;
	color: var(--builder-dark);
	font-size: clamp(22px, 3vw, 34px);
	line-height: 1.12;
}

.dashboard-user {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 9px 11px;
	border-radius: 8px;
	background: #f2f8f8;
	color: #315059;
	font-size: 13px;
}

.dashboard-user i {
	color: var(--builder-primary);
	font-size: 20px;
}

.dashboard-kpi-grid,
.dashboard-module-grid {
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	gap: 12px;
}

.dashboard-kpi-grid article,
.dashboard-panel,
.dashboard-table-panel,
.dashboard-module-grid article {
	border: 1px solid #dbe9ea;
	border-radius: 8px;
	background: #ffffff;
	box-shadow: 0 12px 30px rgba(16, 45, 53, 0.06);
}

.dashboard-kpi-grid article {
	padding: 16px;
}

.dashboard-kpi-grid span,
.dashboard-kpi-grid small {
	display: block;
	color: #70878c;
	font-size: 12px;
	font-weight: 800;
}

.dashboard-kpi-grid strong {
	display: block;
	margin: 8px 0 6px;
	color: var(--builder-dark);
	font-size: 24px;
	line-height: 1;
}

.dashboard-kpi-grid small {
	color: #0f9f78;
}

.dashboard-workspace {
	display: grid;
	grid-template-columns: minmax(0, 1.35fr) minmax(230px, 0.65fr);
	gap: 12px;
}

.dashboard-panel,
.dashboard-table-panel {
	padding: 16px;
}

.dashboard-panel-heading {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 14px;
	margin-bottom: 16px;
}

.dashboard-panel-heading h4 {
	margin: 0;
	color: var(--builder-dark);
	font-size: 18px;
	font-weight: 900;
}

.dashboard-panel-heading > strong,
.dashboard-panel-heading button {
	border: 0;
	border-radius: 999px;
	background: var(--builder-soft);
	color: var(--builder-dark);
	font-size: 11px;
	font-weight: 900;
}

.dashboard-panel-heading > strong {
	padding: 7px 10px;
}

.dashboard-panel-heading button {
	min-height: 32px;
	padding: 7px 12px;
	cursor: default;
}

.dashboard-chart {
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	gap: 12px;
	align-items: flex-end;
	min-height: 190px;
	padding: 14px;
	border-radius: 8px;
	background:
		linear-gradient(rgba(16, 45, 53, 0.06) 1px, transparent 1px) 0 0 / 100% 25%,
		#f7fbfb;
}

.dashboard-chart span {
	position: relative;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	min-height: 42px;
	border-radius: 8px 8px 4px 4px;
	background: linear-gradient(180deg, var(--builder-primary), var(--builder-dark));
}

.dashboard-chart small {
	position: absolute;
	bottom: -22px;
	color: #70878c;
	font-size: 11px;
	font-weight: 900;
}

.dashboard-task-list {
	display: grid;
	gap: 10px;
	margin: 0;
	padding: 0;
	list-style: none;
}

.dashboard-task-list li {
	display: flex;
	gap: 9px;
	padding: 10px;
	border-radius: 8px;
	background: #f7fbfb;
	color: #465e65;
	font-size: 13px;
	line-height: 1.45;
}

.dashboard-task-list i {
	color: var(--builder-primary);
	font-size: 18px;
}

.dashboard-table {
	display: grid;
	overflow: hidden;
	border: 1px solid #e3eeee;
	border-radius: 8px;
}

.dashboard-table-row {
	display: grid;
	grid-template-columns: 1.1fr 1fr 0.9fr 0.75fr;
	gap: 12px;
	align-items: center;
	min-width: 580px;
	padding: 12px 14px;
	border-top: 1px solid #e3eeee;
	color: #415960;
	font-size: 13px;
	font-weight: 800;
}

.dashboard-table-row.head {
	border-top: 0;
	background: #f7fbfb;
	color: #70878c;
	font-size: 11px;
	font-weight: 900;
	text-transform: uppercase;
}

.dashboard-table-row i {
	margin-right: 5px;
	font-size: 14px;
}

.dashboard-table-row i.success {
	color: #0f9f78;
}

.dashboard-table-row i.warning {
	color: #d97706;
}

.dashboard-table-row i.info {
	color: #0284c7;
}

.dashboard-table-row i.danger {
	color: #e11d48;
}

.dashboard-module-grid article {
	padding: 16px;
}

.dashboard-module-grid i {
	color: var(--builder-primary);
	font-size: 28px;
}

.dashboard-module-grid h5 {
	margin: 12px 0 7px;
	color: var(--builder-dark);
	font-size: 15px;
	font-weight: 900;
}

.dashboard-module-grid p {
	margin: 0;
	color: #60777d;
	font-size: 13px;
	line-height: 1.55;
}

.preview-shell.premium .mock-website {
	background: #101820;
}

.preview-shell.premium .mock-hero,
.preview-shell.premium .mock-sections article,
.preview-shell.premium .mock-about-section,
.preview-shell.premium .mock-content-section,
.preview-shell.premium .mock-service-grid article,
.preview-shell.premium .mock-portfolio-grid article,
.preview-shell.premium .mock-blog-grid article,
.preview-shell.premium .mock-price-grid article,
.preview-shell.premium .mock-contact-card {
	background: #17242d;
	border-color: rgba(255, 255, 255, 0.1);
}

.preview-shell.premium .mock-hero h3,
.preview-shell.premium .mock-sections h4,
.preview-shell.premium .mock-about-section h4,
.preview-shell.premium .mock-section-heading h4,
.preview-shell.premium .mock-service-grid h5,
.preview-shell.premium .mock-portfolio-grid h5,
.preview-shell.premium .mock-blog-grid h5,
.preview-shell.premium .mock-contact-section h4 {
	color: #ffffff;
}

.preview-shell.premium .mock-hero p,
.preview-shell.premium .mock-sections p,
.preview-shell.premium .mock-about-section p,
.preview-shell.premium .mock-service-grid p,
.preview-shell.premium .mock-price-grid p,
.preview-shell.premium .mock-contact-section p,
.preview-shell.premium .mock-contact-card span {
	color: rgba(255, 255, 255, 0.7);
}

.preview-shell.premium .mock-contact-section,
.preview-shell.premium .mock-pricing-section {
	background: #101820;
}

.preview-shell.premium .dashboard-mock {
	background: #101820;
}

.preview-shell.premium .dashboard-topbar,
.preview-shell.premium .dashboard-kpi-grid article,
.preview-shell.premium .dashboard-panel,
.preview-shell.premium .dashboard-table-panel,
.preview-shell.premium .dashboard-module-grid article,
.preview-shell.premium .dashboard-user,
.preview-shell.premium .dashboard-task-list li {
	background: #17242d;
	border-color: rgba(255, 255, 255, 0.1);
}

.preview-shell.premium .dashboard-topbar h3,
.preview-shell.premium .dashboard-panel-heading h4,
.preview-shell.premium .dashboard-kpi-grid strong,
.preview-shell.premium .dashboard-module-grid h5 {
	color: #ffffff;
}

.preview-shell.premium .dashboard-kpi-grid span,
.preview-shell.premium .dashboard-kpi-grid small,
.preview-shell.premium .dashboard-user,
.preview-shell.premium .dashboard-task-list li,
.preview-shell.premium .dashboard-table-row,
.preview-shell.premium .dashboard-module-grid p {
	color: rgba(255, 255, 255, 0.7);
}

.preview-shell.premium .dashboard-chart,
.preview-shell.premium .dashboard-table-row.head {
	background-color: #101820;
}

.preview-shell.friendly .mock-website,
.preview-shell.friendly .mock-sections article,
.preview-shell.friendly .mock-visual,
.preview-shell.friendly .dashboard-kpi-grid article,
.preview-shell.friendly .dashboard-panel,
.preview-shell.friendly .dashboard-table-panel,
.preview-shell.friendly .dashboard-module-grid article {
	border-radius: 8px;
}

.preview-shell.mobile .mock-nav {
	position: sticky;
	overflow: visible;
	padding: 0 16px;
}

.preview-shell.mobile .mock-nav nav {
	position: absolute;
	top: calc(100% + 10px);
	right: 12px;
	left: 12px;
	display: grid;
	gap: 8px;
	padding: 10px;
	border: 1px solid rgba(255, 255, 255, 0.14);
	border-radius: 8px;
	background:
		linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04)),
		var(--builder-dark);
	box-shadow: 0 18px 42px rgba(0, 0, 0, 0.28);
	opacity: 0;
	pointer-events: none;
	transform: translateY(-8px);
	transition: 0.2s ease;
}

.preview-shell.mobile .mock-nav nav.open {
	opacity: 1;
	pointer-events: auto;
	transform: translateY(0);
}

.preview-shell.mobile .mock-nav nav span {
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 40px;
	padding: 10px 12px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.08);
	color: rgba(255, 255, 255, 0.92);
	font-size: 11px;
}

.preview-shell.mobile .mock-nav nav span::after {
	content: "";
	width: 7px;
	height: 7px;
	border-top: 2px solid currentColor;
	border-right: 2px solid currentColor;
	transform: rotate(45deg);
	opacity: 0.45;
}

.preview-shell.mobile .mock-menu-toggle {
	display: grid;
}

.preview-shell.mobile .mock-hero,
.preview-shell.mobile .mock-sections,
.preview-shell.mobile .mock-about-section,
.preview-shell.mobile .mock-section-heading,
.preview-shell.mobile .mock-service-grid,
.preview-shell.mobile .mock-portfolio-grid,
.preview-shell.mobile .mock-blog-grid,
.preview-shell.mobile .mock-price-grid,
.preview-shell.mobile .mock-testimonial-section,
.preview-shell.mobile .mock-contact-section {
	grid-template-columns: 1fr;
}

.preview-shell.mobile .dashboard-mock {
	grid-template-columns: 1fr;
}

.preview-shell.mobile .dashboard-sidebar {
	position: static;
	min-height: auto;
	padding: 14px;
}

.preview-shell.mobile .dashboard-sidebar nav {
	display: flex;
	overflow-x: auto;
	padding-bottom: 4px;
}

.preview-shell.mobile .dashboard-sidebar nav span {
	flex: 0 0 auto;
}

.preview-shell.mobile .dashboard-main {
	padding: 14px;
}

.preview-shell.mobile .dashboard-topbar,
.preview-shell.mobile .dashboard-workspace {
	grid-template-columns: 1fr;
}

.preview-shell.mobile .dashboard-topbar {
	display: grid;
}

.preview-shell.mobile .dashboard-kpi-grid,
.preview-shell.mobile .dashboard-module-grid {
	grid-template-columns: repeat(2, minmax(0, 1fr));
}

.preview-shell.mobile .dashboard-table {
	overflow-x: auto;
}

.preview-shell.mobile .dashboard-chart {
	min-height: 160px;
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

.builder-license {
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(280px, 0.6fr);
	gap: 20px;
	align-items: center;
	margin-top: 20px;
	padding: 24px;
	border: 1px solid rgba(16, 45, 53, 0.12);
	border-radius: 8px;
	background:
		linear-gradient(135deg, rgba(8, 32, 39, 0.96), rgba(8, 53, 55, 0.92)),
		url("~/assets/img/new-hero-bg-1-desktop.jpg") center / cover;
	color: #ffffff;
	box-shadow: 0 24px 70px rgba(16, 45, 53, 0.16);
}

.builder-license span {
	display: inline-flex;
	margin-bottom: 8px;
	color: #18d19b;
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.builder-license h2 {
	margin: 0;
	color: #ffffff;
	font-size: clamp(24px, 3vw, 38px);
	line-height: 1.15;
}

.builder-license p {
	margin: 12px 0 0;
	color: rgba(255, 255, 255, 0.72);
	line-height: 1.7;
}

.builder-license-card {
	display: grid;
	gap: 8px;
	padding: 18px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.16);
	backdrop-filter: blur(16px);
}

.builder-license-card strong {
	color: #ffffff;
	font-size: 18px;
	line-height: 1.3;
}

.builder-license-card span {
	margin: 0;
	color: rgba(255, 255, 255, 0.72);
	text-transform: none;
}

.builder-license-card a {
	display: inline-flex;
	align-items: center;
	gap: 7px;
	width: fit-content;
	margin-top: 4px;
	color: #18d19b;
	font-weight: 900;
}

@media (max-width: 1100px) {
	.builder-grid,
	.builder-summary,
	.builder-license {
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
