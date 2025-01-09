<script setup lang="ts">
const route = useRoute()
const id = route.params.id
const q = route.query.example

useHead({
    title: 'Profile',
    meta: [
        { name: 'description', content: 'Profile dashboard.' }
    ]
})

definePageMeta({
    validate: async (route) => {
        return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
    }
})

const { data: movies, pending, execute, status } = await useFetch('https://dummyapi.online/api/movies', {
    lazy: true,
    server: false
})
</script>

<template>

  <PageContent>

    <PageHeader>Test Fetched data</PageHeader>

    <div class="mb-4">
      <div>URL ID: <span>{{ id }}</span></div>
      <div>URL Query: <span>{{ q }}</span></div>
    </div>

    <div>
      <Button @click="execute()" class="button--primary m-2">Generate Movies (status: {{ status }})</Button>

      <div v-if="pending">Loading movies...</div>
      <div v-else class="flex flex-col gap-2">
        <article v-for="(movie, index) in movies" :key="index">
          <div v-if="index < 3" class="flex gap-2">
            <img :src="'/img/movies/' + movie['image']" />
            <div>
              <h3>{{ movie['movie'] }}</h3>
              <div><i>{{ movie['rating'] }}/10</i></div>
            </div>
          </div>
        </article>
      </div>
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