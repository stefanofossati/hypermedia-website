<script setup lang="ts">

const props: Readonly<{
    info_name?: string,
    info_description?: string,
    svg_path?: string,
    class?: string,
    desc_bool?: boolean,
    button_name?: AreaProjectPreview[]
}> = defineProps(['info_name', 'info_description', 'svg_path', 'class', 'desc_bool', 'button_name']);
</script>

<template>
  <div >
    <div class="flex py-2 items-center w-full justify-center">
      <div class="flex lg:w-1/4 lg:justify-end items-center">
        <div class="h-16 w-16 dark:border-white border-black rounded-full border-2">
          <svg viewBox="0 -960 960 960" :class="props.class">
            <path :d="props.svg_path"/>
          </svg>
        </div>
      </div>
      <div class="flex lg:w-3/4 flex-col px-3">
        <p class="dark:text-white text-black text-lg">{{props.info_name}}</p>
        <div v-if="props.desc_bool" class="dark:text-gray-100 text-black-100 text-sm" >{{props.info_description}}</div>
        <NuxtLink v-else :to="'/areas/' + but.area" v-for="but in props.button_name" :alt="'Link to' + but.area_title ">
          <div class="flex flex-row"  >
            <div class="dark:text-white text-black hover:text-white rounded-lg px-1" :class="'bg-'+ but.area_color +'-500 '+'hover:bg-'+but.area_color+'-800'">{{but.area_title}}</div>
          </div>
        </NuxtLink>

      </div>
    </div>
  </div>

</template>

<style scoped>

</style>