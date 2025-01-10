<script setup lang="ts">
useHead({
    title: 'Select',
})

defineProps({
    title: {
        type: String,
        default: '?unspecified component?'
    }
})
</script>

<template>
    <h1>Select</h1>
    <Select />
</template>