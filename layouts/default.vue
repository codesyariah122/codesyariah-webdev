<template>
	<div>

		<GlobalsScrollToTop/>

		<LayoutHeader/>

		<LayoutSectionHero/>

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
				src: '/assets/js/main.js'
			}
			],
		}
	}
</script>