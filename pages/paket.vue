<template>
  <main class="package-page">
    <section class="package-hero" aria-labelledby="package-title">
      <div class="package-hero-shell">
        <span>Paket Codesyariah Webdev</span>
        <h1 id="package-title">
          Pilih paket layanan yang paling dekat dengan kebutuhan bisnis.
        </h1>
        <p>
          Detail paket dipisah dari homepage supaya calon customer bisa membaca
          opsi layanan, harga promo, benefit, dan arahan scope dengan lebih
          fokus sebelum konsultasi.
        </p>
      </div>
    </section>

    <HomepagePricing />

    <section class="package-cta">
      <div>
        <span>Masih bingung pilih paket?</span>
        <h2>
          Kirim kebutuhan singkat, nanti kami bantu cocokkan scope dan budget.
        </h2>
      </div>
      <a
        href="https://wa.me/6288222668778?text=Halo%20Codesyariah%2C%20saya%20ingin%20konsultasi%20pilihan%20paket%20website%20atau%20web%20app."
        target="_blank"
        rel="noopener"
      >
        Konsultasi Paket <i class="bx bxl-whatsapp"></i>
      </a>
    </section>
  </main>
</template>

<script>
export default {
  name: "PaketPage",
  layout: "page",
  head() {
    const siteUrl = "https://codesyariah-webdev.vercel.app";

    const title =
      "Paket Website, Landing Page & Web App | Codesyariah Webdevelopment";

    const description =
      "Pilih paket website, landing page, company profile, web app, API, VPS, deployment, dan maintenance sesuai kebutuhan bisnis Anda.";

    const image = `${siteUrl}/assets/img/codesyariah-og-flyer.png?v=20260701`;

    const url = `${siteUrl}/paket`;

    return {
      title,
      __dangerouslyDisableSanitizersByTagID: {
        "service-schema": ["innerHTML"],
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
          hid: "robots",
          name: "robots",
          content: "index,follow",
        },

        {
          hid: "keywords",
          name: "keywords",
          content:
            "paket website, jasa website, landing page, company profile, web app, API, VPS, maintenance website",
        },

        {
          hid: "author",
          name: "author",
          content: "Codesyariah Webdevelopment",
        },

        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },

        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Codesyariah Webdevelopment",
        },

        {
          hid: "og:locale",
          property: "og:locale",
          content: "id_ID",
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
          hid: "og:image:type",
          property: "og:image:type",
          content: "image/png",
        },

        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "1200",
        },

        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "630",
        },

        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: title,
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
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@pujiermanto",
        },

        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@pujiermanto",
        },

        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: title,
        },
      ],

      script: [
        {
          hid: "service-schema",
          type: "application/ld+json",

          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",

            "@id": `${url}#service`,

            name: "Jasa Website & Web App Codesyariah Webdevelopment",

            image,

            serviceType: "Web Development",

            url,

            description,

            provider: {
              "@type": "Organization",
              "@id": `${siteUrl}#organization`,
              name: "Codesyariah Webdevelopment",
              url: siteUrl,
              logo: {
                "@type": "ImageObject",
                url: image,
              },
              image,

              sameAs: [
                "https://github.com/codesyariah122",
                "https://www.linkedin.com/in/pujiermanto",
                "https://www.instagram.com/codesyariahwebdev",
              ],

              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+6288222668778",
                contactType: "sales",
                areaServed: "ID",
                availableLanguage: ["id", "en"],
              },
            },

            areaServed: {
              "@type": "Country",
              name: "Indonesia",
            },

            brand: {
              "@type": "Brand",
              name: "Codesyariah Webdevelopment",
            },

            offers: [
              {
                "@type": "Offer",
                name: "Landing Page",
                availability: "https://schema.org/InStock",
                priceCurrency: "IDR",
              },
              {
                "@type": "Offer",
                name: "Company Profile Website",
                availability: "https://schema.org/InStock",
                priceCurrency: "IDR",
              },
              {
                "@type": "Offer",
                name: "Business Website",
                availability: "https://schema.org/InStock",
                priceCurrency: "IDR",
              },
              {
                "@type": "Offer",
                name: "Web Application",
                availability: "https://schema.org/InStock",
                priceCurrency: "IDR",
              },
              {
                "@type": "Offer",
                name: "REST API Development",
                availability: "https://schema.org/InStock",
                priceCurrency: "IDR",
              },
              {
                "@type": "Offer",
                name: "VPS Deployment",
                availability: "https://schema.org/InStock",
                priceCurrency: "IDR",
              },
              {
                "@type": "Offer",
                name: "Website Maintenance",
                availability: "https://schema.org/InStock",
                priceCurrency: "IDR",
              },
            ],
          }),
        },
      ],
    };
  },
};
</script>

<style scoped>
.package-page {
  background: #ffffff;
}

.package-hero {
  padding: 150px 0 70px;
  background:
    linear-gradient(120deg, rgba(6, 32, 32, 0.94), rgba(15, 118, 110, 0.76)),
    url("~/assets/img/new-hero-bg-1-desktop.jpg") center / cover;
  color: #ffffff;
}

.package-hero-shell,
.package-cta {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.package-hero span,
.package-cta span {
  display: inline-flex;
  min-height: 28px;
  align-items: center;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.16);
  color: #9ff3d8;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.package-hero h1 {
  max-width: 860px;
  margin: 18px 0 16px;
  font-size: clamp(38px, 6vw, 72px);
  line-height: 0.98;
  font-weight: 900;
  letter-spacing: 0;
}

.package-hero p {
  max-width: 740px;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 18px;
  line-height: 1.7;
}

.package-cta {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 24px;
  align-items: center;
  margin-bottom: 80px;
  padding: 32px;
  border-radius: 8px;
  background: #082027;
  color: #ffffff;
  box-shadow: 0 24px 58px rgba(15, 23, 42, 0.18);
}

.package-cta h2 {
  margin: 14px 0 0;
  font-size: clamp(26px, 3vw, 38px);
  line-height: 1.14;
  font-weight: 900;
}

.package-cta a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 12px 18px;
  border-radius: 6px;
  background: #10b981;
  color: #052e2b;
  font-weight: 900;
  text-decoration: none;
}

@media (max-width: 575px) {
  .package-hero {
    padding: 120px 0 54px;
  }

  .package-hero p {
    font-size: 16px;
  }

  .package-cta {
    grid-template-columns: 1fr;
    padding: 24px;
  }
}
</style>
