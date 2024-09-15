<template>
  <button>
    <slot />
  </button>
</template>

<style scoped lang="scss">
  button {
    outline: 0;
    border: 0;
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    border-radius: 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
    padding: .5rem 1rem;
    background-color: $color-secondary;
    text-align: left;
  }
</style>

<style>
  button img {
    max-height: 16px;
    width: auto;
  }
</style>