<script setup lang="ts">
import { ProIcon } from '@proicons/vue'
</script>

<template>
    <header>
        <Container>
            <div>
                <NuxtLink to="/" class="logo"><img src="/img/nuxt.png" alt="logo" />Board</NuxtLink>
                <input type="search" name="" id="" placeholder="Search..." class="w-full p-4 border border-gray-300 rounded-lg">
                <nav>
                    <NuxtLink to="/404"><ProIcon icon="AlertCircle" :size="20" /><sup>404</sup></NuxtLink>
                    <NuxtLink to="/"><ProIcon icon="Settings" :size="20" /></NuxtLink>
                    <NuxtLink to="/"><ProIcon icon="Person2" :size="20" /></NuxtLink>
                </nav>
            </div>
        </Container>
    </header>
</template>

<style scoped lang="scss">
    header {
        position: sticky;
        top: 0;
        z-index: 50;
        background-color: hsl(0deg 0% 100% / 60%);
        backdrop-filter: blur(10px);
        padding: 1rem 0;
        border-bottom: 1px solid #e4e4e7;

        input[type=search] {
            border: 1px solid #DDD;
            border-radius: .5rem;
            padding: .25rem 1rem;
            font-size: 1.2rem;
            width: auto;
            flex: 1 1 auto;
        }

        div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            width: 100%;

            nav {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                gap: .5rem;
            }
        }

        a {
            display: inline-flex;
            text-decoration: none;
            line-height: 1.2;

            &.logo {
                display: inline-flex;
                align-items: baseline;
                gap: .5rem;
                font-family: "Urbanist", serif;
                font-size: 1.4rem;
                font-weight: 700;
                line-height: normal;
                min-width: 13rem;
            }

            img {
                max-height: 20px;
            }
        }
    }
</style>