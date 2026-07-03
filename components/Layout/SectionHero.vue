<template>
	<section id="hero" :style="`${$device.isDesktop ? bg_desktop : bg_mobile}`">
		<div class="hero-container">
			<div class="hero-copy">
				<p class="hero-eyebrow">Full Stack Web Developer untuk bisnis yang ingin cepat jalan</p>
				<h1>Codesyariah Webdevelopment</h1>
				<h2>Bangun website, perbaiki sistem, deploy server, dan rapikan operasional digital tanpa bikin owner pusing teknis.</h2>
				<div class="hero-actions">
					<a href="#contact" class="hero-btn primary scrollto">Konsultasi Sekarang</a>
					<a href="#services" class="hero-btn secondary scrollto">Lihat Layanan</a>
				</div>
				<div class="hero-signals" aria-label="Keunggulan layanan">
					<span><strong>Fast response</strong> untuk kebutuhan mendesak</span>
					<span><strong>Production ready</strong> untuk bisnis berjalan</span>
					<span><strong>Bahasa mudah</strong> untuk customer awam teknologi</span>
				</div>
			</div>
			<div class="hero-panel" aria-label="Ringkasan layanan Codesyariah">
				<div class="panel-status"><span></span> service.status <strong>ONLINE</strong></div>
				<div class="panel-metric">
					<small>Focus</small>
					<strong>Build - Fix - Deploy - Scale</strong>
				</div>
				<div class="panel-grid">
					<div><small>Website</small><strong>Launch</strong></div>
					<div><small>API</small><strong>Stable</strong></div>
					<div><small>Server</small><strong>Secure</strong></div>
					<div><small>Support</small><strong>Ready</strong></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data(){
			return {
				bg_mobile: `background: url(${require('~/assets/img/new-hero-bg-1-mobile.jpg')}) top center / cover no-repeat;`,
				bg_desktop: `background: url(${require('~/assets/img/new-hero-bg-1-desktop.jpg')}) center / cover no-repeat;`
			}
		}
	}
</script>

<style scoped>
#hero {
	min-height: max(720px, 100svh);
	overflow: hidden;
	display: flex;
	align-items: center;
}

#hero:before {
	background:
		linear-gradient(110deg, rgba(4, 13, 23, 0.93) 0%, rgba(7, 37, 43, 0.78) 47%, rgba(0, 0, 0, 0.42) 100%);
}

#hero .hero-container {
	position: relative;
	inset: auto;
	align-items: stretch;
	justify-content: center;
	display: grid;
	grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.75fr);
	gap: 34px;
	width: min(100%, 1180px);
	max-width: 1180px;
	margin: 0 auto;
	padding: clamp(96px, 13vh, 132px) 24px clamp(64px, 10vh, 90px);
}

.hero-copy {
	position: relative;
	z-index: 2;
	max-width: 760px;
}

.hero-eyebrow {
	display: inline-flex;
	align-items: center;
	margin: 0 0 18px;
	padding: 9px 14px;
	border: 1px solid rgba(255, 255, 255, 0.22);
	border-radius: 999px;
	color: #b6f3df;
	background: rgba(255, 255, 255, 0.08);
	font-size: 13px;
	font-weight: 700;
}

#hero h1 {
	font-family: "Raleway", sans-serif;
	font-size: clamp(42px, 6vw, 78px);
	line-height: 0.95;
	letter-spacing: 0;
	font-weight: 800;
	margin-bottom: 22px;
}

#hero h2 {
	max-width: 670px;
	margin: 0 0 30px;
	color: rgba(255, 255, 255, 0.84);
	font-size: clamp(16px, 2vw, 22px);
	line-height: 1.55;
	font-weight: 500;
	letter-spacing: 0;
	text-transform: none;
}

.hero-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
	margin-bottom: 28px;
}

.hero-btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 48px;
	padding: 0 22px;
	border-radius: 999px;
	font-weight: 800;
}

.hero-btn.primary {
	background: #18d19b;
	color: #042018;
	box-shadow: 0 18px 40px rgba(24, 209, 155, 0.28);
}

