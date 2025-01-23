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
    <Example>
        <Divider></Divider>
    </Example>
    <Example>
        <Divider class="is-dimmed is-dashed"></Divider>
    </Example>
    <Example>
        <Divider class="divider--center">Label</Divider>
    </Example>
    <Example>
        <Divider></Divider>
    </Example>
</template>




