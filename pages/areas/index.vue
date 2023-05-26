<!-- All Areas -->
<template>
    <div class="flex flex-col items-center justify-evenly snap-mandatory snap-y">
        <section id="green" class="w-screen h-screen snap-start">
            <img src="../../assets/eolico.jpg" class="object-cover w-screen h-full"/>
        </section>
        <section id="ai" class="w-screen h-screen snap-start">
            <img src="../../assets/artificial intelligence.jpg" class="object-cover w-screen h-full"/>
        </section>
        <section id="hc" class="w-screen h-screen snap-start">
            <img src="../../assets/healthcare.jpg" class="object-cover w-screen h-full"/>
        </section>
    </div>

    <div id="nav" class="fixed w-screen bottom-12 bg-scroll flex flex-row justify-center space-x-24">
        <div class="rounded-full w-4 h-4 bg-orange-500 hover:bg-orange-700 border-solid border-2 border-gray-200 active:bg-orange-700 cursor-pointer"
            onclick="document.getElementById('green').scrollIntoView();">
        </div>
        <div class="rounded-full w-4 h-4 bg-orange-500 hover:bg-orange-700 border-solid border-2 border-gray-200 active:bg-orange-700 cursor-pointer"
            onclick="document.getElementById('ai').scrollIntoView();">
        </div>
        <div class="rounded-full w-4 h-4 bg-orange-500 hover:bg-orange-700 border-solid border-2 border-gray-200 active:bg-orange-700 cursor-pointer"
            onclick="document.getElementById('hc').scrollIntoView();">
        </div>
    </div>
</template>

<style>
</style>

<script setup lang="ts">
    window.onscroll = function(ev) {
    const elem: HTMLElement | null = document.getElementById("nav")!;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 270) {    
        elem.style.display = "none";
    }
    else{
        elem.style.display = "flex";
    }
};
</script>