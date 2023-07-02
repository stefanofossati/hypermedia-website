<template>
  <div >
    <div class="flex flex-row w-full items-center justify-between">
      <div id="id_0"  class="flex-1" v-on:click="selection($event)">
        <h1 class="text-xl sm:text-2xl md:text-4xl font-bold m-10
                   text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-500
                   cursor-pointer text-right">All Projects</h1>
      </div>
      <div id="id_1" class="flex-1 grow"
           v-on:click="selection($event)">
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold m-10
                   text-black underline underline-offset-8 dark:text-white dark:hover:text-gray-500 border-l-2 border-r-2 border-slate-500
                   cursor-pointer text-center">Most Relevant</h1>
      </div>
      <div id="id_2"  class="flex-1"
           v-on:click="selection($event)">
        <h1 class="text-xl sm:text-2xl md:text-4xl font-bold m-10
                   text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-500
                   cursor-pointer text-left">Projects by area</h1>
      </div>
    </div>

    <div id="most_relevant" class="translate-x-1/4">
      <div class="relative w-1/2 flex flex-col place-content-center px-2 py-4 gap-4">
        <div class="relative rounded-lg mx:auto" v-for="most_pj in most_relevant(projects)">
            <ProjectPreview :project_title="most_pj.project_title"
                            :short_description="most_pj.short_description"
                            :link="'/projects/' + most_pj.project_title"
                            :tags="most_pj.areas"
                            :main_image="most_pj.main_image"
                            :see_tags="true"/>
        </div>
      </div>
    </div>

    <div id="all_projects" class="px-10 hidden">
      <div class="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 col-span-1 place-content-center px-2 py-2">
        <ProjectPreview v-for="pj in projects"
                        :project_title="pj.project_title"
                        :short_description="pj.short_description"
                        :link="'/projects/' + pj.project_title"
                        :tags="pj.areas"
                        :main_image="pj.main_image"/>
      </div>
    </div>

    <div id="by_area" class="px-10 hidden">
      <ProjectsByArea v-for="area in take_areas(projects)"
                      :area="area"
                      :projects_area="projects_by_area(projects, area.area_title)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useFetch} from "nuxt/app";
import {AreaProjectPreview, Project} from "~/model/Types";

//@ts-ignore
const {data: projects, error}: { data: Project[] } = await useFetch(
    '/api/projects',
    {
      method: "GET",
    }
);

function most_relevant(projects: Project[]){
  const most_relevant: Project[] = [];
  for(let i = 0; i < projects.length; i++){
    if(projects[i].most_relevant == 1){
      most_relevant.push(projects[i]);
    }
  }
  return most_relevant;
}

function take_areas(projects: Project[]){
  const areas: string[] = [];
  const areas_info: AreaProjectPreview[] = [];
  for(let i = 0; i < projects.length; i++){
    for(let j = 0; j < projects[i].areas.length; j++){
      if(!areas.includes(projects[i].areas[j].area_title)){
        areas.push(projects[i].areas[j].area_title);
        areas_info.push(projects[i].areas[j]);
      }
    }
  }
  return areas_info;
}

function projects_by_area(projects: Project[], area: string){
  const projects_area: Project[] = [];
  for(let i = 0; i < projects.length; i++){
    for(let j = 0; j < projects[i].areas.length; j++){
      if(projects[i].areas[j].area_title == area){
        projects_area.push(projects[i]);
      }
    }
  }
  return projects_area;
}


function selection(event: any) {
  const id_click: HTMLElement | null = document.getElementById(event.currentTarget.id)! as HTMLElement;
  const id_0: HTMLElement | null = document.getElementById("id_0")! as HTMLElement
  const id_1: HTMLElement | null = document.getElementById("id_1")! as HTMLElement;
  const id_2: HTMLElement | null = document.getElementById("id_2")! as HTMLElement;

  const all_projects: HTMLElement | null = document.getElementById("all_projects")! as HTMLElement;
  const most_relevant: HTMLElement | null = document.getElementById("most_relevant")! as HTMLElement;
  const by_area: HTMLElement | null = document.getElementById("by_area")! as HTMLElement;


  if(id_click.innerText === "All Projects") {
    all_projects.className = 'px-10';
    most_relevant.className = 'px-10 hidden';
    by_area.className = 'px-10 hidden';
    id_0.innerText = "Most Relevant";
    id_1.innerText = "All Projects";
    id_2.innerText = "Projects by area";
  }else if(id_click.innerText === "Most Relevant") {
    all_projects.className = 'px-10 hidden';
    most_relevant.className = 'px-10';
    by_area.className = 'px-10 hidden';
    id_0.innerText = "Projects by area";
    id_1.innerText = "Most Relevant";
    id_2.innerText = "All Projects";
  }else if(id_click.innerText === "Projects by area") {
    all_projects.className = 'px-10 hidden';
    most_relevant.className = 'px-10 hidden';
    by_area.className = 'px-10';
    id_0.innerText = "All Projects";
    id_1.innerText = "Projects by area";
    id_2.innerText = "Most Relevant";
  }

}

</script>

<style scoped>

</style>