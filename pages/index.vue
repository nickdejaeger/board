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

    <Container>
        <div class="w-full py-24 px-12">
            <input type="text" name="" id="" placeholder="Search..." class="w-full p-4 border border-gray-300 rounded-lg">
        </div>
    </Container>

    <Container>

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

    </Container>

    <Container>
        <div>
            Counter: {{ counter }}
            <Button @click="counter++">Add value</Button>
        </div>
    </Container>

    
    
  </PageContent>

</template>

<style scoped lang="scss">
input {
    border: 1px solid #DDD;
    border-radius: 6rem;
    padding: 1rem 3rem;
    font-size: 2rem;
}
</style>