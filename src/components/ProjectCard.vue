<script setup>

defineProps({
  project: {
    type: Object,
  },
});
</script>
<template>
    <div class="flex flex-col items-center justify-center px-20">
      <img :src="project.media" width="500px"/>
    <h1 class="text-3xl">{{project.title}}</h1>
      <span>
      {{project.content}}
      </span>
    </div>
</template>
