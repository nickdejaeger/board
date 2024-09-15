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


const { data: movies } = await useFetch('https://dummyapi.online/api/movies')
</script>

<template>
  <PageHeader>
    <h1>User</h1>
  </PageHeader>

  <PageContent>
    <div>ID: <span>{{ id }}</span></div>
    <div>Query: <span>{{ q }}</span></div>
    <div v-for="(movie, index) in movies" :key="movie.id">
      <article v-if="index == 0" class="flex">
        <img src="https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" />
        <div>
          <div>{{  }}</div>
          <h2>{{ movie['movie'] }}</h2>
          <div>{{ movie['rating'] }}</div>
        </div>
      </article>
    </div>
  </PageContent>
</template>

<style scoped>
article {
  img {
    max-width: 100px;
  }
}
</style>