<template>
  <nav class="blog-breadcrumb" aria-label="breadcrumb">
    <NuxtLink to="/"> Home </NuxtLink>

    <span>/</span>

    <NuxtLink to="/blog"> Blog </NuxtLink>

    <span>/</span>

    <span class="active">
      {{ title }}
    </span>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
