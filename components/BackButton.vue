<script setup lang="ts">
const props: Readonly<{
  route?: string, // the route to go back to
  label?: string  // the label to display
}> = defineProps(['route', 'label']);
</script>

<template>
  <div class="p-3"> <!-- back button with a left arrow and a label on larger screen sizes -->
    <NuxtLink :to="route"
              class="flex flex-row items-center justify-center rounded-xl bg-white dark:bg-gray-900 p-1.5 w-max text-xl sm:text-2xl md:text-3xl dark:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-7 sm:w-7 md:h-9 md:w-9 dark:text-white"
           viewBox="0 0 20 20"
           fill="currentColor">
        <path fill-rule="evenodd"
              d="M10.707 3.293a1 1 0 010 1.414L6.414 9H16a1 1 0 110 2H6.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
              clip-rule="evenodd"/>
      </svg>
      <span class="hidden xl:inline-block">{{ label }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>