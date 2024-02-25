<script setup>
const show = ref(false);
const clickCoupon = () => {
  show.value = true;
};
</script>

<template>
  <div>
    <h1>Top Page</h1>
    <div @click="clickCoupon">click</div>
    <LazyCoupon v-if="show" />
    <div style="width:100px;">
      <img src="/assets/img/common/icon-black.png" alt="" style="width:100%;">
    </div>
  </div>
</template>

<style scoped lang="scss"></style>






