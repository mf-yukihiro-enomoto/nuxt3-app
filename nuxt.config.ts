// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: [
    '@/assets/scss/style.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 変数をグローバルに使用可
          additionalData: '@import "@/assets/scss/_variables.scss";',
        },
      },
    },
  },
  // app: {
  //   pageTransition: {
  //     name: 'page',
  //     mode: 'out-in',
  //   },
  // },
})






