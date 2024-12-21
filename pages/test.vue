<script lang="ts" setup>
    const { pending, data: posts } = await useFetch('/api/test', {
        transform: (response) => response.data,
        lazy: true
    })






    class User {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    const me = new User('Nick', 30)
</script>

<template>
    <div>
        <div class="p-12">
            <h1>Test Page</h1>
            <div>{{ me }}</div>
            <div v-if="pending">Loading...</div>
            <div v-else>
                <div v-for="post in posts" key="post.id" class="p-2 px-4 mb-2 border">
                    <div><h3>{{ post.title }}</h3></div>
                    <div>{{ post.body }}</div>
                </div>
            </div>
        </div>
    </div>
</template>