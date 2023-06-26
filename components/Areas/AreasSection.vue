<script setup lang="ts">

const props: Readonly<{
  area_title?: string,
  area_image?: string,
  link?: string,
  id?: string;
}> = defineProps(['area_title', 'area_image', 'link', 'id']);
</script>

<template>
  <div>
    <section :id="props.id" class="w-screen h-screen snap-start">
      <img :src="props.area_image" class="object-cover w-screen h-full"/>
      <NuxtLink :to="props.link">{{props.area_title}}</NuxtLink>
    </section>
  </div>
</template>

<style>
</style>