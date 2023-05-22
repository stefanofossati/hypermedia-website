<template>
  <main>
    <div class="relative inset-0 w-screen bg-gray-100"> <!-- Presentation -->
      <img src="../../assets/i3lab.png" alt="i3lab" class="h-1/4"/>
      <h1 class="absolute text-5xl text-black top-5 left-5">
        {{ pj.project_title }}
      </h1>
      <h3 class="absolute text-2xl bottom-5 left-5">
        Breadcrumbs
      </h3>


    </div>
    <div class="grid grid-cols-4 gap-3 py-3 px-5">
      <div class=" col-span-3 box-content sticky inset-y-0 left-0 bg-blue-100 py-1">
        <h2 class="text-3xl text-black ">
          Description
        </h2>
        <p class="text-1xl text-black">
          {{ pj.project_description }}
        </p>
      </div>
      <div class="col-span-1 sticky inset-y-0 right-0 bg-red-100">
        <p>Projects Info</p>
      </div>
    </div>
    <div>
      <div class="bg-blue-600 px-2 py-2">
        <h2 class="text-3xl text-black ">
          Project Images
        </h2>
      </div>
      <div class="grid grid-cols-5 gap-3">
        <div>
          <img src="../../assets/i3lab.png" alt="i3lab" class="w-auto"/>
        </div>
        <div>
          <img src="../../assets/i3lab.png" alt="i3lab" class="w-auto"/>
        </div>
        <div>
          <img src="../../assets/i3lab.png" alt="i3lab" class="w-auto"/>
        </div>
        <div>
          <img src="../../assets/i3lab.png" alt="i3lab" class="w-auto"/>
        </div>
        <div>
          <img src="../../assets/i3lab.png" alt="i3lab" class="w-auto"/>
        </div>

      </div>
    </div>

  </main>
</template>

<script setup lang="ts">
import {useRoute, useFetch} from "nuxt/app";
import {Project} from "~/model/Types";

const project_title: string = useRoute().params.project as string;
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file

const {data: pj, error} = await useFetch<{data: Project}>(
    "/api/projects/" + project_title,
    {
      method: "GET",
    }
);
</script>

<style scoped>
</style>