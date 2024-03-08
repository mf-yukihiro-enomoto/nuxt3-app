<script setup>
onMounted(() => {
  const targets = document.querySelectorAll('.target');
  targets.forEach(function (target) {
    target.addEventListener('click', function (e) {

      const targetObj = {
        top: this.getBoundingClientRect().top,
        left: this.getBoundingClientRect().left,
        width: this.getBoundingClientRect().width,
      };

      const targetClone = this.cloneNode(true);
      document.body.appendChild(targetClone);

      targetClone.style.position = 'fixed';
      targetClone.style.top = targetObj.top + "px";
      targetClone.style.left = targetObj.left + "px";
      targetClone.style.width = targetObj.width + "px";
      this.style.opacity = 0;

      setTimeout(() => {
        targetClone.classList.add("is-move");
      }, "100");

      setTimeout(() => {
        targetClone.remove();
      }, "600");

    });
  });

});
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li>
        <NuxtLink to="/users/1"><img src="/assets/img/users/img01.jpg" alt="" class="target"></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users/2"><img src="/assets/img/users/img02.jpg" alt="" class="target"></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users/3"><img src="/assets/img/users/img03.jpg" alt="" class="target"></NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
}

img.target {
  transition: all 0.3s ease-out;
}

img.target.is-move {
  top: 0px !important;
  left: 0px !important;
  width: 100% !important;
}
</style>