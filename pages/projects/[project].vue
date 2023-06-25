<template>
  <div class="divide-y divide-slate-500">
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
      <div class="sm:hidden flex-col py-1 px-1 relative">
        <button @click="hide_function" class="absolute top-0 right-0">
          <svg id="button_info" viewBox="0 -960 960 960" class="dark:text-white text-black fill-current h-16 w-16">
            <path
                d="M480-357q-6 0-11-2t-10-7L261-564q-8-8-7.5-21.5T262-607q10-10 21.5-8.5T304-606l176 176 176-176q8-8 21.5-9t21.5 9q10 8 8.5 21t-9.5 22L501-366q-5 5-10 7t-11 2Z"></path>

          </svg>
        </button>
        <ProjectsProjectInfo :info_supervisor="pj.supervisor" :info_budget="pj.budget" :info_start_date="pj.start_date"
                             :info_end_date="pj.end_date"/>
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
      <div
          class="sm:col-span-1 sm:sticky sm:inset-y-0 sm:right-0 sm:flex sm:flex-col border-l-2 border-slate-700 dark:border-gray-500 hidden self-center">
        <ProjectsProjectInfo :info_supervisor="pj.supervisor" :info_budget="pj.budget" :info_start_date="pj.start_date"
                             :info_end_date="pj.end_date"/>
      </div>
    </div>

    <!-- Images -->
    <div class="py-4">
      <div class="grid grid-cols-12 grid-rows-4 gap 3 justify-items-center place-items-center">
        <div class="col-span-7 row-span-1 text-black dark:text-white text-3xl justify-self-start px-3">
          Project Gallery
        </div>

        <div class="col-span-4 row-span-4 self-center">
          <img id="big_image" :src="pj.gallery_images[3].url" alt="" class=" h-96 w-full object-cover">
        </div>
        <div class="col-span-1 row-span-1"></div>
        <div v-on:click="go_left(pj.gallery_images.length, pj.gallery_images)" class="col-span-1 row-span-2 hover:animate-pulse">
          <svg viewBox="0 -960 960 960" class="dark:text-white text-black fill-current h-16 w-16 mr-1.5 mb-1.5 justify-center">
            <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"/>
          </svg>
        </div>
        <div  class="col-span-2 row-span-2 bg-gray-100 " >
          <img id="image01" :src="pj.gallery_images[0].url" alt="" class=" h-48 w-full object-cover " >
        </div>
        <div  class="col-span-2 row-span-2 " >
          <img id="image02" :src="pj.gallery_images[1].url" alt=""  class=" h-48 w-full object-cover ">
        </div>
        <div  class="col-span-2 row-span-2 bg-gray-100 ">
          <img id="image03" :src="pj.gallery_images[2].url" alt="" class=" h-48 w-full object-cover ">
        </div>
        <div v-on:click="go_right(pj.gallery_images.length, pj.gallery_images)" class="col-span-1 row-span-2 hover:animate-pulse">
          <svg viewBox="0 -960 960 960" class="dark:text-white text-black fill-current h-16 w-16 mr-1.5 mb-1.5 justify-center ">
            <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/>
          </svg>
        </div>
        <div  class="col-span-7 row-span-1 justify-end text-black dark:text-white flex flex-row h-fit w-full border-t-2 border-slate-500">
          <p id="description_big_image" class="self-center ">
            {{ pj.gallery_images[(i+3) % (pj.gallery_images.length)].description }}
          </p>
          <svg viewBox="0 -960 960 960" class="dark:text-white text-black fill-current h-16 w-16 mr-1.5 mb-1.5 self-center">
            <path d="M560-280 360-480l200-200v400Z"/>
          </svg>

        <div class="col-span-1 row-span-1"></div>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

import {useRoute, useFetch} from "nuxt/app";
import {ImageGallery, Project} from "~/model/Types";

const project_title: string = useRoute().params.project as string;

//@ts-ignore
const {data: pj, error}: { data: Project } = await useFetch(
    "/api/projects/" + project_title,
    {
      method: "GET",
    }
);

let i: number = 0;

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

function go_left(length: number, images_src: ImageGallery[]) {
  const big_image: HTMLImageElement | null = document.getElementById("big_image")! as HTMLImageElement;
  const image_01: HTMLImageElement | null = document.getElementById("image01")! as HTMLImageElement;
  const image_02: HTMLImageElement | null = document.getElementById("image02")! as HTMLImageElement;
  const image_03: HTMLImageElement | null = document.getElementById("image03")! as HTMLImageElement;
  const description_big_image: HTMLElement | null = document.getElementById("description_big_image")!;

  i = (i+1) % (length);
  image_01.src = images_src[i].url;


  let j = (i+1) % (length);
  image_02.src = images_src[j].url;

  let k = (i+2) % (length);
  image_03.src = images_src[k].url;

  let l = (i+3) % (length);
  big_image.src = images_src[l].url;
  description_big_image.innerHTML = images_src[l].description;

}

function go_right(length:number, images_src:ImageGallery[]){
  const big_image: HTMLImageElement | null = document.getElementById("big_image")! as HTMLImageElement;
  const image_01: HTMLImageElement | null = document.getElementById("image01")! as HTMLImageElement;
  const image_02: HTMLImageElement | null = document.getElementById("image02")! as HTMLImageElement;
  const image_03: HTMLImageElement | null = document.getElementById("image03")! as HTMLImageElement;
  const description_big_image: HTMLElement | null = document.getElementById("description_big_image")!;

  i = (i-1+length) % (length);
  image_01.src = images_src[i].url;

  let j = (i+1) % (length);

  image_02.src = images_src[j].url;

  let k = (i+2) % (length);
  image_03.src = images_src[k].url;


  let l = (i+3) % (length);

  big_image.src = images_src[l].url;
  description_big_image.innerHTML = images_src[l].description;
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