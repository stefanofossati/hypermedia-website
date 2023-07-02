<template>
  <div>
    <!--Automatic Carousel of images-->
    <div id="carousel" class="relative w-full">
      <!-- Carousel -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Items -->
        <div class="transition-opacity duration-1000 ease-in-out" v-for="area in areas.area_image">
          <img :src="area"
               class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
<!--        <div class="hidden transition-opacity duration-1000 ease-in-out" id="2">-->
<!--          <img src="https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4="-->
<!--               class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">-->
<!--        </div>-->
<!--        <div class="hidden transition-opacity duration-1000 ease-in-out" id="3">-->
<!--          <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="-->
<!--               class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">-->
<!--        </div>-->
      </div>
    </div>

    <!--Area name and description-->
    <div>
      <div class="text-5xl text-center font-bold text-black dark:text-white mt-12">{{areas.area_title.toUpperCase()}}</div>
      <p class="text-xl text-center text-black dark:text-white mt-4">
        {{areas.area_description}}
      </p>
    </div>

    <!--Carousel to browse different project inside the area-->
    <div>
      <div class="text-4xl text-center font-bold text-black dark:text-white mt-20 mb-8">RELATED PROJECTS</div>
      <div class="relative w-1/2 left-1/2 -translate-x-1/2 mb-20">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

          <AreaCarousel v-for="pj in areas.projects" :project_title="pj.project_title" :main_image="pj.main_image"/>

          <!-- Buttons -->
          <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-700/80 group-hover:bg-white/50 dark:group-hover:bg-white/80 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
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
import AreaCarousel from "~/components/Areas/AreaCarousel.vue";

const area_title: string = useRoute().params.area as string;

//@ts-ignore
const {data: areas, error}: { data: Area } = await useFetch(
    "/api/areas/" + area_title,
    {
      method: "GET",
    }
);

let cycleValue = 1;
let interval: any;
window.onload=timer;

function timer() {
  interval = setTimeout(changeImage, 3000);
}

function resetTimer() {
  clearTimeout(interval);
  interval = setTimeout(changeImage, 3000);
}

function changeImage(){
  document.getElementById(cycleValue.toString())?.classList.add("hidden");
  document.getElementById(((cycleValue+1==4)?cycleValue=1:cycleValue+1).toString())?.classList.remove("hidden");

  if(cycleValue < 4 ){
    cycleValue += cycleValue;
  }else{
    cycleValue = 1;
  }

  resetTimer();
}

</script>

<style scoped>
</style>