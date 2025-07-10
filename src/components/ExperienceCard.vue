<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  item: {
    type: Object,
  },
})

const showImage = ref(false)

watchEffect(() => {
  showImage.value = !!props.item?.media
})

function onImageError(){
  showImage.value = false
}

</script>

<template>
    <div class="glass-content item-content rounded-lg p-6">
      <h1 class="text-3xl">{{item.title}}</h1>
      <img
      v-if="showImage"
      :src="item.media"
      width="500px"
      @error="onImageError"
      />
      <div >{{item.description}}</div>
    </div>
</template>
