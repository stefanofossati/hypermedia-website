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
      <!--<div class="text-3xl text-center">{{a.area_title}}</div>
      <p class="">{{a.area_description}}</p>-->
    </div>

    <!--Carousel to browse different project inside the area-->
    <div>
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

  if(cycleValue < 4) {
    cycleValue = cycleValue + 1;
  }
  else{
    cycleValue = 1;
  }
  resetTimer();
}

</script>

<style scoped>
</style>