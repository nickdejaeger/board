<script setup lang="ts">
    const route = useRoute()
    const par1 = route.params.param1
</script>

<template>
    <PageHeader>foo/{{ par1 }}</PageHeader>
</template>