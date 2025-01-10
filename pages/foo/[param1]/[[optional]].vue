<script setup lang="ts">
    const route = useRoute()
    const par1 = route.params.param1
    const par2 = route.params.optional
</script>

<template>
    <PageHeader>foo/{{ par1 }}/{{ par2 }}</PageHeader>
</template>