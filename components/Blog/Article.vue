<template>
	<div>
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
	</div>
</template>


<script>
	export default {
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
		}
	}
</script>