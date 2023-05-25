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
  <!-- page with Pippo's profile pc and general infos -->
  <div>
    <div class="flex flex-col items-center text-center">
      <span class="text-6xl font-bold m-10">{{ person.name }}'s profile</span>
      <div class="w-full mb-10 flex flex-row justify-evenly">
        <img :src="person.img" :alt="`${person.name}'s profile pic`"
             class="object-scale-down border-4 rounded-full shadow-2xl h-96 aspect-square">
        <div class="flex flex-row justify-center items-stretch">
          <div class="flex flex-col items-stretch justify-between border-black border-r p-5">
            <span class="text-3xl font-bold">Name</span>
            <span class="text-3xl font-bold">Age</span>
            <span class="text-3xl font-bold">Address</span>
            <span class="text-3xl font-bold">Email</span>
            <span class="text-3xl font-bold">Phone</span>
          </div>
          <div class="flex flex-col items-stretch justify-between p-5">
            <span class="text-xl">{{ person.name }}</span>
            <span class="text-xl">{{ person.age }}</span>
            <span class="text-xl">{{ person.address }}</span>
            <span class="text-xl">{{ person.email }}</span>
            <span class="text-xl">{{ person.phone }}</span>
          </div>
        </div>
      </div>
      <span class="bottom-0 text-lg w-1/2">
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