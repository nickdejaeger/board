<template>
  <button class="button" @click="$emit('click')">
    <slot name="icon"></slot>
    <slot>Default Button Text</slot>
  </button>
</template>

<style scoped lang="scss">
  .button {
    font-family: "Source Sans Pro", "TF-Regular", Arial, sans-serif;
    font-size: 1rem;
    font-kerning: normal;
    -webkit-font-variant-ligatures: no-common-ligatures;
    font-variant-ligatures: no-common-ligatures;
    -webkit-font-feature-settings: "kern" 1, "liga" 0;
    font-feature-settings: "kern" 1, "liga" 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    border: 0;
    outline: 0;
    background: none;
    text-decoration: none;
    box-shadow: none;

    cursor: pointer;
    word-break: normal;

    border-radius: var(--radius-hard);

    position: relative;

    display: inline-flex;
    align-items: baseline;
    justify-content: flex-start;
    gap: .5rem;

    text-align: center;
    padding: 0.25rem 1rem;
    
    transform: translate3d(0, 0, 0);
    transition: all 0.15s ease-in-out;

    background-color: rgba(140, 140, 140, 0.15);
    color: #000;
    box-shadow: 0 0.125rem 0 #CCC;

    &--primary {
      background-color: var(--color-primary);
      color: #FFF;
      box-shadow: 0 0.125rem 0 var(--color-primary-shadow);
    }

    &--secondary {
      background-color: #E61616;
      color: #FFF;
      box-shadow: 0 0.125rem 0 #890d0d;
    }

    &--transparent {
      background-color: transparent;
      color: $color-action;
      box-shadow: none;
    }


    &:hover {
      box-shadow: none;
      transform: translate3d(0, 0.125rem, 0);
    }
  }
</style>

<style lang="scss">
  button {
    img {
      max-height: 16px;
      width: auto;
    }

    i {
      font-size: .75rem;
    }
  }
</style>