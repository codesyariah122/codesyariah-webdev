<template>
  <aside class="table-of-contents" v-if="headings.length">
    <h4>
      <i class="bi bi-list-ul"></i>
      Daftar Isi
    </h4>

    <ul>
      <li v-for="heading in headings" :key="heading.id" :class="heading.tag">
        <a :href="'#' + heading.id" @click.prevent="scrollTo(heading.id)">
          {{ heading.text }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      headings: [],
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.generateTOC();
    });
  },

  methods: {
    generateTOC() {
      const article = document.querySelector(".blog-content");

      if (!article) return;

      const nodes = article.querySelectorAll("h2,h3,h4");

      this.headings = [];

      nodes.forEach((node, index) => {
        const id = `heading-${index}`;

        node.id = id;

        this.headings.push({
          id,

          text: node.innerText,

          tag: node.tagName.toLowerCase(),
        });
      });
    },

    scrollTo(id) {
      document
        .getElementById(id)

        .scrollIntoView({
          behavior: "smooth",

          block: "start",
        });
    },
  },
};
</script>
