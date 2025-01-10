<script setup lang="ts">
useHead({
    title: 'Accordion',
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

const accordionData = ref([{
        id: 1,
        title: 'Lorem Ipsum',
        content: 'Accordion is a component that allows you to show and hide content.',
        active: false
    },
    {
        id: 2,
        title: 'Tempora, cupiditate reiciendis voluptatum optio at distinctio in ipsam a quidem adipisci',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, cupiditate reiciendis voluptatum optio at distinctio in ipsam a quidem adipisci fuga, dolore maiores quisquam accusantium quos quo praesentium aspernatur aliquid!',
        active: false
    },
    {
        id: 3,
        title: 'Quod quaerat',
        content: 'Quod quaerat, aperiam labore voluptatum eos soluta omnis totam doloremque? Ipsam, quasi ipsum. Asperiores cum iure, assumenda sint deleniti vitae magni tempore.',
        active: false
    }
])
</script>

<template>
    <div class="">
        <div>
            <h1>Accordion</h1>
            <div class="bg-black p-12">
                <Accordion :items="accordionData" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    div {
        display: grid;

    }
</style>