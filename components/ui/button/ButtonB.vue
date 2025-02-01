<template>
    <button>
        <span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#868F97" stroke-width="1.5" d="M13.5 12.8053C14.2525 12.3146 14.75 11.4654 14.75 10.5C14.75 8.98122 13.5188 7.75 12 7.75C10.4812 7.75 9.25 8.98122 9.25 10.5C9.25 11.4654 9.74745 12.3146 10.5 12.8053L10.5 14.75C10.5 15.5784 11.1716 16.25 12 16.25C12.8284 16.25 13.5 15.5784 13.5 14.75L13.5 12.8053Z"></path><circle cx="12" cy="12" r="9.25" stroke="#868F97" stroke-width="1.5"></circle>
            </svg>
            Start your trial
        </span>
    </button>
</template>

<style scoped lang="scss">
button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 28px;
    white-space: nowrap;
    background: radial-gradient(61.35% 50.07% at 48.58% 50%, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0.04) 100%);
    box-shadow: rgba(134, 143, 151, 0.2) 0px 0px 0px 0.5px inset, rgba(134, 143, 151, 0.4) 1px 1px 0px -0.5px inset, rgba(134, 143, 151, 0.4) -1px -1px 0px -0.5px inset;
    padding: 8px 17px 8px 12px;
    height: 32px;
    min-width: 136px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: rgb(255, 255, 255);

    &::after {
        content: "";
        background: radial-gradient(61.35% 50.07% at 48.58% 50%, rgb(0, 0, 0) 0%, rgb(24, 24, 24) 100%);
        box-shadow: rgba(134, 143, 151, 0.2) 0px 0px 0px 0.5px inset, rgba(134, 143, 151, 0.4) 1px 1px 0px -0.5px inset, rgba(134, 143, 151, 0.4) -1px -1px 0px -0.5px inset, rgba(255, 255, 255, 0.1) 0px 0px 3px;
        position: absolute;
        border-radius: 28px;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.2s;
    }

    &:hover {
        &::after {
            opacity: 1;
        }

        svg {
            animation: 2s linear 4s infinite normal none running hFnLNz;

            * {
                stroke: white;
            }

            path {
                transform: scale(1.6) translateY(-0.5px);
            }
        }
    }

    span {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        z-index: 1;
        gap: 8px;
    }

    svg {
        path {
            transform-origin: center center;
            stroke-width: 1.5;
            transition: 0.4s;
        }
    }
}

@keyframes hFnLNz {
    0% {
        transform: translateX(0%);
    }
    5% {
        transform: translateX(-2px) rotate(-2deg);
    }
    10% {
        transform: translateX(2px) rotate(2deg);
    }
    15% {
        transform: translateX(-1px) rotate(-1deg);
    }
    20% {
        transform: translateX(1px) rotate(1deg);
    }
    25% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(0%);
    }
}
</style>