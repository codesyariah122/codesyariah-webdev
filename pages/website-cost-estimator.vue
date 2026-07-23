<template>
	<main class="estimator-page">
		<section class="estimator-hero">
			<div class="estimator-container">
				<div class="estimator-copy">
					<p class="estimator-eyebrow">Website Cost Estimator</p>
					<h1>Hitung estimasi budget website sebelum konsultasi.</h1>
					<p>
						Jawab beberapa pertanyaan sederhana. Estimator ini membantu calon customer memahami range biaya, timeline, kompleksitas, dan fitur yang sebaiknya diprioritaskan sebelum ngobrol teknis.
					</p>
					<div class="estimator-actions">
						<a href="#estimator-tool" class="primary-action scrollto">Mulai Hitung <i class="bx bx-calculator"></i></a>
						<NuxtLink to="/website-builder" class="secondary-action">Lihat Builder <i class="bx bx-slider-alt"></i></NuxtLink>
					</div>
				</div>
					<div class="estimator-hero-card">
					<span>Estimasi promo awal</span>
					<strong>{{ formattedRange }}</strong>
					<del>{{ formattedNormalRange }}</del>
					<p>{{ packageName }} - {{ timelineLabel }}</p>
					<small>{{ promoLabel }}</small>
				</div>
			</div>
		</section>

		<section id="estimator-tool" class="estimator-tool">
			<div class="estimator-container">
				<div class="estimator-heading">
					<div>
						<p class="estimator-eyebrow">Scope Calculator</p>
						<h2>Range harga dibuat realistis, bukan tebak-tebakan.</h2>
					</div>
					<p>
						Angka ini mengikuti promo Merdeka yang sedang berlangsung. Harga final tetap mengikuti scope, materi, revisi, integrasi, dan kondisi teknis sebenarnya.
					</p>
				</div>

				<div class="estimator-grid">
					<aside class="estimator-form" aria-label="Form estimator biaya website">
						<div class="control-group">
							<label for="websiteType">Jenis website</label>
							<select id="websiteType" v-model="form.websiteType">
								<option v-for="type in websiteTypes" :key="type.id" :value="type.id">
									{{ type.title }}
								</option>
							</select>
						</div>

						<div class="control-group">
							<label for="pageCount">Jumlah halaman utama</label>
							<input id="pageCount" v-model.number="form.pageCount" type="range" min="1" max="20">
							<div class="range-value">{{ form.pageCount }} halaman</div>
						</div>

						<div class="control-group">
							<label for="contentHelp">Bantuan konten</label>
							<select id="contentHelp" v-model="form.contentHelp">
								<option v-for="option in contentOptions" :key="option.id" :value="option.id">
									{{ option.title }}
								</option>
							</select>
						</div>

						<div class="control-group">
							<label for="deadline">Target deadline</label>
							<select id="deadline" v-model="form.deadline">
								<option v-for="option in deadlineOptions" :key="option.id" :value="option.id">
									{{ option.title }}
								</option>
							</select>
						</div>

						<div class="control-group">
							<label>Fitur prioritas</label>
							<div class="checkbox-list">
								<label v-for="feature in featureOptions" :key="feature.id">
									<input v-model="form.features" type="checkbox" :value="feature.id">
									<span>{{ feature.title }}</span>
								</label>
							</div>
						</div>
					</aside>

					<section class="estimator-result" aria-label="Hasil estimasi biaya website">
						<div class="result-top">
							<span>Estimasi Budget Promo</span>
							<strong>{{ formattedRange }}</strong>
							<del>{{ formattedNormalRange }}</del>
							<p>{{ selectedWebsite.description }}</p>
							<div class="promo-estimator-badge">
								<i class="bx bxs-coupon"></i>
								{{ promoLabel }}
							</div>
						</div>

						<div class="result-metrics">
							<article>
								<span>Paket</span>
								<strong>{{ packageName }}</strong>
							</article>
							<article>
								<span>Kompleksitas</span>
								<strong>{{ complexityLabel }}</strong>
							</article>
							<article>
								<span>Timeline</span>
								<strong>{{ timelineLabel }}</strong>
							</article>
						</div>

						<div class="result-breakdown">
							<h3>Rincian faktor biaya</h3>
							<ul>
								<li>
									<span>Base {{ selectedWebsite.title }}</span>
									<strong>{{ formatCurrency(selectedWebsite.min) }} - {{ formatCurrency(selectedWebsite.max) }}</strong>
								</li>
								<li v-if="extraPages > 0">
									<span>Tambahan {{ extraPages }} halaman</span>
									<strong>{{ formatCurrency(pageCost.min) }} - {{ formatCurrency(pageCost.max) }}</strong>
								</li>
								<li v-if="contentCost.max > 0">
									<span>{{ selectedContent.title }}</span>
									<strong>{{ formatCurrency(contentCost.min) }} - {{ formatCurrency(contentCost.max) }}</strong>
								</li>
								<li v-for="feature in selectedFeatures" :key="feature.id">
									<span>{{ feature.title }}</span>
									<strong>{{ formatCurrency(feature.min) }} - {{ formatCurrency(feature.max) }}</strong>
								</li>
								<li v-if="deadlineMultiplier > 0">
									<span>Penyesuaian deadline cepat</span>
									<strong>+{{ Math.round(deadlineMultiplier * 100) }}%</strong>
								</li>
								<li class="promo-breakdown">
									<span>Promo Kemerdekaan 17 Agustus</span>
									<strong>-{{ formattedPromoSavings }}</strong>
								</li>
							</ul>
						</div>

						<div class="recommendation-box">
							<span>Rekomendasi awal</span>
							<p>{{ recommendationText }}</p>
						</div>

						<div class="result-actions">
							<button type="button" @click="sendEstimate">
								Kirim Estimasi ke WhatsApp <i class="bx bxl-whatsapp"></i>
							</button>
							<NuxtLink to="/website-builder">Lihat Preview Website</NuxtLink>
						</div>
					</section>
				</div>

				<section class="estimator-license" aria-labelledby="estimator-license-title">
					<div>
						<span>License & Ownership Notice</span>
						<h2 id="estimator-license-title">Website Cost Estimator adalah fitur original Codesyariah Webdev.</h2>
						<p>
							Konsep kalkulasi estimasi biaya, struktur pertanyaan, rekomendasi paket, logic range harga, UI/UX, copywriting, dan integrasi WhatsApp pada fitur ini dibuat dan dikembangkan oleh Puji Ermanto selaku engineer / developer Codesyariah Webdev.
						</p>
					</div>
					<div class="estimator-license-card">
						<strong>Copyright © {{ currentYear }} Codesyariah Webdev</strong>
						<span>Creator & Developer: Puji Ermanto</span>
						<span>Release date: 20 July 2026</span>
						<span>GitHub commit: 1643bf8 / 2026-07-20 15:49 WIB</span>
						<a href="/WEBSITE-COST-ESTIMATOR-LICENSE.txt" target="_blank" rel="noreferrer">
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
	name: "WebsiteCostEstimatorPage",
	layout: "page",
	head() {
		return {
			title: "Website Cost Estimator - Codesyariah Webdevelopment",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"Hitung estimasi biaya website, timeline, kompleksitas, dan rekomendasi fitur sebelum konsultasi project dengan Codesyariah Webdev.",
				},
			],
		};
	},
	data() {
		return {
			form: {
				websiteType: "company",
				pageCount: 5,
				contentHelp: "basic",
				deadline: "normal",
				features: ["whatsapp", "seo", "responsive"],
			},
			websiteTypes: [
				{ id: "landing", title: "Landing Page Promosi", min: 1200000, max: 3500000, basePages: 1, timelineMin: 3, timelineMax: 7, description: "Untuk campaign, iklan, promo, launching produk, atau validasi penawaran." },
				{ id: "company", title: "Company Profile", min: 1500000, max: 5000000, basePages: 5, timelineMin: 5, timelineMax: 14, description: "Untuk bisnis yang ingin tampil kredibel, punya layanan jelas, dan mudah dihubungi." },
				{ id: "catalog", title: "Katalog Produk / Jasa", min: 3000000, max: 8000000, basePages: 6, timelineMin: 10, timelineMax: 21, description: "Untuk menampilkan kategori, detail produk, tombol order, dan alur tanya admin." },
				{ id: "travel", title: "Tour Travel WhatsApp Order", min: 3500000, max: 9000000, basePages: 6, timelineMin: 10, timelineMax: 21, description: "Untuk paket tour, itinerary, jadwal, fasilitas, galeri, dan booking via WhatsApp." },
				{ id: "sales", title: "Sales Mobile / Canvassing", min: 2500000, max: 7000000, basePages: 4, timelineMin: 7, timelineMax: 18, description: "Untuk sales kit mobile, katalog cepat, lead capture, dan follow up WhatsApp." },
				{ id: "dashboard", title: "Web App / Dashboard", min: 8000000, max: 35000000, basePages: 8, timelineMin: 21, timelineMax: 56, description: "Untuk database, role user, laporan, approval, integrasi, dan workflow internal." },
			],
			contentOptions: [
				{ id: "self", title: "Konten disiapkan customer", min: 0, max: 0 },
				{ id: "basic", title: "Copywriting dasar dibantu", min: 500000, max: 1200000 },
				{ id: "full", title: "Copywriting dan struktur konten full", min: 1200000, max: 2500000 },
			],
			deadlineOptions: [
				{ id: "relaxed", title: "Santai / fleksibel", multiplier: 0, timelineFactor: 1.15 },
				{ id: "normal", title: "Normal", multiplier: 0, timelineFactor: 1 },
				{ id: "fast", title: "Cepat", multiplier: 0.18, timelineFactor: 0.75 },
				{ id: "urgent", title: "Urgent / prioritas", multiplier: 0.35, timelineFactor: 0.55 },
			],
			featureOptions: [
				{ id: "whatsapp", title: "WhatsApp CTA", min: 0, max: 300000, complexity: 0 },
				{ id: "seo", title: "SEO Basic", min: 300000, max: 1000000, complexity: 1 },
				{ id: "responsive", title: "Responsive Mobile", min: 0, max: 500000, complexity: 0 },
				{ id: "form", title: "Form Konsultasi", min: 500000, max: 1500000, complexity: 1 },
				{ id: "catalog", title: "Katalog Produk", min: 1000000, max: 4000000, complexity: 2 },
				{ id: "cms", title: "Blog / CMS Admin", min: 1500000, max: 5000000, complexity: 2 },
				{ id: "payment", title: "Payment Gateway", min: 2500000, max: 8000000, complexity: 3 },
				{ id: "dashboard", title: "Dashboard Admin", min: 2500000, max: 9000000, complexity: 3 },
				{ id: "api", title: "API / Integrasi", min: 2000000, max: 8000000, complexity: 3 },
			],
		};
	},
	computed: {
		currentYear() {
			return new Date().getFullYear();
		},
		profiles() {
			return this.$store.state.profiles?.[0];
		},
		whatsappPhone() {
			return this.profiles?.fields?.phone || "6288222668778";
		},
		promoCode() {
			return "MERDEKA17";
		},
		selectedWebsite() {
			return this.websiteTypes.find((item) => item.id === this.form.websiteType) || this.websiteTypes[0];
		},
		selectedContent() {
			return this.contentOptions.find((item) => item.id === this.form.contentHelp) || this.contentOptions[0];
		},
		selectedDeadline() {
			return this.deadlineOptions.find((item) => item.id === this.form.deadline) || this.deadlineOptions[1];
		},
		selectedFeatures() {
			return this.featureOptions.filter((item) => this.form.features.includes(item.id));
		},
		extraPages() {
			return Math.max(0, this.form.pageCount - this.selectedWebsite.basePages);
		},
		pageCost() {
			return {
				min: this.extraPages * 250000,
				max: this.extraPages * 750000,
			};
		},
		contentCost() {
			return {
				min: this.selectedContent.min,
				max: this.selectedContent.max,
			};
		},
		subtotal() {
			const featureMin = this.selectedFeatures.reduce((sum, item) => sum + item.min, 0);
			const featureMax = this.selectedFeatures.reduce((sum, item) => sum + item.max, 0);

			return {
				min: this.selectedWebsite.min + this.pageCost.min + this.contentCost.min + featureMin,
				max: this.selectedWebsite.max + this.pageCost.max + this.contentCost.max + featureMax,
			};
		},
		deadlineMultiplier() {
			return this.selectedDeadline.multiplier;
		},
		totalNormalRange() {
			return {
				min: Math.round(this.subtotal.min * (1 + this.deadlineMultiplier)),
				max: Math.round(this.subtotal.max * (1 + this.deadlineMultiplier)),
			};
		},
		promoRule() {
			const isAdvanced =
				this.form.websiteType === "dashboard" || this.complexityLabel === "Advanced";
			const isBusiness = ["catalog", "travel", "sales"].includes(this.form.websiteType);

			if (isAdvanced) {
				return {
					type: "percentage",
					discount: 0.17,
					label: "Diskon 17% jasa development dengan kupon MERDEKA17",
				};
			}

			if (isBusiness || this.complexityLabel === "Medium") {
				return {
					type: "floor",
					minFloor: 4000000,
					maxDiscount: 0.12,
					label: "Promo Business Website mulai Rp4jt",
				};
			}

			return {
				type: "floor",
				minFloor: 1500000,
				maxDiscount: 0.1,
				label: "Promo Starter Website mulai Rp1.5jt",
			};
		},
		totalRange() {
			if (this.promoRule.type === "percentage") {
				return {
					min: Math.round(this.totalNormalRange.min * (1 - this.promoRule.discount)),
					max: Math.round(this.totalNormalRange.max * (1 - this.promoRule.discount)),
				};
			}

			return {
				min: Math.min(this.totalNormalRange.min, Math.max(this.promoRule.minFloor, Math.round(this.totalNormalRange.min * 0.92))),
				max: Math.round(this.totalNormalRange.max * (1 - this.promoRule.maxDiscount)),
			};
		},
		formattedRange() {
			return `${this.formatCurrency(this.totalRange.min)} - ${this.formatCurrency(this.totalRange.max)}`;
		},
		formattedNormalRange() {
			return `${this.formatCurrency(this.totalNormalRange.min)} - ${this.formatCurrency(this.totalNormalRange.max)}`;
		},
		formattedPromoSavings() {
			const min = Math.max(0, this.totalNormalRange.min - this.totalRange.min);
			const max = Math.max(0, this.totalNormalRange.max - this.totalRange.max);
			return `${this.formatCurrency(min)} - ${this.formatCurrency(max)}`;
		},
		promoLabel() {
			return `${this.promoRule.label} - claim terbatas 10 calon customer/hari`;
		},
		complexityScore() {
			const featureScore = this.selectedFeatures.reduce((sum, item) => sum + item.complexity, 0);
			const pageScore = this.form.pageCount > 10 ? 2 : this.form.pageCount > 5 ? 1 : 0;
			const typeScore = this.form.websiteType === "dashboard" ? 4 : this.form.websiteType === "catalog" || this.form.websiteType === "travel" ? 2 : 1;
			return featureScore + pageScore + typeScore;
		},
		complexityLabel() {
			if (this.complexityScore >= 9) return "Advanced";
			if (this.complexityScore >= 5) return "Medium";
			return "Simple";
		},
		packageName() {
			if (this.form.websiteType === "dashboard" || this.complexityLabel === "Advanced") return "Custom Web App";
			if (this.form.websiteType === "landing") return "Landing Campaign";
			if (this.form.websiteType === "sales") return "Mobile Sales Kit";
			if (this.form.websiteType === "travel") return "Travel WhatsApp Landing";
			if (this.complexityLabel === "Medium") return "Business Website";
			return "Starter Website";
		},
		timelineLabel() {
			const min = Math.max(2, Math.round(this.selectedWebsite.timelineMin * this.selectedDeadline.timelineFactor));
			const max = Math.max(min + 2, Math.round(this.selectedWebsite.timelineMax * this.selectedDeadline.timelineFactor));
			return max <= 14 ? `${min}-${max} hari kerja` : `${Math.ceil(min / 7)}-${Math.ceil(max / 7)} minggu`;
		},
		recommendationText() {
			if (this.form.websiteType === "dashboard") {
				return "Mulai dari mapping workflow dan MVP. Hindari langsung membuat semua fitur agar budget dan timeline tetap terkendali.";
			}
			if (this.totalRange.min <= 2500000) {
				return "Scope masih ringan. Cocok mulai dari halaman inti, CTA WhatsApp, copywriting dasar, dan struktur SEO basic.";
			}
			if (this.complexityLabel === "Advanced") {
				return "Scope sudah cukup kompleks. Sebaiknya dibuat fase prioritas: launch awal, lalu integrasi atau dashboard lanjutan.";
			}
			return "Scope berada di tengah. Fokuskan fitur yang paling dekat dengan lead, order, dan kepercayaan calon customer.";
		},
	},
	methods: {
		formatCurrency(value) {
			if (value >= 1000000) {
				const million = value / 1000000;
				return `Rp${Number.isInteger(million) ? million : million.toFixed(1).replace(".", ",")}jt`;
			}
			return `Rp${Math.round(value / 1000)}rb`;
		},
		sendEstimate() {
			const message = [
				"Halo Codesyariah, saya ingin konsultasi dari Website Cost Estimator.",
				`Jenis website: ${this.selectedWebsite.title}`,
				`Jumlah halaman: ${this.form.pageCount}`,
				`Bantuan konten: ${this.selectedContent.title}`,
				`Deadline: ${this.selectedDeadline.title}`,
				`Fitur: ${this.selectedFeatures.map((item) => item.title).join(", ") || "Belum pilih fitur"}`,
				`Estimasi normal: ${this.formattedNormalRange}`,
				`Estimasi promo ${this.promoCode}: ${this.formattedRange}`,
				`Promo: ${this.promoLabel}`,
				`Paket rekomendasi: ${this.packageName}`,
				`Kompleksitas: ${this.complexityLabel}`,
				`Timeline: ${this.timelineLabel}`,
			].join("\n");

			window.open(`https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
		},
	},
};
</script>

<style scoped>
.estimator-page {
	background: #f7fbfb;
	color: #102d35;
}

.estimator-container {
	width: min(1180px, calc(100% - 32px));
	margin: 0 auto;
}

.estimator-hero {
	position: relative;
	overflow: hidden;
	padding: 138px 0 76px;
	background:
		linear-gradient(135deg, rgba(5, 20, 25, 0.96), rgba(9, 48, 53, 0.9)),
		url("~/assets/img/new-hero-bg-1-desktop.jpg") center / cover no-repeat;
	color: #ffffff;
}

.estimator-hero .estimator-container {
	display: grid;
	grid-template-columns: minmax(0, 1.05fr) minmax(300px, 0.65fr);
	gap: 32px;
	align-items: center;
}

.estimator-eyebrow {
	margin: 0 0 12px;
	color: #18d19b;
	font-size: 12px;
	font-weight: 900;
	letter-spacing: 0.08em;
	text-transform: uppercase;
}

.estimator-copy h1 {
	margin: 0;
	max-width: 760px;
	font-size: clamp(40px, 7vw, 78px);
	line-height: 0.98;
	font-weight: 900;
}

.estimator-copy > p {
	max-width: 690px;
	margin: 20px 0 0;
	color: rgba(255, 255, 255, 0.78);
	font-size: 17px;
	line-height: 1.75;
}

.estimator-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
	margin-top: 28px;
}

.primary-action,
.secondary-action,
.estimator-result button,
.result-actions a {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	min-height: 46px;
	padding: 11px 18px;
	border-radius: 8px;
	font-weight: 900;
}

.primary-action,
.estimator-result button {
	border: 0;
	background: #18d19b;
	color: #06201a;
	box-shadow: 0 18px 38px rgba(24, 209, 155, 0.24);
}

.secondary-action,
.result-actions a {
	border: 1px solid rgba(255, 255, 255, 0.2);
	color: #ffffff;
	background: rgba(255, 255, 255, 0.08);
}

.estimator-hero-card {
	padding: 26px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.14);
	box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
	backdrop-filter: blur(18px);
}

.estimator-hero-card span,
.result-top span,
.result-metrics span,
.recommendation-box span {
	display: block;
	margin-bottom: 6px;
	color: #18d19b;
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.estimator-hero-card strong {
	display: block;
	color: #ffffff;
	font-size: 32px;
	line-height: 1.15;
}

.estimator-hero-card del,
.result-top del {
	display: block;
	width: fit-content;
	margin-top: 8px;
	color: rgba(255, 255, 255, 0.55);
	font-size: 15px;
	font-weight: 900;
	text-decoration-color: #ef4444;
	text-decoration-thickness: 2px;
}

.estimator-hero-card p {
	margin: 10px 0 0;
	color: rgba(255, 255, 255, 0.72);
}

.estimator-hero-card small {
	display: block;
	margin-top: 12px;
	color: #fef3c7;
	font-size: 12px;
	font-weight: 900;
	line-height: 1.45;
}

.estimator-tool {
	padding: 84px 0;
}

.estimator-heading {
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(280px, 0.7fr);
	gap: 24px;
	align-items: flex-end;
	margin-bottom: 28px;
}

.estimator-heading h2 {
	margin: 0;
	color: #102d35;
	font-size: clamp(30px, 4vw, 52px);
	line-height: 1.08;
}

.estimator-heading > p {
	margin: 0;
	color: #5b6d72;
	line-height: 1.7;
}

.estimator-grid {
	display: grid;
	grid-template-columns: minmax(290px, 0.82fr) minmax(0, 1.18fr);
	gap: 20px;
	align-items: start;
}

.estimator-form,
.estimator-result {
	border: 1px solid #dcebea;
	border-radius: 8px;
	background: #ffffff;
	box-shadow: 0 18px 46px rgba(17, 51, 60, 0.08);
}

.estimator-form {
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

.control-group input[type="range"] {
	accent-color: #18d19b;
}

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

.range-value {
	width: fit-content;
	padding: 7px 10px;
	border-radius: 999px;
	background: #d9fff1;
	color: #0f766e;
	font-size: 12px;
	font-weight: 900;
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
	accent-color: #18d19b;
}

.estimator-result {
	overflow: hidden;
}

.result-top {
	padding: 26px;
	background:
		linear-gradient(135deg, #082027, #0f3d3c);
	color: #ffffff;
}

.result-top strong {
	display: block;
	font-size: clamp(34px, 5vw, 58px);
	line-height: 1;
}

.result-top p {
	margin: 14px 0 0;
	color: rgba(255, 255, 255, 0.75);
	line-height: 1.65;
}

.promo-estimator-badge {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	margin-top: 16px;
	padding: 9px 12px;
	border-radius: 999px;
	background: rgba(239, 68, 68, 0.16);
	border: 1px solid rgba(254, 202, 202, 0.22);
	color: #fee2e2;
	font-size: 12px;
	font-weight: 900;
	line-height: 1.35;
}

.promo-estimator-badge i {
	color: #fca5a5;
	font-size: 17px;
}

.result-metrics {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 12px;
	padding: 18px;
}

.result-metrics article,
.recommendation-box {
	padding: 16px;
	border-radius: 8px;
	background: #f7fbfb;
	border: 1px solid #e3eeee;
}

.result-metrics strong {
	color: #102d35;
	font-size: 20px;
	line-height: 1.2;
}

.result-breakdown {
	padding: 6px 18px 18px;
}

.result-breakdown h3 {
	margin: 0 0 12px;
	color: #102d35;
	font-size: 20px;
}

.result-breakdown ul {
	display: grid;
	gap: 8px;
	margin: 0;
	padding: 0;
	list-style: none;
}

.result-breakdown li {
	display: flex;
	justify-content: space-between;
	gap: 14px;
	padding: 12px;
	border-radius: 8px;
	background: #ffffff;
	border: 1px solid #e3eeee;
	color: #526a70;
	font-size: 13px;
}

.result-breakdown strong {
	color: #102d35;
	text-align: right;
	white-space: nowrap;
}

.result-breakdown li.promo-breakdown {
	background: #fff5f5;
	border-color: #fecaca;
	color: #991b1b;
	font-weight: 900;
}

.result-breakdown li.promo-breakdown strong {
	color: #dc2626;
}

.recommendation-box {
	margin: 0 18px 18px;
}

.recommendation-box p {
	margin: 0;
	color: #526a70;
	line-height: 1.65;
}

.result-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	padding: 0 18px 20px;
}

.result-actions a {
	border-color: #d7e7e8;
	color: #27434b;
	background: #ffffff;
}

.estimator-license {
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(280px, 0.54fr);
	gap: 22px;
	align-items: stretch;
	margin-top: 28px;
	padding: 24px;
	border: 1px solid #dcebea;
	border-radius: 8px;
	background:
		linear-gradient(135deg, rgba(8, 32, 39, 0.96), rgba(15, 61, 60, 0.92)),
		url("~/assets/img/new-hero-bg-1-desktop.jpg") center / cover no-repeat;
	color: #ffffff;
	box-shadow: 0 18px 46px rgba(17, 51, 60, 0.12);
}

.estimator-license span {
	display: block;
	color: #18d19b;
	font-size: 12px;
	font-weight: 900;
	letter-spacing: 0.08em;
	text-transform: uppercase;
}

.estimator-license h2 {
	margin: 10px 0 0;
	max-width: 780px;
	font-size: clamp(26px, 3vw, 42px);
	line-height: 1.1;
	font-weight: 900;
}

.estimator-license p {
	max-width: 760px;
	margin: 14px 0 0;
	color: rgba(255, 255, 255, 0.75);
	line-height: 1.75;
}

.estimator-license-card {
	display: grid;
	align-content: center;
	gap: 10px;
	padding: 20px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.14);
}

.estimator-license-card strong {
	color: #ffffff;
	font-size: 18px;
	line-height: 1.35;
}

.estimator-license-card span {
	color: rgba(255, 255, 255, 0.74);
	font-size: 13px;
	letter-spacing: 0;
	text-transform: none;
}

.estimator-license-card a {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	width: fit-content;
	margin-top: 6px;
	color: #18d19b;
	font-weight: 900;
}

@media (max-width: 991px) {
	.estimator-hero .estimator-container,
	.estimator-heading,
	.estimator-grid,
	.estimator-license {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 575px) {
	.estimator-container {
		width: min(100% - 24px, 1180px);
	}

	.estimator-hero {
		padding: 116px 0 58px;
	}

	.estimator-copy h1 {
		font-size: 40px;
	}

	.estimator-tool {
		padding: 58px 0;
	}

	.checkbox-list,
	.result-metrics {
		grid-template-columns: 1fr;
	}

	.result-breakdown li {
		display: grid;
	}

	.result-breakdown strong {
		text-align: left;
	}
}
</style>
