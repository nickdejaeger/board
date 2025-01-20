<script setup lang="ts">
const props = defineProps({
    id: {
        type: String,
        default: () => `id-${Math.random().toString(36).substr(2, 9)}`
    },
    type: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <button 
        class="lui-collection__row"
        :class="[
            type ? `text-${type}` : ''
        ]"
        @click="$emit('click')"
    >
        <slot />
    </button>
</template>

<style scoped lang="scss">
.lui-collection {
    &__row {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
        padding: .25rem .25rem;
        border-radius: .5rem;
        box-shadow: none;
        transition: background-color 0.35s ease-in-out;
        will-change: background-color;

        &:hover {
            background-color: rgba(0, 0, 0, 0.04);
        }

        &.text-primary {
            color: rgb(0 123 255);
        }
        &.text-secondary {
            color: rgb(255 0 41);
        }
    }
}
</style>