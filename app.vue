<script setup lang="ts">
const barHeight: number = 10;


</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :height="barHeight"/>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style scoped>

</style>