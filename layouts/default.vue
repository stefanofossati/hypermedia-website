<!-- Default layout used by all the page -->
<template>
    <div class="h-full bg-blue-300 flex flex-col">
        <Header/>
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