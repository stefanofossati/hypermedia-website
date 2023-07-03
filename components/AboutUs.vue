<script setup lang="ts">
const props: Readonly<{
  title?: string,
  subtitle?: string,
  paragraph?: string,
  image_url?: string,
  color?: string,
  icon?: string,
}> = defineProps(['title', 'subtitle', 'paragraph', 'image_url', 'color', 'icon']);
</script>

<template>
  <v-timeline-item dot-color="#A9A9A9"
                   fill-dot
                   size="large"
                   icon="mdi-email-outline"
                   :icon="'mdi-'+props.icon"> <!-- Single row wrapper -->
    <v-card class="mr-5">

      <v-card-item :class="'bg-'+props.color+'-500'">
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