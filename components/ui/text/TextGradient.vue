<script setup lang="ts">
defineProps({
    text: {
        type: String,
        default: 'A simple text'
    }
})
</script>

<template>
    <span>
        <slot></slot>
    </span>
</template>

<style scoped lang="scss">
span {
    display: inline-block;
    background: linear-gradient(90deg, rgb(179, 174, 245) 0.41%, rgb(215, 203, 231) 40.68%, rgb(229, 200, 200) 64.12%, rgb(234, 168, 121) 97.82%) text, rgb(217, 217, 217);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-weight: 600;
    font-size: 3rem;
    line-height: 1.2;
}
</style>