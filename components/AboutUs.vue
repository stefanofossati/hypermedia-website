<script setup lang="ts">
const props: Readonly<{
  title?: string,
  subtitle?: string,
  paragraph?: string,
  image_url?: string,
  color?: string,
  icon?: string,
  alternative_text?: string,
}> = defineProps(['title', 'subtitle', 'paragraph', 'image_url', 'color', 'icon', 'alternative_text']);

const color = [
  "bg-green-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-orange-500"
];
</script>

<template>
  <v-timeline-item dot-color="#A9A9A9" fill-dot size="large" :icon="'mdi-'+props.icon"> <!-- Single row wrapper -->
    <v-card class="mr-5">

      <v-card-item :class="'bg-'+props.color+'-500'">
        <v-card-title>
          <span class="about_us_title">{{ props.title }}</span>
        </v-card-title>
        <v-card-subtitle>
          <span class="about_us_subtitle">{{ props.subtitle }}</span>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text class="about_us_row">
        <span class="about_us_paragraph">{{ props.paragraph }}</span>
        <lazy-nuxt-img :src="props.image_url!" class="about_us_image" :alt="props.alternative_text!"/>
      </v-card-text>

    </v-card>
  </v-timeline-item>

</template>

<style scoped>

</style>