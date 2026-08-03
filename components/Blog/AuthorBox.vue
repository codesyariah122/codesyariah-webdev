<template>
  <section class="author-box">
    <div class="avatar">
      <img :src="avatar" :alt="author" />
    </div>

    <div class="content">
      <span class="label"> Tentang Penulis </span>
      <h3>
        {{ author }}
      </h3>

      <p>
        {{ bio }}
      </p>

      <div class="social">
        <a href="https://github.com/codesyariah122" target="_blank"> Github </a>

        <a href="https://linkedin.com/in/pujiermanto" target="_blank">
          LinkedIn
        </a>

        <a href="https://instagram.com/codesyariahwebdev" target="_blank">
          Instagram
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    post: Object,
  },

  mounted() {
    console.log(this.post.fields.author.fields);
  },

  computed: {
    author() {
      return this.post.fields.author?.fields?.name || "Puji Ermanto";
    },

    avatar() {
      const img =
        this.post.fields.author?.fields?.profilePhoto?.fields?.file?.url;

      return img
        ? img.startsWith("//")
          ? `https:${img}`
          : img
        : "/assets/img/author.webp";
    },

    bio() {
      return (
        this.post.fields.author?.fields?.biography ||
        "Full Stack Web Developer yang fokus pada Laravel, Vue.js, Nuxt.js, React, Next.js, WordPress dan SEO Website."
      );
    },
  },
};
</script>
