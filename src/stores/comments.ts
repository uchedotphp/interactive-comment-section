import { ref } from 'vue'
import type { Comment, direction } from '@/components/types'
import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comments', () => {
  const comments = ref([] as Comment[])
  const replies = ref([])

  function setComments(payload: Comment[]) {
    comments.value = payload
  }

  function handleVote({ direction, id }: { direction: direction, id: number }) {
    const comment = comments.value.find(c => c.id === id)
    if (comment && comment.score !== undefined) {
      direction === 'up' ? comment.score++ : direction === 'down' ? comment.score-- : comment.score
    }
  }

  return { comments, replies, setComments, handleVote }
})