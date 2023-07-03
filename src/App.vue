<script setup lang="ts">
import { data } from './utils/data'
import { onMounted, ref } from 'vue'
import type { Comment, Reply } from './components/types'

import { storeToRefs } from 'pinia'
import { useCommentStore } from './stores/comments'
import { useSettingsStore } from './stores/settings'
import { useRepliesStore } from './stores/replies'
const commentStore = useCommentStore()
const repliesStore = useRepliesStore()
const settingsStore = useSettingsStore()
// import { commentStore, repliesStore, settingsStore } from './composables/storeIndex'
const { comments } = storeToRefs(commentStore)
const pageLoading = ref(true)

onMounted(() => {
  pageLoading.value = true
  loadInitialization()
  const comments = data.comments as Comment[]
  const replies = data.replies as Reply[]
  commentStore.setComments(comments)
  repliesStore.setReplies(replies)
  pageLoading.value = false
})

function loadInitialization() {
  settingsStore.getUser()
}

import CommentBox from './components/CommentContainer.vue'
import CreateComment from './components/CreateComment.vue'
import NoComments from './components/NoComments.vue'
import ImgBuffer from './components/ImgBuffer.vue'
import UserSetting from './components/UserSetting.vue'
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

  <UserSetting />
</template>

<style lang="scss" scoped>
.home,
.footer {
  @apply max-w-xl mx-auto mobile:px-5;
}

.home {
  @apply relative min-h-screen pt-8 pb-52 ;
}

.comments {
  @apply space-y-4 mb-8;
}

.footer {
  @apply fixed bottom-0 mobile:px-5 left-0 right-0 bg-very-light-gray pb-8;
}
</style>
