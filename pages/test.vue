<script lang="ts" setup>
    import accordion from '~/content/accordion.json';

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

    <PageHeader>Test Page</PageHeader>

    <ContentDoc />

    <article v-for="item in accordion.items" class="flex flex-col">
        <h3><span>{{ item.id }}</span> {{ item.active }}) {{ item.title }}</h3>
        <p class="text-">{{ item.content }}</p>
    </article>

    <pre>{{ me }}</pre>

    <div v-if="pending">Loading...</div>
    <div v-else>
        <div v-for="post in posts" key="post.id" class="p-2 px-4 mb-2 border">
            <div><h3>{{ post.title }}</h3></div>
            <div>{{ post.body }}</div>
        </div>
    </div>
            
</template>