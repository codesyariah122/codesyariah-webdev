<template>
	<div id="product" class="container mt-5 mb-5">
		<div class="card">
			<div class="row g-0">
				<div class="col-md-6 border-end">
					<div class="d-flex flex-column justify-content-center">
						<div class="main_image">
							<img :src="change.status ? change.asset : product.image.url" id="main_product_image" width="350">
						</div>
						<div class="thumbnail_images">
							<ul id="thumbnail">
								<li v-for="asset in product.assets">
									<img @click="changeImage(asset.url)" :src="asset.url" width="70">
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="p-3 right-side">
						<div class="d-flex justify-content-between align-items-center">
							<h3>{{product.name}}</h3>
							<span class="heart">
								<i class='bx bx-heart'></i>
							</span>
						</div>
						<div class="mt-2 pr-3 content">
							<p v-html="product.description"></p>
						</div>
						<h3>{{product.price.formatted_with_code}}</h3>
						
						<div class="buttons d-flex flex-row mt-5 gap-3">
							<nuxt-link :to="`/products/cart/${product.permalink}`" class="btn btn-dark"><i class='bx bx-cart-add'></i> Add To Cart</nuxt-link>
						</div>
						<div class="search-option">
							<i class='bx bx-search-alt-2 first-search'></i>
							<div class="inputs">
								<input type="text" name="">
							</div>
							<i class='bx bx-share-alt share'></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'products',
		layout: 'product',
		async asyncData({params, $commerce}) {
			const {permalink} = params
			const product = await $commerce.products.retrieve(permalink, {
				type: "permalink"
			})
			
			return {
				product
			}
		},

		data(){
			return {
				change: {
					status: null,
					asset: ''
				}
			}
		},

		methods: {
			changeImage(asset){
				console.log(asset)
				this.change.status = true
				this.change.asset = asset
			}
		}
	}
</script>