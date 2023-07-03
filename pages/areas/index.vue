<!-- All Areas -->
<template>
  <div>
    <div class="flex flex-col items-center justify-evenly snap-mandatory snap-y">
      <AreasSection v-for="a in areas"
                    :id="a.area_title"
                    :area_title="a.area_title"
                    :area_image="a.area_image[0]"
                    :area_color="a.area_color"
                    :link="'/areas/' + a.area"/>
    </div>
    <!--Navigation dots-->
    <div id="nav" class="fixed h-screen bottom-0 left-3 bg-scroll flex flex-col justify-center space-y-20 ">
      <area-pointer v-for="d in areas"
                    :area_title="d.area_title"
                    v-on:click="getDocument(d.area_title)"/>
    </div>
  </div>
</template>

<style>
</style>

<script setup lang="ts">
import {useFetch} from "nuxt/app";
import {Area} from "~/model/Types";
import AreasSection from "~/components/Areas/AreasSection.vue";
import AreaPointer from "~/components/Areas/AreaPointer.vue";

//@ts-ignore
const {data: areas, error}: { data: Area[] } = await useFetch(
    '/api/areas',
    {
      method: "GET",
    }
);

//problem when in another page since elem is null and can not be nullable
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
});

    function getDocument(areaName:string){
      document.getElementById(areaName)?.scrollIntoView();
    }

    onload = function(){
      scrollTo(0,0);
    }
</script>