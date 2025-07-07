<script setup>

defineProps({
  item: {
    type: Object,
  },
});
</script>
<template>
    <div class="flex flex-col items-center justify-center px-20 py-20">
      <img :src="item.media" width="500px"/>
    <h1 class="text-3xl">{{item.title}}</h1>
      <span>
      {{item.description}}
      </span>
    </div>
</template>
