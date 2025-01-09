<script setup lang="ts">
useHead({
    title: 'Button',
})

definePageMeta({
    layout: 'component'
})

defineProps({
    title: {
        type: String,
        default: '?unspecified component?'
    }
})
</script>

<template>
    <h1>Button</h1>
    <ButtonGroup>
        <Button>Default</Button>
        <Button class="button--primary">
            <template #icon>
                <i class="fa-solid fa-magnifying-glass"></i>
            </template>
            Search
        </Button>
        <Button class="button--secondary">Secondary</Button>
        <Button class="button--transparent">Transparent</Button>
    </ButtonGroup>

    <ButtonGroup>
        <Button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat, aperiam labore voluptatum eos soluta omnis totam doloremque? Ipsam, quasi ipsum. Asperiores cum iure, assumenda sint deleniti vitae magni tempore.</Button>
    </ButtonGroup>

    <DarkBox>
        <ButtonB>Start your trial</ButtonB>
    </DarkBox>
</template>