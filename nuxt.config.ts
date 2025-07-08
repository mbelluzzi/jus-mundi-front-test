// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Jus Mundi Front Test',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'description', content: 'A test project for Jus Mundi Front' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/test-utils', '@nuxt/image', '@nuxt/eslint'],
  css: ['@/assets/css/main.css', '@/assets/css/animation.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
});
