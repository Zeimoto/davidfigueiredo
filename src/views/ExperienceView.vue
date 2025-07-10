<script setup>
import { ref } from 'vue';
import ItemCard from '@/components/ItemCard.vue';
import jobsData from '@/assets/jobs.json';

const jobs = ref(jobsData.jobs);

</script>

<template>
  <div id="projects" class="px-4 py-2 opacity-95 rounded-lg shadow-2xl experience-card glass-content">
    <h1 class="text-4xl">Experience</h1>
      <ul id="experience" v-for="job in jobs" :key="job.title">
        <ItemCard :item="job"/>
      </ul>
  </div>
</template>
