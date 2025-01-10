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
    
    <div class="flex flex-col items-start">
        <Form />

        <Form2 />
    </div>
</template>