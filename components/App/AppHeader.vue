<template>
    <header>
        <Container>
            <nav>
                <div><NuxtLink to="/" class="logo"><img src="/img/nuxt.png" alt="logo" />Board</NuxtLink></div>
                <aside>
                    <NuxtLink to="/components">Components</NuxtLink>
                    <NuxtLink to="/store">Pinia</NuxtLink>
                    <NuxtLink to="/404">404</NuxtLink>
                    <NuxtLink to="/test">Test</NuxtLink>
                    <NuxtLink to="/posts/2?example=true">Post 2</NuxtLink>
                    <NuxtLink to="/foo/bar/epic">foo/bar/epic</NuxtLink>
                </aside>
            </nav>
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

        nav {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            width: 100%;

            aside {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                gap: .5rem;
                
            }
        }

        a {
            text-decoration: none;
            line-height: 1.2;

            &.logo {
                display: inline-flex;
                align-items: center;
                gap: .5rem;
                font-size: 1.4rem;
                font-weight: 600;
                line-height: normal;
            }

            img {
                max-height: 20px;
            }
        }
    }
</style>