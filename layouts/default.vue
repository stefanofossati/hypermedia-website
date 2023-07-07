<!-- Default layout used by all the page -->
<template>
  <div>
    <main class="flex flex-col bg-gray-200 dark:bg-gray-950">
      <div class="h-20 lg:h-28 w-full dark:bg-gray-950" id="topBar"/>
      <Header class="flex-none"/>
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
  opacity: 0;
  scale: 0.8;
}

.page-leave-to {
  opacity: 0;
  scale: 0.8;
}

html{
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
</style>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>