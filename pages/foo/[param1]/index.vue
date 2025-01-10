<script setup lang="ts">
    const route = useRoute()
    const par1 = route.params.param1
</script>

<template>
    <div>this path has: foo/{{ par1 }}</div>
</template>