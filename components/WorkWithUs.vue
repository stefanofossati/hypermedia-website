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
                 v-on:blur="testWWUSurnameBox()" required>
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
                 placeholder="Your first name.." v-on:blur="testWWUNameBox()" required>
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
                 v-on:blur="testWWUEmailBox()" required>
          <p class="hidden" id="email_wwu_err_msg">Invalid Email format! Try something like: peter.parker@spiderman.com </p>
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
                 v-on:blur="testWWUPhoneBox()">
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
                    placeholder="Write something about yourself.. (optional)" style="height:200px" ></textarea>
        </div>
      </div>

      <!-- submit button -->
      <div class="flex justify-center">
        <button v-on:click="checkAndSendWWUForm()" type="submit" class="contact_us_form_submit_button">Submit</button>
        <button v-on:click="clearWWUForm()" type="reset" class="contact_us_form_submit_button">Clear</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
function testWWUSurnameBox() {
  const surname_elem = (<HTMLInputElement>document.getElementById('sname_wwu'));
  const surname_err_msg_elem = (<HTMLInputElement>document.getElementById('sname_wwu_err_msg'));
  const surname = surname_elem.value;

  if (checkName(surname)) {
    surname_elem.className = "contact_us_form_input_green";
    surname_err_msg_elem.className = "hidden";
    return true;
  } else {
    surname_elem.className = "contact_us_form_input_red"
    surname_err_msg_elem.className = "contact_us_form_error_message";
    return false;
  }
}

function testWWUNameBox() {
  const name_elem = (<HTMLInputElement>document.getElementById('fname_wwu'));
  const name_err_msg_elem = (<HTMLInputElement>document.getElementById('fname_wwu_err_msg'));
  const name = name_elem.value;

  if (checkName(name)) {
    name_elem.className = "contact_us_form_input_green";
    name_err_msg_elem.className = "hidden";
    return true;
  } else {
    name_elem.className = "contact_us_form_input_red"
    name_err_msg_elem.className = "contact_us_form_error_message";
    return false;
  }
}

function testWWUEmailBox() {
  const email_elem = (<HTMLInputElement>document.getElementById('email_wwu'));
  const email_err_msg_elem = (<HTMLInputElement>document.getElementById('email_wwu_err_msg'));
  const email = email_elem.value;

  if (checkEmail(email)) {
    email_elem.className = "contact_us_form_input_green";
    email_err_msg_elem.className = "hidden";
    return true;
  } else {
    email_elem.className = "contact_us_form_input_red"
    email_err_msg_elem.className = "contact_us_form_error_message";
    return false;
  }
}

function testWWUPhoneBox() {
  const phone_elem = (<HTMLInputElement>document.getElementById('phone_wwu'));
  const phone_err_msg_elem = (<HTMLInputElement>document.getElementById('phone_wwu_err_msg'));
  const phone = phone_elem.value;

  if (checkPhone(phone)) {
    phone_elem.className = "contact_us_form_input_green";
    phone_err_msg_elem.className = "hidden";
    return true;
  }
  if (phone == "") {
    phone_elem.className = "contact_us_form_input";
    phone_err_msg_elem.className = "hidden";
    return true;
  } else {
    phone_elem.className = "contact_us_form_input_red"
    phone_err_msg_elem.className = "contact_us_form_error_message";
    return false;
  }
}

function checkName(name: string) {
  if (name == null || name == "") {
    return false;
  }
  return name.match("^[a-zA-Z]+$");
}

function checkEmail(email: string) {
  if (email == null || email == "") {
    return false;
  }
  return email.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
}

function checkPhone(phone: string) {
  if (phone == null) {
    return true;
  }
  console.log(phone);
  return phone.match(/^[+]?[\\s./0-9]*[(]?[0-9]{1,4}[)]?[-\\s./0-9]*$/g);
}

function checkAndSendWWUForm() {
  if (testWWUSurnameBox() && testWWUNameBox() && testWWUEmailBox() && testWWUPhoneBox()) {
    alert("Form sent successfully!");
  }
}

function clearWWUForm() {
  const surname_elem = (<HTMLInputElement>document.getElementById('sname_wwu'));
  const name_elem = (<HTMLInputElement>document.getElementById('fname_wwu'));
  const email_elem = (<HTMLInputElement>document.getElementById('email_wwu'));
  const phone_elem = (<HTMLInputElement>document.getElementById('phone_wwu'));
  const brief_intro_elem = (<HTMLInputElement>document.getElementById('brief_intro_wwu'));

  surname_elem.value = "";
  name_elem.value = "";
  email_elem.value = "";
  phone_elem.value = "";
  brief_intro_elem.value = "";

  surname_elem.className = "contact_us_form_input";
  name_elem.className = "contact_us_form_input";
  email_elem.className = "contact_us_form_input";
  phone_elem.className = "contact_us_form_input";
  brief_intro_elem.className = "contact_us_form_input";

  const surname_err_msg_elem = (<HTMLInputElement>document.getElementById('sname_wwu_err_msg'));
  const name_err_msg_elem = (<HTMLInputElement>document.getElementById('fname_wwu_err_msg'));
  const email_err_msg_elem = (<HTMLInputElement>document.getElementById('email_wwu_err_msg'));
  const phone_err_msg_elem = (<HTMLInputElement>document.getElementById('phone_wwu_err_msg'));

  surname_err_msg_elem.className = "hidden";
  name_err_msg_elem.className = "hidden";
  email_err_msg_elem.className = "hidden";
  phone_err_msg_elem.className = "hidden";
}
</script>

<style scoped>

</style>