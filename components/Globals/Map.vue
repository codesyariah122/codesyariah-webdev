<template>
	<div :style="`${$device.isDesktop ? 'height: 280px; width: 100%;z-index: 0;' : 'height: 280px; width: 345px;z-index: 0;'}`">

		<client-only>
			<l-map
			ref="myMap"
			:zoom="zoom"
			:center="center"
			scrollWheelZoom="false"
			>
			<l-marker :lat-lng="regionCenter">
				<l-icon
				:icon-size="iconSize"
				:icon-anchor="staticAnchor"
				:icon-url="icons[1]"
				:shadow-url="icons[2]"
				/>
				<l-popup>
					<center class="container">
						<small class="font-weight-bold bd-highlight">
							{{coordinate.title}}
						</small><br>
						<small class="text-success">
							{{ coordinate.region }}
						</small>

						<br>

						<img class="mt-2" :src="require('~/assets/marker/store-icon.png')" :width="`${$device.isDesktop ? '100' : ''}`">
						<br><br>
						<a :href="coordinate.external_link" class="btn btn-primary btn-sm text-white rounded-pill">View Location</a>
					</center>
				</l-popup>
			</l-marker>
			<l-polyline
			:lat-lngs="polyline.latlngs"
			:color="polyline.color"
			></l-polyline>
			<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
			</l-map>
		</client-only>
	</div>
</template>

<script>
	export default {
		props: ['city'],
		data () {
			return {
				url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:
				'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				zoom: 16,
				iconSize: [60,70],
				center: {
					lat: this.city.lat,
					lng: this.city.lon,
				},
				scrollWheelZoom: false,
				icons: {
					1: require('assets/marker/store-icon.png'),
					2: require('assets/marker/marker-shadow.png'),
				},
				staticAnchor: [10, 15],
				bounds: null,
				regionCenter: [this.city.lat, this.city.lon],
				address: {
					long: '',
					display: '',
				},
				polyline: {
					color: 'red',
					latlngs: [],
				},
				coordinate: {
					title: 'Codesyariah Webdeveloper - Office',
					region: 'Cimahi Selatan',
					external_link: 'https://www.google.com/maps/place/Jl.+Boeing+Utara+I+No.7,+Melong,+Kec.+Cimahi+Sel.,+Kota+Cimahi,+Jawa+Barat+40534/@-6.9254994,107.5542601,17z/data=!4m13!1m7!3m6!1s0x2e68e5f479e26977:0xf11143e38b100a69!2sJl.+Boeing+Utara+I+No.7,+Melong,+Kec.+Cimahi+Sel.,+Kota+Cimahi,+Jawa+Barat+40534!3b1!8m2!3d-6.9254994!4d107.5542601!3m4!1s0x2e68e5f479e26977:0xf11143e38b100a69!8m2!3d-6.9254994!4d107.5542601'

				}

			}
		}
	}
</script>

<style>
	.map__layout{
		margin-top: .1rem;
		z-index: -1;
	}
	.leaflet-container {
		z-index:0;
	}

	.leaflet-popup{
		width: 250px;
	}
	
</style>