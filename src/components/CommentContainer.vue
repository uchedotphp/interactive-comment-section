<script setup lang="ts">
import { direction } from './types'
import ItemContainer from './ItemContainer.vue'
import VoteButtons from './VoteButtons.vue'
import Avatar from './Avatar.vue'
import ReplyConent from './ReplyConent.vue'

import { useCommentStore } from '../stores/comments'
const store = useCommentStore()

import { provide, computed } from 'vue'
const commentData = defineProps({ comment: Object })
const count = computed(() => commentData.comment.score)
provide('count', count)

function vote(direction: direction) {
  const id = commentData.comment.id
  store.handleVote({ direction, id })
}
</script>

<template>
  <ItemContainer>
    <section class="comment-body">
      <article class="vote">
        <VoteButtons @vote="vote" />
        <div class="reply">
          <ReplyConent />
        </div>
      </article>

      <section class="content">
        <div class="avatar-time">
          <Avatar>
            <template #name> amyrobson </template>
          </Avatar>
          <div class="ml-3">{{ comment.createdAt }}</div>
          <div class="ml-auto mobile:hidden tablet:block">
            <ReplyConent />
          </div>
        </div>

        <article class="comment">
          {{ comment.content }}
        </article>
      </section>
    </section>
  </ItemContainer>
</template>

<style lang="scss" scoped>
.comment-body {
  @apply flex tablet:flex-row gap-6 mobile:flex-col;
}

.vote {
  @apply flex items-center tablet:self-start mobile:order-last tablet:order-first;
  .reply {
    @apply ml-auto tablet:hidden;
  }
}

.content {
  @apply space-y-3;
  .avatar-time {
    @apply flex items-center;
  }
  .comment {
    @apply mobile:order-first tablet:order-last;
  }
}
</style>
