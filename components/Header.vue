<!-- Header of the page -->

<template>
  <header>
    <div
        class="fixed top-0 z-40 w-full h-1/7 backdrop-blur flex-none transition-colors duration-500 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div class="max-w-8xl mx-auto">
        <div class="py-4 border-b border-slate-900/10 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div class="relative flex items-center">
            <NuxtLink to="/" class=" h-20 flex-none overflow-hidden cursor-pointer">
              <img src="../assets/LogoDraft.svg" class="h-20 ml-32">
            </NuxtLink>
            <div class="relative hidden lg:flex items-center ml-auto">
              <nav class="text-lg leading-6 font-bold text-slate-700 dark:text-slate-200">
                <ul class="flex space-x-24 mt-2 mr-12">
                  <li>
                    <NuxtLink to="" class="hover:text-orange-500 cursor-pointer">All Areas</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/projects" class="hover:text-orange-500 cursor-pointer">All Projects</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/team" class="hover:text-orange-500 cursor-pointer">Team</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="" class="hover:text-orange-500 cursor-pointer">About Us</NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style>
* {
  font-family: 'Roboto', sans-serif;
}

/*.router-link-exact-active {*/
/*    color: red;*/
/*}*/
</style>

<script setup lang="ts">
</script>