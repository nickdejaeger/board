<script setup lang="ts">
defineProps({
    img: {
        type: Object,
        default() {
            return { 
                fetchpriority: 'auto',
                size: '',
                srcset: '',
                src: '',
                alt: '',
                loading: 'eager',
                decoding: 'auto'
            }
        }
    },
    ratio: {
        type: Object,
        default() {
            return { 
                aspect: '',
                height: '',
                type: ''
            }
        }
    }
})
</script>

<template>
    <li v-if="img.src">
        <figure :style="{ aspectRatio: ratio.aspect, paddingTop: ratio.height }">
            <picture>
                <source v-if="img.srcset"
                    :sizes="img.sizes"
                    :srcset="img.srcset"
                    :type="img.type"
                >
                <img v-if="img.src"
                    :fetchpriority="img.fetch" 
                    :sizes="img.sizes"
                    :srcset="img.srcset"
                    :src="img.src" 
                    :alt="img.alt" 
                    :loading="img.loading" 
                    :decoding="img.decoding"
                >
            </picture>
        </figure>
    </li>
</template>

<style scoped lang="scss">
figure,
picture {
    margin: 0;
}
figcaption,
figure,
picture,
img {
    display: block;
}
li {
    padding: 0;
}
figure {
    position: relative;
    overflow: visible;
    border-radius: .5rem;
    width: 500px;
    padding-top: 100%;
}
img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    font-style: italic;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
}
</style>