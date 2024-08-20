<style lang="scss">
	.block__comments{
		margin-top: 5rem;
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
			margin-top: 5rem;
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
			width: 100%;
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
		.block__comments{
			margin-top: -1rem;
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
				width: 75%;
			}
			.blog-comment ul.comments ul{
				list-style-type: none;
				padding: 0;
				margin-left: 25px;
				width: 100%;
			}
		}
	}
</style>

<template>
	<div class="row justify-content-center block__comments">
		<div id="form-comment" class="col-lg-8 col-sm-12">
			<form @submit.prevent="AddComment">
				<div class="row justify-content-center">
					<div class="col-md-4 col-sm-4 mb-3">
						<div class="form-group">
							<label for="name">Your name / fullname</label>
							<input id="name" type="text" name="name" class="form-control" placeholder="Input your name or fullname" v-model="form.name"/>
						</div>
					</div>
					<div class="col-md-4 col-sm-4 mb-3">
						<div class="form-group">
							<label for="email">Your Email</label>
							<input id="email" type="text" name="email" class="form-control" placeholder="your@email.com" v-model="form.email"/>
						</div>
					</div>
					<div class="col-md-4 col-sm-4 mb-3">
						<div class="form-group">
							<label for="link">Your Link : (optional)</label>
							<input id="link" type="text" name="email" class="form-control" placeholder="example(https://yourdomain.com)" v-model="form.link"/>
						</div>
					</div>
					<div class="col-md-12 col-sm-12 mt-3">
						<div class="form-group">
							<label for="message">Your Message : </label>
							<textarea rows="5" id="message" class="form-control" :placeholder="`${reply.id ? 'Reply to : '+reply.name : 'Your Message'}`" v-model="form.message"></textarea>
						</div>
					</div>
					<div class="col-md-12 col-sm-12 mt-3">
						<div class="d-grid gap-2">
							<button type="submit" class="btn btn-primary rounded-pill">Add Comment</button>
						</div>
					</div>
				</div>
			</form>
		</div>

		<div class="col-lg-12 col-sm-12">
			<div class="blog-comment">
				<h3 class="text-success">Comments</h3>
				<hr/>
				<pre>
					{{newcomments}}
				</pre>
				<ul v-if="newcomments" class="comments">
					<pre>
						{{reply.status}}
					</pre>
					<li v-for="(comment, index) in newcomments.comments" class="clearfix">
						<img src="https://bootdey.com/img/Content/user_1.jpg" class="avatar" alt="">
						<div class="post-comments">
							<p class="meta">{{$moment(comment.timestamp).fromNow()}}&nbsp;&nbsp; <a href="#">{{comment.name}}</a> says : <i class="pull-right"><a @click="Reply(comment.id, comment.name,index)" href="#message"><small>Reply</small></a></i></p>
							<p>
								{{comment.message}}
							</p>
						</div>
						<ul class="comments">
							<li v-for="(reply, index) in comment.replies" class="clearfix">
								<img src="https://bootdey.com/img/Content/user_3.jpg" class="avatar" alt="">
								<div class="post-comments">
									<p class="meta">{{$moment(reply.timestamp).fromNow()}}&nbsp;&nbsp; <a href="#">{{reply.name}}</a> says : <i class="pull-right">
										<a href="#message" @click="Reply(reply.id, reply.name, index)"><small>Reply</small></a>
									</i></p>
									<p>
										{{reply.message}}
									</p>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				slug: this.$route.params.slug,
				form: {},
				reply: {
					position: null,
					status: null,
					id: null,
					name: null,
				}
			};
		},

		mounted(){
			this.GetAllComments()
		},

		methods: {
			AddComment(){
				const data = {
					position: this.reply.position,
					status: this.reply.status,
					name: this.form.name,
					email: this.form.email,
					link: this.form.link,
					message: this.form.message
				}
				return this.$store.dispatch("updateComments", JSON.stringify(data), false)
			},
			Reply(id, name, position){
				if(this.$device.isMobile){
					window.scrollTo(30, document.body.scrollHeight)
				}else{
					window.scrollTo(50, document.body.scrollHeight)
				}
				this.reply.position = position
				this.reply.status = true
				this.reply.id = id 
				this.reply.name = name

				const reply = {
					position: position,
					status: this.reply.status,
					name: this.reply.name,
					email: this.form.email,
					link: this.form.link ? this.form.link : '',
					message: this.form.message
				}
				return this.$store.dispatch("updateComments", JSON.stringify(reply))
			},

			GetAllComments(){
				return this.$store.dispatch("allComments", this.slug)
			}
		},

		computed: {
			newcomments(){
				return this.$store.getters['getAllComments']
			}
		}
	}
</script>