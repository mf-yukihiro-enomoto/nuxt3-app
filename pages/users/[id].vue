<script setup>
const router = useRoute();
useHead({
  title: 'Usersページ' + router.params.id,
  meta: [
    { hid: 'description', name: 'description', content: 'Usersページ' + router.params.id + 'の説明' }
  ],
});
</script>

<template>
  <h1>Users Page</h1>
  <p>ユーザID：{{ $route.params.id }}</p>
</template>