.hero-btn.secondary {
	border: 1px solid rgba(255, 255, 255, 0.28);
	color: #ffffff;
	background: rgba(255, 255, 255, 0.08);
}

.hero-signals {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 10px;
}

.hero-signals span {
	padding: 14px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.08);
	color: rgba(255, 255, 255, 0.78);
	font-size: 13px;
	line-height: 1.45;
}

.hero-signals strong {
	display: block;
	color: #ffffff;
	font-size: 14px;
}

.hero-panel {
	position: relative;
	z-index: 2;
	align-self: center;
	width: 100%;
	max-width: 430px;
	margin-left: auto;
	padding: 24px;
	border-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	background: rgba(6, 19, 27, 0.72);
	box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
	color: #ffffff;
	backdrop-filter: blur(12px);
}

.panel-status {
	display: flex;
	align-items: center;
	gap: 9px;
	font-size: 12px;
	color: rgba(255, 255, 255, 0.7);
	text-transform: uppercase;
}

.panel-status span {
	width: 9px;
	height: 9px;
	border-radius: 50%;
	background: #18d19b;
	box-shadow: 0 0 0 7px rgba(24, 209, 155, 0.12);
}

.panel-status strong {
	margin-left: auto;
	color: #18d19b;
}

.panel-metric {
	margin: 28px 0;
	padding: 22px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.08);
}

.panel-metric small,
.panel-grid small {
	display: block;
	color: rgba(255, 255, 255, 0.62);
	margin-bottom: 6px;
}

.panel-metric strong {
	font-size: 25px;
	line-height: 1.15;
}

.panel-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 10px;
}

.panel-grid div {
	padding: 16px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.08);
}

@media (max-width: 991px) {
	#hero {
		min-height: auto;
		align-items: stretch;
	}

	#hero .hero-container {
		position: relative;
		grid-template-columns: 1fr;
		padding: 112px 22px 64px;
		gap: 26px;
	}

	.hero-copy {
		max-width: 720px;
	}

	.hero-panel {
		max-width: 720px;
		margin-left: 0;
	}

	.hero-signals {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 767px) {
	#hero .hero-container {
		padding: 66px 16px 48px;
		width: 100%;
		max-width: 100%;
	}

	.hero-copy {
		width: 100%;
		max-width: 390px;
		margin: 0 auto;
		text-align: center;
	}

	#hero h1 {
		max-width: 100%;
		font-size: clamp(32px, 9.8vw, 42px);
		line-height: 1.04;
		margin-bottom: 16px;
		overflow-wrap: normal;
		text-wrap: balance;
	}

	#hero h2 {
		font-size: 15px;
		line-height: 1.55;
		margin-bottom: 22px;
		text-align: center;
	}

	.hero-eyebrow {
		justify-content: center;
		max-width: 100%;
		font-size: 11px;
		line-height: 1.35;
		white-space: normal;
		text-align: center;
	}

	.hero-actions {
		margin-bottom: 20px;
	}

	.hero-btn {
		flex: 1 1 180px;
		min-height: 46px;
		padding: 0 18px;
	}

	.hero-panel {
		padding: 18px;
	}

	.panel-metric {
		margin: 18px 0;
		padding: 18px;
	}

	.panel-grid div {
		padding: 14px;
	}
}

@media (max-width: 420px) {
	#hero .hero-container {
		padding: 58px 14px 44px;
	}

	.hero-copy {
		max-width: 360px;
	}

	#hero h1 {
		font-size: clamp(31px, 9.2vw, 36px);
	}

	#hero h2 {
		font-size: 14px;
	}

	.hero-actions {
		display: grid;
		grid-template-columns: 1fr;
	}

	.hero-btn {
		width: 100%;
	}
}

@media (max-width: 340px) {
	.panel-grid {
		grid-template-columns: 1fr;
	}
}

@media (min-width: 992px) and (max-height: 760px) {
	#hero {
		min-height: 760px;
	}

	#hero .hero-container {
		padding-top: 96px;
		padding-bottom: 54px;
	}

	#hero h1 {
		font-size: clamp(42px, 5vw, 64px);
	}

	#hero h2 {
		margin-bottom: 24px;
	}

	.hero-actions {
		margin-bottom: 22px;
	}
}
</style>
