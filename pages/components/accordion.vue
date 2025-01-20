<script setup lang="ts">
import accordionData from '~/content/accordion.json';

useHead({
    title: 'Accordion',
})
const items = accordionData.items;
</script>

<template>
    <h1>Accordion</h1>
    <Example>
        <Accordion :items="items" />
    </Example>
</template>