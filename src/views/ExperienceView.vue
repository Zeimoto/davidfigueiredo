<script setup>
import { ref } from 'vue';
import ItemCard from '@/components/ItemCard.vue';
import jobsData from '@/assets/jobs.json';

const jobs = ref(jobsData.jobs);

</script>

<template>
  <ul id="experience" v-for="job in jobs" :key="job.title">
    <ItemCard :item="job"/>
  </ul>
</template>
