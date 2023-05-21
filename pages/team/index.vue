<script setup lang="ts">
import {Person} from "~/model/Types";

const person1: Person = {
  name: "Pippo",
  img: 'https://www.ventennipaperoni.com/wp-content/uploads/2020/03/volto-pippo-e1584113937806.jpg',
  age: 35,
  address: 'via Topolinia, 1',
  phone: '123456789',
  email: 'pippo@gmail.com'
};
const person2: Person = {
  name: 'Pluto',
  img: 'https://www.topolino.it/wp-content/uploads/2019/12/plutointera.png',
  age: 35,
  address: 'via Topolinia, 2',
  phone: '123456789',
  email: 'pluto@gmail.com'
};

const people: Person[] = [];

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    people.push(person1);
  } else {
    people.push(person2);
  }
}

</script>

<template>
  <!-- page with team's profile pictures and names -->
  <div class="flex flex-col items-center text-center">
    <span class="text-6xl font-bold m-10">Team</span>
    <div class="grid grid-cols-4 gap-5 w-full px-5">
      <div v-for="person in people">
        <NuxtLink :to="`/team/${person.name}`"
                  class="hover:animate-pulse flex flex-col items-center rounded-xl bg-gray-600 p-1.5">
          <span class="text-6xl text-gray-300 my-3">{{ person.name }}</span>
          <img :src="person.img" :alt="person.name" class="rounded-b-xl"/>
        </NuxtLink>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>