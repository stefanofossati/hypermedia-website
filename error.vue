<template>
  <Head>
    <Title>Error</Title>
  </Head>
  <NuxtLayout>
    <main id="main_error" class="flex flex-col w-screen h-screen self-center py-10 items-center justify-center">
      <div class="flex flex-col align-center items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             class="w-10 h-10 md:w-24 md:h-24 stroke-black dark:stroke-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
        <h1 class="text-3xl md:text-5xl text-black dark:text-white text-center mt-4">Ooops!</h1>
        <div class="flex flex-row align-center items-center justify-center">
          <h1 class="text-xl md:text-3xl text-black dark:text-white py-16 text-center mr-4">
            Something went wrong with this page</h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 md:w-10 md:h-10 fill-black dark:fill-white">
            <path fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm-4.34 7.964a.75.75 0 01-1.061-1.06 5.236 5.236 0 013.73-1.538 5.236 5.236 0 013.695 1.538.75.75 0 11-1.061 1.06 3.736 3.736 0 00-2.639-1.098 3.736 3.736 0 00-2.664 1.098z"
                  clip-rule="evenodd"/>
          </svg>
        </div>
      </div>

      <NuxtLink to="/">
        <div class="flex flex-row py-15 bg-black hover:bg-slate-800 dark:bg-white dark:hover:bg-gray-500 px-4 rounded-lg justify-center">
          <svg viewBox="0 -960 960 960" class="dark:text-black text-white fill-current h-12 w-12">
            <path
                d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/>
          </svg>
          <h1 class="text-lg md:text-xl text-white dark:text-black self-center text-center">Go back to the home page</h1>
        </div>
      </NuxtLink>
    </main>
  </NuxtLayout>
</template>

<style>
</style>
<script setup lang="ts">
</script>