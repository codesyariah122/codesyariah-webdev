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
							<ul class="list-group list-group-flush">
								<li class="list-group-item">
									Price : {{product.price.formatted_with_code}}
								</li>
							</ul>
							<span class="heart">
								<i class='bx bx-heart'></i>
							</span>
						</div>
						<div class="mt-2 pr-3 content">
							<p v-html="product.description"></p>
						</div>
						
						<ul class="list-group list-group-flush mt-5">
							<li class="list-group-item">
								<strong>Total Items : </strong> {{cart.total_items}} &nbsp; &nbsp;
								<button @click="deletedCart" class="btn btn-outline-secondary btn-sm">-</button>
								<button @click="addedCart" class="btn btn-outline-secondary btn-sm">+</button>
							</li>
							<li class="list-group-item">
								<strong>Subtotal : </strong> {{cart.subtotal.formatted_with_code}}
							</li>
						</ul>
						
						<div class="d-grid gap-2 mt-5 mb-5">
							<button class="btn btn-outline-dark rounded-pill"><i class='bx bxs-calculator'></i> Buy Now</button>
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

		async asyncData({params, $commerce, $axios}) {
			const {permalink} = params

			const product = await $commerce.products.retrieve(permalink, {
				type: "permalink"
			})
			let total = 1

			let cart = await $commerce.cart.add(product.id, total)

			console.log(cart)

			function addedCart(){
				total = total+=1
			}

			function deletedCart(){
				total = total > 1 ? total-=1 : 1
			}
			
			return {
				total,
				product,
				cart,
				addedCart,
				deletedCart
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

		mounted(){
			this.refreshCart()
		},

		methods: {
			refreshCart(){
				this.$commerce.cart.refresh()
			},

			changeImage(asset){
				this.change.status = true
				this.change.asset = asset
			}
		}
	}
</script>