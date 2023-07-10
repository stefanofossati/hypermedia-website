import type {NuxtConfig} from '@nuxt/types'

// UNIVERSAL RENDERING MODE

const config: NuxtConfig = {
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        buildAssetsDir: '/public/',
        head: {
            htmlAttrs: { dir: 'ltr', lang: 'en' },
            link: [{ rel: 'icon', type: 'image/png', href: "/public/icon.png" }]
        },
    },
    buildModules: ['@nuxt/typescript-build'],
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        '@nuxtjs/supabase',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/image',
    ],
    colorMode: {classSuffix: ''},
}

export default config
