<script setup lang="ts">

const props: Readonly<{
  area_title?: string,
  area_image?: string[],
  id?: string,
  area_color?: string,
  area_description?: string;
}> = defineProps(['area_title', 'area_image', 'area_color', 'area_description', 'id']);

</script>

<template>
  <div>
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Items -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
        <img :src="props.area_image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>