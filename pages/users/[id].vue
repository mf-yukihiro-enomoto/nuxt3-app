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
  <h1>Users</h1>
  <p>ユーザID：{{ $route.params.id }}</p>
</template>

<style scoped lang="scss"></style>