<script setup lang="ts">

const props: Readonly<{
  area?: string,
  area_title?: string,
  area_image?: string,
  link?: string,
  area_color?: string,
  id?: string;
}> = defineProps(['area', 'area_title', 'area_image', 'link', 'area_color', 'id']);

const colors = [
    "text-green-500",
    "text-red-500",
    "text-yellow-500",
    "text-blue-500",
    "text-purple-500",
    "hover:text-green-800",
    "hover:text-red-800",
    "hover:text-yellow-800",
    "hover:text-blue-800",
    "hover:text-purple-800",
];

</script>

<template>
  <div>
    <section :id="props.id" class="w-screen sm:h-screen relative">
      <img :src="props.area_image" class="object-cover w-screen sm:h-screen" alt="image of the area"/>
      <NuxtLink :to="props.link" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 class="text-xl sm:text-3xl md:text-5xl font-bold font-serif italic antialiased cursor-pointer"
            :class="'text-'+ props.area_color +'-500 hover:text-'+ props.area_color +'-800'"> {{props.area_title}} </h1>
      </NuxtLink>
    </section>
  </div>
</template>

<style>
</style>