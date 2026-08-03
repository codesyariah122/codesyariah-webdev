<template>
  <section class="previous-next">
    <NuxtLink
      v-if="previous"
      :to="`/blog/${previous.fields.slug}`"
      class="nav-card prev"
    >
      <small>← Artikel Sebelumnya</small>

      <h4>{{ previous.fields.title }}</h4>
    </NuxtLink>

    <NuxtLink
      v-if="next"
      :to="`/blog/${next.fields.slug}`"
      class="nav-card next"
    >
      <small>Artikel Selanjutnya →</small>

      <h4>{{ next.fields.title }}</h4>
    </NuxtLink>
  </section>
</template>

<script>
import { blogFallbackPosts } from "@/data/blogFallbackPosts";

export default {
  props: {
    currentPost: Object,
  },

  computed: {
    posts() {
      const all = this.$store.state.allposts || [];
      const home = this.$store.state.posts || [];

      return all.length ? all : home.length ? home : blogFallbackPosts;
    },

    index() {
      return this.posts.findIndex(
        (p) => p.fields.slug === this.currentPost.fields.slug,
      );
    },

    previous() {
      return this.index > 0 ? this.posts[this.index - 1] : null;
    },

    next() {
      return this.index < this.posts.length - 1
        ? this.posts[this.index + 1]
        : null;
    },
  },
};
</script>
