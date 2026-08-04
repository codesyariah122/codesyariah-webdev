<template>
  <section class="related-posts">
    <h2>Artikel Terkait</h2>

    <div class="row">
      <div
        class="col-lg-4 mb-4"
        v-for="post in relatedPosts"
        :key="post.sys.id"
      >
        <NuxtLink :to="`/blog/${post.fields.slug}`" class="related-card">
          <img :src="image(post)" :alt="post.fields.title" />

          <div class="content">
            <div class="tags">
              <span v-for="tag in post.fields.tags" :key="tag">
                {{ tag }}
              </span>
            </div>

            <h3>
              {{ post.fields.title }}
            </h3>

            <p>
              {{ post.fields.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
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
      const allposts = this.$store.state.allposts || [];
      const homepagePosts = this.$store.state.posts || [];

      return allposts.length
        ? allposts
        : homepagePosts.length
        ? homepagePosts
        : blogFallbackPosts;
    },

    relatedPosts() {
      const currentTags = this.currentPost.fields.tags || [];

      return this.posts
        .filter((p) => p.fields.slug !== this.currentPost.fields.slug)
        .filter((p) => {
          const tags = p.fields.tags || [];
          return tags.some((tag) => currentTags.includes(tag));
        })
        .slice(0, 3);
    },
  },

  methods: {
    image(post) {
      const img = post.fields.heroImage?.fields?.file?.url;

      return img?.startsWith("//") ? `https:${img}` : img;
    },
  },
};
</script>
