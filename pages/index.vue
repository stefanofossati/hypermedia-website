<!-- Home page -->
<script setup lang="ts">

</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-evenly h-full">
      <img src="../assets/i3lab.png" alt="i3lab"/>
      <button class="text-6xl hover:animate-bounce rounded-xl border-black border-2 bg-blue-500">
        First Draft
      </button>
    </div>
  </div>
</template>

<style>
.page-enter-active {
  animation: bounce-in 1s;
}

.page-leave-active {
  animation: bounce-out 1s;
}
</style>
