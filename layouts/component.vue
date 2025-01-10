<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

/**
 * Checks if a given path exists in the router's registered routes.
 * @param {string} path - The path to check.
 * @returns {boolean} - Returns `true` if the path does not exist, `false` otherwise.
 */
function isInvalidLink(path: string): boolean {
  const resolved = router.resolve(path)
  return resolved.matched.length === 0
}

const componentLinks = ref([
    { path: '/components/accordion', name: 'Accordion' },
    { path: '/components/attachment', name: 'Attachment' },
    { path: '/components/badge', name: 'Badge' },
    { path: '/components/button', name: 'Button' },
    { path: '/components/breadcrumbs', name: 'Breadcrumbs' },
    { path: '/components/card', name: 'Card' },
    { path: '/components/checkbox', name: 'Checkbox' },
    { path: '/components/collection', name: 'Collection' },
    { path: '/components/command', name: 'Command' },
    { path: '/components/comment', name: 'Comment' },
    { path: '/components/context', name: 'Context' },
    { path: '/components/divider', name: 'Divider' },
    { path: '/components/dropdown', name: 'Dropdown' },
    { path: '/components/field', name: 'Field' },
    { path: '/components/heading', name: 'Heading' },
    { path: '/components/icon', name: 'Icon' },
    { path: '/components/input', name: 'Input' },
    { path: '/components/modal', name: 'Modal' },
    { path: '/components/radio', name: 'Radio' },
    { path: '/components/select', name: 'Select' },
    { path: '/components/separator', name: 'Separator' },
    { path: '/components/switch', name: 'Switch' },
    { path: '/components/tabs', name: 'Tabs' },
    { path: '/components/text', name: 'Text' },
    { path: '/components/textarea', name: 'Textarea' },
    { path: '/components/toast', name: 'Toast' },
    { path: '/components/tooltip', name: 'Tooltip' },
    { path: '/components/widget', name: 'Widget' },
])
const elementLinks = ref([
    { path: '/elements/dropdown-menu', name: 'Dropdown Menu' },
    { path: '/components/gallery', name: 'Gallery' },
    { path: '/components/navbar', name: 'Navbar' },
    { path: '/components/table', name: 'Table' },
])
</script>

<template>
    <AppHeader />

    <Container>
        <SidebarGrid>
            <div class="flex flex-col">
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
            </div>

            <section>
                <slot />
            </section>
        </SidebarGrid>
    </Container>
    
    <AppFooter />
</template>

<style scoped lang="scss">
main {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
}

nav {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0 0 2rem;
    min-width: 160px;

    h6 {
        padding: 0 0 1rem;
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.2;
    }

    a {
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
            border-right: 2px solid #EEE;
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

section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>