import { ref } from 'vue'
import type { Reply, direction, categories } from '@/components/types'
import { useSettingsStore } from './settings'
import { defineStore } from 'pinia'

export const useRepliesStore = defineStore('replies', () => {
    const replies = ref([] as Reply[])

    function setReplies(payload: Reply[]) {
        replies.value = payload
    }

    return { replies, setReplies }
})