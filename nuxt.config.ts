// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/lara-light-green/theme.css",
    "primeicons/primeicons.css",
  ],
  modules: ["nuxt-primevue", "@pinia/nuxt", "nuxt-mongoose", "@nuxt/content"],
  content: {},
  primevue: {
    importPT: { as: "Tailwind", from: "primevue/passthrough/tailwind" },
    options: {
      usePrimeVue: true,
      styled: true,
      ripple: true,
      cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  mongoose: {
    uri: process.env.MONGODB_URI,
    modelsDir: "models",
    options: {},
  },
});
