<script setup>
import { ref } from 'vue';
import ItemCard from '@/components/ItemCard.vue';
import projectsData from '@/assets/projects.json';

const projects = ref(projectsData.projects);

</script>

<template>
  <ul id="projects" v-for="project in projects" :key="project.title">
    <ItemCard :item="project"/>
  </ul>
</template>
