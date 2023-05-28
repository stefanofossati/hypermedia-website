<script setup lang="ts">
import {Person} from '~/model/Types';
import {useRoute, useFetch} from "nuxt/app";

const nameSurname: string[] = (useRoute().params.person as string).split("_");

//@ts-ignore
const {data: person, error}: { data: Person } = await useFetch(
    "/api/team/" + nameSurname[0] + "_" + nameSurname[1],
    {
      method: "GET",
    }
);
</script>

<template>
  <div> <!-- page with Pippo's profile pc and general infos -->
    <div class="flex flex-col items-center text-center">
      <span class="text-3xl sm:text-4xl md:text-6xl font-bold m-10 dark:text-white">{{ person.name }} {{ person.surname }}'s profile</span>
      <div class="w-full mb-10 flex lg:flex-row flex-col justify-evenly items-center">
        <img :src="person.img" :alt="`${person.name} ${person.surname}'s profile pic`"
             class="object-scale-down border-4 rounded-full shadow-2xl h-52 w-52 sm:h-72 sm:w-72 md:h-96 md:w-96 mb-10 lg:mb-0 aspect-square">
        <div class="flex flex-row justify-center items-stretch bg-white dark:bg-gray-900 rounded-3xl">
          <div
              class="flex flex-col items-stretch justify-between border-black dark:border-white border-r p-5 text-xl sm:text-2xl md:text-3xl font-bold dark:text-white">
            <span>Name</span>
            <span>Surname</span>
            <span>Age</span>
            <span>Address</span>
            <span>Email</span>
            <span>Phone</span>
          </div>
          <div class="flex flex-col items-stretch justify-between p-5 text-sm sm:text-lg md:text-xl dark:text-gray-400">
            <span>{{ person.name }}</span>
            <span>{{ person.surname }}</span>
            <span>{{ person.age }}</span>
            <span>{{ person.address }}</span>
            <span>{{ person.email }}</span>
            <span>{{ person.phone }}</span>
          </div>
        </div>
      </div>
      <span class="dark:text-gray-400 bottom-0 text-xs sm:text-sm md:text-lg w-3/4 pb-10 text-left">
      {{ person.pitch }}
    </span>
    </div>
  </div>


</template>


<style>

</style>