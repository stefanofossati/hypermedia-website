<!-- Contact Us page -->
<template>
  <div>
    <Head>
      <Title>Contact Us</Title>
    </Head>

    <div class="flex flex-col items-center lg:my-14"> <!-- Page wrapper -->
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
          <FormSentDialogBox id="form_sent_dialog_box" class="w-full hidden"></FormSentDialogBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {tab_selection} from '~/composables/form_script.ts'

</script>
