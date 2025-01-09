<script setup lang="ts">
import { ProIcon } from '@proicons/vue'

useHead({
    title: 'Dropdown Menu',
})

definePageMeta({
    layout: 'component'
})
</script>

<template>
    <h1>Dropdown Menu</h1>
    
    <Collection>
        <CollectionItems>
            <CollectionRow>
                <CollectionCellAction><ProIcon icon="Filter" :size="20" /></CollectionCellAction>
                <CollectionCell>Filter</CollectionCell>
                <CollectionCellAction><ProIcon icon="ChevronRight" :size="20" /></CollectionCellAction>
            </CollectionRow>
            <CollectionRow class="is-disabled">
                <CollectionCellAction><ProIcon icon="ArrowSort" :size="20" /></CollectionCellAction>
                <CollectionCell>Sort</CollectionCell>
                <CollectionCellAction><ProIcon icon="ChevronRight" :size="20" /></CollectionCellAction>
            </CollectionRow>
            <CollectionRow>
                <CollectionCellAction><ProIcon icon="Brackets" :size="20" /></CollectionCellAction>
                <CollectionCell>Group</CollectionCell>
                <CollectionCellAction><ProIcon icon="ChevronRight" :size="20" /></CollectionCellAction>
            </CollectionRow>
            <CollectionRow :type="'primary'">
                <CollectionCellAction><ProIcon icon="EyeOff" :size="20" /></CollectionCellAction>
                <CollectionCell>Show/Hide Fields</CollectionCell>
                <CollectionCellAction><ProIcon icon="ChevronRight" :size="20" /></CollectionCellAction>
            </CollectionRow>
            <Divider :color="'dimmed'"></Divider>
            <CollectionRow>
                <CollectionCellAction><ProIcon icon="Pencil" :size="20" /></CollectionCellAction>
                <CollectionCell>Rename view</CollectionCell>
                <CollectionCellAction><ProIcon icon="ChevronRight" :size="20" /></CollectionCellAction>
            </CollectionRow>
            <CollectionRow>
                <CollectionCellAction><ProIcon icon="Copy" :size="20" /></CollectionCellAction>
                <CollectionCell>Duplicate view</CollectionCell>
            </CollectionRow>
            <CollectionRow :type="'secondary'">
                <CollectionCellAction><ProIcon icon="Delete" :size="20" /></CollectionCellAction>
                <CollectionCell>Delete view</CollectionCell>
            </CollectionRow>
            <Divider :color="'dimmed'" :position="'center'"></Divider>
            <CollectionRow>
                <CollectionCellAction><ProIcon icon="Pencil" :size="20" /></CollectionCellAction>
                <CollectionCell>Configure Collection</CollectionCell>
                <CollectionCellAction><ProIcon icon="ChevronRight" :size="20" /></CollectionCellAction>
            </CollectionRow>
        </CollectionItems>
    </Collection>
</template>