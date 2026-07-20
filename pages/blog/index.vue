<template>
  <section class="wrapper blog-page">
    <div class="container">
      <div class="blog-hero">
        <div class="blog-hero-copy">
          <span class="blog-eyebrow">Insight bisnis digital</span>
          <h1>Blog Codesyariah WebDevelopment</h1>

          <p>
            Artikel ringan, praktis, dan mudah dipahami untuk membantu owner
            bisnis membaca peluang website, sistem digital, marketing, dan
            teknologi tanpa harus tenggelam di istilah teknis.
          </p>

          <div class="blog-hero-actions">
            <a href="#blog-list" class="blog-primary-action scrollto">
              Lihat Artikel
              <i class="bx bx-right-arrow-alt"></i>
            </a>

            <span class="blog-signal">
              <i class="bx bx-check-circle"></i>
              Bahasa mudah untuk customer awam teknologi
            </span>
          </div>
        </div>

        <div class="blog-hero-panel">
          <div class="blog-panel-top">
            <span>CONTENT.PULSE</span>
            <strong>ONLINE</strong>
          </div>

          <div class="blog-panel-focus">
            <span>Fokus edukasi</span>
            <strong>Website, Digital Trust & Growth</strong>
          </div>

          <div class="blog-stats">
            <div>
              <strong>{{ allposts.length }}</strong>
              <span>Artikel aktif</span>
            </div>

            <div>
              <strong>3</strong>
              <span>Topik utama</span>
            </div>

            <div>
              <strong>WA</strong>
              <span>Konsultasi cepat</span>
            </div>
          </div>
        </div>
      </div>

      <div id="blog-list" v-if="allposts.length" class="row blog-grid">
        <div
          v-for="(post, index) in allposts"
          :key="post.fields.slug || index"
          class="col-sm-12 col-md-6 col-lg-4 mb-4"
        >
          <div
            class="blog-card text-white"
            :style="{
              backgroundImage: `url('${assetUrl(post.fields.heroImage)}')`,
            }"
          >
            <img
              class="card-img d-none"
              :src="assetUrl(post.fields.heroImage)"
              :alt="post.fields.title || 'Codesyariah blog'"
            />

            <div class="blog-card-overlay d-flex flex-column">
              <div class="blog-card-body">
                <div class="blog-card-meta">
                  <span>{{ primaryTag(post) }}</span>
                  <span>{{ readTime(post) }} min read</span>
                </div>

                <div class="blog-tags" v-if="post.fields.tags && post.fields.tags.length">
                  <small
                    v-for="tag in post.fields.tags"
                    :key="tag"
                    class="blog-tag"
                  >
                    #{{ tag }}
                  </small>
                </div>

                <h4 class="blog-card-title">
                  <nuxt-link
                    class="text-white"
                    :to="`/blog/${post.fields.slug}`"
                  >
                    {{ post.fields.title }}
                  </nuxt-link>
                </h4>

                <p class="blog-card-excerpt">
                  {{ excerpt(post) }}
                </p>

                <small class="blog-date">
                  <i class="far fa-clock"></i>

                  {{
                    post.fields.publishedDate
                      ? $moment(post.fields.publishedDate).format("LL")
                      : "Tanggal belum tersedia"
                  }}
                </small>
              </div>

              <div class="blog-card-footer">
                <div class="media">
                  <img
                    class="mr-3 rounded-circle"
                    :src="authorPhoto(post)"
                    :alt="authorName(post)"
                    style="width: 50px; height: 50px; object-fit: cover"
                  />

                  <div class="media-body">
                    <h6 class="my-0 text-white d-block">
                      {{ authorName(post) }}
                    </h6>

                    <small>Author of Codesyariah WebDev</small>
                  </div>
                </div>

                <nuxt-link class="blog-read-link" :to="`/blog/${post.fields.slug}`">
                  Baca Insight
                  <i class="bx bx-right-arrow-alt"></i>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="row">
        <div class="col-12 text-center py-5">
          <p class="blog-empty">Belum ada artikel yang dapat ditampilkan.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { blogFallbackPosts } from "@/data/blogFallbackPosts";

