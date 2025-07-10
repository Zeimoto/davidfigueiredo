<script setup>
</script>

<template>
  <div class="sticky top-3 flex justify-center pb-5 z-50">
   <nav class="bg-sky-900 border border-blue-950/50 rounded-lg shadow-2xl navbar glass-navbar">
      <ul class="flex flex-wrap justify-between sm:flex-nowrap gap-4">
        <li><a href="/" class="navbar-item">
          <span class="pi pi-home"></span>
        </a>
        </li>
        <li><a href="#about" class="navbar-item">about</a></li>
        <li><a href="#projects" class="navbar-item" active="#projects">projects</a></li>
        <li><a href="#experience" class="navbar-item" active="#experience">experience</a></li>
        <li><a href="/cv.pdf" target="_blank" class="navbar-item">resume</a></li>
      </ul>
    </nav>
  </div>
</template>
