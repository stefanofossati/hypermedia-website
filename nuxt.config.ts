import type {NuxtConfig} from '@nuxt/types'
import * as process from "process";

const config: NuxtConfig = {
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
    },
    buildModules: ['@nuxt/typescript-build'],
    modules: [
        '@nuxtjs/supabase',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
    ],
    colorMode: {classSuffix: ''},
}

export default config
