<script setup lang="ts">

const props: Readonly<{
  area_title?: string,
}> = defineProps(['area_title']);
</script>

<template>
  <div>
    <div class="rounded-full w-4 h-4 bg-orange-500 hover:bg-orange-800
                border-solid border-2 border-gray-200
                active:bg-orange-700 cursor-pointer">
    </div>
  </div>
</template>

<style>
</style>