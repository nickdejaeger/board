<script lang="ts" setup>
definePageMeta({
    middleware: 'auth'
})


//const response = await $fetch('https://jsonplaceholder.typicode.com/posts')
const response = await $fetch('/api/hello')
console.log(response)


const { sayHelloComposables } = useComposables()
sayHelloComposables('Nick')
const { sleepComp } = useComposables()
sleepComp(3000)


const { $sayHelloPlug } = useNuxtApp()
$sayHelloPlug('Nick!!!')

const counter = useCounter()
</script>

<template>

        <div class="flex">
            <div class="w-2/3">
                <h1>A Component Library From The Stars</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit iusto eligendi, molestias id maiores voluptas laboriosam repellat necessitatibus aperiam sint accusantium harum officiis esse accusamus aliquam, atque earum qui.</p>
            </div>
            <div class="w-1/3">

                <div class="grid">
                    <div>sr-only</div>
                    <div>img src alt</div>
                    <div>picture img figcaption</div>
                    <div>video source</div>
                    <div>audio source</div>
                    <div>iframe</div>
                    <div>embed</div>
                    <div>object param</div>
                    <div>map area</div>
                    <div>svg</div>
                    <div>math</div>
                    <div>canvas</div>
                    <div>noscript</div>
                    <div>script</div>
                    <div>template</div>

                </div>

            </div>
        </div>

        <div>
            Counter: {{ counter }}
            <Button @click="counter++">Add value</Button>
        </div>

</template>

<style scoped lang="scss">

</style>