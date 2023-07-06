<script setup lang="ts">
const nameSurname: string[] = (useRoute().params.person as string).split("_");

//@ts-ignore
const {data: person, error}: { data: Person } = await useFetch(
    "/api/team/" + nameSurname[0] + "_" + nameSurname[1],
    {
      method: "GET",
    }
);

function showDialog(name: string) {
  const dialog = document.getElementById(name) as HTMLDialogElement;
  dialog.showModal();
  dialog.classList.remove("translate-y-96");
  dialog.classList.remove("opacity-0");
}

function emailTo(email: string) {
  window.open("mailto:" + email)!.close();
}

function callTo(phone: string) {
  window.open("tel:" + phone)!.close();
}

function openMaps(address: string) {
  window.open("https://www.google.com/maps/search/?q=" + address);
}
</script>

<template>
  <div> <!-- page with Pippo's profile pc and general infos -->
    <Head>
      <Title>{{ person.name }} {{person.surname}}</Title>
    </Head>
    <Dialog dialogName="email" question="Are you sure to send an email?" ok="Send" :method="emailTo"
            :args="[person.email]"/>
    <Dialog dialogName="phone" question="Are you sure to call?" ok="Call" :method="callTo" :args="[person.phone]"/>
    <Dialog dialogName="maps" question="Are you sure to open maps?" ok="Open" :method="openMaps"
            :args="[person.address]"/>
    <div class="flex flex-col items-center text-center" id="page">
      <div class="w-full flex flex-row place-items-center">
        <BackButton route="/team" label="Back to Team" class=""/>
        <span class="w-full text-3xl sm:text-4xl md:text-6xl font-bold dark:text-white mt-4 sm:mt-8 md:mt-12 ">
          {{ person.name }} {{ person.surname }}'s profile
        </span>
      </div>
      <div class="w-full mb-10 flex lg:flex-row flex-col justify-evenly items-center">
        <lazy-nuxt-img :src="person.img" :alt="`${person.name} ${person.surname}'s profile pic`"
                       class="object-scale-down border-4 dark:border-gray-600 rounded-full shadow-2xl h-52 w-52 sm:h-72 sm:w-72 md:h-96 md:w-96 mb-10 lg:mb-0 aspect-square"/>
        <div class="flex flex-row justify-center items-stretch bg-white dark:bg-gray-900 rounded-3xl">
          <div class="person-info border-black dark:border-white border-r font-bold dark:text-white">
            <span>Name</span>
            <span>Surname</span>
            <span>Role</span>
            <span>Age</span>
            <span>Address</span>
            <span>Email</span>
            <span>Phone</span>
          </div>
          <div class="person-info dark:text-gray-400">
            <span>{{ person.name }}</span>
            <span>{{ person.surname }}</span>
            <span>{{ person.role }}</span>
            <span>{{ person.age }}</span>
            <button v-on:click="showDialog('maps')" class="underline">{{ person.address }}</button>
            <button v-on:click="showDialog('email')" class="underline">{{ person.email }}</button>
            <button v-on:click="showDialog('phone')" class="underline">{{ person.phone }}</button>
          </div>
        </div>
      </div>
      <div class="flex flex-col dark:text-gray-400 bottom-0 text-sm md:text-lg w-3/4 pb-10 text-left">
        <ul class="list-disc">
          <li v-for="sentence in person.pitch" class="my-1">{{ sentence }}</li>
        </ul>
      </div>
    </div>
  </div>


</template>


<style>

</style>