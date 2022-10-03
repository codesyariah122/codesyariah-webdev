<template>
	<div>
		<LayoutSlugHeader/>

		<GlobalsScrollToTop/>

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
