<template>
  <main>
      <p>Prova di input</p>
      <div class ="input-container">
          <input id="project-name" type = "text" placeholder="Name" v-model = "projectName">
          <button id="button-project" @click = "sendNewProject">Send </button>
      </div>
      <h1>Projects names</h1>
      <div id="card-container">
          <p v-for="project in projects"> <span>{{project.name}}</span></p>
      </div>
  </main>
</template>

<script setup lang="ts">
import {ref, useFetch} from "~/.nuxt/imports";

const {data : projects} =  await useFetch('api/projects', {method: "GET"}); // need to specify the type, we can use typescript for this part, strange behavior when the page is refreshed



const projectName: any = ref("")

async function sendNewProject(){
    if(projectName != ""){
        try{
            await $fetch('api/projects', {
                method: "POST",
                body: {
                    name: projectName.value
                }
            })
            projectName.value = "";
        }catch {
            alert("Errore di prova");
        }
    }
}

</script>

<style scoped>
    #card-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
    }
    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
    }

    .input-container {
        width: 90%;
        border-radius: 10px;
        border: 2px solid darkblue;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        gap: 20px;

        background-color: darkcyan;
        padding: 20px;
    }

</style>