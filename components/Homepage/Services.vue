<template>
	<section id="services" class="services modern-services">
		<div class="container">
			<div class="section-title">
				<span>Services</span>
				<h2>Layanan Digital Yang Jelas Dari Awal</h2>
				<p class="text-center">
					Kami bantu bisnis membangun website, aplikasi, API, e-commerce, dan server dengan penjelasan yang mudah dipahami. Anda tidak perlu mengerti istilah teknis dulu untuk mulai punya sistem digital yang rapi.
				</p>
			</div>

			<div class="service-intro">
				<div>
					<p class="eyebrow">Masalah yang sering kami tangani</p>
					<h3>Website belum terlihat profesional, sistem mulai berantakan, atau server sering bikin bisnis tertahan.</h3>
				</div>
				<ul>
					<li v-for="pain in painPoints" :key="pain">
						<i class="bx bx-check-circle"></i>
						<span>{{ pain }}</span>
					</li>
				</ul>
			</div>

			<div class="row g-4">
				<div v-for="service in services" :key="service.title" class="col-md-6 col-lg-4 d-flex align-items-stretch">
					<article class="service-card">
						<div class="service-promo-badge">
							<i class="bx bxs-discount"></i>
							Promo Merdeka 17%
						</div>
						<div class="service-top">
							<div class="icon"><i :class="service.icon"></i></div>
							<span>{{ service.code }}</span>
						</div>
						<h4>{{ service.title }}</h4>
						<p>{{ service.description }}</p>
						<div class="service-output">
							<strong>Output:</strong>
							{{ service.output }}
						</div>
					</article>
				</div>
			</div>

			<div class="service-process">
				<div v-for="step in process" :key="step.title" class="process-item">
					<span>{{ step.number }}</span>
					<h4>{{ step.title }}</h4>
					<p>{{ step.description }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			painPoints: [
				"Bisnis butuh website yang terlihat kredibel dan mudah dihubungi.",
				"Order, booking, data customer, atau laporan masih dikerjakan manual.",
				"Website error, lambat, checkout gagal, atau deploy production buntu.",
			],
			services: [
				{
					code: "01",
					icon: "bx bx-code-alt",
					title: "Laravel & API",
					description: "Backend, dashboard admin, REST API, role user, integrasi payment, dan sistem internal yang siap dipakai operasional.",
					output: "sistem stabil, alur data jelas, dan mudah dikembangkan.",
				},
				{
					code: "02",
					icon: "bx bx-layout",
					title: "Company Profile & Landing Page",
					description: "Website bisnis dengan tampilan premium, copywriting lebih informatif, SEO basic, tombol WhatsApp, dan struktur halaman yang meyakinkan.",
					output: "brand terlihat profesional dan calon customer cepat paham.",
				},
				{
					code: "03",
					icon: "bx bx-store",
					title: "E-Commerce & Marketplace",
					description: "Katalog produk, checkout, invoice, manajemen order, membership, promo, dan fitur yang mengikuti cara bisnis Anda berjualan.",
					output: "proses jualan online lebih tertata dari katalog sampai order.",
				},
				{
					code: "04",
					icon: "bx bx-server",
					title: "VPS, Deploy & Recovery",
					description: "Setup server, domain, SSL, Nginx, database, migrasi, debugging production, backup flow, dan hardening dasar.",
					output: "website naik online dengan konfigurasi yang lebih aman.",
				},
				{
					code: "05",
					icon: "bx bx-wrench",
					title: "Maintenance Sistem",
					description: "Perawatan berkala, bug fixing, optimasi performa, update fitur kecil, monitoring, dan pengecekan masalah sebelum makin besar.",
					output: "bisnis tidak berhenti karena masalah teknis kecil.",
				},
				{
					code: "06",
					icon: "bx bx-grid-alt",
					title: "Custom Business Tools",
					description: "CRM, booking, payroll, dashboard laporan, automation, sistem PPDB, inventory, dan tools sesuai flow kerja perusahaan.",
					output: "pekerjaan manual berubah menjadi proses digital yang terukur.",
				},
			],
			process: [
				{
					number: "01",
					title: "Audit Kebutuhan",
					description: "Kami petakan tujuan bisnis, kondisi sistem, prioritas fitur, dan risiko teknis dengan bahasa sederhana.",
				},
				{
					number: "02",
					title: "Eksekusi Terarah",
					description: "Desain, development, perbaikan, integrasi, dan testing dikerjakan sesuai scope yang sudah disepakati.",
				},
				{
					number: "03",
					title: "Launch & Pendampingan",
					description: "Website atau sistem dipublikasikan, dicek ulang, lalu disiapkan untuk support dan pengembangan berikutnya.",
				},
			],
		};
	},
};
</script>

