<template>
    <div class="lui-scroller" data-speed="medium" data-animated="true">
        <ul>
            <ImageSliderItem />
            <ImageSliderItem
                :img="{
                    alt: 'Frontpage for the Brandbook website',
                    src: '/img/portfolio/brandbook_002.png',
                    srcset: '/img/portfolio/brandbook_002-1024x833.png 1024w, /img/portfolio/brandbook_002-300x244.png 300w, /img/portfolio/brandbook_002-768x625.png 768w, /img/portfolio/brandbook_002-1200x976.png 1200w, /img/portfolio/brandbook_002.png 1315w/img/portfolio/brandbook_002-300x244.png 300w, /img/portfolio/brandbook_002-1024x833.png 1024w, /img/portfolio/brandbook_002-768x625.png 768w, /img/portfolio/brandbook_002-1200x976.png 1200w, /img/portfolio/brandbook_002.png 1315w',
                    sizes: '(max-width: 1024px) 100vw, 1024px',
                    loading: 'lazy', 
                    decoding: 'async',
                    fetchpriority: 'high',
                    type: 'image/jpg'
                }"
            ></ImageSliderItem> 
            <ImageSliderItem
                :img="{
                    alt: 'Frontpage for the Brandbook website',
                    src: '/img/portfolio/brandbook_001.png',
                    srcset: '/img/portfolio/brandbook_001-1024x866.png 1024w, /img/portfolio/brandbook_001-300x254.png 300w, /img/portfolio/brandbook_001-768x649.png 768w, /img/portfolio/brandbook_001.png 1113w/img/portfolio/brandbook_001-300x254.png 300w, /img/portfolio/brandbook_001-1024x866.png 1024w, /img/portfolio/brandbook_001-768x649.png 768w, /img/portfolio/brandbook_001.png 1113w',
                    sizes: '(max-width: 1024px) 100vw, 1024px',
                    loading: 'lazy', 
                    decoding: 'async',
                    fetchpriority: 'high',
                    type: 'image/jpg'
                }"

                :ratio="{
                    aspect: '10 / 8',
                    height: '80%'
                }"
            ></ImageSliderItem>  
            <ImageSliderItem
                :img="{
                    alt: 'Frontpage for the Brandbook website',
                    src: '/img/portfolio/brandbook_003.png',
                    srcset: '/img/portfolio/brandbook_003-1024x833.png 1024w, /img/portfolio/brandbook_003-300x244.png 300w, /img/portfolio/brandbook_003-768x625.png 768w, /img/portfolio/brandbook_003-1200x976.png 1200w, /img/portfolio/brandbook_003.png 1317w/img/portfolio/brandbook_003-300x244.png 300w, /img/portfolio/brandbook_003-1024x833.png 1024w, /img/portfolio/brandbook_003-768x625.png 768w, /img/portfolio/brandbook_003-1200x976.png 1200w, /img/portfolio/brandbook_003.png 1317w',
                    sizes: '(max-width: 1024px) 100vw, 1024px',
                    loading: 'lazy', 
                    decoding: 'async',
                    fetchpriority: 'high',
                    type: 'image/jpg'
                }"
            ></ImageSliderItem>  
            <ImageSliderItem
                :img="{
                    alt: 'Frontpage for the Brandbook website',
                    src: '/img/portfolio/brandbook_004.png',
                    srcset: '/img/portfolio/brandbook_004-1024x831.png 1024w, /img/portfolio/brandbook_004-300x244.png 300w, /img/portfolio/brandbook_004-768x623.png 768w, /img/portfolio/brandbook_004-1200x974.png 1200w, /img/portfolio/brandbook_004.png 1317w/img/portfolio/brandbook_004-300x244.png 300w, /img/portfolio/brandbook_004-1024x831.png 1024w, /img/portfolio/brandbook_004-768x623.png 768w, /img/portfolio/brandbook_004-1200x974.png 1200w, /img/portfolio/brandbook_004.png 1317w',
                    sizes: '(max-width: 1024px) 100vw, 1024px',
                    loading: 'lazy', 
                    decoding: 'async',
                    fetchpriority: 'high',
                    type: 'image/jpg'
                }"

                :ratio="{
                    aspect: '8 / 4',
                    height: '80%'
                }"
            ></ImageSliderItem>   
        </ul>
    </div>
</template>

<style scoped lang="scss">
.lui-scroller {
    overflow: hidden;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: nowrap;
        align-items: baseline;
        gap: 4rem;
        animation: scroll 20s forwards linear infinite;
    }
}

@keyframes scroll {
    100% {
        transform: translate(calc(-150%))
    }
}
</style>