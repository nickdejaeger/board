<script setup lang="ts">
useHead({
    title: 'Input',
})

defineProps({
    title: {
        type: String,
        default: ''
    }
})

const textareaContent = ref('')
const textareaContent2 = ref('Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt pariatur temporibus molestias quas doloremque quod aut magnam dolores, labore cum saepe quam enim. Earum ex impedit expedita totam ullam a!')
</script>

<template>
    <h1>Input</h1>

    <Example>
        <Input />
        <Input label="Enter your name" placeholder="Name" value="Nick" />
        <Input type="email" label="Enter your email" placeholder="Email" />
        <Input type="password" label="Enter your password" placeholder="Password" />
        <Textarea
            v-model="textareaContent"
            placeholder="Enter your text here"
            :required="true"

            label="Description"
        />
        <Textarea v-model="textareaContent2" />
    </Example>

    <Example theme="dark">
        <InputB />
    </Example>
</template>