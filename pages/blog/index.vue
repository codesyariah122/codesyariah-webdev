<template>
	<section class="wrapper mt-5">
		<div class="container">
			<div class="row">
				<div class="col text-center mb-5">
					<h1 class="display-4">Codesyariah WebDevelopment Blog</h1>
					<p class="lead">Nikmati berita-berita terupdate seputar WebDevelopment ataupun seputar dunia teknologi digital informasi di codesyariah webdevelopment blog. </p>
				</div>
			</div>
			<div class="row">
				<div v-for="post in allposts" :key="post.fields.slug" class="col-sm-12 col-md-6 col-lg-4 mb-4">
					<div class="card text-white card-has-bg click-col" :style="{ backgroundImage: `url('${assetUrl(post.fields.heroImage)}')` }">
					<img class="card-img d-none" :src="assetUrl(post.fields.heroImage)" :alt="post.fields.title">
					<div class="card-img-overlay d-flex flex-column">
						<div class="card-body">
							<small v-for="tag in post.fields.tags" :key="tag" class="badge rounded-pill bg-success mb-3 ml-3">
								#{{tag}}
							</small>
							<h4 class="card-title mt-0 ">
								<a class="text-white" :href="`/blog/${post.fields.slug}`">{{post.fields.title}}</a>
							</h4>
							<small><i class="far fa-clock"></i> {{$moment(post.fields.publishedDate).format("LL")}}</small>
						</div>
						<div class="card-footer">
							<div class="media">
								<img class="mr-3 rounded-circle" :src="assetUrl(post.fields.author.fields.profilePhoto)" :alt="post.fields.author.fields.name" style="max-width:50px">
								<div class="media-body">
									<h6 class="my-0 text-white d-block">{{post.fields.author.fields.name}}</h6>
									<small>Author of Codesyariah WebDev</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

</template>

<script>
	import { blogFallbackPosts } from "@/data/blogFallbackPosts";

	export default {
		name: 'blog',
		layout: 'page',
		data() {
			return {
				fallbackPosts: blogFallbackPosts,
			};
		},
		mounted(){
			if (process.client && window.$crisp) window.$crisp.push(['do', 'chat:hide']);
			this.$store.dispatch("allPosts");
		},
		computed: {
			allposts() {
				const allposts = this.$store.state.allposts || [];
				const homepagePosts = this.$store.state.posts || [];
				return allposts.length ? allposts : homepagePosts.length ? homepagePosts : this.fallbackPosts;
			}
		},
		methods: {
			assetUrl(asset) {
				const url = asset?.fields?.file?.url || '/assets/img/new-hero-bg-1-desktop.jpg';

				if (url.startsWith('http://') || url.startsWith('https://')) return url;
				if (url.startsWith('//')) return `https:${url}`;
				if (url.startsWith('/')) return url;

				return `https://${url}`;
			},
		}
	}
</script>
