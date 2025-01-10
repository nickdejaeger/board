<template>
    <div class="w-full grid grid-cols-[240px_minmax(0,1fr)] gap-10">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
div {
    display: grid;
    grid-template-columns: 240px minmax(0, 1fr);
    gap: 4rem;
}
</style>