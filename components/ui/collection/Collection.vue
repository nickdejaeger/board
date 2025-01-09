<template>
    <div class="lui-collection">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.lui-collection {
    position: relative;
    padding: .75rem .5rem;
    border-radius: 1rem;
    border: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 0 2rem rgba(0,0,0,.1);
}
</style>