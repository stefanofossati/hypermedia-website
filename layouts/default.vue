<!-- Default layout used by all the page -->
<template>
  <div>
    <main class="flex flex-col bg-gray-200 dark:bg-gray-950">
      <Header class="flex-none"/>
      <div class="flex-none bg-white dark:bg-gray-900 h-28"/> <!-- FIXME: barra sotto l'header -->
      <slot class="flax-auto"/>
      <Footer class="flex-none"/>
    </main>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from {
  transform: translate(100%, 0);
  scale: 0.8;
}

.page-leave-to {
  transform: translate(-100%, 0);
  scale: 0.8;
}
</style>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>