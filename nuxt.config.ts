// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "primevue/resources/themes/lara-light-green/theme.css",
    "primeicons/primeicons.css",
    "~/assets/css/main.css",
  ],
  modules: ["nuxt-primevue", "@pinia/nuxt"],
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
});
