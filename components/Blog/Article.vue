<template>
  <section class="article-layout">
    <div class="article-content">
      <article class="blog-content" v-html="$md.render(body)" />

      <div class="article-tags mt-5">
        <h5>Tags</h5>

        <div class="tags">
          <NuxtLink
            v-for="tag in tags"
            :key="tag"
            :to="`/blog/tag/${tag.toLowerCase()}`"
            class="tag"
          >
            #{{ tag }}
          </NuxtLink>
        </div>
      </div>

      <AuthorBox :post="activePost" />

      <RelatedServices :tags="tags" />

      <RelatedPosts :current-post="activePost" />

      <PreviousNext :current-post="activePost" />

      <NewsletterCTA />
    </div>
  </section>
</template>

<script>
import ShareButtons from "./ShareButtons.vue";
import AuthorBox from "./AuthorBox.vue";
import RelatedPosts from "./RelatedPosts.vue";
import RelatedServices from "./RelatedServices.vue";
import PreviousNext from "./PreviousNext.vue";
import NewsletterCTA from "./NewsletterCTA.vue";

import { blogFallbackPosts } from "@/data/blogFallbackPosts";

export default {
  components: {
    ShareButtons,
    AuthorBox,
    RelatedPosts,
    RelatedServices,
    PreviousNext,
    NewsletterCTA,
  },

  props: {
    post: Object,
  },

  data() {
    return {
      slug: this.$route.params.slug,
    };
  },

  computed: {
    activePost() {
      if (this.post) return this.post;

      const allposts = this.$store.state.allposts || [];

      const homepagePosts = this.$store.state.posts || [];

      const posts = allposts.length
        ? allposts
        : homepagePosts.length
        ? homepagePosts
        : blogFallbackPosts;

      return posts.find((el) => el.fields.slug === this.slug) || posts[0];
    },

    body() {
      return this.activePost.fields.body || "";
    },

    title() {
      return this.activePost.fields.title;
    },

    tags() {
      return this.activePost.fields.tags || [];
    },
  },
};
</script>
