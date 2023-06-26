<template>
  <div>
    <div>
      {{area.area_title}}
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute, useFetch} from "nuxt/app";
import {Area} from "~/model/Types";

const area_title: string = useRoute().params.area as string;

//@ts-ignore
const {data: area, error}: { data: Area } = await useFetch(
    "/api/areas/" + area_title,
    {
      method: "GET",
    }
);
</script>

<style scoped>

</style>