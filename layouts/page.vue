<template>
	<div>

		<GlobalsScrollToTop/>

		<LayoutBlogHeader/>

		<Nuxt/>

		<LayoutFooter/>

	</div>
</template>

<script>
	export default {
		head: {
			link: [

			],
			script: [
			{
				src: '/assets/js/main.js', ssr: false
			}
			],
		}
	}
</script>
