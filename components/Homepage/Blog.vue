<template>
	<section id="blog" class="blog-insight">
		<div class="container">
			<div class="insight-heading">
				<div>
					<p class="insight-eyebrow">Insight Bisnis Digital</p>
					<h2>Artikel yang membantu owner bisnis mengambil keputusan digital dengan lebih percaya diri.</h2>
				</div>
				<p>
					Kumpulan catatan, edukasi, dan update seputar website, strategi digital, sistem bisnis, serta teknologi yang dibahas dengan bahasa yang lebih mudah dipahami.
				</p>
			</div>

			<div class="insight-grid">
				<article v-for="post in posts" :key="post.fields.slug" class="insight-card">
					<a :href="`/blog/${post.fields.slug}`" class="insight-media" :aria-label="post.fields.title">
						<img :src="`https://${post.fields.heroImage.fields.file.url}`" :alt="post.fields.title" loading="lazy">
						<span>{{ primaryTag(post) }}</span>
					</a>
					<div class="insight-content">
						<div class="insight-meta">
							<span>{{ $moment(post.fields.publishedDate).format("D MMMM YYYY") }}</span>
							<span>{{ readingTime(post) }} min read</span>
						</div>
						<h3>
							<a :href="`/blog/${post.fields.slug}`">{{ post.fields.title }}</a>
						</h3>
						<p>{{ excerpt(post) }}</p>
						<div class="insight-tags">
							<span v-for="tag in limitedTags(post)" :key="tag">#{{ tag }}</span>
						</div>
						<div v-if="post.fields.author" class="insight-author">
							<img :src="`https://${post.fields.author.fields.profilePhoto.fields.file.url}`" :alt="post.fields.author.fields.name">
							<div>
								<strong>{{ post.fields.author.fields.name }}</strong>
								<small>Author Codesyariah WebDev</small>
							</div>
							<a :href="`/blog/${post.fields.slug}`" aria-label="Baca artikel">
								<i class="bx bx-right-arrow-alt"></i>
							</a>
						</div>
					</div>
				</article>
			</div>

			<div class="insight-footer">
				<div>
					<strong>Butuh arahan sebelum bikin website atau sistem?</strong>
					<span>Baca insight dulu, lalu diskusikan kebutuhan bisnis Anda dengan tim Codesyariah.</span>
				</div>
				<nuxt-link to="/blog">
					Lihat Semua Artikel <i class="bx bx-right-arrow-alt"></i>
				</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	computed: {
		posts() {
			return this.$store.state.posts || [];
		},
	},

	mounted() {
		this.$store.dispatch("getPosts");
	},

	methods: {
		primaryTag(post) {
			return post.fields.tags?.[0] ? `#${post.fields.tags[0]}` : "Insight";
		},
		limitedTags(post) {
			return (post.fields.tags || []).slice(0, 3);
		},
		excerpt(post) {
			const source = post.fields.excerpt || post.fields.description || post.fields.content || post.fields.body || post.fields.title;
			const text = String(source)
				.replace(/<[^>]+>/g, " ")
				.replace(/[#*_>`~\[\]()]/g, " ")
				.replace(/\s+/g, " ")
				.trim();

			return text.length > 128 ? `${text.slice(0, 128)}...` : text;
		},
		readingTime(post) {
			const source = post.fields.content || post.fields.body || post.fields.description || post.fields.title || "";
			const words = String(source).trim().split(/\s+/).filter(Boolean).length;
			return Math.max(2, Math.ceil(words / 180));
		},
	},
};
</script>

<style scoped>
.blog-insight {
	position: relative;
	padding: 86px 0;
	background: linear-gradient(180deg, #f7fbfb 0%, #ffffff 58%, #f4faf8 100%);
}

.insight-heading {
	display: grid;
	grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
	gap: 34px;
	align-items: end;
	margin-bottom: 34px;
}

.insight-eyebrow {
	margin: 0 0 12px;
	color: #08946d;
	font-size: 12px;
	font-weight: 800;
	text-transform: uppercase;
	letter-spacing: 0;
}

.insight-heading h2 {
	margin: 0;
	color: #102d35;
	font-size: clamp(28px, 4vw, 48px);
	line-height: 1.12;
	font-weight: 800;
}

.insight-heading > p {
	margin: 0;
	color: #5a6b70;
	font-size: 17px;
	line-height: 1.75;
}

.insight-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 22px;
}

.insight-card {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	border-radius: 8px;
	border: 1px solid #e0ecec;
	background: #ffffff;
	box-shadow: 0 18px 46px rgba(17, 51, 60, 0.09);
	transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.insight-card:hover {
	transform: translateY(-6px);
	box-shadow: 0 28px 70px rgba(17, 51, 60, 0.15);
}

.insight-media {
	position: relative;
	display: block;
	aspect-ratio: 16 / 10;
	overflow: hidden;
	background: #0d2b33;
}

.insight-media img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	filter: saturate(0.92);
	transition: transform 0.35s ease;
}

.insight-card:hover .insight-media img {
	transform: scale(1.05);
}

.insight-media:after {
	content: "";
	position: absolute;
	inset: 0;
	background: linear-gradient(180deg, rgba(4, 18, 24, 0.02) 0%, rgba(4, 18, 24, 0.38) 100%);
}

.insight-media span {
	position: absolute;
	left: 18px;
	bottom: 16px;
	z-index: 2;
	display: inline-flex;
	padding: 7px 11px;
	border-radius: 999px;
	background: #18d19b;
	color: #042018;
	font-size: 12px;
	font-weight: 800;
}

.insight-content {
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 24px;
}

.insight-meta {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 14px;
	color: #708287;
	font-size: 13px;
	font-weight: 700;
}

.insight-meta span + span:before {
	content: "";
	display: inline-block;
	width: 5px;
	height: 5px;
	margin: 0 8px 2px 0;
	border-radius: 50%;
	background: #18d19b;
}

.insight-content h3 {
	margin: 0 0 12px;
	font-size: 22px;
	line-height: 1.28;
	font-weight: 800;
}

.insight-content h3 a {
	color: #102d35;
}

.insight-content h3 a:hover {
	color: #08946d;
}

.insight-content p {
	margin: 0 0 18px;
	color: #5b6c72;
	line-height: 1.68;
}

.insight-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 20px;
}