<style scoped>
.modern-services {
	background: #f7fbfb;
}

.service-intro {
	display: grid;
	grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
	gap: 28px;
	align-items: center;
	margin-bottom: 34px;
	padding: 28px;
	border-radius: 8px;
	background: #082027;
	color: #ffffff;
	box-shadow: 0 24px 60px rgba(8, 32, 39, 0.16);
}

.service-intro .eyebrow {
	margin-bottom: 10px;
	color: #18d19b;
	font-weight: 800;
	text-transform: uppercase;
	font-size: 12px;
}

.service-intro h3 {
	margin: 0;
	font-size: clamp(24px, 3vw, 38px);
	line-height: 1.18;
	font-weight: 800;
}

.service-intro ul {
	margin: 0;
	padding: 0;
	list-style: none;
	display: grid;
	gap: 12px;
}

.service-intro li {
	display: flex;
	gap: 10px;
	align-items: flex-start;
	color: rgba(255, 255, 255, 0.82);
	line-height: 1.55;
}

.service-intro i {
	color: #18d19b;
	font-size: 22px;
	margin-top: 1px;
}

.service-card {
	position: relative;
	width: 100%;
	padding: 26px;
	border: 1px solid #e2eeee;
	border-radius: 8px;
	background: #ffffff;
	box-shadow: 0 18px 44px rgba(21, 54, 65, 0.07);
	transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.service-promo-badge {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	min-height: 28px;
	padding: 5px 10px;
	margin-bottom: 16px;
	border-radius: 999px;
	background: #fff1f2;
	color: #e11d48;
	font-size: 12px;
	font-weight: 900;
}

.service-promo-badge i {
	font-size: 16px;
}

.service-card:hover {
	transform: translateY(-6px);
	box-shadow: 0 24px 54px rgba(21, 54, 65, 0.13);
}

.service-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 22px;
}

.service-top span {
	color: #b8c4c8;
	font-size: 28px;
	font-weight: 800;
}

.service-card .icon {
	width: 54px;
	height: 54px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	background: #e9fbf5;
	color: #08946d;
}

.service-card .icon i {
	font-size: 30px;
}

.service-card h4 {
	margin-bottom: 12px;
	font-weight: 800;
	color: #123039;
}

.service-card p {
	color: #5c6b70;
	line-height: 1.7;
}

.service-output {
	margin-top: 18px;
	padding-top: 16px;
	border-top: 1px solid #eaf0f0;
	color: #3d555c;
	line-height: 1.55;
}

.service-output strong {
	color: #08946d;
}

.service-process {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 16px;
	margin-top: 34px;
}

.process-item {
	padding: 22px;
	border-radius: 8px;
	background: #ffffff;
	border-left: 4px solid #18d19b;
	box-shadow: 0 14px 36px rgba(21, 54, 65, 0.07);
}

.process-item span {
	color: #18d19b;
	font-weight: 800;
}

.process-item h4 {
	margin: 8px 0;
	font-weight: 800;
	color: #123039;
}

.process-item p {
	margin: 0;
	color: #657378;
	line-height: 1.6;
}

@media (max-width: 991px) {
	.service-intro,
	.service-process {
		grid-template-columns: 1fr;
	}
}
</style>
