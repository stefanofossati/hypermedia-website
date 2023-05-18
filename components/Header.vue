<!-- Header of the page -->

<template>
    <header class="fixed top-0 w-screen">
        <nav class="bg-gray-800">
            <div class="max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-28 ">
                    <div class="flex-1 sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center -mt-4">
                            <img class="block h-36 ml-32 w-auto mr-auto cursor-pointer" src="../assets/LogoDraft.svg" alt="StartMeUp">
                            <div class="flex space-x-12 sm:ml-6 sm:block -mr-32">
                                <NuxtLink to="" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold cursor-pointer">Areas</NuxtLink>
                                <NuxtLink to="" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold cursor-pointer">Projects</NuxtLink>
                                <NuxtLink to="" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold cursor-pointer">...</NuxtLink>
                                <NuxtLink to="" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold cursor-pointer">About Us</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<style>
    *{
        font-family: 'Roboto', sans-serif;
    }
/*.router-link-exact-active {*/
/*    color: red;*/
/*}*/
</style>

<script setup lang="ts">
</script>