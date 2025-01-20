<script setup lang="ts">
useHead({
    title: 'Namecard',
})

defineProps({
    title: {
        type: String,
        default: '?unspecified component?'
    }
})
</script>

<template>
    <h1>Badge</h1>
    <Example>
        <Namecard
            name="Steve Jobs"
            jobtitle="CEO, Apple"
            imgurl="https://www.pioneeringminds.com/wp-content/uploads/2018/10/Steve-Jobs.jpg"
        />
    </Example>
</template>