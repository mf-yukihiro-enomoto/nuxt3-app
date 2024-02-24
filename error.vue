<script setup>
const error = useError();
const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
  <div>
    <p>{{error.message}}</p>
    <p>{{error.statusCode === 404 ? '404 page not found!' : 'An error has occurred.'}}</p>
    <button @click="handleError">
      Go Back
    </button>
  </div>
</template>