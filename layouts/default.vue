<template>
  <div> <!-- Default layout used by all the page -->
    <main class="flex flex-col bg-gray-200 dark:bg-gray-950 min-h-screen">
      <div class="h-16 lg:h-32 w-full bg-white"/>
      <Header class="flex-none"/>
      <slot class="flex-auto"/>
      <Footer class="flex-auto"/>
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

</script>