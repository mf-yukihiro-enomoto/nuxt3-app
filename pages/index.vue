<script setup>
const show = ref(false);
const clickCoupon = () => {
  show.value = true;
};

onMounted(() => {
  console.log('onMounted')
})

onBeforeMount(() => {
  console.log('onBeforeMount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUpdated(() => {
  console.log('onUpdated')
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
</script>

<template>
  <div>
    <h1>Top</h1>
    <div @click="clickCoupon">click</div>
    <LazyCoupon v-if="show" />
    <div style="width:100px;">
      <img src="/assets/img/common/icon-black.png" alt="" style="width:100%;">
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
