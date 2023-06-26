<!-- All Areas -->
<template>
  <div>
    <div class="flex flex-col items-center justify-evenly snap-mandatory snap-y">
      <AreasSection v-for="a in areas"
                    :id="a.area_title"
                    :area_title="a.area_title"
                    :area_image="a.area_image"
                    :link="'/areas/' + a.area_title"/>
    </div>

    <!--Navigation dots-->
    <div id="nav" class="fixed w-screen bottom-12 bg-scroll flex flex-row justify-center space-x-24">
      <area-pointer v-for="p in areas"
                    :area_title="p.area_title"
                    v-on:click="getDocument(p.area_title)"/>
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

    onscroll = function() {
    const elem: HTMLElement | null = document.getElementById("nav")!;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 270) {    
        elem.style.display = "none";
    }
    else{
        elem.style.display = "flex";
    }
};

    function getDocument(areaName:string){
      document.getElementById(areaName)?.scrollIntoView();
    }

    onload = function(){
      scrollTo(0,0);
    };
</script>