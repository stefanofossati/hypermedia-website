<script setup lang="ts">
import {Person} from "~/model/Types";
import {useFetch} from "nuxt/app";

//@ts-ignore
const {data: team, error}: { data: Person[] } = await useFetch(
    '/api/team',
    {
      method: "GET",
    }
);

</script>

<template>
  <!-- page with team's profile pictures and names -->
  <div>
    <div class="flex flex-col items-center text-center">
      <span class="text-6xl font-bold m-10">Team</span>
      <div class="grid grid-cols-4 gap-5 w-full px-5">
        <div v-for="person in team">
          <NuxtLink :to="`/team/${person.name}`"
                    class="hover:animate-pulse flex flex-col items-center rounded-xl bg-gray-600 p-1.5 mb-10">
            <span class="text-6xl text-gray-300 my-3">{{ person.name }}</span>
            <img :src="person.img" :alt="person.name" class="rounded-b-xl h-96"/>
          </NuxtLink>
        </div>
      </div>
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