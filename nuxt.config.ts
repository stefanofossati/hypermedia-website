import type {NuxtConfig} from '@nuxt/types'

const config: NuxtConfig = {
    app: {
        pageTransition: {name: 'slide-right', mode: 'out-in'},
    },
    buildModules: [
        '@nuxt/typescript-build',
    ],
    modules: [
        '@nuxtjs/supabase',
        '@nuxtjs/tailwindcss'
    ],
}

export default config
