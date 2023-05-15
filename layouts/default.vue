<!-- Default layout used by all the page -->
<template>
    <main>
        <slot></slot>
        <footer class="relative bottom-0 bg-green-500 shadow-inner">
            <p class="text-center text-green-200">Footer © 2023</p>
        </footer>
    </main>
    <Header></Header>

</template>

<style>
/*.router-link-exact-active {*/
/*    color: red;*/
/*}*/
</style>
<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>