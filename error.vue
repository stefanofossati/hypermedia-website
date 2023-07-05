<template>
    <NuxtLayout>
        <main id="main_error" class="flex flex-col w-fit self-center h-full py-10">
            <h1 class="text-2xl  text-black dark:text-white py-20">Oops, something went wrong with this page</h1>

            <NuxtLink to = "/">
              <div class="flex flex-row py-15 bg-black hover:bg-slate-800 dark:bg-white dark:hover:bg-gray-500 px-4 rounded-lg ">
                <svg viewBox="0 -960 960 960" class="dark:text-black text-white fill-current h-12 w-12">
                  <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/>
                </svg>
                <h1 class="text-xl self-center text-center">
                  Go back to the home page
                </h1>
              </div>
            </NuxtLink>
        </main>
    </NuxtLayout>
</template>

<style>
</style>