<template>
  <section class="blog-hero">
    <div class="hero-image">
      <img :src="image" :alt="title" />

      <div class="overlay"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="tags">
          <span v-for="tag in tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>

        <h1>
          {{ title }}
        </h1>

        <p class="description">
          {{ description }}
        </p>

        <div class="meta">
          <div>👤 {{ author }}</div>

          <div>📅 {{ published }}</div>

          <div>⏱ {{ readingTime }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    post: Object,
  },

  computed: {
    fields() {
      return this.post.fields;
    },

    title() {
      return this.fields.title;
    },

    description() {
      return this.fields.description || this.fields.summary;
    },

    tags() {
      return this.fields.tags || [];
    },

    author() {
      return this.fields.author?.fields?.name || "Codesyariah";
    },

    image() {
      const img = this.fields.heroImage?.fields?.file?.url;

      return img?.startsWith("//") ? `https:${img}` : img;
    },

    published() {
      return new Date(
        this.fields.publishedDate || this.post.sys.createdAt,
      ).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },

    readingTime() {
      const words = (this.fields.body || "").split(/\s+/).length;

      return Math.max(1, Math.ceil(words / 200)) + " min read";
    },
  },
};
</script>
