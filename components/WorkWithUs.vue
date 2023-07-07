<template>
  <div> <!-- Component wrapper -->
    <form name="work_with_us_form" method="post" class="contact_us_box" onsubmit="return false"> <!-- Form -->
      <span class="contact_us_box_title">Work with Us!</span>

      <!-- surname -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="sname_wwu">Surname</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="text" id="sname_wwu" name="lastname" placeholder="Your surname.."
                 v-on:blur="testSurnameBox('wwu')" required>
          <p class="hidden" id="sname_wwu_err_msg">Invalid Surname! It must not be empty and it must not contain numbers
            or symbols.</p>
        </div>
      </div>

      <!-- first name -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="fname_wwu">Name</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="text" id="fname_wwu" name="firstname"
                 placeholder="Your first name.." v-on:blur="testNameBox('wwu')" required>
          <p class="hidden" id="fname_wwu_err_msg">Invalid Name! It must not be empty and it must not contain numbers or
            symbols.</p>
        </div>
      </div>

      <!-- email -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="email_wwu">Email</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="email" id="email_wwu" name="email" placeholder="Your email.."
                 v-on:blur="testEmailBox('wwu')" required>
          <p class="hidden" id="email_wwu_err_msg">Invalid Email format! Try something like:
            peter.parker@spiderman.com </p>
        </div>
      </div>

      <!-- phone number -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="phone_wwu">Phone Number</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="tel" id="phone_wwu" name="phone"
                 placeholder="Your phone number.. (optional)"
                 v-on:blur="testPhoneBox('wwu')">
          <p class="hidden" id="phone_wwu_err_msg">Invalid Phone Number! Please check again. </p>
        </div>
      </div>

      <!-- CV file -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="cv_file_wwu">CV File</label>
        </div>
        <div class="contact_us_form_input_col">
          <input type="file" id="cv_file_wwu" name="cv_file">
        </div>
      </div>

      <!-- brief introduction -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="brief_intro">Brief Introduction</label>
        </div>
        <div class="contact_us_form_input_col">
          <textarea class="contact_us_form_input" id="brief_intro_wwu" name="brief_intro"
                    placeholder="Write something about yourself.. (optional)" style="height:200px"></textarea>
        </div>
      </div>

      <!-- submit button -->
      <div class="flex justify-center">
        <button v-on:click="checkAndSendForm('wwu')" type="submit" class="contact_us_form_submit_button">Submit</button>
        <button v-on:click="clearForm('wwu')" type="reset" class="contact_us_form_submit_button">Clear</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// import typescript code from /composables/form_script.ts
import {
  checkAndSendForm,
  clearForm,
  testSurnameBox,
  testEmailBox,
  testNameBox,
  testPhoneBox
} from "/composables/form_script.ts";
</script>

<style scoped>

</style>