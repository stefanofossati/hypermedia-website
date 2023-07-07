<script setup lang="ts">
import { Project, AreaProjectPreview} from "~/model/Types";

const props: Readonly<{
  projects_area?: Project[],
  area?: AreaProjectPreview,
}> = defineProps(['projects_area', 'area']);
</script>

<template>
  <div>
    <details class="text-black dark:text-white text-2xl sm:text-4xl w-full" open>
      <summary class="border-b-2 border-slate-500">
        <NuxtLink :to="'areas/' + props.area?.area" class="ml-2 inline-flex">
          <div
              class="text-2xl sm:text-4xl text-black dark:text-white font-bold h-fit py-4 text-center mt-2"
              :class="'hover:text-'+props.area?.area_color+'-500 dark:hover:text-'+props.area?.area_color+'-500'">
            {{ props.area.area_title }}
          </div>
        </NuxtLink>
      </summary>
      <div class="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center px-2 py-4">
        <ProjectPreview v-for="pj in props.projects_area"
                        :project_title="pj.project_title"
                        :short_description="pj.short_description"
                        :link="'/projects/' + pj.project_title"
                        :tags="pj.areas"
                        :see_tags="false"
                        :main_image="pj.main_image"/>
      </div>
    </details>
  </div>
</template>

<style scoped>

</style>