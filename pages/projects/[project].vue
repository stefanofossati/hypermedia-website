<template>
  <div>
    <!-- Presentation -->
    <div class="h-96 bg-cover bg-center" :style="{ backgroundImage: `url('${pj.main_image}')`}">
      <img :src="pj.main_image" alt="i3lab" class="object-cover h-full w-full"/>
      <h1 class="absolute text-5xl text-black top-40 left-5">
        {{ pj.project_title }}
      </h1>
    </div>

    <!-- Descriptions -->
    <div class="sm:grid sm:grid-cols-4 sm:gap-3 py-3 px-5 block">

      <!-- Project Info Mobile -->
      <div class="sm:hidden flex-col py-1 px-1 bg-yellow-800 relative">
        <button @click="hide_function" class="absolute top-0 right-0">
            <svg id="button_info" viewBox="0 -960 960 960" class="dark:text-white text-black fill-current h-16 w-16">
                <path d="M480-357q-6 0-11-2t-10-7L261-564q-8-8-7.5-21.5T262-607q10-10 21.5-8.5T304-606l176 176 176-176q8-8 21.5-9t21.5 9q10 8 8.5 21t-9.5 22L501-366q-5 5-10 7t-11 2Z"></path>

            </svg>
        </button>
        <ProjectsProjectInfo :info_supervisor="pj.supervisor" :info_budget="pj.budget" :info_start_date="pj.start_date" :info_end_date="pj.end_date"/>
      </div>

      <div class="sm:col-span-3 sm:box-content sm:sticky sm:inset-y-0 sm:py-1 left-0  ">
          <h2 class="text-3xl text-black dark:text-white py-1">
              Description
          </h2>
          <p class="text-1xl text-black dark:text-white ">
              {{ pj.project_description }}
          </p>
      </div>

      <!-- Project Info Desktop -->
      <div class="sm:col-span-1 sm:sticky sm:inset-y-0 sm:right-0 sm:flex sm:flex-col border-l-2 border-slate-700 dark:border-gray-500 hidden">
          <ProjectsProjectInfo :info_supervisor="pj.supervisor" :info_budget="pj.budget" :info_start_date="pj.start_date" :info_end_date="pj.end_date"/>
      </div>
    </div>

    <!-- Images -->
    <div>
        <div class="bg-blue-600 px-2 py-2">
            <h2 class="text-3xl text-black ">
                Project Images
            </h2>
        </div>
      <div class="grid grid-cols-12 grid-rows-4 gap 3 bg-red-400 justify-items-center place-items-center" >
        <div class="col-span-4 row-span-4 self-center">
          <img id="big_image" src="../../assets/i3lab.png" alt="" class=" h-96 w-full object-cover">
        </div>
        <div class="col-span-8 row-span-1 bg-blue-500 ">
          00
        </div>
        <div class="col-span-1 row-span-2  justify-self-start px-4">
          L
        </div>
        <div  class="col-span-2 row-span-2 bg-gray-100 " v-on:click="change_image($event)">
          <img id="image01" :src="pj.gallery_images[0]" alt="" class=" h-48 w-full object-cover " >
        </div>
        <div  class="col-span-2 row-span-2 " v-on:click="change_image($event)">
          <img id="image02" :src="pj.gallery_images[1]" alt=""  class=" h-48 w-full object-cover ">
        </div>
        <div  class="col-span-2 row-span-2 bg-gray-100 " v-on:click="change_image($event)">
          <img id="image03" :src="pj.gallery_images[2]" alt="" class=" h-48 w-full object-cover ">
        </div>
        <div class="col-span-1 row-span-2  justify-self-end px-4 " v-on:click="go_right">
          4R
        </div>
        <div class="col-span-8 row-span-1 bg-blue-500">
          00
        </div>

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

import {useRoute, useFetch} from "nuxt/app";
import {Project} from "~/model/Types";
import {c} from "~/.output/public/_nuxt/entry.b191b10d";

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

function change_image(clicked: any){
  const big_img: HTMLImageElement | null = document.getElementById("big_image")! as HTMLImageElement;
  const children: HTMLCollection | null = clicked.currentTarget.children!;

  if(children !== undefined && children !== null){
    for(let child of Array.from(children)){
      if(child.nodeName === "IMG"){
        let img: HTMLImageElement = child as HTMLImageElement;
        big_img.src = img.src
      }
    }
  }
}


let i: number = 0;

function go_right(){
  const image_01: HTMLImageElement | null = document.getElementById("image01")! as HTMLImageElement;
  const image_02: HTMLImageElement | null = document.getElementById("image02")! as HTMLImageElement;
  const image_03: HTMLImageElement | null = document.getElementById("image03")! as HTMLImageElement;

  console.log("go_right");
  console.log(pj.gallery_images);

  const images: Array<HTMLImageElement> = [image_01, image_02, image_03];

  i++;
  let j;
  let k;

  if(i>pj.gallery_images.length){
    i = 0;
  }

  j = i + 1

  if(j>pj.gallery_images.length){
    j = 0;

  }

  k = j + 1

  if(k>pj.gallery_images.length){
    k = 0;
  }

  image_01.src = pj.gallery_images[i];
  image_02.src = pj.gallery_images[j];
  image_03.src = pj.gallery_images[k];
}

function go_left(){

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