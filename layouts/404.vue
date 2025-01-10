<script setup lang="ts">
const title = ref('Error 404')
</script>

<template>
    <AppHeader />

    <main class="container">
        <slot />
    </main>

    <AppFooter>Yolo</AppFooter>
</template>