<template>
  <div> <!-- Component wrapper -->
    <form name="propose_project_form" method="post" class="contact_us_box" onsubmit="return false"> <!-- Form -->
      <span class="contact_us_box_title" v-on:click="testPPSurnameBox()">Propose Project!</span>

      <!-- surname -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="sname_pp">Surname</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="text" id="sname_pp" name="lastname" placeholder="Your surname.."
                 v-on:blur="testPPSurnameBox()" required>
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
                 v-on:blur="testPPNameBox()" required>
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
                 v-on:blur="testPPEmailBox()" required>
          <p class="hidden" id="email_pp_err_msg">Invalid Email format! Try something like: peter.parker@spiderman.com </p>
        </div>
      </div>

      <!-- phone number -->
      <div class="contact_us_form_row">
        <div class="contact_us_form_label">
          <label for="phone">Phone Number</label>
        </div>
        <div class="contact_us_form_input_col">
          <input class="contact_us_form_input" type="tel" id="phone_pp" name="phone" placeholder="Your phone number.. (optional)"
                 v-on:blur="testPPPhoneBox()">
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
                 v-on:blur="testPPProjNameBox()" required>
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
        <input v-on:click="checkAndSendPPForm()" type="submit" class="contact_us_form_submit_button" value="Submit">
        <input v-on:click="clearPPForm()" type="reset" class="contact_us_form_submit_button" value="Clear">
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
function testPPSurnameBox() {
  const surname_elem = (<HTMLInputElement>document.getElementById('sname_pp'));
  const surname_err_msg_elem = (<HTMLInputElement>document.getElementById('sname_pp_err_msg'));
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

function testPPNameBox() {
  const name_elem = (<HTMLInputElement>document.getElementById('fname_pp'));
  const name_err_msg_elem = (<HTMLInputElement>document.getElementById('fname_pp_err_msg'));
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

function testPPEmailBox() {
  const email_elem = (<HTMLInputElement>document.getElementById('email_pp'));
  const email_err_msg_elem = (<HTMLInputElement>document.getElementById('email_pp_err_msg'));
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

function testPPPhoneBox() {
  const phone_elem = (<HTMLInputElement>document.getElementById('phone_pp'));
  const phone_err_msg_elem = (<HTMLInputElement>document.getElementById('phone_pp_err_msg'));
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

function testPPProjNameBox() {
  const proj_name_elem = (<HTMLInputElement>document.getElementById('proj_name_pp'));
  const proj_name_err_msg_elem = (<HTMLInputElement>document.getElementById('proj_name_pp_err_msg'));
  const proj_name = proj_name_elem.value;

  if (proj_name != "") {
    proj_name_elem.className = "contact_us_form_input_green";
    proj_name_err_msg_elem.className = "hidden";
    return true;
  } else {
    proj_name_elem.className = "contact_us_form_input_red"
    proj_name_err_msg_elem.className = "contact_us_form_error_message";
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
  return phone.match(/^[+]?[\\s./0-9]*[(]?[0-9]{1,4}[)]?[-\\s./0-9]*$/g);
}

function checkAndSendPPForm() {
  if (testPPSurnameBox() && testPPNameBox() && testPPEmailBox() && testPPPhoneBox() && testPPProjNameBox()) {
    alert("Form sent successfully!");
  }
}

function clearPPForm() {
  const surname_elem = (<HTMLInputElement>document.getElementById('sname_pp'));
  const name_elem = (<HTMLInputElement>document.getElementById('fname_pp'));
  const email_elem = (<HTMLInputElement>document.getElementById('email_pp'));
  const phone_elem = (<HTMLInputElement>document.getElementById('phone_pp'));
  const proj_name_elem = (<HTMLInputElement>document.getElementById('proj_name_pp'));
  const proj_desc_elem = (<HTMLInputElement>document.getElementById('proj_desc_pp'));

  surname_elem.value = "";
  name_elem.value = "";
  email_elem.value = "";
  phone_elem.value = "";
  proj_name_elem.value = "";
  proj_desc_elem.value = "";

  surname_elem.className = "contact_us_form_input";
  name_elem.className = "contact_us_form_input";
  email_elem.className = "contact_us_form_input";
  phone_elem.className = "contact_us_form_input";
  proj_name_elem.className = "contact_us_form_input";
  proj_desc_elem.className = "contact_us_form_input";

  const surname_err_msg_elem = (<HTMLInputElement>document.getElementById('sname_pp_err_msg'));
  const name_err_msg_elem = (<HTMLInputElement>document.getElementById('fname_pp_err_msg'));
  const email_err_msg_elem = (<HTMLInputElement>document.getElementById('email_pp_err_msg'));
  const phone_err_msg_elem = (<HTMLInputElement>document.getElementById('phone_pp_err_msg'));
  const proj_name_err_msg_elem = (<HTMLInputElement>document.getElementById('proj_name_pp_err_msg'));

  surname_err_msg_elem.className = "hidden";
  name_err_msg_elem.className = "hidden";
  email_err_msg_elem.className = "hidden";
  phone_err_msg_elem.className = "hidden";
  proj_name_err_msg_elem.className = "hidden";
}
</script>

<style scoped>

</style>