<script setup lang="ts"></script>

<template>
  <a href="#" class="group block flex-shrink-0">
    <div class="flex items-center">
      <div>
        <img
          class="inline-block h-9 w-9 rounded-full"
          src="https://source.unsplash.com/random"
          alt="random unsplash image"
        />
      </div>
      <p v-show="$slots.name" class="name"><slot name="name" /></p>
    </div>
  </a>
</template>

<style scoped>
.name {
  @apply ml-4 text-dark-blue font-medium;
}
</style>
