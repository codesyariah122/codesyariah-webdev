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
	@media (max-width: 768px) {
		
	}

	@media (max-width: 420px) {
		.hero-container{
			h1{
				width: 85%;
				font-size: 1.7rem!important;
				text-align: center;
			}
			img{
				margin-top: -1rem;
			}
			a{				
				.scrollto{
					margin-top: 1.5rem;
				}
			}
		}
	}
</style>
<template>
	<section id="hero" :style="`${$device.isDesktop ? bg_desktop : bg_mobile}`">
		<div class="hero-container">
			<h1>{{ post.fields.title }}</h1>
			<h2 class="mt-5">By {{ post.fields.author.fields.name }}</h2>
			<img :src="`https:${post.fields.author.fields.profilePhoto.fields.file.url}`" width="70" class="rounded-circle">
			<a href="#post" class="btn-scroll scrollto" title="Scroll Down"><i class="bx bx-chevron-down"></i></a>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['post'],
		data(){
			return {
				bg_mobile: `background: url(https:${this.post.fields.heroImage.fields.file.url}) top center no-repeat; height: 70vh;width: 100%;background-size: cover;`,
				bg_desktop: `background: url(https:${this.post.fields.heroImage.fields.file.url}) no-repeat center; height: 100vh;width: 100%;background-size: cover;`
			}
		}
	}
</script>