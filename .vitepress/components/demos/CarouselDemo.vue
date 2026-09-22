<script setup lang="ts">
import { ref } from 'vue'

const track = ref<HTMLElement | null>(null)

function scroll(dir: number) {
  track.value?.scrollBy({ left: dir * 260, behavior: 'smooth' })
}

const slides = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo']
</script>

<template>
  <div class="max-w-md mx-auto">
    <div
      ref="track"
      class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-lg border border-border p-4"
    >
      <div
        v-for="(s, i) in slides"
        :key="s"
        class="snap-center shrink-0 w-56 h-28 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center"
      >
        <span class="text-lg font-semibold">{{ i + 1 }}. {{ s }}</span>
      </div>
    </div>
    <div class="mt-3 flex justify-center gap-2">
      <button class="h-9 w-9 rounded-md border hover:bg-accent" @click="scroll(-1)">‹</button>
      <button class="h-9 w-9 rounded-md border hover:bg-accent" @click="scroll(1)">›</button>
    </div>
  </div>
</template>
