<script setup lang="ts">

const props: Readonly<{
  area_title?: string,
  area_image?: string,
  link?: string,
  color?: string,
  id?: string;
}> = defineProps(['area_title', 'area_image', 'link', 'color', 'id']);
</script>

<template>
  <div>
    <section :id="props.id" class="w-screen h-screen snap-start relative">
      <img :src="props.area_image" class="object-cover w-screen h-full" alt=""/>
      <NuxtLink :to="props.link" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
        <h1 class="text-6xl font-bold font-serif italic antialiased">{{props.area_title}}</h1></NuxtLink>
    </section>
  </div>
</template>

<style>

</style>