<template>
    <div class="burger">
        <label class="bar" for="check">
            <input type="checkbox" id="check">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
        </label>
    </div>
</template>

<style scoped lang="scss">
.burger {
    input[type="checkbox"] {
        -webkit-appearance: none;
        display: none;
        visibility: hidden;
    }

    .bar {
        display: block;
        position: relative;
        cursor: pointer;
        width: 40px;
        height: 40px;

        span {
            position: absolute;
            width: 40px;
            height: 6.5px;
            background: var(--primary);
            border-radius: 100px;
            display: inline-block;
            transition: 0.3s ease;
            left: 0;

            &.top {
                top: 0;
            }

            &.middle {
                top: 15px;
            }

            &.bottom {
                bottom: 4px;
            }
        }
    }

    input[type] {
        &:checked {
            ~ span {
                &.top {
                    transform: rotate(45deg);
                    transform-origin: top left;
                    width: 48px;
                    left: 5px;
                }

                &.bottom {
                    transform: rotate(-45deg);
                    transform-origin: top left;
                    width: 48px;
                    bottom: -1px;
                }

                &.middle {
                    transform: translateX(-20px);
                    opacity: 0;
                }
            }
        }
    }
}
</style>