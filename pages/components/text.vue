<script setup lang="ts">
import type { Text } from 'vue';

useHead({
    title: 'Text',
})

definePageMeta({
    layout: 'component'
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




