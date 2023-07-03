// import { storeToRefs } from 'pinia'
import { createPinia } from 'pinia'
const pinia = createPinia()

import { useCommentStore } from '../stores/comments'
import { useSettingsStore } from '../stores/settings'
import { useRepliesStore } from '../stores/replies'
import { createApp } from 'vue'


import App from '../App.vue'
const app = createApp(App)
app.use(pinia)

export const commentStore = useCommentStore()
export const repliesStore = useRepliesStore()
export const settingsStore = useSettingsStore()
