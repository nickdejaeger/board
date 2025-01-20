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
    <a href="#" :class="class">{{ text }}</a>
</template>

<style scoped lang="scss">
a {
    text-decoration: none;
}
.lui-anchor-a {
    color: #000;
    background: linear-gradient(0deg, #ffe500 35%, rgba(255, 255, 255, 0) 25%);
    transition: all .3s ease;
    text-decoration: none;

    &:hover {
        color: #000;
        background: linear-gradient(0deg, #ffe500 100%, #eaf9fc 0);
        text-decoration: none;
    }
}

.lui-anchor-b {
    color: #4d51f3;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
    transition: all .1s ease-in-out;

    &:hover {
        text-decoration-thickness: 2px;
        text-underline-offset: 5px;
        color: #000;
        text-decoration-color: #000;
    }
}
</style>