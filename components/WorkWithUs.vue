<template>
  <div> <!-- Component wrapper -->
    <div>
      <h2 class="contact_us_form_title">Work with Us!</h2>
    </div>
    <div class="flex flex-col text-white"> <!-- Form -->
      <div class="contact_us_form_line">
        <span>Surname: </span>
        <input type="text" class="contact_us_form_input"/>
      </div>
      <div class="contact_us_form_line">
        <span>Name: </span>
        <input type="text" class="contact_us_form_input"/>
      </div>
      <div class="contact_us_form_line">
        <span>Description: </span>
        <input type="text" class="contact_us_form_input"/>
      </div>

      <!-- submit button -->
      <div class="flex justify-center">
        <button class="contact_us_form_submit_button">Submit</button>
        <button class="contact_us_form_submit_button">Clear</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkWithUs"
}
</script>

<style scoped>

</style>