<script setup lang="ts">
useHead({
    title: 'Button',
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

    <Example>
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
    </Example>

    <Example>
        <ButtonGroup>
            <Button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat, aperiam labore voluptatum eos soluta omnis totam doloremque? Ipsam, quasi ipsum. Asperiores cum iure, assumenda sint deleniti vitae magni tempore.</Button>
        </ButtonGroup>
    </Example>

    <Example title="Dark" theme="dark">
        <ButtonB>Start your trial</ButtonB>
    </Example>
</template>