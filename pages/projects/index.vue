<template>
  <main>
      <p class = "font-bold  ">All Projects</p>
      <div id="main_projs">
          <ProjectPreview v-for="pj in projects" :project_title = "pj.project_title" :link = "'/projects/' + pj.id" />
      </div>
  </main>
</template>

<script setup lang="ts">

interface project{
    id: number,
    project_title: string,
    project_description: string,
}

import {useFetch} from "~/.nuxt/imports";

const {data: projects} =  await useFetch('api/projects', {method: "GET"}); // need to specify the type, we can use typescript for this part, strange behavior when the page is refreshed


</script>

<style>
  #main_projs {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-content: flex-start;
      gap: 20px;
  }
</style>