<script setup>
import { ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import projectsData from '@/assets/projects.json';

const projects = ref(projectsData.projects);

</script>

<template>
  <ul id="projects" v-for="project in projects" :key="project.title">
    <ProjectCard :project="project"/>
  </ul>
</template>
