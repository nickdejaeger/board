<script setup lang="ts">
useHead({
    title: 'Divider',
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
    <div class="flex flex-col gap-6">
        <Divider></Divider>
        <Divider class="is-dimmed is-dashed"></Divider>
        <Divider class="divider--center">Label</Divider>
        <Divider></Divider>
    </div>
</template>




