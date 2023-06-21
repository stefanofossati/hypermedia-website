<script setup lang="ts">
const props: Readonly<{
  route?: string,
  label?: string
}> = defineProps(['route', 'label']);

</script>

<template>
  <div class="m-5">
    <NuxtLink :to="route"
              class="flex flex-row items-center justify-center rounded-xl bg-gray-600 p-1.5 mb-10 w-fit text-xl sm:text-2xl md:text-3xl text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-7 sm:w-7 md:h-9 md:w-9 text-gray-300"
           viewBox="0 0 20 20"
           fill="currentColor">
        <path fill-rule="evenodd"
              d="M10.707 3.293a1 1 0 010 1.414L6.414 9H16a1 1 0 110 2H6.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
              clip-rule="evenodd"/>
      </svg>
      <span class="hidden xl:block">{{ label }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>