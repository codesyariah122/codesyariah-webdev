<style lang="scss">
	.hero-container{
		h1{
			width: 50%;
			font-size: 2.5rem!important;
			text-align: center;
		}
		img{
			margin-top: -3rem;
		}
	}
</style>
<template>
	<section id="hero" :style="`${$device.isDesktop ? bg_desktop : bg_mobile}`">
		<div class="hero-container">
			<h1>{{ post.fields.title }}</h1>
			<h2 class="mt-5">By {{ post.fields.author.fields.name }}</h2>
			<img :src="`https:${post.fields.author.fields.profilePhoto.fields.file.url}`" width="70" class="rounded-circle">
			<a href="#post" class="btn-scroll scrollto mt-5" title="Scroll Down"><i class="bx bx-chevron-down"></i></a>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['post'],
		data(){
			return {
				bg_mobile: `background: url(https:${this.post.fields.heroImage.fields.file.url}) top center no-repeat; height: 70vh;width: 100%;`,
				bg_desktop: `background: url(https:${this.post.fields.heroImage.fields.file.url}) no-repeat center; height: 100vh;width: 100%;`
			}
		}
	}
</script>