<script setup lang="ts">
defineProps({
    style: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    },
    position: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div class="divider" 
        :class="[
            style ? `divider--${style}` : '',
            color ? `divider--${color}` : '',
            position ? `divider--${position}` : ''
        ]"
    >
        <slot />
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.divider {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    width: 100%;
    text-align: center;

    font-family: "Roboto", serif;
    font-size: .65rem;
    font-weight: 600;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: .05rem;

    &::before,
    &::after {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #000;
    }

    &::before {
        content: '';
        flex: 0 0 .5rem;
    }

    &::after {
        content: '';
        flex: 1 0 .5rem;
        width: 100%;
    }

    &:empty {
        gap: 0;

        &::after {
            flex: 1 0 0;
        }
    }

    &--left {
        &::before {
            flex: 0 0 .5rem;
        }
        &::after {
            flex: 1 0 .5rem;
        }
    }

    &--center {
        &::before {
            flex: 1 0 .5rem;
        }
    }

    &--right {
        &::before {
            flex: 1 0 .5rem;
        }
        &::after {
            flex: 0 0 .5rem;
        }
    }

    &--transparent {
        &::before,
        &::after {
            border: 0;
        }
    }

    &--dimmed {
        opacity: 1;

        &::before,
        &::after {
            opacity: .15;
        }
    }

    &--solid {
        &::before,
        &::after {
            opacity: 1;
        }
    }

    &--dashed {
        &::before,
        &::after {
            border-bottom-style: dashed;
        }
    }

    &--dotted {
        &::before,
        &::after {
            border-bottom-style: dotted;
        }
    }
}
</style>