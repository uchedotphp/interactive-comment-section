<script setup lang="ts">
import ItemContainer from './ItemContainer.vue'
import VoteButtons from './VoteButtons.vue'
import Avatar from './Avatar.vue'
import ReplyConent from './ReplyConent.vue'
</script>

<template>
  <ItemContainer>
    <div class="comment-body">
      <div class="vote">
        <VoteButtons />
        <div class="reply">
          <ReplyConent />
        </div>
      </div>

      <div class="content">
        <div class="avatar-time">
          <Avatar>
            <template #name> amyrobson </template>
          </Avatar>
          <div class="ml-3">1 month ago</div>
          <div class="ml-auto mobile:hidden tablet:block">
            <ReplyConent />
          </div>
        </div>

        <div class="comment">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia numquam eos fugit
          cumque ipsa, asperiores, optio voluptates, aperiam tempore laborum nesciunt illum. Atque
          quaerat beatae, adipisci neque sunt sit molestiae!
        </div>
      </div>
    </div>
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
