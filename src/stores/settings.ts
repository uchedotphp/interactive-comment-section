import { ref } from 'vue'
import type { AppSettings, User, server, theme } from '@/components/types'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  const userProfile = ref({} as User)
  const appSettings = ref({
    data: 'local',
    theme: 'system'
  } as AppSettings)

  function resetAppSettings({ data, theme }: { data: server, theme: theme }) {
    appSettings.value = {
      data,
      theme
    }
  }

  function createUser({ fullName, imgUrl }: { fullName: string, imgUrl: string }) {
    const uid = Math.random().toString()
    const profile: User = {
      uid,
      fullName,
      imgUrl
    }
    userProfile.value = profile
    updateUser()
  }

  function updateUser() {
    localStorage.setItem('userProfile', JSON.stringify(userProfile.value))
  }

  function getUser() {
    if (appSettings.value.data === 'local') {
      const profile = localStorage.getItem('userProfile') || null
      if (!profile) {
        createUser({
          fullName: 'default user',
          imgUrl: 'https://source.unsplash.com/random'
        })
      } else {
        userProfile.value = JSON.parse(profile)
      }

    } else if (appSettings.value.data === 'online') {
      // get details from firebase
    }
  }

  return { userProfile, appSettings, createUser, getUser, resetAppSettings, updateUser }
})