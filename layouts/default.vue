<script setup>
import meta from '@/assets/json/meta.json'
// DOM生成後に実行
onMounted(() => {
  const route = useRoute()
  const lang = 'ja'
  const site_title = 'サイトタイトル'
  const site_description = 'サイトの説明'
  const title = () => {
    return meta[route.path]['title'] ? meta[route.path]['title'] + '｜' + site_title : site_title
  }
  const description = () => {
    return meta[route.path]['description'] ? meta[route.path]['description'] : site_description
  }
  const base_url = window.location.href

  let metas = [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0' },
    { hid: 'description', name: 'description', content: description }
  ]
  let links = [
    { rel: 'canonical', href: base_url + route.fullPath },
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/img/common/favicon.ico' },
    { href: '//fonts.googleapis.com/css?family=Roboto', rel: 'stylesheet' },
  ]
  let scripts = [
    { src: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', defer: true },
    { src: '/assets/js/common.js' },
  ]
  useHead({
    htmlAttrs: {
      lang: lang,
    },
    title: title,
    meta: metas,
    link: links,
    script: scripts
  })
})
</script>

<template>
  <div>
    <Navbar />
    <slot />
    <!-- <Rotate /> -->
  </div>
</template>

<style scoped lang="scss"></style>