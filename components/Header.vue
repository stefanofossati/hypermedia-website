<!-- Header of the page -->

<template>
    <header class="fixed top-0 w-screen bg-zinc-200">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div class="flex lg:flex-1">
                <NuxtLink to='/' class="-m-1.5 p-1.5">
                    <span class="sr-only">StartMeUp</span>
                    <img class="h-20 w-auto" src="../assets/LogoDraft.svg" alt="StartMeUp logo"/>
                </NuxtLink>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex item-center justify-center rounded-md p-2.5 text-stone-900"
                        @click="menuOpen = true">
                    <span class="sr-only">Main Menu</span>
                </button>
            </div>

            <PopoverGroup class="hidden lg:flex lg:gap-x-15">
                <Popover class="relative">
                    <PopoverButton class="flex items-center gap-x-1 text-sm font-bold leading-5 text-stone-900">
                        <NuxtLink>Areas</NuxtLink>
                        <img src="../assets/chevron-down-solid.svg" class="h-5 w-5 flex-none" aria-hidden="true"/>
                    </PopoverButton>
                </Popover>
            </PopoverGroup>


        </nav>
    </header>
</template>
<style>
/*.router-link-exact-active {*/
/*    color: red;*/
/*}*/
</style>
<script setup lang="ts">
import {
    Popover,
    PopoverButton,
    PopoverGroup,
} from '@headlessui/vue'

import {ref} from 'vue'
const menuOpen = ref(false)

</script>