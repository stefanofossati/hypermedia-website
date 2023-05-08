<!-- Default layout used by all the page -->
<template>
    <div class="h-screen bg-blue-300 flex flex-col">
        <header>
            <nav class="bg-green-500 rounded-xl shadow-inner mx-10 my-3 p-1.5">
                <menu class="flex justify-evenly items-center">
                    <li class="bg-green-200 hover:bg-green-700 rounded-xl text-green-700 hover:text-green-200 font-bold px-1.5">
                        <NuxtLink to='/'>Home</NuxtLink>
                    </li>
                    <li class="bg-green-200 hover:bg-green-700 rounded-xl text-green-700 hover:text-green-200 font-bold px-1.5">
                        <NuxtLink to='/about'>About</NuxtLink>
                    </li>
                    <li class="bg-green-200 hover:bg-green-700 rounded-xl text-green-700 hover:text-green-200 font-bold px-1.5">
                        <NuxtLink to='/contact'>Contact</NuxtLink>
                    </li>
                </menu>
            </nav>
        </header>
        <main class="h-full">
            <slot></slot>
        </main>
        <footer class="bg-green-500 rounded-xl shadow-inner mx-10 my-3">
            <p class="text-center text-green-200">Footer © 2023</p>
        </footer>
    </div>
</template>

<style>
/*.router-link-exact-active {*/
/*    color: red;*/
/*}*/
</style>