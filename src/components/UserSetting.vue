<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '../stores/settings'
const settings = useSettingsStore()
const { userProfile } = storeToRefs(settings)

const show = ref(true)
const enableUpdateBtn = ref(false)

watch(
  () => userProfile.value.fullName,
  () => (enableUpdateBtn.value = true)
)

function updateUserName() {
  settings.updateUser()
  enableUpdateBtn.value = false
}
import Avatar from './Avatar.vue'
</script>

<template>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 mobile:items-start mobile:p-5"
  >
    <div class="flex w-full flex-col items-center space-y-4 mobile:items-end">
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 mobile:translate-y-0 mobile:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 mobile:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="show"
          class="pointer-events-auto flex w-full max-w-xs rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="w-0 flex-1 px-4 py-2">
            <div class="flex items-center">
              <Avatar :img-url="userProfile.imgUrl" />
              <div class="ml-3 w-0 flex-1">
                <label for="name" class="block text-xs font-medium text-grayish-blue"
                  >Full Name</label
                >
                <input
                  v-model="userProfile.fullName"
                  type="text"
                  name="name"
                  id="name"
                  class="block w-full border-0 focus:outline-none p-0 text-gray-900 placeholder:text-grayish-blue focus:ring-0 mobile:text-sm mobile:leading-6"
                  placeholder="Annonymous"
                />
              </div>
            </div>
          </div>
          <div class="border-l overflow-hidden flex flex-col divide-y divide-gray-200">
            <div class="flex h-0 flex-1">
              <button
                type="button"
                class="flex w-full items-center justify-center rounded-none border-transparent px-4 text-xs font-medium text-moderate-blue hover:text-indigo-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                :class="{ 'cursor-not-allowed': !enableUpdateBtn || !userProfile.fullName.length }"
                :disabled="!enableUpdateBtn || !userProfile.fullName.length"
                @click="updateUserName"
              >
                Update
              </button>
            </div>
            <div class="flex h-0 flex-1">
              <button
                disabled
                type="button"
                class="flex w-full cursor-not-allowed items-center justify-center rounded-none border-transparent px-4 text-xs font-medium text-soft-red hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Settings
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
