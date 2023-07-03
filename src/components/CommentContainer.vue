<script setup lang="ts">
import { direction } from './types'
import ItemContainer from './ItemContainer.vue'
import VoteButtons from './VoteButtons.vue'
import Avatar from './Avatar.vue'
import ReplyConent from './ReplyConent.vue'

import { useCommentStore } from '../stores/comments'
const store = useCommentStore()

import { provide, computed, ref } from 'vue'
const commentData = defineProps({ comment: Object })
const count = computed(() => commentData.comment.score)
provide('count', count)

function vote(direction: direction) {
  const id = commentData.comment.id
  store.handleVote({ direction, id })
}

const commentElement = ref<HTMLInputElement | null>(null)

const isTruncated = computed(() => {
  const container = commentElement.value
  return container?.scrollHeight ? container.scrollHeight > container.clientHeight : false
})

function expandView() {
  commentElement.value.classList.remove('truncate')
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
          <Avatar :img-url="comment.user.imgUrl">
            <template #name> {{ comment.user.fullName }} </template>
          </Avatar>
          <div class="ml-3">{{ comment.createdAt }}</div>
          <div class="ml-auto mobile:hidden tablet:block">
            <ReplyConent />
          </div>
        </div>

        <article class="comment" ref="commentElement" :class="{ truncate: isTruncated }">
          {{ comment.content }}
          <a
            v-if="isTruncated"
            href="#"
            @click.prevent="expandView"
            class="text-moderate-blue show-more"
          >
            show more
          </a>
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
  @apply space-y-3 w-full;
  .avatar-time {
    @apply flex items-center;
  }
  .comment {
    @apply mobile:order-first tablet:order-last break-all;
    // max-height: 5em; /* Set the maximum height to 3 lines */
    // overflow-y: hidden;
  }
  .show-more {
    display: inline-block;
    text-align: center;
    margin-top: 5px;
  }
}
</style>
