<script setup lang="ts">
import { ref } from 'vue'

const LEN = 6
const digits = ref<string[]>(Array(LEN).fill(''))
const boxes = ref<HTMLInputElement[]>([])

function onInput(idx: number, e: Event) {
  const el = e.target as HTMLInputElement
  const val = el.value.replace(/\D/g, '')
  el.value = val
  digits.value[idx] = val
  if (val && idx < LEN - 1) boxes.value[idx + 1]?.focus()
}

function onKeydown(idx: number, e: KeyboardEvent) {
  if (e.key === 'Backspace' && !digits.value[idx] && idx > 0) {
    boxes.value[idx - 1]?.focus()
  }
}
</script>

<template>
  <div class="flex justify-center gap-2">
    <input
      v-for="(_, i) in LEN"
      :key="i"
      :ref="el => (boxes[i] = $event)"
      type="text"
      inputmode="numeric"
      maxlength="1"
      class="h-11 w-11 rounded-md border border-border bg-transparent text-center text-lg font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring"
      @input="onInput(i, $event)"
      @keydown="onKeydown(i, $event)"
    />
  </div>
</template>
