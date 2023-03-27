<script setup>
import CommentIcon from './icons/CommentIcon.vue'
</script>

<template>
  <div>
    <CommentIcon class="commentIcon" />
    <div class="text-center text-grayish-blue">
      <p class="text">No comments</p>
      <em class="text-sm"> Add a comment below </em>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.commentIcon {
  @apply h-24 mx-auto;
}
.text {
  @apply font-medium;
}
</style>
