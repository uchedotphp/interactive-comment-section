<script setup lang="ts">
import { data } from './utils/data'
import { onMounted, ref } from 'vue'
import type { Comment } from './components/types'

import { storeToRefs } from 'pinia'
import { useCommentStore } from './stores/comments'
const store = useCommentStore()
const { comments } = storeToRefs(store)
const pageLoading = ref(true)

onMounted(() => {
  pageLoading.value = true
  loadInitialization()
  const comments = data.comments as Comment[]
  store.setComments(comments)
  pageLoading.value = false
})

function loadInitialization() {
  //
}

import CommentBox from './components/CommentContainer.vue'
import CreateComment from './components/CreateComment.vue'
import NoComments from './components/NoComments.vue'
import ImgBuffer from './components/ImgBuffer.vue'
</script>

<template>
  <div class="home">
    <template v-if="!pageLoading">
      <main>
        <section v-if="comments.length" class="comments">
          <CommentBox v-for="comment in comments" :key="comment.id" :comment="comment" />
        </section>

        <section v-else>
          <NoComments />
        </section>
      </main>
      <div class="footer">
        <CreateComment />
      </div>
    </template>
    <ImgBuffer v-else />
  </div>
</template>

<style lang="scss" scoped>
.home,
.footer {
  @apply max-w-screen-tablet mx-auto mobile:px-5 break-all;
}

.home {
  @apply relative min-h-screen pt-8 pb-52 grid place-content-center;
}

.comments {
  @apply space-y-4 mb-8;
}

.footer {
  @apply fixed bottom-0 mobile:px-5 left-0 right-0 bg-very-light-gray pb-8;
}
</style>
