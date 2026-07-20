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
				h4{
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
					<a href="/blog">All Posts <i class='bx bx-right-arrow-alt' ></i></a>
				</div>
			</div>
			<div class="container">

				<Article :post="post"/>

				<!-- <Comment/> -->
				<Disqus/>
			</div>
		</section>
	</div>
</template>

<script>
	import Comment from '@/components/Blog/Comment'
	import Article from '@/components/Blog/Article'
	import { blogFallbackPosts } from "@/data/blogFallbackPosts";

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
		mounted(){
			if (process.client && window.$crisp) window.$crisp.push(['do', 'chat:hide']);
			this.$store.dispatch("allPosts");
		},
		computed: {
			posts() {
				const allposts = this.$store.state.allposts || [];
				const homepagePosts = this.$store.state.posts || [];
				return allposts.length ? allposts : homepagePosts.length ? homepagePosts : blogFallbackPosts;
			},
			post() {
				return this.posts.find(el => el.fields.slug === this.slug) || this.posts[0];
			}
		},
		head() {
			const title = this.post?.fields?.title || 'Codesyariah Webdevelopment Blog';
			return {
				title,
        meta: [
        {
          hid: 'description',
          name: 'description',
          content: title
        }
        ]
			};
		}
	}
</script>
