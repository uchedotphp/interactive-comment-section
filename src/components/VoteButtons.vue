<script setup lang="ts">
import IconPlus from './icons/IconPlus.vue'
import IconMinus from './icons/IconMinus.vue'
</script>

<template>
  <div class="vote-container">
    <button>
      <IconPlus />
    </button>

    <div class="count">12</div>

    <button>
      <IconMinus />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.vote-container {
  @apply flex flex-col items-center bg-very-light-gray rounded-md;
}

button,
.count {
  @apply px-2.5 text-sm;
}

button {
  @apply h-9 hover:text-soft-red;

  svg {
    @apply hover:stroke-moderate-blue;
  }
}

.count {
  @apply text-moderate-blue font-medium;
}
</style>
