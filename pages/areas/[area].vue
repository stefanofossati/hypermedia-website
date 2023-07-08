<template>
  <div class="grow">
    <Head>
      <Title>Areas</Title>
      <Meta name="description" content="Areas page" />
    </Head>
    <!--Automatic Carousel of images-->
    <div id="carousel" class="relative w-full">
      <!-- Carousel -->
      <div class="relative h-64 overflow-hidden md:h-96">
        <!-- Items -->
        <div class="transition-all ease-in-out" id="0">
          <img :src="areas.area_image[0]"
               class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
               alt=" first Image relative to the area selected">
        </div>
        <div class="hidden transition-all ease-in-out" id="1">
          <img :src="areas.area_image[1]"
               class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
               alt="second Image relative to the area selected">
        </div>
        <div class="hidden transition-all ease-in-out" id="2">
          <img :src="areas.area_image[2]"
               class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
               alt="third Image relative to the area selected">
        </div>
      </div>
      <div class="absolute top-5 left-5 z-30">
        <BackButton route="/areas" label="Back to All Areas" class=""/>
      </div>
    </div>

    <!--Area name and description-->
    <div>
      <div class="text-3xl lg:text-5xl text-left font-bold text-black dark:text-white my-8 ml-6">
        {{ areas.area_title.toUpperCase() }}
      </div>
      <div v-for="(desc, index) in areas.area_description">
        <p v-if="index < 2" class="text-xl lg:text-2xl text-left text-black dark:text-white mx-6 py-2">
          {{ desc }}
        </p>
        <p v-else class="text-xl lg:text-2xl text-left text-black dark:text-white mx-6 py-2 lg:flex hidden" :id="'more_text_'+ index">
          {{ desc }}
        </p>
      </div>
      <div class="flex flex-row visible lg:hidden justify-center align-center hover:text-black dark:hover:text-white"
            v-on:click="show_more(areas.area_description)">
        <h3 id="more_text_div" class="text-gray-700 dark:text-gray-400 text-2xl align-center cursor-pointer">Show More</h3>
        <svg id="more_text_button" viewBox="0 -960 960 960"
             class="dark:text-gray-400 text-gray-700 fill-current h-10 w-10 cursor-pointer">
          <path
              d="M480-357q-6 0-11-2t-10-7L261-564q-8-8-7.5-21.5T262-607q10-10 21.5-8.5T304-606l176 176 176-176q8-8 21.5-9t21.5 9q10 8 8.5 21t-9.5 22L501-366q-5 5-10 7t-11 2Z"/>
        </svg>
      </div>
    </div>

    <!--Carousel to browse different project inside the area-->
    <div>
      <div class="text-4xl text-center font-bold text-black dark:text-white mt-20 mb-8">RELATED PROJECTS</div>
      <div class="relative w-1/2 left-1/2 -translate-x-1/2 mb-20">
        <!-- Carousel wrapper -->
        <div class="relative h-52 overflow-hidden rounded-lg md:h-96">
          <!-- Items -->
          <div class="">
            <ProjectPreview v-for="pj in areas.projects"
                            :project_title="pj.project_title"
                            :see_tags="false"
                            :short_description="pj.short_description"
                            :link="'/projects/' + pj.project_title"
                            :main_image="pj.main_image"/>
          </div>

          <!-- Buttons -->
          <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  v-on:click="carouselPrev(areas.projects.length, areas)" >
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10
                          bg-gray-500 dark:bg-gray-900 group-hover:bg-gray-700 dark:group-hover:bg-gray-500
                          group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-gray-300" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="sr-only">Previous</span>
            </span>
          </button>
          <button type="button"
                  class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  v-on:click="carouselNext(areas.projects.length, areas)">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10
                          bg-gray-500 dark:bg-gray-900 group-hover:bg-gray-700 dark:group-hover:bg-gray-500
                          group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-gray-300" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
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
import {Area, ProjectAreaPreview} from "~/model/Types";

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

setTimeout(() => {
  changeImage();
}, seconds * 1000);

function changeImage() {

  document.getElementById(currentImage.toString())?.classList.add("hidden");
  if (currentImage == 2) {
    currentImage = 0;
  } else {
    currentImage += 1;
  }
  document.getElementById(currentImage.toString())?.classList.remove("hidden");


  setTimeout(() => {
    changeImage();
  }, seconds * 1000);

}

var currentProject = 0;

function carouselNext(n: number, a: Area) {
  document.getElementById(a.projects[currentProject].project_title)?.classList.add("hidden");
  currentProject = (currentProject + 1) % n;
  document.getElementById(a.projects[currentProject].project_title)?.classList.remove("hidden");
}


function carouselPrev(n: number, a: Area) {
  if (currentProject == 0) {
    setAllHidden(n, a);
  }
  document.getElementById(a.projects[currentProject].project_title)?.classList.add("hidden");
  if (currentProject % n == 0) {
    currentProject = (currentProject + n - 1) % n;
  } else {
    currentProject = (currentProject - 1) % n;
  }
  document.getElementById(a.projects[currentProject].project_title)?.classList.remove("hidden");
}

//function needed only the first time PrevButton is pressed in an Area
function setAllHidden(n: number, a: Area) {
  for (let i = 0; i < n; i++) {
    document.getElementById(a.projects[i].project_title)?.classList.add("hidden");
  }
}

let i: number = 0;
function show_more(descriptions: string[]) {
  const hide_desc: HTMLElement[] = [];
  for (i = 3; i < descriptions.length; i++) {
    hide_desc[i] = document.getElementById("more_text_" + i)!;
  }
  const more_text_button: HTMLElement | null = document.getElementById("more_text_button")!;
  const more_text_div: HTMLElement | null = document.getElementById("more_text_div")!;

  if (hide_desc[3].classList.contains("hidden")) {
    hide_desc.forEach((element) => {
      element.classList.replace("hidden", "visible");
    });
    more_text_button.classList.add("rotate-180");
    more_text_div.innerText = "Show less";
  } else {
    hide_desc.forEach((element) => {
      element.classList.replace("visible", "hidden");
    });
    more_text_button.classList.remove("rotate-180");
    more_text_div.innerText = "Show more";
  }
}

</script>

<style scoped>

</style>