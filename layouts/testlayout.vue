<script setup lang="ts">
const title = ref('Test 404')
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="body { background-color: black; color: #FFF; }" ></Style>
    </Head>

    <AppHeader />

    <main class="p-4">
      <header class="test-title">
        <slot name="header">Default header content</slot>
      </header>
      <slot />
    </main>    
  </div>
</template>

<style>
  .test-title {
    font-size: 4rem;
    font-weight: 900;
  }
</style>