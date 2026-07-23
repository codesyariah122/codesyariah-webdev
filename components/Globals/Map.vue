<template>
	<div class="office-map-card">
		<div class="map-copy">
			<div>
				<p class="map-eyebrow">Lokasi Meeting</p>
				<h3>Hitung jarak ke kantor Codesyariah Webdev.</h3>
				<p>
					Calon customer bisa cek estimasi jarak dari posisi saat ini sebelum lanjut
					ketemu langsung atau menentukan titik meeting terdekat.
				</p>
			</div>
			<div class="map-status" :class="{ active: customerLocation }">
				<i class="bx" :class="customerLocation ? 'bx-current-location' : 'bx-map-pin'"></i>
				<div>
					<span>{{ customerLocation ? "Jarak terdeteksi" : "Kantor aktif" }}</span>
					<strong>{{ distanceLabel }}</strong>
				</div>
			</div>
		</div>

		<div class="map-shell">
			<client-only>
				<l-map
					ref="myMap"
					class="codesyariah-leaflet"
					:zoom="zoom"
					:center="mapCenter"
					:scroll-wheel-zoom="false"
					:options="mapOptions"
				>
					<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

					<l-polyline
						v-if="routeLine.length"
						:lat-lngs="routeLine"
						:color="routeColor"
						:weight="5"
						:opacity="0.86"
					></l-polyline>

					<l-circle
						v-if="customerLocation"
						:lat-lng="customerLocation"
						:radius="220"
						color="#20d39b"
						fill-color="#20d39b"
						:fill-opacity="0.18"
						:weight="2"
					></l-circle>

					<l-marker :lat-lng="officeLocation">
						<l-icon
							:icon-size="officeIconSize"
							:icon-anchor="officeIconAnchor"
							:popup-anchor="[8, -18]"
							:icon-url="icons.office"
							:shadow-url="icons.shadow"
						/>
						<l-popup>
							<div class="map-popup">
								<strong>{{ coordinate.title }}</strong>
								<span>{{ coordinate.region }}</span>
								<p>{{ coordinate.address }}</p>
								<a :href="coordinate.external_link" target="_blank" rel="noreferrer">
									Buka Maps
								</a>
							</div>
						</l-popup>
					</l-marker>

					<l-marker v-if="customerLocation" :lat-lng="customerLocation">
						<l-popup>
							<div class="map-popup">
								<strong>Lokasi Anda</strong>
								<span>Estimasi customer</span>
								<p>{{ distanceLabel }} dari kantor Codesyariah.</p>
							</div>
						</l-popup>
					</l-marker>
				</l-map>
			</client-only>

			<div class="map-overlay">
				<div class="overlay-card">
					<span>Estimasi perjalanan</span>
					<strong>{{ distanceLabel }}</strong>
					<p>{{ travelEstimate }}</p>
				</div>
				<div class="overlay-actions">
					<button type="button" :disabled="isLocating" @click="locateCustomer">
						<i class="bx bx-current-location"></i>
						{{ isLocating ? "Mendeteksi..." : "Gunakan lokasi saya" }}
					</button>
					<a :href="routeLink" target="_blank" rel="noreferrer">
						<i class="bx bx-navigation"></i>
						Buka rute
					</a>
				</div>
			</div>
		</div>

		<div class="map-insight">
			<div>
				<i class="bx bx-info-circle"></i>
				<p>{{ statusMessage }}</p>
			</div>
			<a :href="coordinate.external_link" target="_blank" rel="noreferrer">
				Lihat alamat lengkap
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		city: {
			type: Object,
			default: () => ({}),
		},
	},
	data() {
		const officeLat = Number(this.city?.lat || -7.0426);
		const officeLng = Number(this.city?.lon || this.city?.lng || 107.5886);

		return {
			url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			attribution: '© <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
			zoom: 15,
			routeColor: "#20d39b",
			mapOptions: {
				zoomControl: false,
				attributionControl: false,
			},
			officeLocation: [officeLat, officeLng],
			customerLocation: null,
			isLocating: false,
			statusMessage:
				"Klik tombol lokasi untuk melihat visual jarak. Estimasi ini jarak garis lurus, sedangkan rute jalan tetap dibuka melalui Google Maps.",
			officeIconSize: [58, 68],
			officeIconAnchor: [12, 24],
			icons: {
				office: require("assets/marker/store-icon.png"),
				shadow: require("assets/marker/marker-shadow.png"),
			},
			coordinate: {
				title: "Codesyariah Webdeveloper - Office",
				region: "Banjaran Wetan 40377",
				address:
					"Komplek Bumi Sasak Dua Blok B3 / No.5 Jl. Kapten Sarwono RT. 004 / Rw.07, Banjaran Wetan 40377.",
				external_link:
					"https://www.google.com/maps/search/?api=1&query=Komplek%20Bumi%20Sasak%20Dua%20Blok%20B3%20No.5%20Jl.%20Kapten%20Sarwono%20RT.%20004%20Rw.07%20Banjaran%20Wetan%2040377",
			},
		};
	},
	computed: {
		mapCenter() {
			if (!this.customerLocation) return this.officeLocation;

			return [
				(this.officeLocation[0] + this.customerLocation[0]) / 2,
				(this.officeLocation[1] + this.customerLocation[1]) / 2,
			];
		},
		routeLine() {
			return this.customerLocation ? [this.officeLocation, this.customerLocation] : [];
		},
		distanceKm() {
			if (!this.customerLocation) return null;

			return this.calculateDistance(this.customerLocation, this.officeLocation);
		},
		distanceLabel() {
			if (!this.distanceKm) return "Cek dari lokasi Anda";

			return `${this.distanceKm.toFixed(this.distanceKm < 10 ? 1 : 0)} km`;
		},
		travelEstimate() {
			if (!this.distanceKm) return "Aktifkan lokasi untuk melihat estimasi.";

			const minutes = Math.max(8, Math.round((this.distanceKm / 28) * 60));
			return `Perkiraan ${minutes} menit berkendara, tergantung kondisi jalan.`;
		},
		routeLink() {
			const destination = `${this.officeLocation[0]},${this.officeLocation[1]}`;

			if (!this.customerLocation) {
				return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
			}

			return `https://www.google.com/maps/dir/?api=1&origin=${this.customerLocation[0]},${this.customerLocation[1]}&destination=${destination}`;
		},
	},
	methods: {
		locateCustomer() {
			if (!navigator.geolocation) {
				this.statusMessage =
					"Browser Anda belum mendukung deteksi lokasi. Silakan buka rute Google Maps untuk menentukan titik awal manual.";
				return;
			}

			this.isLocating = true;
			this.statusMessage = "Meminta izin lokasi dari browser...";

			navigator.geolocation.getCurrentPosition(
				(position) => {
					this.customerLocation = [
						position.coords.latitude,
						position.coords.longitude,
					];
					this.isLocating = false;
					this.statusMessage =
						"Lokasi berhasil terbaca. Garis hijau menunjukkan jarak langsung dari posisi Anda ke kantor Codesyariah.";

					this.$nextTick(this.fitRouteBounds);
				},
				() => {
					this.isLocating = false;
					this.statusMessage =
						"Izin lokasi belum diberikan. Anda tetap bisa membuka Google Maps dan memilih titik awal secara manual.";
				},
				{
					enableHighAccuracy: true,
					timeout: 10000,
					maximumAge: 60000,
				}
			);
		},
		calculateDistance(start, end) {
			const radius = 6371;
			const dLat = this.toRadians(end[0] - start[0]);
			const dLon = this.toRadians(end[1] - start[1]);
			const lat1 = this.toRadians(start[0]);
			const lat2 = this.toRadians(end[0]);
			const a =
				Math.sin(dLat / 2) * Math.sin(dLat / 2) +
				Math.cos(lat1) *
					Math.cos(lat2) *
					Math.sin(dLon / 2) *
					Math.sin(dLon / 2);
			const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

			return radius * c;
		},
		toRadians(value) {
			return (value * Math.PI) / 180;
		},
		fitRouteBounds() {
			const map = this.$refs.myMap?.mapObject;
			if (!map || !this.customerLocation) return;

			map.fitBounds(this.routeLine, {
				padding: [44, 44],
				maxZoom: 15,
			});
		},
	},
};
</script>

