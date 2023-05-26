<script setup lang="ts">
const props: Readonly<{
    info_name?: string,
    info_description?: string,
    svg_path?: string
    class?: string
}> = defineProps(['info_name', 'info_description', 'svg_path', 'class']);
</script>

<template>
    <div class="flex py-2">
        <div class="flex w-1/4 justify-end items-center">
            <div class="h-16 w-16 dark:border-white border-black rounded-full border-2">
                <svg viewBox="0 -960 960 960" :class="props.class">
                    <path :d="props.svg_path"/>
                </svg>
            </div>
        </div>
        <div class="flex w-3/4 flex-col px-3">
            <p class="dark:text-white text-black text-lg">{{props.info_name}}</p>
            <p class="text-gray-300 text-sm">{{props.info_description}}</p>
        </div>

    </div>
</template>

<style scoped>

</style>