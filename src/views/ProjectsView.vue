<script setup>
import { ref, onMounted } from 'vue'
import ItemCard from '@/components/ItemCard.vue'
import projectsData from '@/assets/projects.json'

const projects = ref(projectsData.projects);

onMounted(async () => {
  try {
    const response = await fetch('/projects.json')
    projects.value = await response.json()
  } catch (error) {
    console.error('Error loading projects:',error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div id="projects" class="opacity-95 rounded-lg shadow-2xl project-card glass-content">
    <h1 class="text-4xl">Projects</h1>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.title">
        <ItemCard :item="project" />
      </div>
    </div>
  </div>
</template>
