<script setup lang="ts">
import { ref } from 'vue'
import ImgBuffer from './ImgBuffer.vue'

defineProps({ id: Number, String, undefined, imgUrl: String })

const isImgLoaded = ref(false)
function onImgLoad() {
  isImgLoaded.value = true
}
</script>

<template>
  <a href="#" class="group block flex-shrink-0">
    <div class="flex items-center">
      <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-full bg-gray-100 h-9 relative">
        <img
          v-if="imgUrl"
          @load="onImgLoad"
          class="img"
          :src="imgUrl"
          alt="random unsplash image"
          :class="{ blur: !isImgLoaded }"
        />
        <img
          v-else
          @load="onImgLoad"
          class="img"
          :src="`https://source.unsplash.com/random/${id ? Number(id) : ''}`"
          alt="random unsplash image"
          :class="{ blur: !isImgLoaded }"
        />
        <ImgBuffer v-show="!isImgLoaded" class="absolute" />
      </div>
      <p v-show="$slots.name" class="name"><slot name="name" /></p>
    </div>
  </a>
</template>

<style scoped>
.name {
  @apply ml-4 text-dark-blue font-medium capitalize;
}

.img {
  @apply object-cover object-center w-9 h-9;
}
</style>
