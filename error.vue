<template>
  <Head>
    <Title>Error</Title>
  </Head>
    <NuxtLayout>
        <main id="main_error" class="grow flex flex-col w-full justify-center items-center h-full py-10">
            <h1 class="text-2xl text-black dark:text-white pb-20">Oops, something went wrong with this page</h1>

            <NuxtLink to = "/">
              <div class="flex flex-row p-2 text-white dark:text-black bg-black hover:bg-gray-600 dark:bg-gray-200 dark:hover:bg-gray-400 rounded-xl justify-center items-center shadow-2xl">
                <svg viewBox="0 -960 960 960" class="fill-current h-12 w-12">
                  <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/>
                </svg>
                <h1 class="text-xl self-center text-center font-bold">
                  Go back to the home page
                </h1>
              </div>
            </NuxtLink>
        </main>
    </NuxtLayout>
</template>

<style>
</style>