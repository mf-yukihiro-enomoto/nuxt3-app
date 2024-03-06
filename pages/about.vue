<script setup>
const clickAlert = () => {
  alert(window.location.href);
};
</script>

<template>
  <div>
    <h1>About</h1>
    <div @click="clickAlert">alert</div>
  </div>
</template>

<style scoped lang="scss"></style>