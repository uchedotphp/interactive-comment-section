<script setup lang="ts">
import Avatar from './Avatar.vue'
import ItemContainer from './ItemContainer.vue'
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
      ></textarea>

      <div class="flex items-center w-full tablet:w-auto pt-4 mobile:pt-0 flex-shrink-0">
        <Avatar class="block tablet:hidden mr-auto" />
        <button type="submit" class="btn-big">send</button>
      </div>
    </div>
  </ItemContainer>
</template>

<style lang="scss" scoped>
.txt-area {
  @apply block rounded-lg w-full resize-none border-2 border-light-gray hover:border-moderate-blue ease-in placeholder:text-grayish-blue py-2 px-4 mobile:order-first tablet:order-none;
}
</style>
