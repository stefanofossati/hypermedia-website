<template>
  <main>
      <h1 class="text-black text-2xl font-bold">All Projects</h1>
      <div class="grid grid-cols-4 gap-4 place-content-center bg-gray-100 px-2 py-2">
          <ProjectPreview v-for="pj in projects" :project_title = "pj.project_title" :link = "'/projects/' + pj.id" :tags = "pj.tags"/>
      </div>
  </main>
</template>

<script setup lang="ts">

interface project{
    id: number,
    project_title: string,
    project_description: string,
    tags: string[],
}

import {useFetch} from "~/.nuxt/imports";

const {data: projects} =  await useFetch('api/projects', {method: "GET"}); // need to specify the type, we can use typescript for this part, strange behavior when the page is refreshed

</script>

<style>
</style>