export default {
  name: "Blog",

  layout: "page",

  data() {
    return {
      fallbackPosts: blogFallbackPosts,
    };
  },

  mounted() {
    if (process.client && window.$crisp) {
      window.$crisp.push(["do", "chat:hide"]);
    }

    this.$store.dispatch("allPosts");
  },

  computed: {
    allposts() {
      const storePosts = Array.isArray(this.$store.state.allposts)
        ? this.$store.state.allposts
        : [];

      const homepagePosts = Array.isArray(this.$store.state.posts)
        ? this.$store.state.posts
        : [];

      const selectedPosts = storePosts.length
        ? storePosts
        : homepagePosts.length
        ? homepagePosts
        : this.fallbackPosts;

      return selectedPosts.filter((post) => {
        return post && post.fields && post.fields.slug && post.fields.title;
      });
    },
  },

  methods: {
    assetUrl(asset) {
      const url =
        asset && asset.fields && asset.fields.file && asset.fields.file.url
          ? asset.fields.file.url
          : "/assets/img/new-hero-bg-1-desktop.jpg";

      if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
      }

      if (url.startsWith("//")) {
        return `https:${url}`;
      }

      if (url.startsWith("/")) {
        return url;
      }

      return `https://${url}`;
    },

    authorName(post) {
      return (
        (post &&
          post.fields &&
          post.fields.author &&
          post.fields.author.fields &&
          post.fields.author.fields.name) ||
        "Codesyariah WebDev"
      );
    },

    authorPhoto(post) {
      const profilePhoto =
        post &&
        post.fields &&
        post.fields.author &&
        post.fields.author.fields &&
        post.fields.author.fields.profilePhoto;

      if (profilePhoto) {
        return this.assetUrl(profilePhoto);
      }

      return "/assets/img/me.jpg";
    },

    excerpt(post) {
      const text =
        (post && post.fields && (post.fields.description || post.fields.body)) ||
        "Insight praktis seputar website, teknologi, dan digitalisasi bisnis.";

      return text.replace(/[#*_>`!\[\]()]/g, "").slice(0, 132).trim() + "...";
    },

    primaryTag(post) {
      const tags = post && post.fields && post.fields.tags;
      return tags && tags.length ? `#${tags[0]}` : "#insight";
    },

    readTime(post) {
      const text =
        (post && post.fields && (post.fields.body || post.fields.description)) ||
        "";
      const words = text.trim().split(/\s+/).filter(Boolean).length;

      return Math.max(2, Math.ceil(words / 180));
    },
  },
};
</script>

<style scoped>
.blog-page {
  position: relative;
  overflow: hidden;
  padding: 132px 0 120px;
  background:
    radial-gradient(circle at 14% 12%, rgba(31, 211, 166, 0.2), transparent 28%),
    radial-gradient(circle at 86% 8%, rgba(120, 255, 214, 0.13), transparent 24%),
    linear-gradient(180deg, #061b20 0%, #0a2b31 42%, #f4fbf9 42%, #f4fbf9 100%);
}

.blog-page:before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8), transparent 58%);
}

.blog-page .container {
  position: relative;
  z-index: 1;
}

.blog-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.9fr);
  gap: 30px;
  align-items: stretch;
  margin-bottom: 54px;
}

.blog-hero-copy,
.blog-hero-panel {
  border: 1px solid rgba(189, 248, 230, 0.16);
  border-radius: 8px;
  background: rgba(9, 38, 44, 0.72);
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(14px);
}

.blog-hero-copy {
  padding: clamp(32px, 5vw, 54px);
}

.blog-page h1 {
  max-width: 780px;
  margin: 16px 0 0;
  color: #ffffff;
  font-family: "Ubuntu", sans-serif;
  font-size: clamp(2.45rem, 5.5vw, 5.35rem);
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: 0;
}

.blog-hero-copy p {
  max-width: 720px;
  margin: 24px 0 0;
  color: rgba(233, 255, 249, 0.78);
  font-size: clamp(1rem, 1.35vw, 1.22rem);
  line-height: 1.75;
}

.blog-eyebrow,
.blog-signal,
.blog-primary-action,
.blog-card-meta span,
.blog-read-link {
  font-family: "Ubuntu", sans-serif;
}

.blog-eyebrow {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 7px 13px;
  border: 1px solid rgba(189, 248, 230, 0.24);
  border-radius: 999px;
  color: #bdf8e6;
  background: rgba(31, 211, 166, 0.12);
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
}

.blog-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  margin-top: 30px;
}

.blog-primary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 48px;
  padding: 12px 18px;
  border-radius: 8px;
  color: #041f24;
  background: #1fd3a6;
  font-weight: 900;
  text-decoration: none;
  box-shadow: 0 16px 36px rgba(31, 211, 166, 0.24);
}

.blog-signal {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(233, 255, 249, 0.82);
  font-size: 0.92rem;
  font-weight: 700;
}

