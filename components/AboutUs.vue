<script setup lang="ts">
const props: Readonly<{
  title?: string,
  subtitle?: string,
  paragraph?: string,
  image_url?: string,
  color?: string
}> = defineProps(['title', 'subtitle', 'paragraph', 'image_url', 'color']);

const colorVariants = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  orange: 'bg-orange-500',
  purple: 'bg-purple-500',
}
</script>

<template>
  <v-timeline-item dot-color="#00FF00"> <!-- Single row wrapper -->
    <v-card class="mr-5">

      <v-card-item class="bg-blue-500">
        <v-card-title>
          <span class="about_us_title">{{props.title}}</span>
        </v-card-title>
        <v-card-subtitle>
          <span class="about_us_subtitle">{{ props.subtitle }}</span>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text class="about_us_row">
          <span class="about_us_paragraph">{{ props.paragraph }}</span>
        <img :src="props.image_url" class="about_us_image">
      </v-card-text>


    </v-card>
  </v-timeline-item>

</template>

<style scoped>

</style>