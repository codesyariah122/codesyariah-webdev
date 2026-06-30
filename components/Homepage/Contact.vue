<template>
	<section id="contact" class="contact consultation-section">
		<div class="container">
			<div class="contact-heading">
				<div>
					<p class="contact-eyebrow">Konsultasi Project</p>
					<h2>Ceritakan kebutuhan bisnis Anda, kami bantu arahkan langkah digital yang paling masuk akal.</h2>
				</div>
				<p>
					Tidak perlu menyiapkan istilah teknis. Cukup jelaskan bisnis Anda, masalah yang ingin diselesaikan, dan target yang ingin dicapai.
				</p>
			</div>

			<div class="contact-layout">
				<div class="contact-info">
					<div class="contact-card primary-card">
						<i class="bx bxl-whatsapp"></i>
						<div>
							<span>Fast response</span>
							<h3>WhatsApp Consultation</h3>
							<a :href="whatsappBaseLink" target="_blank" rel="noreferrer">{{ profiles.fields.phone }}</a>
						</div>
					</div>

					<div class="contact-card">
						<i class="bx bx-envelope"></i>
						<div>
							<span>Email</span>
							<h3>Kirim brief atau dokumen</h3>
							<a :href="`mailto:${profiles.fields.email}`">{{ profiles.fields.email }}</a>
						</div>
					</div>

					<div class="contact-card">
						<i class="bx bxl-instagram"></i>
						<div>
							<span>Social</span>
							<h3>Lihat update & aktivitas</h3>
							<a :href="`https://www.instagram.com/${profiles.fields.instagram}`" target="_blank" rel="noreferrer">@{{ profiles.fields.instagram }}</a>
						</div>
					</div>

					<div class="expectation-card">
						<h3>Biasanya kita bahas:</h3>
						<ul>
							<li v-for="item in expectations" :key="item">
								<i class="bx bx-check-circle"></i>
								<span>{{ item }}</span>
							</li>
						</ul>
					</div>
				</div>

				<form class="consultation-form" @submit.prevent="submitConsultation">
					<div class="form-top">
						<span>Project Intake</span>
						<h3>Mulai dari gambaran sederhana</h3>
					</div>

					<div class="form-grid">
						<label>
							Nama
							<input v-model="form.name" type="text" placeholder="Nama Anda" required>
						</label>
						<label>
							Bisnis / Instansi
							<input v-model="form.business" type="text" placeholder="Contoh: toko online, sekolah, travel">
						</label>
					</div>

					<label>
						Kebutuhan utama
						<select v-model="form.need">
							<option v-for="need in needs" :key="need" :value="need">{{ need }}</option>
						</select>
					</label>

					<label>
						Ceritakan singkat masalahnya
						<textarea v-model="form.message" rows="5" placeholder="Contoh: butuh website company profile, katalog produk, landing promo, dashboard admin, atau maintenance website lama." required></textarea>
					</label>

					<div class="form-grid">
						<label>
							Estimasi budget
							<select v-model="form.budget">
								<option v-for="budget in budgets" :key="budget" :value="budget">{{ budget }}</option>
							</select>
						</label>
						<label>
							Target waktu
							<select v-model="form.timeline">
								<option v-for="timeline in timelines" :key="timeline" :value="timeline">{{ timeline }}</option>
							</select>
						</label>
					</div>

					<button type="submit">
						Kirim via WhatsApp <i class="bx bxl-whatsapp"></i>
					</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: "",
				business: "",
				need: "Company profile / landing page",
				message: "",
				budget: "Belum tahu, ingin konsultasi dulu",
				timeline: "Fleksibel",
			},
			needs: [
				"Company profile / landing page",
				"E-commerce / katalog produk",
				"Dashboard admin / sistem internal",
				"Sales promotion campaign",
				"Maintenance / perbaikan website",
				"Deploy VPS / server / domain",
			],
			budgets: ["Belum tahu, ingin konsultasi dulu", "< 2 juta", "2 - 5 juta", "5 - 10 juta", "> 10 juta"],
			timelines: ["Fleksibel", "Secepatnya", "1 - 2 minggu", "1 bulan", "Butuh diskusi scope dulu"],
			expectations: [
				"Tujuan website atau sistem yang ingin dibuat.",
				"Konten, fitur, dan halaman yang perlu disiapkan.",
				"Estimasi scope, timeline, dan prioritas pengerjaan.",
				"Langkah teknis seperti domain, hosting, server, dan maintenance.",
			],
		};
	},
	computed: {
		profiles() {
			return this.$store.state.profiles[0];
		},
		whatsappBaseLink() {
			return `https://wa.me/${this.profiles.fields.phone}`;
		},
	},
	methods: {
		submitConsultation() {
			const message = [
				"Halo Codesyariah, saya ingin konsultasi project.",
				`Nama: ${this.form.name}`,
				`Bisnis/Instansi: ${this.form.business || "-"}`,
				`Kebutuhan: ${this.form.need}`,
				`Budget: ${this.form.budget}`,
				`Target waktu: ${this.form.timeline}`,
				`Masalah/kebutuhan: ${this.form.message}`,
			].join("\n");

			window.open(`${this.whatsappBaseLink}?text=${encodeURIComponent(message)}`, "_blank");
		},
	},
};
</script>