.blog-signal i {
  color: #1fd3a6;
  font-size: 1.2rem;
}

.blog-hero-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px;
}

.blog-panel-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(233, 255, 249, 0.62);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.blog-panel-top strong {
  color: #1fd3a6;
}

.blog-panel-focus {
  margin: 34px 0;
  padding: 28px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.blog-panel-focus span {
  display: block;
  color: rgba(233, 255, 249, 0.58);
  font-size: 0.95rem;
  font-weight: 700;
}

.blog-panel-focus strong {
  display: block;
  margin-top: 10px;
  color: #ffffff;
  font-size: clamp(1.7rem, 2.3vw, 2.35rem);
  line-height: 1.12;
}

.blog-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.blog-stats div {
  min-height: 104px;
  padding: 18px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
}

.blog-stats strong,
.blog-stats span {
  display: block;
}

.blog-stats strong {
  color: #ffffff;
  font-size: 1.75rem;
  line-height: 1;
}

.blog-stats span {
  margin-top: 10px;
  color: rgba(233, 255, 249, 0.62);
  font-size: 0.8rem;
  font-weight: 800;
}

.blog-grid {
  row-gap: 30px;
}

.blog-card {
  position: relative;
  min-height: 520px;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  background-color: #0a2d34;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid rgba(8, 37, 44, 0.1);
  box-shadow: 0 24px 58px rgba(6, 27, 32, 0.16);
  transform: translateY(0);
  transition: transform 240ms ease, box-shadow 240ms ease;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 34px 72px rgba(6, 27, 32, 0.24);
}

.blog-card:before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(6, 27, 32, 0.28), rgba(6, 27, 32, 0.96)),
    linear-gradient(135deg, rgba(31, 211, 166, 0.28), transparent 38%);
  z-index: 1;
}

.blog-card-overlay {
  position: relative;
  z-index: 2;
  min-height: 520px;
  padding: 28px;
}

.blog-card-body {
  flex: 1 1 auto;
}

.blog-card-meta {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 18px;
}

.blog-card-meta span {
  color: rgba(233, 255, 249, 0.78);
  font-size: 0.76rem;
  font-weight: 900;
  text-transform: uppercase;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.blog-tag {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(31, 211, 166, 0.18);
  color: #bdf8e6;
  font-size: 0.78rem;
  font-weight: 800;
}

.blog-card-title {
  margin: 0 0 14px;
  font-family: "Ubuntu", sans-serif;
  font-size: clamp(1.45rem, 2vw, 2rem);
  font-weight: 800;
  line-height: 1.18;
}

.blog-card-title a {
  text-decoration: none;
}

.blog-card-excerpt {
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.96rem;
  line-height: 1.65;
}

.blog-date {
  color: rgba(255, 255, 255, 0.78);
  font-weight: 700;
}

.blog-card-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
  margin-top: auto;
  padding-top: 22px;
}

.blog-card-footer .media {
  align-items: center;
}

.blog-card-footer img {
  border: 3px solid rgba(255, 255, 255, 0.28);
}

.blog-read-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 124px;
  min-height: 40px;
  padding: 9px 12px;
  border-radius: 8px;
  color: #041f24;
  background: #1fd3a6;
  font-size: 0.86rem;
  font-weight: 900;
  text-decoration: none;
  white-space: nowrap;
}

.blog-empty {
  color: #60757a;
  font-weight: 700;
}

@media (max-width: 991px) {
  .blog-hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .blog-page {
    padding-top: 104px;
    background:
      radial-gradient(circle at 18% 6%, rgba(31, 211, 166, 0.18), transparent 34%),
      linear-gradient(180deg, #061b20 0%, #0a2b31 52%, #f4fbf9 52%, #f4fbf9 100%);
  }

  .blog-hero-copy,
  .blog-hero-panel {
    border-radius: 8px;
  }

  .blog-stats {
    grid-template-columns: 1fr;
  }

  .blog-stats div {
    min-height: auto;
  }
}

@media (max-width: 575px) {
  .blog-page {
    padding: 92px 0 80px;
  }

  .blog-page h1 {
    font-size: 2.45rem;
  }

  .blog-hero-copy,
  .blog-hero-panel {
    padding: 24px;
  }

  .blog-card,
  .blog-card-overlay {
    min-height: 500px;
  }

  .blog-card-overlay {
    padding: 24px;
  }
  .blog-card-footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .blog-read-link {
    width: 100%;
  }
}
</style>
