<script setup lang="ts">
import ReplyIcon from './icons/ReplyIcon.vue'
</script>

<template>
  <article class="reply-content group">
    <ReplyIcon />
    <span> Reply </span>
  </article>
</template>

<style lang="scss" scoped>
.reply-content {
  @apply flex items-center space-x-1.5 cursor-pointer hover:text-very-light-gray;
  svg {
    @apply group-hover:stroke-white;
  }
  span {
    @apply font-medium text-moderate-blue group-hover:text-very-light-gray;
  }
}
</style>
