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
    "text-green-600",
    "text-red-600",
    "text-yellow-600",
    "text-blue-600",
    "text-purple-600",
];

</script>

<template>
  <div>
    <section :id="props.id" class="w-screen sm:h-screen relative">
      <img :src="props.area_image" class="object-cover w-screen sm:h-screen" alt=""/>
      <NuxtLink :to="props.link" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-center">
        <h1 class="text-xl sm:text-3xl md:text-5xl font-bold font-serif italic antialiased" :class="'text-'+ props.area_color +'-600'"> {{props.area_title}} </h1>
      </NuxtLink>
    </section>
  </div>
</template>

<style>
</style>