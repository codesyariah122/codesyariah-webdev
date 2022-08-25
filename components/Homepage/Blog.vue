<template>
	<section id="blog" class="about">
		<div class="container">
			<div class="section-title">
				<span>Our Blog</span>
				<h2>Our Blog</h2>
			</div>

			<div class="row justify-content-center">
				<div v-for="post in posts" class="col-sm-12 col-md-6 col-lg-4 mb-4"><div class="card text-white card-has-bg click-col" :style="`background-image:url('https://${post.fields.heroImage.fields.file.url}');`">
					<img class="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?">
					<div class="card-img-overlay d-flex flex-column">
						<div class="card-body">
							<small v-for="tag in post.fields.tags" class="badge rounded-pill bg-success mb-3 ml-3">
								#{{tag}}
							</small>
							<h4 class="card-title mt-0 ">
								<a class="text-white" :href="`/blog/${post.fields.slug}`">{{post.fields.title}}</a>
							</h4>
							<small><i class="far fa-clock"></i> {{$moment(post.fields.publishedDate).format("LL")}}</small>
						</div>
						<div class="card-footer">
							<div class="media">
								<img class="mr-3 rounded-circle" :src="`https://${post.fields.author.fields.profilePhoto.fields.file.url}`" alt="Generic placeholder image" style="max-width:50px">
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
		<div class="row justify-content-center mt-2">
			<div class="d-flex flex-row-reverse">
				<div class="p-2 bd-highlight">
					<nuxt-link to="/blog">See All Blog <i class='bx bx-md bx-right-arrow-alt'></i></nuxt-link>
				</div>
			</div>
		</div>
	</div>
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

<style lang="scss">
	@import '~/assets/scss/_blog.scss';
</style>