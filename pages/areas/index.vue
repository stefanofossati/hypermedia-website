<!-- All Areas -->
<template>
  <div class="grow">
    <Head>
      <Title>{{ areas.area_title }}</Title>
    </Head>
    <div>
      <div class="flex flex-col items-center justify-evenly snap-mandatory snap-y scroll-smooth">
        <AreasSection v-for="a in areas"
                      :id="a.area_title"
                      :area_title="a.area_title"
                      :area_image="a.area_image[0]"
                      :area_color="a.area_color"
                      :link="'/areas/' + a.area"
                      class="snap-center"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">

//@ts-ignore
const {data: areas, error}: { data: Area[] } = await useFetch(
    '/api/areas',
    {
      method: "GET",
    }
);

function getDocument(areaName: string) {
  document.getElementById(areaName)?.scrollIntoView();
}
</script>