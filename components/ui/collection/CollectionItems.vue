<template>
    <div class="lui-collection__items">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.lui-collection {
    &__items {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>