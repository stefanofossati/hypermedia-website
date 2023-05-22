<template>
  <main >
      <h1 class="text-black text-2xl font-bold">All Projects</h1>
      <div class="grid grid-cols-4 gap-4 place-content-center bg-gray-100 px-2 py-2">
          <ProjectPreview v-for="pj in projects" :project_title = "pj.project_title" :link = "'/projects/' + pj.project_title" :tags = "pj.tags"/>
      </div>
  </main>
</template>

<script setup lang="ts">
  import {useFetch} from "~/.nuxt/imports";
  import {project} from "~/models/project";


  const {data: projects} =  await useFetch<project[]>('api/projects', {method: "GET"}); // need to specify the type, we can use typescript for this part, strange behavior when the page is refreshed

</script>

<style>
</style>