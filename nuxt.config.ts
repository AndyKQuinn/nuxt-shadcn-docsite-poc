// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',
  // ssr: false
  ssr: true,
  // routeRules: {
  //   // Homepage pre-rendered at build time
  //   '/': { prerender: false },
  // },
  // hooks: {
  //   'prerender:routes' ({ routes }) {
  //     routes.clear() // Do not generate any routes (except the defaults)
  //   }
  // },
});