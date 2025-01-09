<template>
    <div class="lui-collection__cell">
        <slot />
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.lui-collection {
    &__cell {
        flex: 1 1 0%;
        min-width: 1.5rem;
        font-family: "Roboto", serif;
        font-size: 1rem;
        font-weight: 500;
        font-style: normal;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        max-width: fit-content;
        min-width: 1.5rem;

    }
}
</style>