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
    <DarkBox>
        <TextGradient>Always at your command.</TextGradient>
    </DarkBox>
</template>




