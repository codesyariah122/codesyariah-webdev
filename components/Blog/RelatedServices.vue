<template>
  <section v-if="services.length" class="related-services">
    <h2>Butuh Bantuan Profesional?</h2>

    <p>
      Kami menyediakan layanan pengembangan website dan aplikasi sesuai dengan
      topik yang sedang Anda pelajari.
    </p>

    <div class="row">
      <div
        class="col-lg-4 mb-4"
        v-for="service in services"
        :key="service.title"
      >
        <NuxtLink :to="service.link" class="service-card">
          <div class="icon">
            {{ service.icon }}
          </div>

          <h3>
            {{ service.title }}
          </h3>

          <p>
            {{ service.description }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    services() {
      const map = {
        Laravel: {
          title: "Jasa Laravel Development",
          link: "/services/laravel-development",
          icon: "🚀",
          description: "Pembuatan aplikasi Laravel Enterprise.",
        },

        Vue: {
          title: "Jasa Vue Development",
          link: "/services/vue-development",
          icon: "💚",
          description: "Website Vue.js modern dan cepat.",
        },

        Nuxt: {
          title: "Jasa Nuxt Development",
          link: "/services/nuxt-development",
          icon: "⚡",
          description: "SEO Friendly Nuxt Website.",
        },

        React: {
          title: "Jasa React Development",
          link: "/services/react-development",
          icon: "⚛️",
          description: "React SPA maupun SSR.",
        },

        NextJS: {
          title: "Jasa Next.js",
          link: "/services/nextjs-development",
          icon: "▲",
          description: "Website Next.js SEO Ready.",
        },

        WordPress: {
          title: "Jasa WordPress",
          link: "/services/wordpress-development",
          icon: "📝",
          description: "WordPress Company Profile & CMS.",
        },
      };

      return this.tags

        .map((tag) => map[tag])

        .filter(Boolean);
    },
  },
};
</script>
