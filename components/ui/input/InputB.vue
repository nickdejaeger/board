<script setup lang="ts">
import { ProIcon } from '@proicons/vue'
</script>

<template>
    <form class="sc-e8c03bf4-11 iWvRBN">
        <input type="email" name="input" placeholder="account email" class="sc-e8c03bf4-12 fyiJVI">
        <button class="sc-e8c03bf4-23 lRXLz">
            <div>
                <ProIcon icon="ArrowRight" :size="20" />
            </div>
        </button>
    </form>
</template>

<style scoped lang="scss">
form {
    position: relative;
    width: 320px;
    height: 44px;
    background: rgba(255, 255, 255, 0.06);
    border: 0.5px solid rgba(255, 255, 255, 0.08);
    box-shadow: rgba(0, 0, 0, 0.08) 1px 1px 1px inset;
    backdrop-filter: blur(2px);
    border-radius: 99px;
    line-height: 19px;
    padding: 10px 10px 10px 21px;
    display: flex;
    cursor: text;

    input {
        background: none;
        line-height: 19px;
        width: 100%;
        padding: 0px 8px 1px 0px;
        color: rgb(255, 255, 255);
        transition: color 0.3s;
    }

    button {
        appearance: none;
        border: none;
        outline: none;
        background: transparent;
        width: 24px;
        height: 24px;
        bottom: 0.5px;
        position: relative;
        cursor: pointer;

        div {
            svg {
                color: #FFF;
            }
        }
    }
}
</style>