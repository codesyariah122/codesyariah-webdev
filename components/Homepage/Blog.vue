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
							<small v-for="tag in post.fields.tags" class="card-meta mb-2">{{tag}}&nbsp;&nbsp;</small>
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
	.card{
		border: none;
		transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
		overflow:hidden;
		border-radius:20px;
		min-height:450px;
		box-shadow: 0 0 12px 0 rgba(0,0,0,0.2);

		@media (max-width: 768px) {
			min-height:350px;
		}

		@media (max-width: 420px) {
			min-height:300px;
		}

		&.card-has-bg{
			transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
			background-size:120%;
			background-repeat:no-repeat;
			background-position: center center;
			&:before {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background: inherit;
				-webkit-filter: grayscale(1);
				-moz-filter: grayscale(100%);
				-ms-filter: grayscale(100%);
				-o-filter: grayscale(100%);
				filter: grayscale(100%);}

				&:hover {
					transform: scale(0.98);
					box-shadow: 0 0 5px -2px rgba(0,0,0,0.3);
					background-size:130%;
					transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

					.card-img-overlay {
						transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
						background: rgb(35,79,109);
						background: linear-gradient(0deg, rgba(4,69,114,0.5) 0%, rgba(4,69,114,1) 100%);
					}
				}
			}
			.card-footer{
				background: none;
				border-top: none;
				.media{
					img{
						border:solid 3px rgba(255,255,255,0.3);
					}
				}
			}
			.card-meta{color:#26BD75}
			.card-body{ 
				transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
			}
			&:hover {
				.card-body{
					margin-top:30px;
					transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
				}
				cursor: pointer;
				transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
			}
			.card-img-overlay {
				transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
				background: rgb(35,79,109);
				background: linear-gradient(0deg, rgba(35,79,109,0.3785889355742297) 0%, rgba(69,95,113,1) 100%);
			}
		}
		@media (max-width: 767px){

		}
	</style>