<template>
    <AppHeader />
    <Container>
        <SidebarGrid>
            <aside>
                <AppMenu />
            </aside>
            <main>
                <slot />
            </main>
        </SidebarGrid>
    </Container>
    <AppFooter />
</template>

<style scoped lang="scss">
aside {
    padding: 2rem 1rem 1rem 0;
}
main {
    padding: 2rem 0;
}
</style>