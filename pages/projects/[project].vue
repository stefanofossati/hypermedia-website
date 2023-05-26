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
          <div class="sm:hidden flex-col py-1 px-1 bg-yellow-800 relative">
              <button @click="hide_function" class="absolute top-0 right-0">
                  <svg id="button_info" viewBox="0 -960 960 960" class="dark:text-white text-black fill-current h-16 w-16">
                      <path d="M480-357q-6 0-11-2t-10-7L261-564q-8-8-7.5-21.5T262-607q10-10 21.5-8.5T304-606l176 176 176-176q8-8 21.5-9t21.5 9q10 8 8.5 21t-9.5 22L501-366q-5 5-10 7t-11 2Z"></path>

                  </svg>
              </button>
              <ProjectsProjectInfo :info_supervisor="pj.supervisor" :info_budget="pj.budget" :info_start_date="pj.start_date" :info_end_date="pj.end_date"/>


          </div>
          <div class="sm:col-span-3 sm:box-content sm:sticky sm:inset-y-0 sm:py-1 left-0 bg-blue-100 ">
              <h2 class="text-3xl text-black ">
                  Description
              </h2>
              <p class="text-1xl text-black">
                  {{ pj.project_description }}
              </p>
          </div>
          <div class="sm:col-span-1 sm:sticky sm:inset-y-0 sm:right-0 sm:flex sm:flex-col border-l-2 border-slate-700 hidden bg-red-500">
              <ProjectsProjectInfo :info_supervisor="pj.supervisor" :info_budget="pj.budget" :info_start_date="pj.start_date" :info_end_date="pj.end_date"/>
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
    const button_info: HTMLElement | null = document.getElementById("button_info")!;
    if (div_project.style.display !== "none") {
        div_project.style.display = "none";
        button_info.style.transform = "rotate(0deg)";
    } else {
        div_project.style.display = "block";
        button_info.style.transform = "rotate(180deg)";
    }
}
</script>

<style scoped>
.page-enter-active {
  animation: bounce-in 0.5s;
}

.page-leave-active {
  animation: bounce-out 0.5s;
}
</style>