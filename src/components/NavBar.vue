<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <!--My way-->
  <div class="relative top-3 flex justify-center mt-5">
    <nav class="bg-blue-500/30 border-1 border-blue-700/50 px-4 py-2 rounded-lg shadow-md">
      <ul class="flex text-white/90">
        <li><RouterLink to="/" src="/favicon.ico" class="px-4 hover:bg-gray-300/50 hover:rounded-lg"
          ><span class="pi pi-home"></span></RouterLink></li>
        <li><RouterLink to="/about" class="px-4 hover:bg-gray-300/50 hover:rounded-lg">about</RouterLink></li>
        <li><RouterLink to="/projects" class="px-4 hover:bg-gray-300/50 hover:rounded-lg">projects</RouterLink></li>
        <li><a href="/cv.pdf" class="px-4 hover:bg-gray-300/50 hover:rounded-lg">resume</a></li>
      </ul>
    </nav>
  </div>
</template>