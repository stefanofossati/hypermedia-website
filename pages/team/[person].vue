<script setup lang="ts">
import {Person} from '~/model/Types';
import {useRoute, useFetch} from "nuxt/app";

const name: string = useRoute().params.person as string;

//@ts-ignore
const {data: person, error}: { data: Person } = await useFetch(
    "/api/team/" + name,
    {
      method: "GET",
    }
);
</script>

<template>
  <div> <!-- page with Pippo's profile pc and general infos -->
    <div class="flex flex-col items-center text-center">
      <span class="text-6xl font-bold m-10 dark:text-white">{{ person.name }}'s profile</span>
      <div class="w-full mb-10 flex flex-row justify-evenly">
        <img :src="person.img" :alt="`${person.name}'s profile pic`"
             class="object-scale-down border-4 rounded-full shadow-2xl h-96 aspect-square">
        <div class="flex flex-row justify-center items-stretch bg-white dark:bg-gray-900 rounded-3xl">
          <div
              class="flex flex-col items-stretch justify-between border-black dark:border-white border-r p-5 text-3xl font-bold dark:text-white">
            <span>Name</span>
            <span>Age</span>
            <span>Address</span>
            <span>Email</span>
            <span>Phone</span>
          </div>
          <div class="flex flex-col items-stretch justify-between p-5 text-xl dark:text-gray-400">
            <span>{{ person.name }}</span>
            <span>{{ person.age }}</span>
            <span>{{ person.address }}</span>
            <span>{{ person.email }}</span>
            <span>{{ person.phone }}</span>
          </div>
        </div>
      </div>
      <span class="dark:text-gray-400 bottom-0 text-lg w-3/4 text-left">
      {{ person.pitch }}
    </span>
    </div>
  </div>


</template>


<style>

.page-enter-active {
  animation: bounce-in 0.5s;
}

.page-leave-active {
  animation: bounce-out 0.5s;
}

</style>