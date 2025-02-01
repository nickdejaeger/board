<script setup lang="ts">
    const route = useRoute()
    const berichtId = route.params.id

    interface Bericht {
        id: string,
        title: {
            rendered: string
        },
        content: {
            rendered: string
        }
    }

    const berichtData = ref<Bericht | null>(null);
    const error = ref<string | null>(null);

    const fetchBericht = async () => {
        try {
            const response = await fetch(`https://www.fietsenlauwers.com/wp-json/wp/v2/bericht/${berichtId}`)

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data: Bericht = await response.json();
            berichtData.value = data;
        }
        catch (fetchErr) {
            if (fetchErr instanceof Error) {
                error.value = fetchErr.message;
            } else {
                error.value = String(fetchErr);
            }
        }
    }

    onMounted(() => {
        fetchBericht()
    })
</script>

<template>
    <Example :title="'WP API fetch bericht met id: ' + berichtId">
        <div v-if="error">{{ error }}</div>
        <div v-else-if="berichtData">
            <h2>{{ berichtData.title.rendered }}</h2>
            <div v-html="berichtData.content.rendered"></div>
        </div>
        <div v-else>Loading...</div>
    </Example>
</template>