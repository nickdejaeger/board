<script setup lang="ts">
import { ProIcon } from '@proicons/vue'

const props = defineProps({
    id: {
        type: String,
        default: () => `lui-accordion-id-${Math.random().toString(36).substr(2, 9)}`
    },
    items: {
        type: Array,
        required: true,
        default: () => []
    },
    active: {
        type: Boolean,
        default: false
    }
})

const expandedItems = ref(props.items.map(() => false))

const toggleItem = (index) => {
  expandedItems.value[index] = !expandedItems.value[index]
}
</script>

<template>
    <div class="lui-accordion" :id="id">
        <button type="button" 
            class="lui-accordion__item" 
            v-for="(item, index) in items" 
            :key="index" @click="toggleItem(index)" 
            :class="(expandedItems[index]) ? 'lui-accordion__item--open' : ''">
            <div class="lui-accordion__header">
                <h3>{{ item.title }}</h3>
                <ProIcon icon="ChevronDown" :class="'lui-accordion__icon'" :size="20" />
            </div>
            <div class="lui-accordion__body" v-show="expandedItems[index]">{{ item.content }}</div>
        </button>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.lui-accordion {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    width: 100%;
    font-family: "Roboto", serif;
    font-weight: 400;
    font-style: normal;

    &__item {
        position: relative;
        border-bottom: 1px solid rgba(255,255,255,.15);

        &--open {
            .lui-accordion__icon {
                transform: rotate(180deg);
            }
        }
    }

    &__header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;
        padding: .5rem 1rem;
        cursor: pointer;
        border-radius: .5rem;
        background: transparent;
        

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(255,255,255,.05) 0%,rgba(255,255,255,0) 100%);
            opacity: 0;
            transition: all .35s ease-in-out;
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 500;
            line-height: 1.8rem;
            color: #FFF;
        }

        &:hover {
            &::after {
                opacity: 1;
            }

            .lui-accordion__icon {
                color: rgba(255,255,255,1);
            }
        }
    }

    &__icon {
        color: rgba(255,255,255,.65);
        transition: all .35s ease-in-out;
        min-width: 1.25rem;
    }

    &__body {
        font-size: 1rem;
        color: rgba(255,255,255,.75);
        padding: 0 1rem .5rem;
        border-bottom: 1px solid transparent
    }
}
</style>