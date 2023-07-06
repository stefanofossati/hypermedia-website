<script setup lang="ts">

const props: Readonly<{
  projects_area?: Project[],
  area?: AreaProjectPreview,
}> = defineProps(['projects_area', 'area']);
</script>

<template>
  <div>
    <NuxtLink :to="'areas/' + props.area.area">
      <div class="text-4xl text-black dark:text-white font-bold border-b-2 border-slate-500 h-fit py-4 text-center mt-2" :class="'hover:text-'+props.area?.area_color+'-500 dark:hover:text-'+props.area?.area_color+'-500'">
        {{ props.area.area_title}}
      </div>
    </NuxtLink>
    <div class ="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center px-2 py-4">
      <ProjectPreview v-for="pj in props.projects_area"
                      :project_title="pj.project_title"
                      :short_description="pj.short_description"
                      :link="'/projects/' + pj.project_title"
                      :tags="pj.areas"
                      :see_tags="false"
                      :main_image="pj.main_image"/>
    </div>
  </div>
</template>

<style scoped>

</style>