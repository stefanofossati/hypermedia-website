<script setup lang="ts">
const props: Readonly<{
  project_title?: string,
  short_description?: string,
  tags?: AreaProjectPreview[],
  see_tags?: boolean,
  link?: string,
  most_rel?: boolean,
  main_image?: string;
}> = defineProps(['project_title', 'short_description', 'tags', 'see_tags', 'link', 'most_rel', 'main_image']);
</script>

<template>
  <div>
    <NuxtLink :to="'/projects/' + props.project_title">
      <div
          class="h-52 md:h-96 relative bg-center bg-cover rounded-lg hover:border-8 hover:border-slate-500 transition-all duration-200 ease-linear"
          :style="'background-image: url(' + props.main_image + ')'" :id="props.project_title">
        <div v-if="props.see_tags" class="absolute top-0 right-0 flex flex-col">
          <NuxtLink :to="'/areas/' + tag.area" v-for="tag in props.tags">
            <div class="dark:text-black text-white dark:hover:text-white px-2 py-1 rounded-lg"
                 :class="'bg-'+ tag.area_color +'-500 '+'hover:bg-'+tag.area_color+'-800'">
              {{ tag.area_title }}
            </div>
          </NuxtLink>
        </div>
        <!-- Blur part with title star and description -->
        <div class="absolute bottom-0 z-20 px-4 py-3 w-full h-12 md:h-28 overflow-hidden backdrop-blur-2xl rounded-b-lg">
          <div class="flex flex-row justify-between items-center">
            <h1 class="text-black dark:text-white font-semibold text-xl md:text-2xl lg:text-3xl mb-0.5 md:mb-1">
              {{ props.project_title }} </h1>
            <div title="Most relevant project">
              <svg v-if="props.most_rel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                   class="w-4 h-4 md:w-8 lg:h-8 fill-yellow-400 stroke-black stroke-1">
                <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
          <p class="text-black dark:text-white ml-0.5 text-lg md:text-xl">{{ props.short_description }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
</style>