<template>
  <main>
      <div>
          <p>name: <span>{{project.data.project_title}}</span></p>
          <p>short_description: <span>{{project.data.short_description}}</span></p>
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