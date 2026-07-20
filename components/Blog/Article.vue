<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-12 col-sm-12">
        <article v-html="$md.render(body)"></article>
      </div>
    </div>
    <div class="d-flex flex-wrap mt-5 mb-5">
      <div class="col-md-1">
        <strong>Tags : </strong>
      </div>
      <div v-for="tag in tags" :key="tag" class="col-md-1">
        <span class="badge rounded-pill bg-success text-white">
          #{{ tag }} </span
        >&nbsp;&nbsp;
      </div>
    </div>
  </div>
</template>

<script>
import { blogFallbackPosts } from "@/data/blogFallbackPosts";

export default {
  props: {
    post: {
      type: Object,
      default: null,
    },
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
      const posts = allposts.length ? allposts : homepagePosts.length ? homepagePosts : blogFallbackPosts;

      return posts.find((el) => el.fields.slug === this.slug) || posts[0];
    },
    body() {
      return this.activePost?.fields?.body || "";
    },
    tags() {
      return this.activePost?.fields?.tags || [];
    },
  },
};
</script>
