<script setup lang="ts">
const props: Readonly<{
  dialogName?: string,  // the name of the dialog
  question?: string,    // the question to ask the user
  ok?: string,          // the label of the button to confirm the action
  method?: Function,    // the method to call when the user confirms the action
  args?: any[],         // the arguments to pass to the method
}> = defineProps(['dialogName', 'question', 'ok', 'method', 'args']);

// close the dialog and reset the animation
function closeDialog(dialogName: string) {
  const dialog = document.getElementById(dialogName) as HTMLDialogElement;
  dialog.close();
  dialog.classList.add("translate-y-96");
  dialog.classList.add("opacity-0");
}
</script>

<template>
  <div> <!-- dialog to ask the user if he/she wants to follow the external link or not -->
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