<!-- Contact Us page -->
<template>
  <div class="bg-gray-400"> <!-- Page wrapper -->
    <div class="flex justify-center">
      <h1 class="text-4xl font-bold p-6">Contact Us</h1>
    </div>
    <div class="w-full"> <!-- Tab -->
      <div class="flex flex-row justify-center mb-6">
        <button id="info" @click="tab_selection($event)" class="contact_us_tab_name">General Info</button>
        <button id="work" @click="tab_selection($event)" class="contact_us_tab_name">Work with Us</button>
        <button id="propose" @click="tab_selection($event)" class="contact_us_tab_name">Propose Project</button>
      </div>
      <div>
        <InfoBox id="info_box" class="tabcontent"></InfoBox>
        <WorkWithUs id="work_with_us" class="tabcontent hidden"></WorkWithUs>
        <ProposeProject id="propose_project" class="tabcontent hidden"></ProposeProject>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function tab_selection(clicked: any) {
  const info_box: HTMLElement | null = document.getElementById("info_box");
  const work_with_us: HTMLElement | null = document.getElementById("work_with_us");
  const propose_project: HTMLElement | null = document.getElementById("propose_project");
  //console.log("A: " + clicked.currentTarget.id);

  if (clicked.currentTarget.id == "info") {
    info_box!.style.display = "block";
    work_with_us!.style.display = "none";
    propose_project!.style.display = "none";
    //console.log("info clicked");
  } else if (clicked.currentTarget.id == "work") {
    info_box!.style.display = "none";
    work_with_us!.style.display = "block";
    propose_project!.style.display = "none";
    //console.log("work_with_us clicked");
  } else if (clicked.currentTarget.id == "propose") {
    info_box!.style.display = "none";
    work_with_us!.style.display = "none";
    propose_project!.style.display = "block";
    //console.log("propose_project clicked");
  }

  var i, tablinks;
  tablinks = document.getElementsByClassName("contact_us_tab_name");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    console.log("B: " + tablinks[i].className);
  }

  clicked.currentTarget.className += " active";
}
</script>