<template>
  <main>
      <div>
          <p>name: <span>{{project.data.name}}</span></p>
          <p>timestemp: <span>{{project.data.prova}}</span></p>
      </div>
  </main>
</template>

<script setup lang="ts">
import {useRoute, useFetch} from "~/.nuxt/imports";

  const route = useRoute()
  const id = route.params.id
  // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
  const { data: project } = await useFetch('/api/projects/' + id)
</script>

<style scoped>

</style>