<script setup>
onMounted(() => {
  const keyframes = [{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }];
  const options = {
    duration: 10000,
    easing: 'linear',
    iterations: Infinity,
  };
  document.querySelector('.box')?.animate(keyframes, options);
})
</script>

<template>
  <div class="box"></div>
</template>

<style scoped lang="scss">
.box {
  margin: 50px 0;
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>