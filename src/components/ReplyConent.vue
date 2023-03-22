<script setup lang="ts">
import ReplyIcon from './icons/ReplyIcon.vue'
</script>

<template>
  <div class="reply-content">
    <ReplyIcon />
    <span> Reply </span>
  </div>
</template>

<style lang="scss" scoped>
.reply-content {
  @apply flex items-center space-x-1.5;
  span {
    @apply font-medium text-moderate-blue;
  }
}
</style>
