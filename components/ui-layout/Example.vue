<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: 'Default'
    },
    label: {
        type: String,
        default: ''
    },
    theme: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <article :class="theme">
        <header>
            <h3>{{ title }}</h3>
            <Badge v-if="label" :text="label" />
        </header>
        <div>
            <slot />
        </div>
    </article>
</template>

<style scoped lang="scss">
article {
    position: relative;
    margin: 0 0 2rem;
    padding: 2rem;

    background-color: rgba(0,0,0,.05);

    border-radius: .35rem;

    header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #00000021;
        margin-bottom: 2rem;
        padding-bottom: 1rem;

        h3 {
            font-family: "Urbanist", serif;
            font-optical-sizing: auto;
            font-size: 1.6rem;
            font-weight: 700;
            font-style: normal;
            line-height: 1;
            letter-spacing: -1px;
            color: #0000007d;
        }
    }

    > div {
        position: relative;
        min-height: 40px;
    }

    &.dark {
        background-color: #1a1a1a;

        header {
            border-bottom: 1px solid #d7d7d721;

            h3 {
                color: #acacac
            }
        }
    }
}
</style>