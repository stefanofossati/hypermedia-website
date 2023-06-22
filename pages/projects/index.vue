<template>
  <div class="flex flex-col items-center text-center">
    <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold m-10 dark:text-white ">
      All Projects
    </h1>
    <div class="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 col-span-1 place-content-center px-2 py-2">
      <ProjectPreview v-for="pj in projects"
                      :project_title="pj.project_title"
                      :short_description="pj.short_description"
                      :link="'/projects/' + pj.project_title"
                      :tags="pj.tags"
                      :main_image="pj.main_image"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useFetch} from "nuxt/app";
import {Project} from "~/model/Types";

//@ts-ignore
const {data: projects, error}: { data: Project[] } = await useFetch(
    '/api/projects',
    {
      method: "GET",
    }
);


</script>

<style scoped>

</style>