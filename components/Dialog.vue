<script setup lang="ts">
const props: Readonly<{
  dialogName?: string,
  question?: string,
  method?: Function,
  args?: any[],
}> = defineProps(['dialogName','question', 'method', 'args']);

function closeDialog(dialogName: string) {
  const dialog = document.getElementById(dialogName) as HTMLDialogElement;
  dialog.close();
}
</script>

<template>
  <div>
    <dialog :id="dialogName" class="text-sm sm:text-lg md:text-xl dark:bg-gray-300 rounded-xl">
      <form method="dialog">
        <div class="flex flex-col object-center text-center">
          <span class="m-2"> Are you sure to send an email?</span>
          <div class="flex flex-row justify-evenly text-white dark:text-gray-400 m-1">
            <button class="bg-gray-600 hover:bg-gray-900 rounded-xl p-1.5" v-on:click="closeDialog(dialogName)">Cancel</button>
            <button class="bg-gray-600 hover:bg-gray-900 rounded-xl p-1.5" v-on:click="method(...args)">Send
            </button>
          </div>
        </div>
      </form>
    </dialog>
  </div>
</template>

<style scoped>

</style>