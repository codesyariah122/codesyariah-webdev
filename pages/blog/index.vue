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
				<div v-for="post in allposts" class="col-sm-12 col-md-6 col-lg-4 mb-4"><div class="card text-white card-has-bg click-col" :style="`background-image:url('https://${post.fields.heroImage.fields.file.url}');`">
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
	</div>
</section>

</template>

<script>
	export default {
		name: 'blog',
		layout: 'page',
		mounted(){
			$crisp.push(['do', 'chat:hide']);
		},
		computed: {
			allposts() {
				return this.$store.state.allposts
			}
		}
	}
</script>