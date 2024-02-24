<script setup>
const clickAlert = () => {
  alert('alert');
};
useHead({
  title: 'Aboutページ',
  meta: [
    { hid: 'description', name: 'description', content: 'Aboutページの説明' }
  ],
});
</script>

<template>
  <div>
    <h1>About Page</h1>
    <div @click="clickAlert">alert</div>
  </div>
</template>

<style scoped lang="scss"></style>