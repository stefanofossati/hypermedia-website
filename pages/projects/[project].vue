<template>
  <div>
    <!-- Presentation -->
    <div class="relative h-96 bg-cover bg-center" :style="{ backgroundImage: `url('${pj.main_image}')`}">
      <div class="absolute top-5 left-5">
        <BackButton route="/projects" label="Back to Projects" class=""/>
      </div>
      <div class="absolute bottom-0 left-0 dark:bg-black bg-white px-6 pt-4">
        <h1 class="text-5xl text-black dark:text-white font-bold dark:bg-black bg-white ">
          {{ pj.project_title }}
        </h1>
      </div>

    </div>

    <!-- Descriptions -->
    <div class="lg:grid lg:grid-cols-4 lg:gap-3 py-3 px-5 block">

      <!-- Project Info Mobile -->
      <div class="lg:hidden flex-col py-1 px-1 relative">
        <button @click="hide_function" class="absolute top-0 right-0">
          <svg id="button_info" viewBox="0 -960 960 960" class="dark:text-white text-black fill-current h-16 w-16">
            <path d="M480-357q-6 0-11-2t-10-7L261-564q-8-8-7.5-21.5T262-607q10-10 21.5-8.5T304-606l176 176 176-176q8-8 21.5-9t21.5 9q10 8 8.5 21t-9.5 22L501-366q-5 5-10 7t-11 2Z"/>
          </svg>
        </button>
        <ProjectsProjectInfo :info_supervisor="pj.team" :info_budget="pj.budget" :info_start_date="pj.start_date"
                             :info_end_date="pj.end_date" :area_infos="pj.areas"/>
      </div>

      <div class="lg:col-span-3 lg:box-content lg:sticky lg:inset-y-0 lg:py-1 left-0 px-2 ">
<!--        <h2 class="text-3xl text-black dark:text-white py-1">-->
<!--          Description-->
<!--        </h2>-->
        <p class="text-xl text-black dark:text-white py-2" v-for="desc in pj.project_description">
          {{ desc }}
        </p>
      </div>

      <!-- Project Info Desktop -->
      <div
          class="lg:col-span-1 lg:sticky lg:inset-y-0 lg:right-0 lg:flex lg:flex-col border-l-2 border-slate-700 dark:border-gray-500 hidden self-center">
        <ProjectsProjectInfo :info_supervisor="pj.team" :info_budget="pj.budget" :info_start_date="pj.start_date"
                             :info_end_date="pj.end_date" :area_infos="pj.areas"/>
      </div>
    </div>

    <!-- Images -->
    <div class="py-4">
      <div class="md:hidden text-black dark:text-white text-3xl justify-self-start px-3">
        Project Gallery
      </div>
      <div class="grid xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-8 grid-cols-6 gap 3 justify-items-center place-items-center">
        <div class="xl:col-span-7 lg:col-span-5 md:col-span-3 col-span-1 row-span-1">
          <div class="md:flex hidden text-black dark:text-white text-3xl justify-self-start px-3">
            Project Gallery
          </div>
        </div>

        <div class="col-span-4 row-span-4 self-center">
          <img id="big_image" :src="pj.gallery_images[3].url" alt="" class=" h-96 w-full object-cover px-2 ">
        </div>
        <div class="col-span-1 row-span-1"></div>
        <div v-on:click="go_left(pj.gallery_images.length, pj.gallery_images)" class="col-span-1 row-span-2 hover:animate-pulse">
          <svg viewBox="0 -960 960 960" class="dark:text-white text-black fill-current h-16 w-16 mr-1.5 mb-1.5 justify-center">
            <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"/>
          </svg>
        </div>
        <div  class="xl:col-span-2 xl:row-span-2 hidden xl:flex" >
          <img id="image01" :src="pj.gallery_images[0].url" alt="" class=" h-48 w-60 object-cover" >
        </div>
        <div  class="lg:col-span-2 lg:row-span-2 hidden lg:flex"  >
          <img id="image02" :src="pj.gallery_images[1].url" alt=""  class=" h-48 w-60 object-cover ">
        </div>
        <div  class="md:col-span-2 md:row-span-2 hidden md:flex">
          <img id="image03" :src="pj.gallery_images[2].url" alt="" class=" h-48 w-60 object-cover ">
        </div>
        <div v-on:click="go_right(pj.gallery_images.length, pj.gallery_images)" class="col-span-1 row-span-2 hover:animate-pulse">
          <svg viewBox="0 -960 960 960" class="dark:text-white text-black fill-current h-16 w-16 mr-1.5 mb-1.5 justify-center ">
            <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/>
          </svg>
        </div>
        <div class="xl:col-span-7 lg:col-span-5 md:col-span-3 col-span-1 row-span-1 h-fit w-full md:border-t-2  md:border-slate-500">
          <div class=" md:flex hidden md:flex-row justify-end text-black dark:text-white">
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
      <div class="md:hidden flex flex-row justify-center text-black dark:text-white border-t-2 border-slate-500 py-2 w-full">
        {{ pj.gallery_images[(i+3) % (pj.gallery_images.length)].description }}
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
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