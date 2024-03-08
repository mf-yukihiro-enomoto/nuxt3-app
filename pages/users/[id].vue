<script setup>
const route = useRoute();



</script>

<template>
  <div>
    <img :src="`/assets/img/users/img0${route.params.id}.jpg`" class="mv">
    <h1>Users</h1>
    <p>ユーザID：{{ $route.params.id }}</p>
    <div>
      <NuxtLink to="/users">Back</NuxtLink>
    </div>
  </div>
</template>



<style scoped lang="scss">
img.mv {
  margin: -8px -8px 0 -8px;
  width: calc(100% + 16px);
}
</style>