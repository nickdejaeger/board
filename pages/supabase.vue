<script setup>
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://dxmobrqkzaqxhnqzfaje.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4bW9icnFremFxeGhucXpmYWplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2NDc4NjUsImV4cCI6MjA1MDIyMzg2NX0.ttDjZLeQNXcB8gEwCMQ_oOXF4W8geqUxye8GftlVxmk')
const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
    <PageHeader>Supabase</PageHeader>
    <ul>
        <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
</template>