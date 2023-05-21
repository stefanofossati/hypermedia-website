<script setup lang="ts">
import {Person} from '~/model/Types';

const {person} = useRoute().params;
let personToUse: Person;
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
if (person == 'Pippo') {
  personToUse = person1;
} else {
  personToUse = person2;
}
</script>

<template>
  <!-- page with Pippo's profile pc and general infos -->
  <div class="flex flex-col items-center text-center">
    <span class="text-6xl font-bold m-10">{{ personToUse.name }}'s profile</span>
    <div class="w-full mb-10 flex flex-row justify-evenly">
      <img :src="personToUse.img" :alt="`${personToUse.name}'s profile pic`"
           class="border-4 rounded-full shadow-2xl h-96 aspect-square">
      <div class="flex flex-row justify-center items-stretch">
        <div class="flex flex-col items-stretch justify-between border-black border-r p-5">
          <span class="text-3xl font-bold">Name</span>
          <span class="text-3xl font-bold">age</span>
          <span class="text-3xl font-bold">Address</span>
          <span class="text-3xl font-bold">Email</span>
          <span class="text-3xl font-bold">Phone</span>
        </div>
        <div class="flex flex-col items-stretch justify-between p-5">
          <span class="text-xl">{{ personToUse.name }}</span>
          <span class="text-xl">{{ personToUse.age }}</span>
          <span class="text-xl">{{ personToUse.address }}</span>
          <span class="text-xl">{{ personToUse.email }}</span>
          <span class="text-xl">{{ personToUse.phone }}</span>
        </div>
      </div>
    </div>
    <span class="bottom-0 text-lg w-1/2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
    </span>

  </div>


</template>


<style scoped>

.v-enter-active, .v-leave-active {
  transition: opacity 3s;
}

</style>