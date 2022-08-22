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
				{
					rel: 'stylesheet',
					href: '/assets/css/style.css',
					type: 'text/css'
				}
			],
			script: [
				{
					src: '/assets/js/main.js'
				}
			],
		}
	}
</script>