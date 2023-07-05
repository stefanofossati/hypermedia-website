<template>
  <div> <!-- Component wrapper -->
    <form name="propose_project_form" method="post" class="contact_us_box" onsubmit="return false"> <!-- Form -->
      <span class="contact_us_box_title">Propose Project!</span>

      <!-- surname -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="sname_pp">Surname</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="text" id="sname_pp" name="lastname" placeholder="Your surname.."
                 v-on:blur="testSurnameBox('pp')" required>
          <p class="hidden" id="sname_pp_err_msg">Invalid Surname! It must not be empty and it must not contain numbers
            or symbols.</p>
        </div>
      </div>

      <!-- first name -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="fname">Name</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="text" id="fname_pp" name="firstname"
                 placeholder="Your first name.."
                 v-on:blur="testNameBox('pp')" required>
          <p class="hidden" id="fname_pp_err_msg">Invalid Name! It must not be empty and it must not contain numbers or
            symbols.</p>
        </div>
      </div>

      <!-- email -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="email">Email</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="email" id="email_pp" name="email" placeholder="Your email.."
                 v-on:blur="testEmailBox('pp')" required>
          <p class="hidden" id="email_pp_err_msg">Invalid Email format! Try something like:
            peter.parker@spiderman.com </p>
        </div>
      </div>

      <!-- phone number -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="phone">Phone Number</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="tel" id="phone_pp" name="phone"
                 placeholder="Your phone number.. (optional)"
                 v-on:blur="testPhoneBox('pp')">
          <p class="hidden" id="phone_pp_err_msg">Invalid Phone Number! Please check again. </p>
        </div>
      </div>

      <!-- project name -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="proj_name">Project Name</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="text" id="proj_name_pp" name="project_name"
                 placeholder="The project name.."
                 v-on:blur="testProjNameBox('pp')" required>
          <p class="hidden" id="proj_name_pp_err_msg">Invalid Project Name! It must not be empty. </p>
        </div>
      </div>

      <!-- project description -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="proj_desc">Project Description</label>
        </div>
        <div class="contact_us_form_input_col">
          <textarea class="contact_us_form_input" type="text" id="proj_desc_pp" name="project_desc"
                    placeholder="The project description.. (optional)"
                    style="height:200px"></textarea>
        </div>
      </div>

      <!-- submit button -->
      <div class="flex justify-center">
        <input v-on:click="checkAndSendForm('pp')" type="submit" class="contact_us_form_submit_button" value="Submit">
        <input v-on:click="clearForm('pp')" type="reset" class="contact_us_form_submit_button" value="Clear">
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// import typescript code from /composables/form_script.ts
import {
  checkAndSendForm,
  clearForm,
  testNameBox,
  testSurnameBox,
  testEmailBox,
  testPhoneBox,
  testProjNameBox
} from "~/composables/form_script.ts";


</script>

<style scoped>

</style>