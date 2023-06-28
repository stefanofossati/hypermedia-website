<template>
  <div>
    <!--Automatic Carousel of images-->
    <div id="carousel" class="relative w-full">
      <!-- Carousel -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Items -->
        <div class="transition-opacity duration-100000 ease-in-out" id="1">
          <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <div class="hidden transition-opacity duration-1000 ease-in-out" id="2">
          <img src="https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <div class="hidden transition-opacity duration-1000 ease-in-out" id="3">
          <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
      </div>
    </div>

    <!--Area name and description-->
    <div>
      <div class="text-3xl text-center">{{a.area_title}}</div>
      <p class="">{{a.area_description}}</p>
    </div>

    <!--Carousel to browse different project inside the area-->
    <div>
      <div id="indicators-carousel" class="relative w-1/2" >


        <!-- Slider -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        </div>

        <!-- Buttons -->
        <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              <span class="sr-only">Next</span>
          </span>
        </button>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {useRoute, useFetch} from "nuxt/app";
import {ImageGallery, Area} from "~/model/Types";

const area_title: string = useRoute().params.project as string;

//@ts-ignore
const {data: a, error}: { data: Area } = await useFetch(
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

  resetTimer();
}

</script>

<style scoped>
</style>