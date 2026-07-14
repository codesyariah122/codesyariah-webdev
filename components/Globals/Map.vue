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
						<small class="text-muted">
							{{ coordinate.address }}
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
					region: 'Banjaran Wetan 40377',
					address: 'Komplek Bumi Sasak Dua Blok B3 / No.5 Jl. Kapten Sarwono RT. 004 / Rw.07, Banjaran Wetan 40377.',
					external_link: 'https://www.google.com/maps/search/?api=1&query=Komplek%20Bumi%20Sasak%20Dua%20Blok%20B3%20No.5%20Jl.%20Kapten%20Sarwono%20RT.%20004%20Rw.07%20Banjaran%20Wetan%2040377'

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
