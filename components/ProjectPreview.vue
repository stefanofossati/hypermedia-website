<script setup lang="ts">

const props: Readonly<{
  project_title?: string,
  tags?: string[],
  link?: string
}> = defineProps(['project_title', 'tags', 'link']);
</script>

<template>
  <div class="container rounded-md border-2 border-white dark:border-gray-900 mx:auto">
    <NuxtLink :to="props.link">
      <img src="../assets/i3lab.png" alt="image" class="h-32 w-auto"/>
    </NuxtLink>
    <NuxtLink :to="props.link">
      <button class="text-black font-bold text-2xl px-1 py-1 hover:bg-blue-700 hover:text-white ">
        {{ props.project_title }}
      </button>
    </NuxtLink>
    <div class="grid grid-cols-5">
      <button class="hover:bg-red-700 hover:text-white px-1 py-1" v-for="tag in props.tags">
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<style>
</style>