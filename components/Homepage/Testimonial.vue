<template>
	<section id="testimonials" class="testimonial-proof">
		<div class="container">
			<div class="proof-heading">
				<div>
					<p class="proof-eyebrow">Customer Stories</p>
					<h2>Dipercaya untuk membuat bisnis lebih siap tampil dan beroperasi secara digital.</h2>
				</div>
				<p>
					Testimoni berikut menggambarkan kebutuhan yang sering datang dari owner bisnis, admin sekolah, toko online, dan tim sales yang ingin mulai digital tanpa harus paham teknis terlalu dalam.
				</p>
			</div>

			<div class="proof-stats">
				<div v-for="stat in stats" :key="stat.label">
					<strong>{{ stat.value }}</strong>
					<span>{{ stat.label }}</span>
				</div>
			</div>

			<div class="testimonial-grid">
				<article v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
					<div class="testimonial-top">
						<img :src="testimonial.avatar" :alt="testimonial.name">
						<div>
							<h3>{{ testimonial.name }}</h3>
							<span>{{ testimonial.role }}</span>
						</div>
					</div>
					<div class="project-badge">
						<i :class="testimonial.icon"></i>
						{{ testimonial.project }}
					</div>
					<p>“{{ testimonial.quote }}”</p>
					<div class="result-box">
						<strong>Yang paling terasa:</strong>
						<span>{{ testimonial.result }}</span>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			stats: [
				{ value: "12+", label: "tipe kebutuhan website & sistem pernah ditangani" },
				{ value: "6", label: "kategori layanan utama untuk bisnis" },
				{ value: "1:1", label: "komunikasi langsung sampai launch" },
			],
			testimonials: [
				{
					name: "Raka Pratama",
					role: "Owner UMKM Retail",
					project: "Company Profile & Katalog",
					icon: "bx bx-store",
					avatar: require("~/assets/img/testimonials/kevin.jpg"),
					quote: "Awalnya kami cuma punya Instagram dan sering ditanya katalog, alamat, sampai cara order berulang-ulang. Setelah website jadi, customer baru bisa baca layanan, lihat produk, dan langsung chat WhatsApp tanpa kami jelaskan dari nol terus.",
					result: "Tim sales lebih hemat waktu menjawab pertanyaan dasar dan brand terlihat lebih rapi saat dibagikan ke calon customer.",
				},
				{
					name: "Maya Lestari",
					role: "Admin Sekolah",
					project: "Website Informasi & PPDB",
					icon: "bx bx-book-open",
					avatar: require("~/assets/img/testimonials/lucy.jpg"),
					quote: "Kami bukan orang teknis, jadi yang paling membantu adalah penjelasannya pelan dan jelas. Alur halaman dibuat gampang dipahami orang tua murid, lalu informasi pendaftaran bisa kami arahkan lewat satu link.",
					result: "Informasi sekolah, fasilitas, dan pendaftaran lebih mudah dicari oleh orang tua calon siswa.",
				},
				{
					name: "Dina Kurnia",
					role: "Marketing Lead",
					project: "Sales Promotion Landing",
					icon: "bx bx-bullseye",
					avatar: require("~/assets/img/testimonials/testimonials-2.jpg"),
					quote: "Sebelumnya iklan kami diarahkan ke chat langsung, banyak lead bingung karena belum tahu promo dan benefitnya. Landing page promo membantu menjelaskan penawaran dulu, baru calon customer klik konsultasi.",
					result: "Lead yang masuk lebih siap bertanya karena sudah membaca promo, benefit, dan langkah konsultasi.",
				},
				{
					name: "Nadia Putri",
					role: "Founder Produk Lokal",
					project: "E-Commerce & Checkout",
					icon: "bx bx-cart",
					avatar: require("~/assets/img/testimonials/testimonials-3.jpg"),
					quote: "Kami butuh toko online yang tidak terlalu rumit, tapi tetap terlihat profesional. Katalog, detail produk, dan flow order dibuat lebih jelas sehingga customer awam tidak takut mencoba order.",
					result: "Produk lebih mudah dipresentasikan dan proses order terasa lebih terarah dari katalog sampai checkout.",
				},
				{
					name: "Andri Wijaya",
					role: "Koordinator Operasional",
					project: "Dashboard Internal",
					icon: "bx bx-grid-alt",
					avatar: require("~/assets/img/testimonials/testimonials-1.jpg"),
					quote: "Beberapa data operasional kami tadinya masih di spreadsheet terpisah. Setelah dibuatkan dashboard sederhana, tim bisa melihat data yang sama dan update pekerjaan jadi lebih mudah dipantau.",
					result: "Data internal lebih terkumpul, pekerjaan lebih mudah dicek, dan tidak terlalu bergantung pada file manual.",
				},
			],
		};
	},
};
</script>

