<script setup lang="ts">
const title = ref('Forms');

useHead({
    title: 'Forms',
})

defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <h1>{{ title }}</h1>

    <Example>
        <Form />
    </Example>
    
    <Example>
        <Form2 />
    </Example>
</template>