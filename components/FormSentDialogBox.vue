<script setup lang="ts">
import {email_address} from "~/composables/form_script";
// receive email value from showFormSentDialogBox function
const props: Readonly<{
  email?: string,
}> = defineProps(['email']);

function getEmailAddress() {
  return email_address;
}
</script>

<template>
  <div> <!-- Content wrapper -->
    <div class="contact_us_box">
      <h1 class="contact_us_box_title">Thanks for contacting us!</h1>
      <p>Your request was correctly sent</p>
      <p>We'll be in touch very soon</p>
      <!-- <p>We will contact you at: <span id="email_address">Hello</span></p> -->
    </div>
  </div>
</template>

<style scoped>

</style>