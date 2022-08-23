<template>
	<section id="hero" :style="`${$device.isDesktop ? bg_desktop : bg_mobile}`">
		<div class="hero-container">
			<h1>Codesyariah Webdevelopment</h1>
			<h2>Jasa pembuatan website professional.</h2>
			<a href="#portfolio" class="btn-scroll scrollto" title="Scroll Down"><i class="bx bx-chevron-down"></i></a>
		</div>
	</section>
</template>

<script>
	export default {
		data(){
			return {
				bg_mobile: `background: url(${require('~/assets/img/webdev-bg-5.png')}) top right no-repeat; height: 70vh;`,
				bg_desktop: `background: url(${require('~/assets/img/webdev-hero2.jpg')}) top right no-repeat; height: 100vh;`
			}
		}
	}
</script>