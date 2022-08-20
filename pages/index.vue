<template>
  <main>
   <div class="container">
     <h1 class="title">Paw Waves</h1>
     <section v-for="post in posts" :key="post.fields.slug">
       <div
         class="image"
         :style="
           `background: url(https:${post.fields.heroImage.fields.file.url}) center center no-repeat`
         "
       ></div>
       <h2 class="title">
         <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
       </h2>
       <nuxt-link :to="{path: `/author/${post.fields.author.fields.slug}`}" class="author">
        By {{ post.fields.author.fields.name }}</nuxt-link>
       <p class="description">
         {{ post.fields.description }}<br />
         <nuxt-link :to="post.fields.slug" class="more">Read more ⟶</nuxt-link>
       </p>
     </section>
   </div>
 </main>
</template>

<script>
  export default {
    name: 'IndexPage',
    computed: {
     posts() {
       return this.$store.state.posts;
     }
   },
   head: {
     title: "Paw Waves, Latest Posts"
   }
 };
</script>