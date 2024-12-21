<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: '?unspecified component?'
    }
})
</script>

<template>
    <article>
        <header>
            <h1>{{ title }}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque, animi repellendus at sapiente nulla aliquam? Reiciendis, cum explicabo. Quisquam corrupti repellat consequuntur odit culpa illum ducimus alias quis quos.</p>
        </header>
        <slot />
    </article>
</template>

<style scoped lang="scss">
article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    position: relative;
    background-color: #000;
    color: #FFF;
    border-radius: 1rem;
    padding: 2rem;

    header {
        margin: 0 0 1rem;
        padding: 0 0 .5rem;
    }
  }
</style>