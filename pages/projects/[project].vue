<template>
  <div>

    <div class="relative inset-0 w-screen bg-gray-100"> <!-- Presentation -->
      <img src="../../assets/i3lab.png" alt="i3lab" class="h-1/4"/>
      <h1 class="absolute text-5xl text-black top-5 left-5">
        {{ pj.project_title }}
      </h1>
      <h3 class="absolute text-2xl bottom-5 left-5">
        Breadcrumbs
      </h3>


      </div>
      <div class="sm:grid sm:grid-cols-4 sm:gap-3 py-3 px-5 block">
          <div class="sm:hidden flex-col py-1 px-1 bg-yellow-100">
              <button @click="hide_function">
                  Project Info
              </button>
              <div id="project_infos" class="project-infos-div flex-col bg-red-400">
                  <p>
                      Project Budget {{pj.budget}}
                  </p>
                  <p>
                      ddddd
                  </p>
              </div>

          </div>
          <div class="sm:col-span-3 sm:box-content sm:sticky sm:inset-y-0 sm:py-1 left-0 bg-blue-100 ">
              <h2 class="text-3xl text-black ">
                  Description
              </h2>
              <p class="text-1xl text-black">
                  {{ pj.project_description }}
              </p>
          </div>
          <div class="sm:col-span-1 sm:sticky sm:inset-y-0 sm:right-0 sm:flex hidden bg-red-100">
              <p>Projects Info</p>
          </div>
      </div>
      <div>
          <div class="bg-blue-600 px-2 py-2">
              <h2 class="text-3xl text-black ">
                  Project Images
              </h2>
          </div>
          <div class = "grid grid-cols-5 gap-3">
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

  </div>
</template>

<script setup lang="ts">
import {useRoute, useFetch} from "nuxt/app";
import {Project} from "~/model/Types";

const project_title: string = useRoute().params.project as string;

//@ts-ignore
const {data: pj, error}: { data: Project } = await useFetch(
    "/api/projects/" + project_title,
    {
      method: "GET",
    }
);

function hide_function() {
    const div_project: HTMLElement | null = document.getElementById("project_infos")!;
    if (div_project.style.display !== "none") {
        div_project.style.display = "none";
    } else {
        div_project.style.display = "block";
    }
}
</script>

<style scoped>
</style>