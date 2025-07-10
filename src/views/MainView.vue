<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ContactsView from '@/views/ContactsView.vue'
import Liquid from '@/three/ThreeLiquid.vue'

const scrollY = ref(0)
const showScrollEffect = ref(false)

const handleScroll = () => {
  scrollY.value = window.scrollY

  showScrollEffect.value = scrollY.value > 300

}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, {passive: true})
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <NavBar />
  <div
    class="transition-opacity duration-400"
    :class="{ 'opacity-0' : showScrollEffect }"
  >
    <Liquid />
    <HomeView />
  </div>
  <AboutView />
  <ProjectsView />
  <ExperienceView />
  <Footer />
</template>
