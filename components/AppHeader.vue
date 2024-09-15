<template>
  <header class="navbar">
    <div><NuxtLink to="/">Company</NuxtLink></div>
    <nav class="flex gap-3">
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/test">Test</NuxtLink>
      <NuxtLink to="/posts/2?example=true">Post 2</NuxtLink>
    </nav>
    <slot />
  </header>
</template>

<style scope lang="scss">
  .navbar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;
    background-color: #000;

    * {
      color: #FFF
    }
  }
</style>