<script setup lang="ts">
const props: Readonly<{
    info_name?: string,
    info_description?: string,
    svg_path?: string
}> = defineProps(['info_name', 'info_description', 'svg_path']);
</script>

<template>
    <div class="flex py-2">
        <div class="flex w-1/4 justify-end items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="fill-white-900 justify-center border-white rounded-full border-2">
                <path :d="props.svg_path"/>
            </svg>


        </div>
        <div class="flex w-3/4 flex-col px-3">
            <p>{{props.info_name}}</p>
            <p>{{props.info_description}}</p>
        </div>

    </div>
</template>

<style scoped>

</style>