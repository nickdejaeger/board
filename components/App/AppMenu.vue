<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

console.log(router)

function isInvalidLink(path: string): boolean {
    const resolved = router.resolve(path)
    return resolved.matched.length === 0
}

const componentLinks = ref([
    { path: '/components/accordion', name: 'Accordion' },
    { path: '/components/anchor', name: 'Anchor' },
    //{ path: '/components/attachment', name: 'Attachment' },
    { path: '/components/badge', name: 'Badge' },
    { path: '/components/burger', name: 'Burger' },
    { path: '/components/button', name: 'Button' },
    //{ path: '/components/breadcrumbs', name: 'Breadcrumbs' },
    //{ path: '/components/card', name: 'Card' },
    //{ path: '/components/checkbox', name: 'Checkbox' },
    { path: '/components/collection', name: 'Collection' },
    //{ path: '/components/command', name: 'Command' },
    //{ path: '/components/comment', name: 'Comment' },
    //{ path: '/components/context', name: 'Context' },
    { path: '/components/divider', name: 'Divider' },
    //{ path: '/components/dropdown', name: 'Dropdown' },
    //{ path: '/components/field', name: 'Field' },
    { path: '/components/form', name: 'Froms' },
    //{ path: '/components/heading', name: 'Heading' },
    //{ path: '/components/icon', name: 'Icon' },
    { path: '/components/input', name: 'Input' },
    //{ path: '/components/modal', name: 'Modal' },
    { path: '/components/namecard', name: 'Namecard' },
    { path: '/components/notch', name: 'Notch' },
    //{ path: '/components/radio', name: 'Radio' },
    { path: '/components/select', name: 'Select' },
    //{ path: '/components/separator', name: 'Separator' },
    { path: '/components/switch', name: 'Switch' },
    //{ path: '/components/tabs', name: 'Tabs' },
    { path: '/components/text', name: 'Text' },
    //{ path: '/components/textarea', name: 'Textarea' },
    //{ path: '/components/toast', name: 'Toast' },
    //{ path: '/components/tooltip', name: 'Tooltip' },
    //{ path: '/components/widget', name: 'Widget' },
])
const elementLinks = ref([
    { path: '/elements/dropdown-menu', name: 'Dropdown Menu' },
    { path: '/elements/image-slider', name: 'Image Slider' },
    //{ path: '/components/gallery', name: 'Gallery' },
    //{ path: '/components/navbar', name: 'Navbar' },
    //{ path: '/components/table', name: 'Table' },
])
</script>

<template>

    <nav>
        <ul>
            <li><NuxtLink to="/array">Array Functions</NuxtLink></li>
            <li><NuxtLink to="/store">Pinia</NuxtLink></li>
            <li><NuxtLink to="/test">Test</NuxtLink></li>
            <li><NuxtLink to="/supabase">Supabase</NuxtLink></li>
            <li><NuxtLink to="/posts/2?example=true">Post 2</NuxtLink></li>
            <li><NuxtLink to="/foo/bar/epic">foo/bar/epic</NuxtLink></li>
        </ul>    
    </nav>

    <nav>
        <h6>WP Fetch</h6>
        <ul>
            <li><NuxtLink to="/wpfetch">Berichten</NuxtLink> </li>
            <ul>
                <li><NuxtLink to="/wpfetch/514">Bericht 514</NuxtLink></li>
                <li><NuxtLink to="/wpfetch/513">Bericht 513</NuxtLink></li>
            </ul>
        </ul>    
    </nav>

    <nav>
        <h6>Components</h6>
        <NuxtLink v-for="link in componentLinks" :key="link.path"
            :to="{ path: link.path }"
            :class="{ invalid: isInvalidLink(link.path) }"
        >
            {{ link.name }}
        </NuxtLink>
    </nav>

    <nav>
        <h6>Elements</h6>
        <NuxtLink v-for="link in elementLinks" :key="link.path"
            :to="{ path: link.path }"
            :class="{ invalid: isInvalidLink(link.path) }"
        >
            {{ link.name }}
        </NuxtLink>
    </nav>
    
</template>

<style scoped lang="scss">
nav {
    display: flex;
    flex-direction: column;
    padding: 0 0 2rem;

    h6 {
        padding: 0 0 1rem;
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.2;
    }

    ul {
        ul {
            padding: 0 0 0 1.5rem;

            a {
                font-size: 0.85rem;
                padding: .25rem .5rem .25rem 1rem;
            }
        }
    }

    a {
        display: block;
        position: relative;
        opacity: .65;
        font-size: 1.1rem;
        line-height: 1.2;
        padding: 0.25rem 0.5rem 0.25rem 1.5rem;
        border-radius: .25rem;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            border-right: 2px solid #d1d1d1;
        }

        &:focus-visible {
            outline: 0;
            background-color: #EEE;
        }

        &:hover {
            opacity: 1;

            &::before {
                border-color: #000;
            }
        }

        &.invalid {
            opacity: .25;
            pointer-events: none;
        }

        &.router-link-active {
            opacity: 1;

            &::before {
                border-color: #000;
            }
        }
    }
}
</style>