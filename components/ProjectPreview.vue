<script setup lang="ts">

const props: Readonly<{
  project_title?: string,
  short_description?: string,
  tags?: string[],
  link?: string,
  main_image?: string
}> = defineProps(['project_title', 'short_description', 'tags', 'link', 'main_image']);
</script>

<template>
  <div class="container rounded-md dark:bg-white hover:dark:bg-gray-400 bg-slate-500 mx:auto hover:bg-slate-700">

    <NuxtLink :to=props.link>
        <div>
          <p class="dark:text-black text-white font-bold text-2xl px-1 py-1 ">
            {{ props.project_title }}
          </p>
          <div class="h-40 bg-cover bg-center" :style="{ backgroundImage: `url('${props.main_image}')`}"/>

          <p class="px-1 py-1 dark:text-black text-white">{{ props.short_description }}</p>
        </div>

        <div class="flex flex-row">
          <NuxtLink :to="'/area/' + tag" v-for="tag in props.tags">
            <div class="dark:text-black text-white hover:bg-red-700 hover:text-white px-2 py-1 ">
              {{ tag}}
            </div>
          </NuxtLink>
        </div>
    </NuxtLink>



  </div>
</template>

<style>
</style>