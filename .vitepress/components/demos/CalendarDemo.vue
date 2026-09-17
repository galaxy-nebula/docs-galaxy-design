<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@/components/ui/calendar'

const date = ref()
</script>

<template>
  <div class="rounded-lg border p-4 max-w-sm">
    <p class="mb-4 text-sm text-muted-foreground">
      Selected: {{ date ? String(date) : 'No date selected' }}
    </p>
    <Calendar v-model="date" />
  </div>
</template>
