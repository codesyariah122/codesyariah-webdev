<style lang="scss">
.inner-page {
  article {
    h2 {
      font-weight: 800;
      font-family: "Ubuntu", sans-serif;
    }
    h3 {
      margin-top: 2rem;
      font-weight: 700;
      font-family: "Ubuntu", sans-serif;
    }
    p {
      font-family: "Roboto Mono", monospace;
      line-height: 31px;
      word-spacing: 5px;
      text-align: justify;
    }
    img {
      width: 90%;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }
  }
}

@media (max-width: 768px) {
}

@media (max-width: 420px) {
  .inner-page {
    article {
      h2 {
        font-weight: 800;
        font-family: "Ubuntu", sans-serif;
      }
      h3 {
        margin-top: 2rem;
        font-weight: 700;
        font-family: "Ubuntu", sans-serif;
      }
      h4 {
        margin-top: 2rem;
        font-weight: 700;
        font-family: "Ubuntu", sans-serif;
      }
      p {
        font-family: "Roboto Mono", monospace;
        line-height: 31px;
        word-spacing: 5px;
        text-align: justify;
      }
      img {
        max-width: 335px;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
<template>
  <div>
    <LayoutSlugSectionHero :post="post" />
    <section id="post" class="inner-page">
      <div class="container mb-5">
        <div class="back float-start">
          <a href="../#blog"
            ><i class="bx bx-left-arrow-alt"></i> Back to Home</a
          >
        </div>
        <div class="back float-end">
          <a href="/blog">All Posts <i class="bx bx-right-arrow-alt"></i></a>
        </div>
      </div>
      <div class="container">
        <Article :post="post" />

        <!-- <Comment/> -->
        <Disqus />
      </div>
    </section>
  </div>
</template>

<script>
import Comment from "@/components/Blog/Comment";
import Article from "@/components/Blog/Article";
import { blogFallbackPosts } from "@/data/blogFallbackPosts";

export default {
  name: "blog",
  layout: "slug",

  components: {
    Comment,
    Article,
  },
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  mounted() {
    if (process.client && window.$crisp)
      window.$crisp.push(["do", "chat:hide"]);
    this.$store.dispatch("allPosts");
  },
  computed: {
    posts() {
      const allposts = this.$store.state.allposts || [];
      const homepagePosts = this.$store.state.posts || [];
      return allposts.length
        ? allposts
        : homepagePosts.length
        ? homepagePosts
        : blogFallbackPosts;
    },
    post() {
      return (
        this.posts.find((el) => el.fields.slug === this.slug) || this.posts[0]
      );
    },
  },
  head() {
    if (!this.post) return {};

    const siteUrl = "https://codesyariah-webdev.vercel.app";

    const fields = this.post.fields;

    const title = fields.title;

    const description =
      fields.description ||
      fields.summary ||
      "Artikel terbaru dari Codesyariah Webdevelopment.";

    const authorName =
      fields.author?.fields?.name || "Codesyariah Webdevelopment";

    const heroFile = fields.heroImage?.fields?.file;

    const heroUrl = heroFile?.url;

    const image = heroUrl
      ? heroUrl.startsWith("//")
        ? `https:${heroUrl}`
        : heroUrl
      : `${siteUrl}/assets/img/codesyariah-og-flyer.png`;

    const imageWidth = heroFile?.details?.image?.width || 1200;

    const imageHeight = heroFile?.details?.image?.height || 630;

    const imageType = heroFile?.contentType || "image/jpeg";

    const url = `${siteUrl}/blog/${fields.slug}`;

    const modifiedTime = this.post.sys?.updatedAt;

    const publishedTime = fields.publishedDate || this.post.sys?.createdAt;

    return {
      title,

      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: url,
        },
      ],

      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },

        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Codesyariah Webdevelopment",
        },

        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },

        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },

        {
          hid: "og:url",
          property: "og:url",
          content: url,
        },

        {
          hid: "og:image",
          property: "og:image",
          content: image,
        },

        {
          hid: "og:image:url",
          property: "og:image:url",
          content: image,
        },

        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: image,
        },

        {
          hid: "og:image:width",
          property: "og:image:width",
          content: String(imageWidth),
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: String(imageHeight),
        },

        {
          hid: "og:image:type",
          property: "og:image:type",
          content: imageType,
        },

        {
          hid: "og:type",
          property: "og:type",
          content: "article",
        },

        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title,
        },

        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },

        {
          hid: "twitter:url",
          name: "twitter:url",
          content: url,
        },

        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@pujiermanto",
        },

        {
          hid: "twitter:image",
          name: "twitter:image",
          content: image,
        },

        {
          hid: "twitter:image:src",
          name: "twitter:image:src",
          content: image,
        },

        {
          hid: "robots",
          name: "robots",
          content: "index,follow",
        },

        {
          hid: "og:locale",
          property: "og:locale",
          content: "id_ID",
        },

        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: title,
        },

        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: title,
        },

        {
          hid: "keywords",
          name: "keywords",
          content: fields.tags?.join(", ") || "",
        },

        ...(fields.tags || []).map((tag) => ({
          hid: `article:tag-${tag}`,
          property: "article:tag",
          content: tag,
        })),

        {
          hid: "article:published_time",
          property: "article:published_time",
          content: publishedTime,
        },

        {
          hid: "author",
          name: "author",
          content: authorName,
        },
        {
          hid: "article:author",
          property: "article:author",
          content: authorName,
        },

        {
          hid: "article:modified_time",
          property: "article:modified_time",
          content: modifiedTime,
        },
      ],
    };
  },
};
</script>
