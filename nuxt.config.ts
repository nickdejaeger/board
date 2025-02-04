// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'},
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'}
            ],
            title: 'App local'
        },
        //pageTransition: { name: 'page', mode: 'out-in' }
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/_variables.scss" as *; @use "~/assets/_colors.scss" as *;',
                    //api: 'modern-compiler'
                }
            }
        }
    },
    css: [
        '~/assets/css/main.css',
        '~/assets/css/global.css',
        '~/assets/scss/global.scss',
        '~/assets/scss/global-classes.scss',
        'animate.css'
    ],
    modules: [
        '@nuxtjs/supabase',
        '@pinia/nuxt',
        '@nuxt/content'
    ],
    supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
        redirect: false
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        }
    ],

    imports: {
        dirs: ['types/*ts']
    }
    
})