<script setup lang="ts">
defineProps({
    id: {
        type: String,
        default: () => `input-${Math.random().toString(36).substr(2, 9)}`
    },
    value: {
        type: [String, Number],
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    }
})
</script>

<template>
    <div class="field">
        <label v-if="label" :for="id">{{ label }}</label>
        <input 
        :type="type"
        :id="id"
        :value="value"
        :placeholder="placeholder"
        />
    </div>
</template>

<style scoped lang="scss">
@import '~/assets/scss/components/input/index.scss';
</style>