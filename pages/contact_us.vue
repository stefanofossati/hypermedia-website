<!-- Contact Us page -->
<template>
  <div class="bg-gray-200 dark:bg-gray-800 flex flex-col items-center"> <!-- Page wrapper -->
    <div>
      <h1 class="page_title">Contact Us</h1>
    </div>
    <div> <!-- Tab -->
      <div class="flex flex-row justify-center mb-6">
        <button id="info" @click="tab_selection($event)" class="contact_us_tab_name_active">General Info</button>
        <button id="work" @click="tab_selection($event)" class="contact_us_tab_name">Work with Us</button>
        <button id="propose" @click="tab_selection($event)" class="contact_us_tab_name">Propose Project</button>
      </div>
      <div class="flex flex-row justify-center mb-8">
        <InfoBox id="info_box" class="w-full"></InfoBox>
        <WorkWithUs id="work_with_us" class="w-full hidden"></WorkWithUs>
        <ProposeProject id="propose_project" class="w-full hidden"></ProposeProject>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" >
function tab_selection(clicked: any) {
  const info_box: HTMLElement | null = document.getElementById("info_box");
  const work_with_us: HTMLElement | null = document.getElementById("work_with_us");
  const propose_project: HTMLElement | null = document.getElementById("propose_project");

  const info_tab: HTMLElement | null = document.getElementById("info");
  const work_tab: HTMLElement | null = document.getElementById("work");
  const propose_tab: HTMLElement | null = document.getElementById("propose");

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

  //console.log("A: " + info_tab!.className)
  info_tab!.className = info_tab!.className.replace("_active", "");
  work_tab!.className = work_tab!.className.replace("_active", "");
  propose_tab!.className = propose_tab!.className.replace("_active", "");

  clicked.currentTarget.className += "_active";
  //console.log("B: " + clicked.currentTarget.className);
}
</script>