<style scoped>
#contact.consultation-section {
	padding: 86px 0;
	background: linear-gradient(180deg, #f7fbfb 0%, #ffffff 100%);
	color: #102d35;
}

.contact-heading {
	display: grid;
	grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
	gap: 34px;
	align-items: end;
	margin-bottom: 32px;
}

.contact-eyebrow {
	margin: 0 0 12px;
	color: #08946d;
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.contact-heading h2 {
	margin: 0;
	color: #102d35;
	font-size: clamp(28px, 4vw, 48px);
	line-height: 1.12;
	font-weight: 900;
}

.contact-heading > p {
	margin: 0;
	color: #5b6d72;
	font-size: 17px;
	line-height: 1.75;
}

.contact-layout {
	display: grid;
	grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.15fr);
	gap: 22px;
	align-items: start;
}

.contact-info {
	display: grid;
	gap: 14px;
}

.contact-card,
.expectation-card,
.consultation-form {
	border-radius: 8px;
	border: 1px solid #e0eeee;
	background: #ffffff;
	box-shadow: 0 18px 46px rgba(17, 51, 60, 0.08);
}

.contact-card {
	display: flex;
	gap: 14px;
	align-items: center;
	padding: 20px;
}

.contact-card.primary-card {
	background: #0d2b33;
	color: #ffffff;
}

.contact-card > i {
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 auto;
	width: 48px;
	height: 48px;
	border-radius: 8px;
	background: #e7fbf4;
	color: #08946d;
	font-size: 26px;
}

.primary-card > i {
	background: rgba(255, 255, 255, 0.1);
	color: #18d19b;
}

.contact-card span {
	display: block;
	color: #08946d;
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.primary-card span {
	color: #18d19b;
}

.contact-card h3 {
	margin: 4px 0;
	color: #102d35;
	font-size: 17px;
	font-weight: 900;
}

.primary-card h3 {
	color: #ffffff;
}

.contact-card a {
	color: #526970;
	overflow-wrap: anywhere;
}

.primary-card a {
	color: rgba(255, 255, 255, 0.78);
}

.expectation-card {
	padding: 22px;
}

.expectation-card h3 {
	margin: 0 0 16px;
	color: #102d35;
	font-weight: 900;
}

.expectation-card ul {
	display: grid;
	gap: 12px;
	margin: 0;
	padding: 0;
	list-style: none;
}

.expectation-card li {
	display: flex;
	gap: 10px;
	color: #526970;
	line-height: 1.55;
}

.expectation-card i {
	color: #18d19b;
	font-size: 22px;
	margin-top: 1px;
}

.consultation-form {
	padding: 26px;
}

.form-top span {
	display: block;
	color: #08946d;
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.form-top h3 {
	margin: 6px 0 20px;
	color: #102d35;
	font-weight: 900;
}

.form-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 14px;
}

.consultation-form label {
	display: grid;
	gap: 8px;
	margin-bottom: 14px;
	color: #315158;
	font-weight: 800;
}

.consultation-form input,
.consultation-form textarea,
.consultation-form select {
	width: 100%;
	border: 1px solid #d6e7e5;
	border-radius: 8px;
	background: #f8fcfc;
	color: #102d35;
	padding: 13px 14px;
	outline: none;
	transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.consultation-form textarea {
	resize: vertical;
}

.consultation-form input:focus,
.consultation-form textarea:focus,
.consultation-form select:focus {
	border-color: #18d19b;
	box-shadow: 0 0 0 4px rgba(24, 209, 155, 0.12);
}

.consultation-form button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	width: 100%;
	min-height: 50px;
	border: 0;
	border-radius: 999px;
	background: #18d19b;
	color: #042018;
	font-weight: 900;
}

@media (max-width: 991px) {
	.contact-heading,
	.contact-layout,
	.form-grid {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 575px) {
	#contact.consultation-section {
		padding: 66px 0;
	}
}
</style>
