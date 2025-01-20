<script setup lang="ts">
defineProps({
    text: {
        type: String,
        default: 'Default placeholder'
    },
    class: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <span :class="class">{{ text }}</span>
</template>

<style scoped lang="scss">
span {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-family: monospace;
    font-size: .75rem;
    font-weight: 600;
    line-height: 100%;

    background-color: #000;
    color: #FFF;

    border-radius: .35rem;
    padding: .4rem .65rem;
}
</style>