<script setup lang="ts">
useHead({
    title: 'Anchors',
})
</script>

<template>
    <h1>Anchors</h1>

    <Example title="Inset Background Line" label="class: lui-anchor-a">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor <Anchor text="Yellow inset line - facilis expedita commodi, aspernatur ullam provident" class="lui-anchor-a" /> quaerat hic dolorum sint alias illum in nam eos odio nisi. Eveniet, porro dicta.</p>
    </Example>

    <Example title="Inset Background Line" label="class: lui-anchor-b">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolor <Anchor text="Offset fine underline - facilis expedita commodi, aspernatur ullam provident" class="lui-anchor-b" /> quaerat hic dolorum sint alias illum in nam eos odio nisi. Eveniet, porro dicta.</p>
    </Example>
</template>