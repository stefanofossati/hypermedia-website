<template>
  <div class = "container">
      <span class = "title">{{project_title}}</span>
      <span>"image"</span>
      <NuxtLink :to = "link">
        <button
                type="button"
                class="button"
                data-te-ripple-init
                data-te-ripple-color="light">
            Button
        </button>
      </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps(['project_title', 'image', 'link'])
</script>

<style>

.container
{
    display: flex;
    flex-flow: column;
    padding: 20px;
    border: 2px solid black;
    border-radius: 20px;
    width: fit-content;
    height: fit-content;
}

.title
{
    font-size: 2em;
    font-weight: bold;
}

.description{
    font-size: 1.5em;
}

.button{
    background-color: white;
    border-radius: 10px;
    color: black;
    padding: 10px 24px;
    text-align: center;
}

.button:hover{
    background-color: black;
    color: white;
}

</style>