<script setup lang="ts">
import { ProIcon } from '@proicons/vue'

useHead({
    title: 'Collection',
})

definePageMeta({
    layout: 'component'
})

defineProps({
    title: {
        type: String,
        default: '?unspecified component?'
    }
})

</script>

<template>
    <h1>Collection</h1>
    
    <Collection>
        <CollectionItems>
            <CollectionRow class="bg-cloud">
                <CollectionCell>Hybrid</CollectionCell>
                <CollectionCell class="collection__cell--action"><ProIcon icon="ChevronRight" :size="20" /></CollectionCell>
            </CollectionRow>
            <CollectionRow class="bg-cloud is-disabled">
                <CollectionCell>Hybrid</CollectionCell>
                <CollectionCell class="collection__cell--action"><ProIcon icon="Search" :size="20" /></CollectionCell>
            </CollectionRow>
            <CollectionRow class="bg-cloud">
                <CollectionCell>On-site</CollectionCell>
            </CollectionRow>
            <CollectionRow class="bg-cloud">
                <CollectionCell>Remote</CollectionCell>
            </CollectionRow>
        </CollectionItems>
    </Collection>

    <Collection class="bg-cloud">
        <CollectionItems>
            <CollectionRow>
                <CollectionCell class="collection__cell--action"><i class="fa-solid fa-plus"></i></CollectionCell>
                <CollectionCell>Create Smartlist</CollectionCell>
            </CollectionRow>
            <CollectionRow>
                <CollectionCell class="collection__cell--action"><i class="fa-solid fa-plus"></i></CollectionCell>
                <CollectionCell>Create as Smartlist</CollectionCell>
            </CollectionRow>
        </CollectionItems>
    </Collection>

    <Divider class="is-dotted is-dimmed" />

    <Collection class="bg-cloud">
        <CollectionItems>
            <CollectionRow>
                <CollectionCell class="collection__cell--action"><i class="fa-solid fa-check"></i></CollectionCell>
                <CollectionCell>Save changes</CollectionCell>
            </CollectionRow>
        </CollectionItems>
    </Collection>

    <Divider class="is-dotted is-dimmed" />

    <Collection class="bg-cloud">
        <CollectionItems>
            <CollectionRow>
                <CollectionCell class="collection__cell--action"><i class="fa-solid fa-display"></i></CollectionCell>
                <CollectionCell>Full screen</CollectionCell>
            </CollectionRow>
        </CollectionItems>
    </Collection>
</template>