<style scoped>
.office-map-card {
	overflow: hidden;
	border-radius: 8px;
	background: #061f25;
	border: 1px solid rgba(32, 211, 155, 0.22);
	box-shadow: 0 24px 70px rgba(17, 51, 60, 0.16);
}

.map-copy {
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(220px, 0.36fr);
	gap: 18px;
	align-items: stretch;
	padding: 22px;
	background:
		linear-gradient(135deg, rgba(32, 211, 155, 0.16), rgba(255, 255, 255, 0)),
		#092a31;
	color: #ffffff;
}

.map-eyebrow {
	margin: 0 0 8px;
	color: #20d39b;
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.map-copy h3 {
	margin: 0 0 10px;
	color: #ffffff;
	font-size: clamp(22px, 3vw, 32px);
	line-height: 1.15;
	font-weight: 900;
}

.map-copy p {
	margin: 0;
	color: rgba(255, 255, 255, 0.72);
	line-height: 1.65;
}

.map-status {
	display: flex;
	gap: 12px;
	align-items: center;
	padding: 16px;
	border-radius: 8px;
	background: rgba(255, 255, 255, 0.08);
	border: 1px solid rgba(255, 255, 255, 0.12);
}

.map-status.active {
	background: rgba(32, 211, 155, 0.13);
	border-color: rgba(32, 211, 155, 0.42);
}

.map-status i {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 auto;
	width: 44px;
	height: 44px;
	border-radius: 8px;
	background: #20d39b;
	color: #041f18;
	font-size: 24px;
}

.map-status span,
.map-status strong {
	display: block;
}

.map-status span {
	color: rgba(255, 255, 255, 0.68);
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.map-status strong {
	margin-top: 4px;
	color: #ffffff;
	font-size: 22px;
	line-height: 1;
}

.map-shell {
	position: relative;
	min-height: 440px;
	background: #dceeed;
}

.codesyariah-leaflet {
	width: 100%;
	height: 440px;
	z-index: 0;
	filter: saturate(0.85) contrast(1.05);
}

.map-overlay {
	position: absolute;
	right: 16px;
	bottom: 16px;
	left: 16px;
	z-index: 450;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 14px;
	pointer-events: none;
}

.overlay-card {
	max-width: 320px;
	padding: 16px;
	border-radius: 8px;
	background: rgba(6, 31, 37, 0.9);
	backdrop-filter: blur(14px);
	color: #ffffff;
	box-shadow: 0 18px 44px rgba(6, 31, 37, 0.24);
}

.overlay-card span {
	display: block;
	color: #20d39b;
	font-size: 11px;
	font-weight: 900;
	text-transform: uppercase;
}

.overlay-card strong {
	display: block;
	margin: 6px 0 4px;
	font-size: 30px;
	line-height: 1;
}

.overlay-card p {
	margin: 0;
	color: rgba(255, 255, 255, 0.72);
	font-size: 13px;
	line-height: 1.5;
}

.overlay-actions {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	gap: 10px;
	pointer-events: auto;
}

.overlay-actions button,
.overlay-actions a {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	min-height: 44px;
	padding: 0 15px;
	border: 0;
	border-radius: 999px;
	font-weight: 900;
	box-shadow: 0 16px 32px rgba(6, 31, 37, 0.18);
}

.overlay-actions button {
	background: #20d39b;
	color: #041f18;
}

.overlay-actions button:disabled {
	opacity: 0.72;
	cursor: wait;
}

.overlay-actions a {
	background: #ffffff;
	color: #102d35;
}

.map-insight {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 18px;
	padding: 16px 20px;
	background: #ffffff;
}

.map-insight div {
	display: flex;
	gap: 10px;
	align-items: flex-start;
}

.map-insight i {
	color: #08946d;
	font-size: 22px;
	margin-top: 1px;
}

.map-insight p {
	margin: 0;
	color: #526970;
	line-height: 1.55;
}

.map-insight a {
	flex: 0 0 auto;
	color: #087859;
	font-weight: 900;
}

::v-deep .leaflet-container {
	z-index: 0;
	font-family: "Open Sans", Arial, sans-serif;
}

::v-deep .leaflet-control-attribution {
	display: none;
}

::v-deep .leaflet-popup-content-wrapper {
	border-radius: 8px;
	box-shadow: 0 18px 42px rgba(6, 31, 37, 0.22);
}

::v-deep .leaflet-popup-content {
	margin: 0;
}

.map-popup {
	width: 240px;
	padding: 16px;
	color: #102d35;
}

.map-popup strong,
.map-popup span {
	display: block;
}

.map-popup strong {
	font-weight: 900;
}

.map-popup span {
	margin: 5px 0 8px;
	color: #08946d;
	font-size: 12px;
	font-weight: 900;
	text-transform: uppercase;
}

.map-popup p {
	margin: 0 0 12px;
	color: #526970;
	line-height: 1.55;
}

.map-popup a {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 36px;
	padding: 0 13px;
	border-radius: 999px;
	background: #20d39b;
	color: #041f18;
	font-weight: 900;
}

@media (max-width: 767px) {
	.map-copy {
		grid-template-columns: 1fr;
		padding: 18px;
	}

	.map-shell {
		min-height: 520px;
	}

	.codesyariah-leaflet {
		height: 520px;
	}

	.map-overlay {
		flex-direction: column;
		align-items: stretch;
	}

	.overlay-card {
		max-width: none;
	}

	.overlay-actions {
		display: grid;
		grid-template-columns: 1fr;
	}

	.map-insight {
		flex-direction: column;
		align-items: flex-start;
	}
}
</style>
