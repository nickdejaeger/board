<template>
  <header>
    <div class="container">
      <nav>
        <div><NuxtLink to="/" class="logo"><img src="/img/nuxt.png" alt="logo" />Board</NuxtLink></div>
        <aside>
          <NuxtLink to="/components">Components</NuxtLink>
          <NuxtLink to="/store">Pinia Store</NuxtLink>
          <NuxtLink to="/404">404</NuxtLink>
          <NuxtLink to="/test">Test</NuxtLink>
          <NuxtLink to="/posts/2?example=true">Post 2</NuxtLink>
        </aside>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
  header {
    padding: 1.5rem 1rem;
    background-color: #000;

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

      color: #FFF;
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