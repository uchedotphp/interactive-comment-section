<script setup lang="ts">
import CommentContainer from './components/CommentContainer.vue'
import CreateComment from './components/CreateComment.vue'
</script>

<template>
  <div class="max-w-xl mx-auto relative min-h-screen pt-8">
    <main>
      <section class="comments">
        <CommentContainer v-for="n in 8" :key="n" />
      </section>

      <footer class="footer">
        <CreateComment />
      </footer>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.comments {
  @apply space-y-4 mb-8;
}

.footer {
  @apply sticky bottom-0 left-0 right-0 bg-very-light-gray pb-8;
}
</style>
