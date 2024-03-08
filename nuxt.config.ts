// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: [
    '@/assets/scss/style.scss',
  ],
  app: {
    // ページ遷移アニメーションの設定
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
})