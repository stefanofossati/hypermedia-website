<!-- Default layout used by all the page -->
<template>
    <div class="h-screen bg-blue-300 flex flex-col">
        <header>
            <nav class="bg-emerald-700 rounded-xl shadow-inner mx-10 my-3 p-1.5">
                <menu class="flex justify-evenly items-center">
                    <li class="bg-emerald-200 hover:bg-emerald-800 rounded-xl text-emerald-700 hover:text-emerald-200 font-bold px-1.5">
                        <NuxtLink to='/'>Home</NuxtLink>
                    </li>
                    <li class="bg-emerald-200 hover:bg-emerald-800 rounded-xl text-emerald-700 hover:text-emerald-200 font-bold px-1.5">
                        <NuxtLink to='/about'>About</NuxtLink>
                    </li>
                    <li class="bg-emerald-200 hover:bg-emerald-800 rounded-xl text-emerald-700 hover:text-emerald-200 font-bold px-1.5">
                        <NuxtLink to='/contact'>Contacts</NuxtLink>
                    </li>
                </menu>
            </nav>
        </header>
        <main class="h-full">
            <slot></slot>
        </main>
        <footer class="bg-emerald-700 rounded-xl shadow-inner mx-10 my-3">
            <p class="text-center text-gray-800">Footer © 2023</p>
        </footer>
    </div>
</template>

<style>
/*.router-link-exact-active {*/
/*    color: red;*/
/*}*/
</style>