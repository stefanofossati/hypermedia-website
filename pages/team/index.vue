<script setup lang="ts">
// method to fetch all people data from the server
//@ts-ignore
const {data: team}: { data: Person[] } = await useFetch(
    '/api/team',
    {
      method: "GET",
    }
);
</script>

<template>
  <div class="grow"> <!-- page with team's profile pictures, names and role -->
    <Head>
      <Title>Team</Title>
    </Head>
    <div class="flex flex-col items-center text-center">
      <h1 class="page_title">Team</h1>
      <div
          class="flex flex-col items-center md:grid md:place-items-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-full px-5 mb-10">
        <div v-for="person in team">
          <NuxtLink :to="`/team/${person.name}_${person.surname}`"
                    class="group relative flex flex-col items-center w-fit text-xl sm:text-2xl md:text-3xl text-gray-300">
            <lazy-nuxt-img :src="person.img" :alt="`${person.name} ${person.surname}'s profile pic`"
                           class="h-64 md:h-72 lg:h-96 w-full relative group-hover:border-8 transition-all duration-200 ease-linear border-gray-600 rounded-xl"
                           placeholder="blur" blurDataUrl="~/assets/LogoDraft.png"/>
            <div
                class="absolute bottom-0 group-hover:bottom-1.5 transition-all duration-200 ease-linear rounded-b-xl backdrop-blur-3xl group-hover:border-x-8 border-gray-600 w-full p-1.5 ">
              <div class="font-bold">
                <span>{{ person.name }} {{ person.surname }}</span>
              </div>
              <div>
                <span>{{ person.role }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>