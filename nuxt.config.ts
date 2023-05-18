// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "NLW - SpaceTime",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "NLW - SpaceTime" },
        { property: "og:title", content: "NLW - SpaceTime" },
        {
          property: "og:description",
          content: "Uma cápsula do tempo construída com Vue, Nuxt, Tailwind",
        },
      ],
    },
  },
  routeRules: {
    "/api/**": {
      cors: true,
    },
  },
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxtjs/google-fonts", "nuxt-icon"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  experimental: {
    restoreState: true,
    asyncEntry: true,
    watcher: "parcel",
    renderJsonPayloads: true,
    typedPages: true,
  },
  googleFonts: {
    preconnect: true,
    prefetch: true,
    display: "swap",
    subsets: "latin",
    families: {
      "Roboto+Flex": true,
      "Bai+Jamjuree": [700],
    },
  },
  runtimeConfig: {
    github: {
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    jwtSecret: process.env.JWT_SECRET,
    public: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID,
      },
    },
  },
});
