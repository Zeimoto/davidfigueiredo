<script setup>
</script>

<template>
  <div class="sticky top-3 flex justify-center pb-5">
    <nav class="bg-sky-900 border border-blue-950/50 px-4 py-2 rounded-lg shadow-2xl min-w-s">
      <ul class="flex flex-wrap justify-between sm:flex-nowrap gap-2">
        <li><a href="#" class=" hover:bg-gray-300/50 rounded-lg block px-2">
          <span class="pi pi-home"></span>
        </a>
        </li>
        <li><a href="#about" class="transform transition delay-50 duration-150 ease-in-out hover:bg-gray-300/50 rounded-lg px-2">about</a></li>
        <li><a href="#projects" class=" transform transition delay-50 duration-150 ease-in-out hover:bg-gray-300/50 rounded-lg" px-2 active="#projects">projects</a></li>
        <li><a href="#experience" class=" transform transition delay-50 duration-150 ease-in-out hover:bg-gray-300/50 rounded-lg px-2" active="#experience">experience</a></li>
        <li><a href="/cv.pdf" class=" transform transition delay-50 duration-150 ease-in-out
          hover:bg-gray-300/50 rounded-lg px-2">resume</a></li>
      </ul>
    </nav>
  </div>
</template>
