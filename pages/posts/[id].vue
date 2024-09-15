<script setup lang="ts">
useHead({
  title: 'Profile',
  meta: [
    { name: 'description', content: 'Profile dashboard.' }
  ]
})

const route = useRoute()

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})

// When accessing /posts/1, route.params.id will be 1
const id = route.params.id
const q = route.query.example
</script>

<template>
  <div>
    <PageHeader>
      <h1>User with ID <span>{{ id }}</span> and the query is set to <span>{{ q }}</span></h1>
    </PageHeader>
  </div>
</template>