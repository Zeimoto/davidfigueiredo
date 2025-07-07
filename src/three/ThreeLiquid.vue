<script >
import { onMounted } from 'vue';
import runThreeScene from '@/three/scripts.js';

export default {
  setup() {
    onMounted(() => {
      runThreeScene();
    });
  }
}
</script>
<template>
  <div class="three-liquid-container"></div>
</template>

