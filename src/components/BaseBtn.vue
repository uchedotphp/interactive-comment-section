<script setup lang="ts">
import ImgBuffer from './ImgBuffer.vue'
defineProps(['loading'])
const emit = defineEmits(['click'])
</script>

<template>
  <button :disabled="loading" class="btn-big" @click="emit('click')">
    <slot v-if="!loading" />
    <slot v-else name="loading">
      <ImgBuffer class="h-6" />
    </slot>
  </button>
</template>

<style lang="scss" scoped></style>
