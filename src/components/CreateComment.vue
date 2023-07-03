<script setup lang="ts">
import { computed, ref } from 'vue'
import Avatar from './Avatar.vue'
import ItemContainer from './ItemContainer.vue'
import BaseBtn from './BaseBtn.vue'
import CategoryLabels from './CategoryLabels.vue'
import { categories } from './types'

import { useCommentStore } from '../stores/comments'
const store = useCommentStore()

let comment = ref('')
let selectedCategory = ref('unlabelled' as categories)
let sendBtnLoading = ref(false)

const disableSendBtn = computed(() => comment.value.length < 20)

function create() {
  sendBtnLoading.value = true
  try {
    store.createComment({ comment: comment.value, category: selectedCategory.value })
  } catch (error) {
    console.log('something went wrong', error)
  }
  comment.value = ''
  sendBtnLoading.value = false
}
</script>

<template>
  <ItemContainer class="relative">
    <div class="flex flex-col tablet:flex-row items-start tablet:space-x-4">
      <Avatar class="hidden tablet:block" />

      <textarea
        rows="3"
        name="comment"
        id="comment"
        class="txt-area"
        placeholder="Add your comment..."
        v-model="comment"
      ></textarea>

      <div class="flex items-center w-full tablet:w-auto pt-4 mobile:pt-0 flex-shrink-0">
        <Avatar class="block tablet:hidden mr-auto" />
        <BaseBtn :disabled="disableSendBtn" :loading="sendBtnLoading" @click="create">
          Send
        </BaseBtn>
      </div>
    </div>

    <div class="mt-4 flex justify-end">
      <CategoryLabels @category="selectedCategory = $event" />
    </div>
  </ItemContainer>
</template>

<style lang="scss" scoped>
.txt-area {
  @apply block rounded-lg w-full resize-none border-2 border-light-gray hover:border-moderate-blue ease-in placeholder:text-grayish-blue py-2 px-4 mobile:order-first tablet:order-none;
}
</style>
