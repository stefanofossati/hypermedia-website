<template>
  <div>
    <div class="flex flex-row w-full items-center justify-between border-slate-500 border-b-2">
      <div id="id_0_div" class="flex-1" >
        <h1 id="id_0" v-on:click="selection($event)" class="text-xl sm:text-2xl md:text-4xl font-bold sm:m-10 m-3
                   text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-500
                   cursor-pointer text-center">All Projects</h1>
      </div>
      <div id="id_1_div"  class="flex-1 grow" >
        <h1 id="id_1" v-on:click="selection($event)" class="text-2xl sm:text-3xl md:text-5xl font-bold sm:m-10 m-3
                   text-black underline underline-offset-8 dark:text-white dark:hover:text-gray-500 border-l-2 border-r-2 border-slate-500
                   cursor-pointer text-center">Most Relevant</h1>
      </div>
      <div id="id_2_div" class="flex-1" >
        <h1 id="id_2"  v-on:click="selection($event)" class="text-xl sm:text-2xl md:text-4xl font-bold sm:m-10 m-3
                   text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-500
                   cursor-pointer text-center">Projects by area</h1>
      </div>
    </div>

    <div id="most_relevant" class="px-10 md:translate-x-1/4">
      <div class="relative md:w-1/2 flex flex-col place-content-center px-2 py-4 gap-4">
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

    <div id="all_projects" class="px-10 py-8 hidden">
      <div class="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center px-2 py-2">
        <ProjectPreview v-for="pj in projects"
                        :project_title="pj.project_title"
                        :short_description="pj.short_description"
                        :link="'/projects/' + pj.project_title"
                        :tags="pj.areas"
                        :main_image="pj.main_image"
                        :see_tags="true"/>
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
  const ids = [id_0, id_1, id_2];

  const all_projects: HTMLElement | null = document.getElementById("all_projects")! as HTMLElement;
  const most_relevant: HTMLElement | null = document.getElementById("most_relevant")! as HTMLElement;
  const by_area: HTMLElement | null = document.getElementById("by_area")! as HTMLElement;

  const class_of_select = ['text-2xl','sm:text-3xl', 'md:text-5xl' , 'underline', 'underline-offset-8'];
  const class_of_non_select = ['text-xl', 'sm:text-2xl', 'md:text-4xl'];

  if(id_click.innerText === "All Projects") {
    all_projects.classList.remove('hidden');
    most_relevant.classList.add('hidden');
    by_area.classList.add('hidden');
    ids.forEach(id => {
      if(id.id != id_click.id){
        class_of_select.forEach(class_name => {
          id.classList.remove(class_name);
        });

        class_of_non_select.forEach(class_name => {
          id.classList.add(class_name);
        });
      }else{
        class_of_non_select.forEach(class_name => {
          id.classList.remove(class_name);
        });
        class_of_select.forEach(class_name => {
          id.classList.add(class_name);
        });
      }
    });
  }else if(id_click.innerText === "Most Relevant") {
    most_relevant.classList.remove('hidden');
    all_projects.classList.add('hidden');
    by_area.classList.add('hidden');
    ids.forEach(id => {
      if(id.id != id_click.id){
        class_of_select.forEach(class_name => {
          id.classList.remove(class_name);
        });

        class_of_non_select.forEach(class_name => {
          id.classList.add(class_name);
        });
      }else{
        class_of_non_select.forEach(class_name => {
          id.classList.remove(class_name);
        });
        class_of_select.forEach(class_name => {
          id.classList.add(class_name);
        });
      }
    });
  }else if(id_click.innerText === "Projects by area") {
    by_area.classList.remove('hidden');
    all_projects.classList.add('hidden');
    most_relevant.classList.add('hidden');
    ids.forEach(id => {
      if(id.id != id_click.id){
        class_of_select.forEach(class_name => {
          id.classList.remove(class_name);
        });

        class_of_non_select.forEach(class_name => {
          id.classList.add(class_name);
        });
      }else{
        class_of_non_select.forEach(class_name => {
          id.classList.remove(class_name);
        });
        class_of_select.forEach(class_name => {
          id.classList.add(class_name);
        });
      }
    });
  }

}

</script>

<style scoped>

</style>