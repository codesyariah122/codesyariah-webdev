<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.initCopyButtons();
    });
  },

  methods: {
    initCopyButtons() {
      const blocks = document.querySelectorAll(".blog-content pre");

      blocks.forEach((block) => {
        if (block.querySelector(".copy-btn")) return;

        const button = document.createElement("button");

        button.className = "copy-btn";

        button.innerText = "Copy";

        button.onclick = () => {
          navigator.clipboard.writeText(block.innerText);

          button.innerText = "Copied ✓";

          setTimeout(() => {
            button.innerText = "Copy";
          }, 1800);
        };

        block.style.position = "relative";

        block.appendChild(button);
      });
    },
  },
};
</script>
