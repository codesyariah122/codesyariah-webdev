<template>
	<section id="hero" :style="`${$device.isDesktop ? bg_desktop : bg_mobile}`">
		<div class="hero-container">
			<h1>Codesyariah Webdevelopment</h1>
			<h2>Partner Jasa pembuatan website professional.</h2>
			<a href="#gallery" class="btn-scroll scrollto" title="Scroll Down"><i class="bx bx-chevron-down"></i></a>
		</div>
	</section>
</template>

<script>
	export default {
		data(){
			return {
				bg_mobile: `background: url(${require('~/assets/img/new-hero-bg-1-mobile.jpg')}) top right no-repeat; height: 70vh;width: 100%;background-size: cover;`,
				bg_desktop: `background: url(${require('~/assets/img/new-hero-bg-1-desktop.jpg')}) no-repeat center; height: 100vh;width: 100%;`
			}
		}
	}
</script>