<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ContactsView from '@/views/ContactsView.vue'
import Liquid from '@/three/ThreeLiquid.vue'
</script>

<template>
  <Liquid />
  <NavBar />
  <HomeView />
  <AboutView />
  <ProjectsView />
  <ExperienceView />
  <Footer />
</template>
