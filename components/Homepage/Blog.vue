<template>
	<section id="blog" class="about">
		<div class="container">
			<div class="section-title">
				<span>Our Blog</span>
				<h2>Our Blog</h2>
			</div>

			<div class="row">
				<div v-for="post in posts" class="col-md-4 col-sm-12">
					<pre>
						{{post.fields.slug}}
					</pre>
					<div class="card" style="width: 18rem;">
						<img :src="`https:${post.fields.heroImage.fields.file.url}`" class="card-img-top" :alt="post.fields.heroImage.fields.title">
						<div class="card-body">
							<small>
								{{$moment(post.fields.publishedDate).format("LL")}}
							</small>
							<h5 class="card-title">{{post.fields.title}}</h5>
							<div class="d-flex align-content-start flex-wrap">
								<img :src="`https:${post.fields.author.fields.profilePhoto.fields.file.url}`" class="img-thumbnail rounded-circle" width="30">
								<div class="col-md-6">
								</div>
								<div class="col-md-6">									
									<blockquote class="blockquote-footer">
										{{post.fields.author.fields.name}}
									</blockquote>
								</div>
							</div>
							<p class="card-text">{{post.fields.description}}</p>
							<nuxt-link :to="{path: `/blog/${post.fields.slug}`}" class="btn btn-warning btn-sm rounded-pill text-white btn-block">
								Read Blog
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<hr class="mt-5 mb-5">
	</section>
</template>

<script>
	export default {
		computed: {
			posts() {
				return this.$store.state.posts
			}
		}
	}
</script>