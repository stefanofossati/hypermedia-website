<script setup lang="ts">

const props: Readonly<{
  project_tile?:string,
  main_image?:string;
}> = defineProps(['project_title', 'main_image']);

</script>

<template>
    <!-- Items -->
    <NuxtLink :to="'/projects/' + props.project_tile">
      <div class="h-96 relative bg-center bg-cover" style="background-image: url(https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg)">
        <div class="absolute bottom-0 px-4 py-3 w-full backdrop-blur-lg rounded-lg">
          <h1 class="text-white font-semibold text-4xl ml-4"> MARIOOOO </h1>
          <p class="text-gray-200 ml-4">
            Descrizione vera di quello che devo scrivere.
          </p>
        </div>
      </div>
    </NuxtLink>
</template>

<style scoped>
</style>