<!-- Default layout used by all the page -->
<template>
    <main class="flex flex-col ">
        <Header class=flex-none></Header>
        <slot class="flax-auto"></slot>
        <Footer class="flex-none"></Footer>
    </main>


    
</template>

<style>
    html{
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
/*.router-link-exact-active {*/
/*    color: red;*/
/*}*/
</style>
<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>