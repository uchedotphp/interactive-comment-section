<script setup lang="ts">
import { ref } from 'vue'
import LabelIcon from './icons/LabelIcon.vue'
const emit = defineEmits(['category'])

const labels = ['unlabelled', 'engineering', 'marketing', 'design', 'human resources']
const selectedLabel = ref('unlabelled')
let showOptions = ref(false)

function toggle() {
  showOptions.value = !showOptions.value
}

function selectOption(label: string) {
  selectedLabel.value = label
  showOptions.value = false
  emit('category', selectedLabel.value)
}
</script>

<template>
  <button
    @click="toggle"
    class="bg-light-gray p-2 whitespace-nowrap rounded-full inline-flex items-center space-x-2 relative text-sm mobile:px-3"
  >
    <LabelIcon
      class="h-5 w-5 flex-shrink-0"
      :class="[selectedLabel !== 'unlabelled' ? 'text-moderate-blue' : 'text-light-grayish-blue']"
    />
    <span
      class="capitalize text-sm truncate"
      :class="{ 'font-medium': selectedLabel !== 'unlabelled' }"
    >
      {{ selectedLabel }}
    </span>
  </button>
  <ul
    class="absolute bottom-16 z-10 max-h-56 w-52 overflow-auto rounded-lg bg-white py-2 text-base shadow ring-1 ring-moderate-blue ring-opacity-5 focus:outline-none sm:text-sm"
    v-show="showOptions"
  >
    <li
      @click="selectOption(label)"
      v-for="(label, index) in labels"
      :key="index"
      role="option"
      class="capitalize block cursor-pointer w-full text-left py-2 px-4 text-sm hover:bg-very-light-gray hover:text-moderate-blue"
      :class="{ 'text-moderate-blue': selectedLabel === label }"
    >
      {{ label }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
