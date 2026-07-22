<template>
	<section id="pricing" class="pricing modern-pricing">
		<div class="container" data-aos="fade-up">
			<div class="section-title">
				<span>Pricing</span>
				<h2>Paket Sesuai Kondisi Bisnis</h2>
				<p class="text-center">Pilih kebutuhan paling dekat dengan kondisi Anda sekarang. Kalau belum yakin, mulai dari konsultasi singkat supaya scope, timeline, dan budget bisa lebih rasional.</p>
			</div>

			<div class="pricing-grid" data-aos="fade-left">
				<article v-for="product in products" :key="product.id" class="price-card" :class="{ highlighted: product.highlighted }">
					<div class="merdeka-ribbon">
						<i class="bx bxs-coupon"></i>
						{{ product.discount }}
					</div>
					<div class="price-head">
						<span>{{ product.label }}</span>
						<h3>{{ product.name }}</h3>
						<div class="promo-price">
							<del>{{ product.originalPrice }}</del>
							<strong>{{ product.price }}</strong>
							<small>{{ product.promoNote }}</small>
						</div>
					</div>
					<p>{{ product.description }}</p>
					<ul>
						<li v-for="feature in product.features" :key="feature">
							<i class="bx bx-check"></i>
							{{ feature }}
						</li>
					</ul>
					<a :href="`/products/detailed/${product.permalink}`" class="price-link">
						Lihat Detail <i class="bx bx-right-arrow-alt"></i>
					</a>
				</article>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ["categories", "carts"],

	data() {
		return {
			products: [
				{
					id: 1,
					permalink: "product-1",
					label: "Launch cepat",
					name: "Company Profile",
					originalPrice: "Mulai 1.8JT",
					price: "Promo 1.5JT",
					discount: "Hemat 300RB",
					promoNote: "Promo Merdeka untuk 10 claim/hari",
					description: "Untuk bisnis yang ingin tampil kredibel, punya halaman layanan jelas, dan mudah dihubungi calon customer.",
					features: ["Landing page atau company profile", "Copywriting dasar dan CTA WhatsApp", "Responsive mobile dan desktop", "SEO basic dan struktur konten rapi"],
				},
				{
					id: 2,
					permalink: "product-2",
					label: "Paling fleksibel",
					name: "Business Website",
					originalPrice: "Mulai 5JT",
					price: "Promo 4JT",
					discount: "Hemat 1JT",
					promoNote: "Bonus konsultasi scope dan struktur konten",
					description: "Untuk bisnis yang butuh website dengan katalog, form, integrasi, halaman detail, dan pengelolaan konten lebih serius.",
					features: ["Katalog produk atau layanan", "Dashboard/admin sesuai kebutuhan", "Integrasi payment atau API ringan", "Setup domain, hosting, dan SSL"],
					highlighted: true,
				},
				{
					id: 3,
					permalink: "product-3",
					label: "Sistem custom",
					name: "Web App & Automation",
					originalPrice: "By Scope",
					price: "Diskon 17%",
					discount: "Merdeka 17%",
					promoNote: "Potongan jasa development setelah scope disepakati",
					description: "Untuk perusahaan yang ingin merapikan proses manual menjadi sistem internal, dashboard, booking, CRM, atau workflow khusus.",
					features: ["Analisis flow bisnis", "Role user dan database custom", "REST API dan integrasi third party", "Testing, deploy, dan support awal"],
				},
			],
		};
	},
};
</script>

<style scoped>
.modern-pricing {
	background: #ffffff;
}

.pricing-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 20px;
}

.price-card {
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: 100%;
	padding: 28px;
	border-radius: 8px;
	border: 1px solid #e4eeee;
	background: #ffffff;
	box-shadow: 0 18px 50px rgba(20, 50, 58, 0.08);
	transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.merdeka-ribbon {
	position: absolute;
	top: 18px;
	right: 18px;
	display: inline-flex;
	align-items: center;
	gap: 6px;
	min-height: 30px;
	padding: 6px 10px;
	border-radius: 999px;
	background: #ef4444;
	color: #ffffff;
	font-size: 12px;
	font-weight: 900;
	box-shadow: 0 12px 24px rgba(239, 68, 68, 0.22);
}

.merdeka-ribbon i {
	font-size: 16px;
}

.price-card:hover {
	transform: translateY(-6px);
	box-shadow: 0 26px 62px rgba(20, 50, 58, 0.14);
}

.price-card.highlighted {
	border-color: #18d19b;
	background: linear-gradient(180deg, #f2fffb 0%, #ffffff 52%);
}

.price-head span {
	display: inline-flex;
	padding: 7px 11px;
	border-radius: 999px;
	background: #e8fbf5;
	color: #087756;
	font-size: 12px;
	font-weight: 800;
}

.price-head h3 {
	margin: 18px 0 10px;
	color: #102d35;
	font-size: 24px;
	font-weight: 800;
	font-family: "Raleway", sans-serif;
}

.price-head strong {
	display: block;
	color: #07946d;
	font-size: 28px;
	line-height: 1.1;
}

.promo-price {
	display: grid;
	gap: 5px;
}

.promo-price del {
	color: #92a1a6;
	font-size: 15px;
	font-weight: 800;
}

.promo-price small {
	color: #e11d48;
	font-size: 12px;
	font-weight: 900;
	line-height: 1.35;
}

.price-card p {
	margin: 18px 0;
	color: #5f6f74;
	line-height: 1.65;
}

.price-card ul {
	padding: 0;
	margin: 0 0 24px;
	list-style: none;
	display: grid;
	gap: 10px;
	text-align: left;
}

.price-card li {
	display: flex;
	gap: 9px;
	align-items: flex-start;
	color: #31464d;
	line-height: 1.45;
}

.price-card li i {
	color: #18d19b;
	font-size: 20px;
	margin-top: 1px;
}

.price-link {
	margin-top: auto;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 7px;
	min-height: 44px;
	padding: 0 18px;
	border-radius: 999px;
	background: #0d2b33;
	color: #ffffff;
	font-weight: 800;
}

.price-link:hover {
	color: #ffffff;
	background: #18a77d;
}

@media (max-width: 991px) {
	.pricing-grid {
		grid-template-columns: 1fr;
	}
}
</style>
