<template>
  <div>
    <!--Automatic Carousel of images-->
    <div id="carousel" class="relative w-full ">
      <!-- Carousel -->
      <div class="relative h-52 overflow-hidden md:h-96">
        <!-- Items -->
        <div class="transition-all delay-150 duration-2000 ease-in-out" id="0">
          <img :src="areas.area_image[0]"
               class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <div class="hidden transition-all delay-150 duration-2000 ease-in-out" id="1">
          <img :src="areas.area_image[1]"
               class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
      </div>
    </div>

    <!--Area name and description-->
    <div>
      <div class="text-5xl text-left font-bold text-black dark:text-white my-8 ml-6">{{areas.area_title.toUpperCase()}}</div>
      <p class="text-xl text-left text-black dark:text-white mx-6 py-2" v-for="ad in areas.area_description">
        {{ad}}
      </p>
    </div>

    <!--Carousel to browse different project inside the area-->
    <div>
      <div class="text-4xl text-center font-bold text-black dark:text-white mt-20 mb-8">RELATED PROJECTS</div>
      <div class="relative w-1/2 left-1/2 -translate-x-1/2 mb-20">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

          <ProjectPreview v-for="pj in areas.projects"
                          :project_title="pj.project_title"
                          :see_tags="false"
                          :short_description="pj.short_description"
                          :link="'/projects/' + pj.project_title"
                          :main_image="pj.main_image"/>

          <!-- Buttons -->
          <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onclick="carouselPrev" >
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-700/80 group-hover:bg-white/50 dark:group-hover:bg-white/80 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onclick="carouselNext" >
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-700/80 group-hover:bg-white/50 dark:group-hover:bg-white/80 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute, useFetch} from "nuxt/app";
import {Area} from "~/model/Types";

const area_title: string = useRoute().params.area as string;

//@ts-ignore
const {data: areas, error}: { data: Area } = await useFetch(
    "/api/areas/" + area_title,
    {
      method: "GET",
    }
);

//automatic carousel change, need two timeout to infer the changes, still problems in the transition not smooth
let currentImage = 0;
const seconds = 5;

const timeoutId = setTimeout(() =>{
  changeImage();
}, seconds * 1000);
function changeImage(){
  document.getElementById((currentImage).toString())?.classList.add("hidden");
  document.getElementById((currentImage == 1 ? currentImage = 0 : currentImage = currentImage + 1).toString())?.classList.remove("hidden");

  const imageTimeout = setTimeout(() =>{
    changeImage();
  }, seconds * 1000);
}

function carouselNext(){

}

function carouselPrev(){

}

</script>

<style scoped>
</style>