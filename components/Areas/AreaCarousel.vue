<script setup lang="ts">

const props: Readonly<{
  project_title?:string,
  main_image?:string;
}> = defineProps(['project_title', 'main_image']);

</script>

<template>
    <!-- Items -->
    <NuxtLink :to="'/projects/' + props.project_title">
      <div class="h-96 relative bg-center bg-cover" :style="'background-image: url(' + props.main_image + ')'">
        <div class="absolute bottom-0 px-4 py-3 w-full backdrop-blur-lg rounded-lg">
          <h1 class="text-black dark:text-white font-semibold text-4xl ml-4"> {{props.project_title}} </h1>
<!--          <p class="text-black dark:text-white ml-4">-->
<!--            Mario è un davvero caro uaglione, ma quando entrava nella stanza partiva sempre una musica napoletana...-->
<!--          </p>-->
        </div>
      </div>
    </NuxtLink>
</template>

<style scoped>
</style>