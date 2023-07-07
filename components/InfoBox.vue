<script setup lang="ts">
function showDialog(name: string) {
  const dialog = document.getElementById(name) as HTMLDialogElement;
  dialog.showModal();
}

function openMaps(address: string) {
  window.open("https://www.google.com/maps/search/?q=" + address);
}

const address = "123 Innovation Street, San Francisco, CA 94107, USA"
const email = "info@startmeup.com"
</script>

<template>
  <div> <!-- Component wrapper -->
    <Dialog dialogName="maps" question="Are you sure to open maps?" :method="openMaps" :args="[address]"/>
    <div class="contact_us_box"> <!-- Info Box -->
      <span class="contact_us_box_title">General Info</span>
      <!-- <span>Address: <button v-on:click="showDialog('maps')" class="underline break-normal whitespace-normal ">{{ address }}</button></span> -->
      <span class="mb-2"> Address: {{ address }}</span>
      <span class="mb-2">Main Phone: +1 123-456-7890</span>
      <span class="mb-2">Secondary Phone: +1 987-654-3210</span>
      <span>Address: {{ email }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>