<script setup lang="ts">
useHead({
    title: 'Input',
})

defineProps({
    title: {
        type: String,
        default: '?unspecified component?'
    }
})

const textareaContent = ref('')
const textareaContent2 = ref('')
</script>

<template>
    <h1>Input</h1>
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

    <DarkBox>
        <InputB />
    </DarkBox>
</template>