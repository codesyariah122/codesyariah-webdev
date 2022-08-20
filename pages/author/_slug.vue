<template>
	<div>
		<div v-for="author in authors">
			<h1>{{author.fields.name}}</h1>
			<img :src="`https:${author.fields.profilePhoto.fields.file.url}`" width="80">
			<article v-if="author.fields.biography" v-html="$md.render(author.fields.biography)"></article>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'author',

		computed: {
			authors(){
				const param = this.$route.params
				console.log(param)
				const author = this.$store.state.authors.map(d => d).filter(d => d.fields.slug === param.slug)
				console.log(author)
				return author
			}
		}
	}
</script>