<!-- All Areas -->
<template>
  <div>
    <div class="flex flex-col items-center justify-evenly
                snap-y snap-mandatory overflow-scroll">
      <AreasSection v-for="a in areas"
                    :id="a.area_title"
                    :area_title="a.area_title"
                    :area_image="a.area_image[0]"
                    :area_color="a.area_color"
                    :link="'/areas/' + a.area"
                    class="snap-center"/>
    </div>
    <!--Navigation dots-->
    <div id="nav" class="fixed sm:h-screen sm:bottom-0 sm:left-3 sm:bg-scroll sm:flex sm:flex-col sm:justify-center sm:space-y-16 ">
      <AreaPointer v-for="d in areas"
                    :area_title="d.area_title"
                    v-on:click="getDocument(d.area_title)"/>
    </div>
  </div>
</template>

<style>
</style>

<script setup lang="ts">

//@ts-ignore
import AreaPointer from "~/components/Areas/AreaPointer.vue";

const {data: areas, error}: { data: Area[] } = await useFetch(
    '/api/areas',
    {
      method: "GET",
    }
);

addEventListener("scroll", function(){
      let elem: HTMLElement | null;
      elem = document.getElementById("nav")!;
      if(elem != null){
        if ((window.innerHeight + window.scrollY) < document.body.offsetHeight - 180) {
          elem.classList.remove("hidden");
        } else {
          elem.classList.add("hidden");
        }
    }
})

function getDocument(areaName:string){
  document.getElementById(areaName)?.scrollIntoView();
}
</script>