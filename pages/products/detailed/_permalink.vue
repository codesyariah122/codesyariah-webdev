<template>
	<div id="product" class="container mt-5 mb-5">
		<div class="card mb-5">
			<div style="margin-left: 1rem; margin-top: 1rem;" class="row justify-content-center text-center">
				<div class="col-lg-12 col-sm-12">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item" aria-current="page">
								{{product.name}}
							</li>
							<li class="breadcrumb-item"><a href="../../#pricing">
								Back to pricelist
							</a></li>
						</ol>
					</nav>
				</div>
			</div>
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
							<!-- <nuxt-link :to="`/products/cart/${product.permalink}`" class="btn btn-dark"><i class='bx bx-cart-add'></i> Add To Cart</nuxt-link> -->

							<button @click="openOrder" class="btn btn-outline-dark"><i class='bx bx-chat'></i> Booking Order</button>
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

		mounted(){
			$crisp.push(['do', 'chat:hide']);
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
			},

			openOrder(){
				console.log("Buka")
				$crisp.push(['do', 'chat:show']);
				$crisp.push(['do', 'chat:open']);
			}
		}
	}
</script>