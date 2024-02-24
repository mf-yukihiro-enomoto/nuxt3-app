<script setup>
const route = useRoute()

const lang = 'ja'
const site_name = 'Nuxt3 app'
const title = ''
const titleTemplate = (s) => {
  return s ? s + '｜' + site_name : site_name
}

const description = ''
const base_url = 'https://example.com'

let metas = [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0' },
  { hid: 'description', name: 'description', content: description }
]
let links = [
  { rel: 'canonical', href: base_url + route.path },
  { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/img/common/favicon.ico' },
  { href: '//fonts.googleapis.com/css?family=Roboto', rel: 'stylesheet' },
]
let scripts = [
  { src: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', defer: true },
  { src: '/assets/js/common.js', defer: true },
]

useHead({
  htmlAttrs: {
    lang: lang,
  },
  title: title,
  titleTemplate: titleTemplate,

  meta: metas,
  link: links,
  script: scripts
});
</script>

<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>




