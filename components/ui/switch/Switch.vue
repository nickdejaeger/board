<template>
    <div class="lui-switch">
        <input type="checkbox" name="switch" id="">
        <div class="lui-switch__filler"></div>
        <div class="lui-switch__dot"></div>
    </div>
</template>

<style scoped lang="scss">
.lui-switch {
    position: relative;
    background-color: rgba(15, 23, 42, 0.1);
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(15, 23, 42, 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
    border-radius: 9999px;
    width: 2.5rem;
    height: 1.5rem;
    padding: 0.25rem;
    pointer-events: auto;
    overflow: hidden;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    cursor: pointer;

    input {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        cursor: pointer;
        background: none;
        opacity: 0;
    }

    &__filler {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(79, 70, 229);
        box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(15, 23, 42, 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
        opacity: 0;
    }

    &__dot {
        position: relative;
        background-color: rgb(255, 255, 255);
        box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(51, 65, 85, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
        border-radius: 9999px;
        width: 1rem;
        height: 1rem;
        pointer-events: auto;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms;
    }

    input:checked {
        ~ .lui-switch__filler {
            opacity: 1;
        }
        ~ .lui-switch__dot  {
            transform: matrix(1, 0, 0, 1, 16, 0);
        }
    }
}
</style>