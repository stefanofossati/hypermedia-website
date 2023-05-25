<!-- Default layout used by all the page -->
<template>
  <main class="flex flex-col">
    <Header class="flex-none"/>
    <div class="flex-none bg-white dark:bg-gray-900 h-1/7"/> <!-- FIXME: barra sotto l'header -->
    <slot class="flax-auto"/>
    <Footer class="flex-none"/>
  </main>


</template>

<style>
/*.router-link-exact-active {*/
/*    color: red;*/
/*}*/
/*.slide-left-enter-active,
.slide-left-leave-active,*/
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}

/*.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}*/
.slide-right-enter-from {
  /*opacity: 0;*/
  transform: translate(-50px, 0);
}

.slide-right-leave-to {
  /*opacity: 0;*/
  transform: translate(50px, 0);
}

</style>
<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>