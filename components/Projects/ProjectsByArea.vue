<script setup lang="ts">
import {Project} from "~/model/Types";

const props: Readonly<{
  projects_area?: Project[],
  area?: string,
}> = defineProps(['projects_area', 'area']);
</script>

<template>
  <div>
    <div class="text-2xl">
      {{ props.area}}
    </div>
    <div class ="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 col-span-1 place-content-center px-2 py-2">
      <ProjectPreview v-for="pj in props.projects_area"
                      :project_title="pj.project_title"
                      :short_description="pj.short_description"
                      :link="'/projects/' + pj.project_title"
                      :tags="pj.areas"
                      :main_image="pj.main_image"/>
    </div>
  </div>
</template>

<style scoped>

</style>