<script>
  // Use a static import for server-side compatibility
  import '~/assets/css/first.css'
</script>

<template>
  <div class="flex gap-4 p-12">
    <h1>Welcome!</h1>

    <div class="flex flex-col justify-start items-start gap-4">
      <Button><img src="/img/nuxt.png" alt="logo" /> The homepage button</Button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repudiandae dolorem iure eum maiores laudantium optio laborum ducimus quaerat ipsum vitae dolorum nihil itaque doloremque, nesciunt quasi culpa ab corporis.</p>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    font-size: 1rem;
  }
</style>