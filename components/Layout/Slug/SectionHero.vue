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
	<section id="hero" :style="$device.isDesktop ? bg_desktop : bg_mobile">
		<div class="hero-container">
			<h1>{{ postTitle }}</h1>
			<h2 class="mt-5">By {{ authorName }}</h2>
			<img :src="authorPhoto" :alt="authorName" style="width: 50px!important;" class="rounded-circle">
			<a href="#post" class="btn-scroll scrollto" title="Scroll Down"><i class="bx bx-chevron-down"></i></a>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['post'],
		computed: {
			postTitle() {
				return this.post?.fields?.title || 'Codesyariah WebDevelopment Blog';
			},
			authorName() {
				return this.post?.fields?.author?.fields?.name || 'Codesyariah WebDev';
			},
			authorPhoto() {
				return this.assetUrl(this.post?.fields?.author?.fields?.profilePhoto, '/assets/img/me.jpg');
			},
			heroImage() {
				return this.assetUrl(this.post?.fields?.heroImage, '/assets/img/new-hero-bg-1-desktop.jpg');
			},
			bg_mobile() {
				return `background: url('${this.heroImage}') top center no-repeat; height: 70vh;width: 100%;background-size: cover;`;
			},
			bg_desktop() {
				return `background: url('${this.heroImage}') no-repeat center; height: 100vh;width: 100%;background-size: cover;`;
			},
		},
		methods: {
			assetUrl(asset, fallback) {
				const url = asset?.fields?.file?.url || fallback;

				if (url.startsWith('http://') || url.startsWith('https://')) return url;
				if (url.startsWith('//')) return `https:${url}`;
				if (url.startsWith('/')) return url;

				return `https://${url}`;
			}
		},
	}
</script>
