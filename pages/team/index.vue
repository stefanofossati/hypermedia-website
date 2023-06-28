<script setup lang="ts">
//@ts-ignore
const {data: team}: { data: Person[] } = await useFetch(
    '/api/team',
    {
      method: "GET",
    }
);
</script>

<template>
  <div> <!-- page with team's profile pictures and names -->
    <div class="flex flex-col items-center text-center">
      <span class="text-3xl sm:text-4xl md:text-6xl font-bold m-10 dark:text-white">Team</span>
      <div
          class="flex flex-col items-center md:grid md:place-items-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full px-5">
        <div v-for="person in team">
          <NuxtLink :to="`/team/${person.name}_${person.surname}`"
                    class="group flex flex-col items-center rounded-xl bg-gray-600 hover:bg-gray-800 p-1.5 mb-10 w-fit text-xl sm:text-2xl md:text-3xl text-gray-300 relative">
            <span class="my-3">{{ person.name }} {{ person.surname }}</span>
            <lazy-nuxt-img :src="person.img" :alt="`${person.name} ${person.surname}'s profile pic`"
                           class="rounded-b-xl h-64 md:h-72 lg:h-96 w-full" placeholder="~/assets/xp.jpg"/>
            <div class="absolute bottom-0 bg-gray-600 group-hover:bg-gray-800 p-1.5 rounded-t-xl">
              <span class="my-3 font-bold">{{ person.role }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>