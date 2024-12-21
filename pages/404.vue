<script setup lang="ts">
useHead({
  title: 'Oops 404',
  meta: [
    { name: 'description', content: '404 error page' }
  ],
  bodyAttrs: {
    class: computed(() => {
      return 'error-404'
    })
  }
})

definePageMeta({
  layout: '404'
})
</script>

<template>
  <section>
    <h1>404 page not found</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit magnam quas in nihil natus ullam itaque quo, repellendus aliquam esse officia animi atque facilis, impedit, nobis voluptates sequi saepe.</p>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 12rem;

  h1 {
    font-size: 4rem;
    font-weight: 900;
  }
}
</style>