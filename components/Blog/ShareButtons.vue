<template>
  <aside class="share-buttons">
    <span class="title"> Share </span>

    <a :href="facebook" target="_blank" aria-label="Share Facebook">
      <i class="bx bxl-facebook"></i>
    </a>

    <a :href="twitter" target="_blank" aria-label="Share Twitter">
      <i class="bx bxl-twitter"></i>
    </a>

    <a :href="linkedin" target="_blank" aria-label="Share LinkedIn">
      <i class="bx bxl-linkedin"></i>
    </a>

    <button @click="copy" title="Copy Link">
      <i class="bx bx-link"></i>
    </button>
  </aside>
</template>

<script>
export default {
  props: {
    title: String,
    slug: String,
  },

  computed: {
    url() {
      return `https://codesyariah-webdev.vercel.app/blog/${this.slug}`;
    },

    facebook() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.url)}`;
    },

    twitter() {
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.url)}&text=${encodeURIComponent(this.title)}`;
    },

    linkedin() {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.url)}`;
    },
  },

  methods: {
    copy() {
      navigator.clipboard.writeText(this.url);

      alert("Link berhasil disalin.");
    },
  },
};
</script>
