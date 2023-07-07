<script setup lang="ts">

const props: Readonly<{
  area?: string,
  area_title?: string,
  area_image?: string,
  link?: string,
  area_color?: string,
  id?: string;
}> = defineProps(['area', 'area_title', 'area_image', 'link', 'area_color', 'id']);

</script>

<template>
  <div>
    <section :id="props.id" class="sm:w-screen sm:h-screen snap-start relative">
      <img :src="props.area_image" class="object-cover w-screen sm:h-full" alt=""/>
      <NuxtLink :to="props.link" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-center">
        <h1 class="text-6xl font-bold font-serif italic antialiased" :class="'text-'+ props.area_color +'-500'"> {{props.area_title}} </h1>
      </NuxtLink>
    </section>
  </div>
</template>

<style>
</style>