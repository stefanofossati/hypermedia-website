<template>
  <div class = "container border-gray-200 bg-blue-100">
      <img src = "../assets/i3lab.png" alt = "image" class="h-32 w-auto"/>
      <NuxtLink :to = "link">
          <button class="text-black font-bold text-2xl px-1 py-1 hover:bg-blue-700 hover:text-white ">
              {{project_title}}
          </button>
      </NuxtLink>
      <div class="grid grid-cols-5" >
          <button class="hover:bg-red-700 hover:text-white" v-for="tag in tags" >
              {{tag}}
          </button>
      </div>

  </div>
</template>

<script setup lang="ts">
  const props = defineProps(['project_title', 'image', 'link', 'tags'])
</script>

<style>
</style>