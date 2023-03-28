<script setup lang="ts">
import { ref } from 'vue'
import Avatar from './Avatar.vue'
import ItemContainer from './ItemContainer.vue'
import BaseBtn from './BaseBtn.vue'
import { useCommentStore } from '../stores/comments'
const store = useCommentStore()

let comment = ref('')
let sendBtnLoading = ref(false)

function create() {
  sendBtnLoading.value = true
  try {
    store.createComment(comment.value)
  } catch (error) {
    console.log('something went wrong', error)
  }
  comment.value = ''
  sendBtnLoading.value = false
}
</script>

<template>
  <ItemContainer>
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
        <BaseBtn :loading="sendBtnLoading" @click="create"> Send </BaseBtn>
      </div>
    </div>
  </ItemContainer>
</template>

<style lang="scss" scoped>
.txt-area {
  @apply block rounded-lg w-full resize-none border-2 border-light-gray hover:border-moderate-blue ease-in placeholder:text-grayish-blue py-2 px-4 mobile:order-first tablet:order-none;
}
</style>
