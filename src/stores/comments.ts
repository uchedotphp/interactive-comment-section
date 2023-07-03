import { ref } from 'vue'
import type { Comment, direction, categories } from '@/components/types'
import { useSettingsStore } from './settings'
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

  function createComment({ comment, category = 'unlabelled' }: { comment: string, category: categories }) {
    const settings = useSettingsStore()
    try {
      if (comment.length) {
        const id = comments.value[comments.value.length - 1].id + 1
        const newComment: Comment = {
          id,
          content: comment,
          score: 0,
          createdAt: new Date().getTime(),
          category,
          user: settings.userProfile
        }
        comments.value.push(newComment)
      }
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }

  return { comments, replies, setComments, handleVote, createComment }
})