<script setup lang="ts">
useHead({
    title: 'Text',
})

defineProps({
    title: {
        type: String,
        default: '?unspecified component?'
    }
})
</script>

<template>
    <h1>Divider</h1>
    <Example title="Gradient Text" theme="dark">
        <TextGradient>Always at your command.</TextGradient>
    </Example>
</template>