.insight-tags span {
	padding: 6px 10px;
	border-radius: 999px;
	background: #edf6f5;
	color: #426167;
	font-size: 12px;
	font-weight: 800;
}

.insight-author {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-top: auto;
	padding-top: 18px;
	border-top: 1px solid #edf2f2;
}

.insight-author img {
	width: 44px;
	height: 44px;
	border-radius: 50%;
	object-fit: cover;
}

.insight-author strong,
.insight-author small {
	display: block;
}

.insight-author strong {
	color: #17353d;
	line-height: 1.2;
}

.insight-author small {
	color: #718387;
	font-size: 12px;
}

.insight-author a {
	margin-left: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background: #102d35;
	color: #ffffff;
	font-size: 24px;
}

.insight-author a:hover {
	background: #18a77d;
	color: #ffffff;
}

.insight-footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	margin-top: 28px;
	padding: 24px;
	border-radius: 8px;
	background: #0d2b33;
	color: #ffffff;
}

.insight-footer strong,
.insight-footer span {
	display: block;
}

.insight-footer strong {
	margin-bottom: 4px;
	font-size: 18px;
}

.insight-footer span {
	color: rgba(255, 255, 255, 0.72);
}

.insight-footer a {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	min-height: 44px;
	white-space: nowrap;
	padding: 0 18px;
	border-radius: 999px;
	background: #18d19b;
	color: #042018;
	font-weight: 800;
}

@media (max-width: 991px) {
	.insight-heading,
	.insight-grid,
	.insight-footer {
		grid-template-columns: 1fr;
	}

	.insight-footer {
		align-items: flex-start;
		flex-direction: column;
	}
}

@media (max-width: 575px) {
	.blog-insight {
		padding: 66px 0;
	}

	.insight-content {
		padding: 20px;
	}
}
</style>
