<script setup>
</script>

<template>
  <div class="sticky top-3 flex justify-center pb-5">
    <nav class="bg-blue-500/20 border border-blue-700/50 px-4 py-2 rounded-lg shadow-2xl w-full max-w-xs">
      <ul class="flex flex-wrap justify-between sm:flex-nowrap text-white/90 gap-2">
        <li><a href="#" class=" hover:bg-gray-300/50 hover:rounded-lg block">
          <span class="pi pi-home"></span>
        </a>
        </li>
        <li><a href="#about" class="transform transition delay-50 duration-150 ease-in-out hover:bg-gray-300/50 rounded-lg">about</a></li>
        <li><a href="#projects" class=" hover:bg-gray-300/50 hover:rounded-lg" active="#projects">projects</a></li>
        <li><a href="#contacts" class=" hover:bg-gray-300/50 hover:rounded-lg">contacts</a></li>
        <li><a href="/cv.pdf" class=" hover:bg-gray-300/50 hover:rounded-lg">resume</a></li>
      </ul>
    </nav>
  </div>
</template>