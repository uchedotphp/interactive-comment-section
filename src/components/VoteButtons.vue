<script setup lang="ts">
import type { direction } from './types'
import { inject } from 'vue'
import IconPlus from './icons/IconPlus.vue'
import IconMinus from './icons/IconMinus.vue'

const count = inject('count')
const emit = defineEmits(['vote'])

function vote(direction: direction) {
  emit('vote', direction)
}
</script>

<template>
  <article class="vote-container">
    <button type="button group" data-cy="up-vote" @click="vote('up')">
      <IconPlus class="icon" />
    </button>

    <div class="count" data-cy="count">{{ count }}</div>

    <button type="button group" @click="vote('down')">
      <IconMinus class="icon" />
    </button>
  </article>
</template>

<style lang="scss" scoped>
.vote-container {
  @apply flex flex-col mobile:flex-row tablet:flex-col items-center bg-very-light-gray w-9 rounded-lg;
}

button,
.count {
  @apply px-2.5;
}

button {
  @apply h-9;

  // svg {
  //   @apply hover:stroke-moderate-blue;
  // }
}

.icon {
  @apply w-3 h-3 group-hover:stroke-moderate-blue;
}

.count {
  @apply text-moderate-blue font-medium;
}
</style>
