<template>
  <div>
    <h1 class="text-black text-2xl font-bold">All Projects</h1>
    <div class="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 col-span-1  place-content-center bg-gray-100 px-2 py-2">
      <ProjectPreview v-for="pj in projects"
                      :project_title="pj.project_title"
                      :link="'/projects/' + pj.project_title"
                      :tags="pj.tags"/>
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

<style>
</style>