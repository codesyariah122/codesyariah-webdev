<style lang="scss">
	.inner-page{		
		article{
			
			h2{
				font-weight: 800;
				font-family: 'Ubuntu', sans-serif;
			}
			h3{
				margin-top: 2rem;
				font-weight: 700;
				font-family: 'Ubuntu', sans-serif;
			}
			p{
				font-family: 'Roboto Mono', monospace;
				line-height: 31px;
				word-spacing: 5px;
				text-align: justify;
			}
			img{
				width: 90%;
				margin-bottom: 2rem;
				margin-top: 2rem;
			}
		}
	}

	@media (max-width: 768px) {
		
	}

	@media (max-width: 420px) {
		.inner-page{		
			article{
				h2{
					font-weight: 800;
					font-family: 'Ubuntu', sans-serif;
				}
				h3{
					margin-top: 2rem;
					font-weight: 700;
					font-family: 'Ubuntu', sans-serif;
				}
				p{
					font-family: 'Roboto Mono', monospace;
					line-height: 31px;
					word-spacing: 5px;
					text-align: justify;
				}
				img{
					max-width: 335px;
					margin-top:2rem;
					margin-bottom: 2rem;
				}
			}
		}
	}
</style>
<template>
	<div>
		<LayoutSlugSectionHero :post="post"/>
		<section id="post" class="inner-page">
			<div class="container mb-5">
				<div class="back float-start">
					<a href="../#blog"><i class='bx bx-left-arrow-alt'></i> Back to Home</a>
				</div>
				<div class="back float-end">
					<nuxt-link to="/blog">All Posts <i class='bx bx-right-arrow-alt' ></i></nuxt-link>
				</div>
			</div>
			<div class="container">

				<Article/>

				<!-- <Comment/> -->
				<Disqus/>
			</div>
		</section>
	</div>
</template>

<script>
	import Comment from '@/components/Blog/Comment'
	import Article from '@/components/Blog/Article'

	export default{
		name: 'blog',
		layout: 'slug',

		components:{
			Comment,
			Article
		},
		data() {
			return {
				slug: this.$route.params.slug
			};
		},
		computed: {
			post() {
				let post = this.$store.state.allposts.filter(
					el => el.fields.slug === this.slug
					);
				return post[0];
			}
		},
		head() {
			return {
				title: this.post.fields.title
			};
		}
	}
</script>