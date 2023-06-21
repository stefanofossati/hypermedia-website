<!-- About Us page -->
<template>
  <div class="bg-gray-200"> <!-- Page wrapper -->
    <div class="flex justify-center">
      <h1 class="text-4xl font-bold p-6">
        About Us
      </h1>
    </div>
    <div class="flex flex-col"> <!-- All rows wrapper -->
      <!-- v-timeline list of rows -->
      <!--
      <v-timeline side="end" align="start">
        <v-timeline-item dot-color="red" size="small">
          <AboutUsRow></AboutUsRow>
        </v-timeline-item>

      </v-timeline>
      -->
    </div>

  </div>
</template>

<script setup lang="ts">
import AboutUsRow from "~/components/AboutUsRow.vue";
</script>