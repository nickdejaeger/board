<template>
  <AppHeader />
  <main>
    <NavComponentMenu />
    <slot />
  </main>
  <AppFooter />
</template>

<style scoped lang="scss">
main {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>