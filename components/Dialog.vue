<script setup lang="ts">
const props: Readonly<{
  dialogName?: string,
  question?: string,
  ok?: string,
  method?: Function,
  args?: any[],
}> = defineProps(['dialogName', 'question', 'ok', 'method', 'args']);

function closeDialog(dialogName: string) {
  const dialog = document.getElementById(dialogName) as HTMLDialogElement;
  dialog.close();
  dialog.classList.add("translate-y-96");
  dialog.classList.add("opacity-0");
}
</script>

<template>
  <div>
    <dialog :id="dialogName"
            class="text-sm sm:text-lg md:text-xl dark:bg-gray-300 rounded-xl transform translate-y-96 opacity-0 transition duration-500 ease-out">
      <form method="dialog">
        <div class="flex flex-col object-center text-center">
          <span class="m-2"> {{ question }}</span>
          <div class="flex flex-row justify-evenly text-white dark:text-gray-400 m-1">
            <button class="bg-gray-600 hover:bg-gray-900 rounded-xl p-1.5" v-on:click="closeDialog(dialogName)">Cancel
            </button>
            <button class="bg-gray-600 hover:bg-gray-900 rounded-xl p-1.5" v-on:click="method(...args)">{{ ok }}
            </button>
          </div>
        </div>
      </form>
    </dialog>
  </div>
</template>

<style scoped>

</style>