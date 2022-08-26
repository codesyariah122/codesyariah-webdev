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
			}
			img{
				margin-bottom: 2rem;
				margin-top: 2rem;
			}
		}
	}

	.block__comments{
		margin-top: 10rem;
		.blog-comment::before,
		.blog-comment::after,
		.blog-comment-form::before,
		.blog-comment-form::after{
			content: "";
			display: table;
			clear: both;
			hr {
				margin-top: 20px;
				margin-bottom: 20px;
				border: 0;
				border-top: 1px solid #FFFFFF;
			}
			a {
				color: #82b440;
				text-decoration: none;
			}
		}

		.blog-comment{
			padding-left: 15%;
			padding-right: 15%;
		}

		.blog-comment ul{
			list-style-type: none;
			padding: 0;
		}

		.blog-comment img{
			opacity: 1;
			filter: Alpha(opacity=100);
			-webkit-border-radius: 4px;
			-moz-border-radius: 4px;
			-o-border-radius: 4px;
			border-radius: 4px;
		}

		.blog-comment img.avatar {
			position: relative;
			float: left;
			margin-left: 0;
			margin-top: 0;
			width: 65px;
			height: 65px;
		}

		.blog-comment .post-comments{
			border: 1px solid #eee;
			margin-bottom: 20px;
			margin-left: 85px;
			margin-right: 0px;
			padding: 10px 20px;
			position: relative;
			-webkit-border-radius: 4px;
			-moz-border-radius: 4px;
			-o-border-radius: 4px;
			border-radius: 4px;
			background: #fff;
			color: #6b6e80;
			position: relative;
		}

		.blog-comment .meta {
			font-size: 13px;
			color: #aaaaaa;
			padding-bottom: 8px;
			margin-bottom: 10px !important;
			border-bottom: 1px solid #eee;
		}

		.blog-comment ul.comments ul{
			list-style-type: none;
			padding: 0;
			margin-left: 85px;
		}

		.blog-comment-form{
			padding-left: 15%;
			padding-right: 15%;
			padding-top: 40px;
		}

		.blog-comment h3,
		.blog-comment-form h3{
			margin-bottom: 40px;
			font-size: 26px;
			line-height: 30px;
			font-weight: 800;
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

				<div class="row justify-content-center block__comments">
					<div class="col-lg-12 col-sm-12">
						<div class="row justify-content-center">
							<div class="col-md-4 col-sm-4">
								
							</div>
						</div>
					</div>

					<div class="col-lg-12 col-sm-12">
						<div class="blog-comment">
							<h3 class="text-success">Comments</h3>
							<hr/>
							<ul v-if="comments" class="comments">
								<li v-for="comment in comments.comments" class="clearfix">
									<img src="https://bootdey.com/img/Content/user_1.jpg" class="avatar" alt="">
									<div class="post-comments">
										<p class="meta">{{$moment(comment.timestamp).format("LL")}}&nbsp;&nbsp; <a href="#">{{comment.name}}</a> says : <i class="pull-right"><a href="#"><small>Reply</small></a></i></p>
										<p>
											{{comment.message}}
										</p>
									</div>
									<ul class="comments">
										<li v-for="reply in comment.replies" class="clearfix">
											<img src="https://bootdey.com/img/Content/user_3.jpg" class="avatar" alt="">
											<div class="post-comments">
												<p class="meta">{{$moment(comment.timestamp).format("LL")}}&nbsp;&nbsp; <a href="#">JohnDoe</a> says : <i class="pull-right"><a href="#"><small>Reply</small></a></i></p>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit.
													Etiam a sapien odio, sit amet
												</p>
											</div>
										</li>
									</ul>
								</li>
							</ul>
						</div>
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