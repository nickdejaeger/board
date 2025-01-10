<template>
    <div class="w-full grid grid-cols-[240px_minmax(0,1fr)] gap-10">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
div {
    display: grid;
    grid-template-columns: 12rem minmax(0, 1fr);
    gap: 2rem;
}
</style>