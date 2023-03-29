<script setup lang="ts">
import { computed } from 'vue'
import ImgBuffer from './ImgBuffer.vue'
const propsData = defineProps({ loading: Boolean, disabled: Boolean })
const emit = defineEmits(['click'])
const disableBtn = computed(() => propsData.loading || Boolean(propsData.disabled))
</script>

<template>
  <button
    :disabled="disableBtn"
    class="btn-big"
    :class="{ disabled: disableBtn }"
    @click="emit('click')"
  >
    <slot v-if="!loading" />
    <slot v-else name="loading">
      <ImgBuffer class="h-6" />
    </slot>
  </button>
</template>

<style lang="scss" scoped>
.disabled {
  @apply cursor-not-allowed;
}
</style>
