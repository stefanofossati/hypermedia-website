import type {NuxtConfig} from '@nuxt/types'

const config: NuxtConfig = {
  buildModules: [
      '@nuxt/typescript-build',

  ],
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss'
  ]
}

export default config
