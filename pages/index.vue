<script lang="ts" setup>
definePageMeta({
    middleware: 'auth'
})

function sleep(delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

//const response = await $fetch('https://jsonplaceholder.typicode.com/posts')
const response = await $fetch('/api/hello')
console.log(response)

const { sayHello } = useUtils()
sayHello()

const { $sayHelloPlug } = useNuxtApp()
$sayHelloPlug('Nick')

const counter = useCounter()
</script>

<template>

  <PageContent>

    <Button>Hello index.vue</Button>

    <div>Index Page</div>

    <ContentDoc />

    <div>
        Counter: {{ counter }}
        <button @click="counter++">plus</button>
    </div>
    
  </PageContent>

</template>