<style scoped>
#testimonials.testimonial-proof {
	position: relative;
	padding: 86px 0;
	background: #f7fbfb;
	color: #102d35;
	text-align: left;
}

#testimonials.testimonial-proof:before {
	content: "";
	position: absolute;
	inset: 0;
	background:
		linear-gradient(90deg, rgba(24, 209, 155, 0.08), transparent 34%),
		radial-gradient(circle at 88% 14%, rgba(255, 183, 39, 0.14), transparent 24%);
	pointer-events: none;
}

.testimonial-proof .container {
	position: relative;
	z-index: 2;
}

.proof-heading {
	display: grid;
	grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
	gap: 34px;
	align-items: end;
	margin-bottom: 26px;
}

.proof-eyebrow {
	margin: 0 0 12px;
	color: #08946d;
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.proof-heading h2 {
	margin: 0;
	color: #102d35;
	font-size: clamp(28px, 4vw, 48px);
	line-height: 1.12;
	font-weight: 900;
}

.proof-heading > p {
	margin: 0;
	color: #5d7075;
	font-size: 17px;
	line-height: 1.75;
}

.proof-stats {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 14px;
	margin-bottom: 24px;
}

.proof-stats div {
	padding: 20px;
	border-radius: 8px;
	background: #ffffff;
	border: 1px solid #e1eeee;
	box-shadow: 0 14px 36px rgba(17, 51, 60, 0.07);
}

.proof-stats strong,
.proof-stats span {
	display: block;
}

.proof-stats strong {
	margin-bottom: 6px;
	color: #08946d;
	font-size: 30px;
	line-height: 1;
}

.proof-stats span {
	color: #52696f;
	line-height: 1.45;
}

.testimonial-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 20px;
}

.testimonial-card {
	display: flex;
	flex-direction: column;
	min-height: 100%;
	padding: 24px;
	border-radius: 8px;
	background: #ffffff;
	border: 1px solid #dfecec;
	box-shadow: 0 18px 50px rgba(17, 51, 60, 0.08);
	transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.testimonial-card:hover {
	transform: translateY(-6px);
	box-shadow: 0 28px 68px rgba(17, 51, 60, 0.14);
}

.testimonial-card:nth-child(1),
.testimonial-card:nth-child(2) {
	grid-column: span 1;
}

.testimonial-top {
	display: flex;
	align-items: center;
	gap: 13px;
	margin-bottom: 16px;
}

.testimonial-top img {
	width: 56px;
	height: 56px;
	border-radius: 50%;
	object-fit: cover;
	border: 3px solid #e5faf3;
}

.testimonial-top h3 {
	margin: 0;
	color: #102d35;
	font-size: 18px;
	font-weight: 900;
}

.testimonial-top span {
	display: block;
	color: #6b7d82;
	font-size: 13px;
}

.project-badge {
	display: inline-flex;
	align-items: center;
	align-self: flex-start;
	gap: 8px;
	margin-bottom: 16px;
	padding: 8px 11px;
	border-radius: 999px;
	background: #eafbf5;
	color: #087756;
	font-size: 12px;
	font-weight: 900;
}

.project-badge i {
	font-size: 18px;
}

.testimonial-card p {
	margin: 0 0 18px;
	color: #435a60;
	font-size: 15px;
	line-height: 1.72;
}

.result-box {
	margin-top: auto;
	padding: 15px;
	border-radius: 8px;
	background: #0d2b33;
	color: #ffffff;
}

.result-box strong,
.result-box span {
	display: block;
}

.result-box strong {
	margin-bottom: 6px;
	color: #18d19b;
	font-size: 13px;
}

.result-box span {
	color: rgba(255, 255, 255, 0.78);
	line-height: 1.55;
}

@media (min-width: 992px) {
	.testimonial-card:nth-child(1),
	.testimonial-card:nth-child(2) {
		grid-column: span 1;
	}
}

@media (max-width: 991px) {
	.proof-heading,
	.proof-stats,
	.testimonial-grid {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 575px) {
	#testimonials.testimonial-proof {
		padding: 66px 0;
	}
}
</style>
