<template>
  <div class="reading-progress">
    <div class="reading-progress__bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.calculateProgress);
    this.calculateProgress();
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.calculateProgress);
  },

  methods: {
    calculateProgress() {
      const article = document.querySelector(".blog-content");

      if (!article) return;

      const rect = article.getBoundingClientRect();

      const articleTop = window.scrollY + rect.top;

      const articleHeight = article.offsetHeight;

      const scroll = window.scrollY;

      const viewport = window.innerHeight;

      const total = articleHeight - viewport;

      const current = scroll - articleTop;

      const percent = Math.min(100, Math.max(0, (current / total) * 100));

      this.progress = percent;
    },
  },
};
</script>
