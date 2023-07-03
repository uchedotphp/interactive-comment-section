<script setup>
import { ref } from 'vue'
const colors = [
  { name: 'Pink', bgColor: 'bg-pink-500', selectedColor: 'ring-pink-500' },
  { name: 'Purple', bgColor: 'bg-purple-500', selectedColor: 'ring-purple-500' },
  { name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' },
  { name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
  { name: 'Yellow', bgColor: 'bg-yellow-500', selectedColor: 'ring-yellow-500' }
]

const selectedColor = ref(colors[1])

</script>

<template>
  <fieldset>
    <legend class="block text-sm font-medium leading-6 text-gray-900">Choose a label color</legend>
    <div class="mt-4 flex items-center space-x-3">
      <label
        class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-pink-500"
      >
        <input
          type="radio"
          name="color-choice"
          value="Pink"
          class="sr-only"
          aria-labelledby="color-choice-0-label"
        />
        <span id="color-choice-0-label" class="sr-only">Pink</span>
        <span
          aria-hidden="true"
          class="h-8 w-8 bg-pink-500 rounded-full border border-black border-opacity-10"
        ></span>
      </label>
      <label
        class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-purple-500"
      >
        <input
          type="radio"
          name="color-choice"
          value="Purple"
          class="sr-only"
          aria-labelledby="color-choice-1-label"
        />
        <span id="color-choice-1-label" class="sr-only">Purple</span>
        <span
          aria-hidden="true"
          class="h-8 w-8 bg-purple-500 rounded-full border border-black border-opacity-10"
        ></span>
      </label>
      <label
        class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-blue-500"
      >
        <input
          type="radio"
          name="color-choice"
          value="Blue"
          class="sr-only"
          aria-labelledby="color-choice-2-label"
        />
        <span id="color-choice-2-label" class="sr-only">Blue</span>
        <span
          aria-hidden="true"
          class="h-8 w-8 bg-blue-500 rounded-full border border-black border-opacity-10"
        ></span>
      </label>
      <label
        class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-green-500"
      >
        <input
          type="radio"
          name="color-choice"
          value="Green"
          class="sr-only"
          aria-labelledby="color-choice-3-label"
        />
        <span id="color-choice-3-label" class="sr-only">Green</span>
        <span
          aria-hidden="true"
          class="h-8 w-8 bg-green-500 rounded-full border border-black border-opacity-10"
        ></span>
      </label>
      <label
        class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-yellow-500"
      >
        <input
          type="radio"
          name="color-choice"
          value="Yellow"
          class="sr-only"
          aria-labelledby="color-choice-4-label"
        />
        <span id="color-choice-4-label" class="sr-only">Yellow</span>
        <span
          aria-hidden="true"
          class="h-8 w-8 bg-yellow-500 rounded-full border border-black border-opacity-10"
        ></span>
      </label>
    </div>
  </fieldset>
</template>

<style lang="scss" scoped></style>
