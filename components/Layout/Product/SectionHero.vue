<template>
	<section id="hero" :style="`${$device.isDesktop ? bg_desktop : bg_mobile}`">
		<div class="hero-container">
			<h1>{{abouts.name}} Storefront</h1>
			<a href="#product" class="btn-scroll scrollto" title="Scroll Down"><i class="bx bx-chevron-down"></i></a>
		</div>
	</section>
</template>

<script>
	export default {
		data(){
			return {
				abouts: [],
				bg_mobile: null,
				bg_desktop: null,
				logo: null
			}
		},

		mounted(){
			this.aboutMerchant()
		},

		methods: {
			aboutMerchant(){
				this.$commerce.merchants.about()
				.then(({data}) => {
					console.log(data[0].images.cover.url)
					this.bg_desktop = `background: url(${data[0].images.cover.url}) top right no-repeat; height: 70vh;width: 100%;background-size: cover;`
					this.bg_mobile = `background: url(${data[0].images.cover.url}) no-repeat center; height: 100vh;width: 100%;`
					this.logo = data[0].images.logo.url
					this.abouts = data[0]
				})
				.catch(err => console.error(err))
			}
		}
	}
</script>