<!-- Default layout used by all the page -->
<template>
  <div>
    <main class="flex flex-col bg-gray-200 dark:bg-gray-950">
      <div class="h-20 lg:h-20 w-full bg-white" id="topBar"/>
      <Header class="flex-none"/>
      <slot class="flax-auto"/>
      <Footer class="flex-none"/>
    </main>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from {
  transform: translate(100%, 0);
  scale: 0.8;
}

.page-leave-to {
  transform: translate(-100%, 0);
  scale: 0.8;
}

html{
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
</style>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

//make the header disappear when scroll down and appear on scroll up
//duplication of code since here there is a 80px height that would cause a white pad on the screen
var lastScroll = 0;
window.addEventListener("scroll", function(){
  var scrollTop = this.window.scrollY || document.documentElement.scrollTop;
  if(scrollTop > lastScroll){
    document.getElementById("topBar")?.classList.add("-translate-y-20");
  }
  else{
    document.getElementById("topBar")?.classList.remove("-translate-y-20");
  }
  lastScroll = scrollTop;
}) 
</script>