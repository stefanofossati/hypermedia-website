<script setup lang="ts">

const props: Readonly<{
  project_title?: string,
  short_description?: string,
  tags?: AreaProjectPreview[],
  see_tags?: boolean;
  link?: string,
  main_image?: string
}> = defineProps(['project_title', 'short_description', 'tags', 'see_tags', 'link', 'main_image']);


</script>

<template>
  <div>
    <NuxtLink :to="'/projects/' + props.project_title">
      <div class="h-52 md:h-96 relative bg-center bg-cover rounded-lg hover:border-8 hover:border-slate-500 transition-all duration-200 ease-linear" :style="'background-image: url(' + props.main_image + ')'"  :id="props.project_title">
        <div v-if="props.see_tags" class="absolute top-0 right-0 flex flex-col">
          <NuxtLink :to="'/areas/' + tag.area" v-for="tag in props.tags" >
            <div class="dark:text-black text-white dark:hover:text-white px-2 py-1 rounded-lg"
                  :class="'bg-'+ tag.area_color +'-500 '+'hover:bg-'+tag.area_color+'-800'">
              {{ tag.area_title}}
            </div>
          </NuxtLink>
        </div>
        <div class="absolute bottom-0 px-4 py-3 w-full h-12 md:h-28 overflow-hidden backdrop-blur-xl rounded-b-lg">
          <h1 class="text-black dark:text-white font-semibold text-xl md:text-3xl ml-0.5 mb-0.5 md:ml-2 md:mb-2"> {{props.project_title}} </h1>
          <p class="text-black dark:text-white ml-2">{{props.short_description}}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
</style>