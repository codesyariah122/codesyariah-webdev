<template>
  <div v-if="post">
    <ReadingProgress />

    <Hero :post="post" />

    <section class="blog-wrapper">
      <div class="container">
        <Breadcrumb :title="post.fields.title" />

        <div class="article-grid">
          <aside class="left">
            <TableOfContents />
          </aside>

          <main class="center">
            <Article :post="post" />

            <CopyCodeButton />

            <client-only>
              <Disqus />
            </client-only>
          </main>

          <aside class="right">
            <ShareButtons :title="post.fields.title" :slug="post.fields.slug" />
          </aside>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="loading-page">Loading...</div>
</template>

<script>
import Article from "@/components/Blog/Article";
import Hero from "@/components/Blog/Hero";
import Breadcrumb from "@/components/Blog/Breadcrumb";
import ReadingProgress from "@/components/Blog/ReadingProgress";
import TableOfContents from "@/components/Blog/TableOfContents";
import ShareButtons from "@/components/Blog/ShareButtons";
import CopyCodeButton from "@/components/Blog/CopyCodeButton";
import { blogFallbackPosts } from "@/data/blogFallbackPosts";

export default {
  name: "blog",
  layout: "slug",

  components: {
    Hero,
    Article,
    Breadcrumb,
    ReadingProgress,
    TableOfContents,
    ShareButtons,
    CopyCodeButton,
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

    const body = fields.body || "";

    return {
      title,
      __dangerouslyDisableSanitizersByTagID: {
        "article-schema": ["innerHTML"],
        "breadcrumb-schema": ["innerHTML"],
      },

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
          hid: "twitter:site",
          name: "twitter:site",
          content: "@pujiermanto",
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: title,
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

      script: [
        {
          hid: "article-schema",
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "BlogPosting",

            "@id": `${url}#article`,

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": url,
            },

            headline: title,

            description,

            articleBody: body
              .replace(/[#*_>`]/g, "")
              .replace(/\n+/g, " ")
              .trim(),

            image: {
              "@type": "ImageObject",
              "@id": `${url}#primaryimage`,
              url: image,
              width: imageWidth,
              height: imageHeight,
            },

            datePublished: publishedTime,

            dateModified: modifiedTime || publishedTime,

            author: {
              "@type": "Person",
              name: authorName,
            },

            publisher: {
              "@type": "Organization",
              "@id": `${siteUrl}#organization`,

              name: "Codesyariah Webdevelopment",

              url: siteUrl,

              logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/assets/img/codesyariah-og-flyer.png?v=20260701`,
                width: 1200,
                height: 630,
              },

              image: {
                "@type": "ImageObject",
                url: image,
              },

              sameAs: [
                "https://github.com/codesyariah122",
                "https://www.linkedin.com/in/pujiermanto",
                "https://www.instagram.com/codesyariahwebdev",
              ],
            },

            articleSection: fields.tags || [],

            keywords: (fields.tags || []).join(", "),

            url,

            inLanguage: "id-ID",

            isPartOf: {
              "@type": "Blog",
              "@id": `${siteUrl}/blog#collection`,
              name: "Codesyariah Blog",
            },
          }),
        },

        {
          hid: "breadcrumb-schema",
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",

            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${siteUrl}/blog`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: title,
                item: url,
              },
            ],
          }),
        },
      ],
    };
  },
};
</script>
