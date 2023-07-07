import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                //primary: defaultTheme.colors.green
            },
            content:{
                'externalLink': "url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0')"
            }
        }
    },
    content: [
        `./components/**/*.{vue,js,ts}`,
        `./layouts/**/*.vue`,
        `./pages/**/*.vue`,
        `./composables/**/*.{js,ts}`,
        `./plugins/**/*.{js,ts}`,
        `./utils/**/*.{js,ts}`,
        `./App.{js,ts,vue}`,
        `./app.{js,ts,vue}`,
        `./Error.{js,ts,vue}`,
        `./error.{js,ts,vue}`,
        `./app.config.{js,ts}`,
        `!./**/*.{spec,test}.*`
    ],
    darkMode: 'class',
    safelist: [
        'hover:bg-green-800',
        'hover:bg-blue-800',
        'hover:bg-red-800',
        'hover:bg-yellow-800',
        'hover:bg-purple-800',
        'bg-green-500',
        'bg-blue-500',
        'bg-red-500',
        'bg-yellow-500',
        'bg-purple-500',
        'hover:text-green-500',
        'hover:text-blue-500',
        'hover:text-red-500',
        'hover:text-yellow-500',
        'hover:text-purple-500',
        'dark:hover:text-green-500',
        'dark:hover:text-blue-500',
        'dark:hover:text-red-500',
        'dark:hover:text-yellow-500',
        'dark:hover:text-purple-500',
    ]
}