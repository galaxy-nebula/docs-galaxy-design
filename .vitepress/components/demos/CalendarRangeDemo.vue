<script setup lang="ts">
import { ref } from 'vue'
import { CalendarRange } from '@/components/ui/calendar-range'

const range = ref()
</script>

<template>
  <div class="rounded-lg border p-4">
    <p class="mb-4 text-sm text-muted-foreground">
      Range: {{ range?.start ? String(range.start) : '—' }} → {{ range?.end ? String(range.end) : '—' }}
    </p>
    <CalendarRange v-model="range" />
  </div>
</template>
