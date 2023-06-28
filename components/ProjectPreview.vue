<script setup lang="ts">

import {AreaProjectPreview} from "~/model/Types";

const props: Readonly<{
  project_title?: string,
  short_description?: string,
  tags?: AreaProjectPreview[],
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
          <NuxtLink :to="'/area/' + tag.area_title" v-for="tag in props.tags" >
            <div class="dark:text-black text-white dark:hover:text-white px-2 py-1" :class="'hover:bg-'+tag.area_color+'-500'">
              {{ tag.area_title}}
            </div>
          </NuxtLink>
        </div>
    </NuxtLink>



  </div>
</template>

<style>
</style>