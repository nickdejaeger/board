<script setup lang="ts">
import { ProIcon } from '@proicons/vue'

defineProps({
    id: {
        type: String,
        default: () => `lui-accordion-id-${Math.random().toString(36).substr(2, 9)}`
    },
    data: {
        type: Array,
        default: ''
    },
    active: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="lui-accordion" :id="id">
        <details v-for="(tab, index) in data" :key="index">
            <summary type="button">
                <h3>{{ tab.title }}</h3>
                <ProIcon icon="ChevronDown" :size="20" />
            </summary>
            <div class="lui-accordion__body">{{ tab.content }}</div>
        </details>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.lui-accordion {
    font-family: "Roboto", serif;
    font-weight: 400;
    font-style: normal;

    display: flex;
    flex-direction: column;
    gap: .25rem;

    width: 100%;

    details {
        position: relative;
        border-bottom: 1px solid rgba(255,255,255,.15);

        &[open] {
            summary {
                svg {
                    transform: rotate(180deg);
                }
            }
        }
    }

    summary {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;
        padding: .5rem;
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

        svg {
            color: rgba(255,255,255,.65);
            transition: all .35s ease-in-out;
        }

        &:focus-visible {
            outline: 0;

            + div {
                border-bottom: 1px solid white;
            }
        }

        &:hover {
            &::after {
                opacity: 1;
            }

            svg {
                color: rgba(255,255,255,1);
            }
        }
    }

    &__body {
        font-size: 1rem;
        color: rgba(255,255,255,.75);
        padding: 0 .5rem .5rem .5rem;
        border-bottom: 1px solid transparent
    }
}
</style>