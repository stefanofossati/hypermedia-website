<template>
  <div> <!-- Default layout used by all the page -->
    <main class="flex flex-col bg-gray-200 dark:bg-gray-950 min-h-screen">
      <div class="grow-0 h-20 lg:h-28 w-full dark:bg-gray-950" id="topBar"/>
      <Header class="grow-0"/>
      <slot/>
      <Footer class="grow-0"/>
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
</style>

<script setup lang="ts">

</script>