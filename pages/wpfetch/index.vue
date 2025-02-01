<script setup lang="ts">
    interface Bericht {
        id: string,
        title: {
            rendered: string
        },
        content: {
            rendered: string
        }
    }

    const berichten = ref<Bericht[] | null>(null);
    const error = ref<string | null>(null);

    const fetchBerichten = async () => {
        try {
            const response = await fetch('https://www.fietsenlauwers.com/wp-json/wp/v2/bericht');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data: Bericht[] = await response.json();
            berichten.value = data;
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
        fetchBerichten()
    })
</script>

<template>
    <PageHeader>WP API fetch berichten</PageHeader>

    <div v-if="error" class="inline-block px-4 py-2 mb-2 bg-red-200 text-red-700 rounded">{{ error }}</div>
    <div v-else-if="berichten">
        <Example v-for="bericht in berichten" :key="bericht.id" :title="bericht.title.rendered">
            <div v-html="bericht.content.rendered"></div>
        </Example>
    </div>
    <div class="p-2 animate-pulse">Loading...</div>

</template>