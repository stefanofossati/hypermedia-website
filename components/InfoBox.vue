<script setup lang="ts">
function showDialog(name: string) {
  const dialog = document.getElementById(name) as HTMLDialogElement;
  dialog.showModal();
  dialog.classList.remove("translate-y-96");
  dialog.classList.remove("opacity-0");
}

function openMaps(address: string) {
  window.open("https://www.google.com/maps/search/?q=" + address);
}

function emailTo(email: string) {
  window.open("mailto:" + email)!.close();
}

function callTo(phone: string) {
  window.open("tel:" + phone)!.close();
}

const address = "123 Innovation Street, San Francisco, USA"
const email = "info@startmeup.com"
const phone1 = "+1 123-456-7890"
const phone2 = "+1 987-654-3210"
</script>

<template>
  <div> <!-- Component wrapper -->
    <Dialog dialogName="maps" question="Are you sure to open maps?" :method="openMaps" ok="Open" :args="[address]"/>
    <Dialog dialogName="email" question="Are you sure to send an email?" :method="emailTo" ok="Send" :args="[email]"/>
    <Dialog dialogName="phone1" question="Are you sure to call?" :method="callTo" ok="Call" :args="[phone1]"/>
    <Dialog dialogName="phone2" question="Are you sure to call?" :method="callTo" ok="Call" :args="[phone2]"/>
    <div class="contact_us_box"> <!-- Info Box -->
      <span class="contact_us_box_title">General Info</span>
      <span class="mb-2">Address:
        <span v-on:click="showDialog('maps')" class="contact_us_info_line">{{ address }}</span>
      </span>
      <span class="mb-2">Main Phone:
        <span v-on:click="showDialog('phone1')" class="contact_us_info_line"> {{ phone1 }} </span>
      </span>
      <span class="mb-2">Secondary Phone:
        <span v-on:click="showDialog('phone2')" class="contact_us_info_line"> {{ phone2 }} </span>
      </span>
      <span class="mb-2">Email:
        <span v-on:click="showDialog('email')" class="contact_us_info_line">{{ email }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>