<template>
  <div> <!-- Component wrapper -->
    <form class="contact_us_box"> <!-- Form -->
      <span class="contact_us_box_title">Work with Us!</span>

      <!-- surname -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="sname">Surname</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="text" id="sname" name="lastname" placeholder="Your surname.." required>
        </div>
      </div>

      <!-- first name -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="fname">Name</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="text" id="fname" name="firstname" placeholder="Your first name.." required>
        </div>
      </div>

      <!-- email -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="email">Email</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="email" id="email" name="email" placeholder="Your email.." required>
        </div>
      </div>

      <!-- phone number -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="phone">Phone Number</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="tel" id="phone" name="phone" placeholder="Your phone number..">
        </div>
      </div>

      <!-- CV file -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="cv_file">CV File</label>
        </div>
        <div class="contact_us_form_input_col">
          <input type="file" id="myFile" name="filename">
        </div>
      </div>

      <!-- brief introduction -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="brief_intro">Brief Introduction</label>
        </div>
        <div class="contact_us_form_input_col">
          <textarea class="contact_us_form_input" id="brief_intro" name="brief_intro" placeholder="Write something about yourself.." style="height:200px" required></textarea>
        </div>
      </div>

      <!-- submit button -->
      <div class="flex justify-center">
        <button type="submit" class="contact_us_form_submit_button">Submit</button>
        <button type="reset" class="contact_us_form_submit_button">Clear</button>
      </div>
    </form>
  </div>
</template>

<script>

</script>

<style scoped>

</style>