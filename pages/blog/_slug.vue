<style lang="scss">
	.inner-page{		
		article{
			margin-left: -3rem;
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
			}
			img{
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
					text-align: left;
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
					<a href="/"><i class='bx bx-left-arrow-alt'></i> Back to Home</a>
				</div>
				<div class="back float-end">
					<a href="/blog">All Posts <i class='bx bx-right-arrow-alt' ></i></a>
				</div>
			</div>
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-12 col-sm-12">
						<article v-html="$md.render(post.fields.body)"></article>
					</div>
				</div>
				<div class="d-flex flex-wrap mt-5 mb-5">
					<div class="col-md-1">
						<strong>Tags : </strong> 
					</div>
					<div v-for="tag in post.fields.tags" class="col-md-1">
						<span class="badge rounded-pill bg-warning text-white">
							#{{tag}}
						</span>&nbsp;&nbsp;
					</div>
				</div>

				<div class="row justify-content-center">
					<div class="col-lg-12 col-sm-12">
						<pre>
							{{comments}}
						</pre>
					</div>
				</div>

			</div>
		</section>
	</div>
</template>

<script>
	export default{
		name: 'blog',
		layout: 'slug',

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
			},

			comments(){
				let comment = this.$store.state.allposts.filter(
					el=>el.fields.slug === this.slug
					)

				return comment[0].fields.comments
			}
		},
		head() {
			return {
				title: this.post.fields.title
			};
		}
	}
</script>