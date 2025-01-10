<script setup lang="ts">
    const route = useRoute()
    const par = route.params
</script>

<template>
    <div>{{ par }}</div>
</template>