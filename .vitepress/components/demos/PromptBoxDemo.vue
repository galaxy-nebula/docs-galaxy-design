<script setup lang="ts">
import { ref, computed } from 'vue'

const value = ref('')
const commands = [
  { name: 'fix', description: 'Fix the selected problem' },
  { name: 'explain', description: 'Explain the selected code' },
  { name: 'tests', description: 'Generate unit tests' },
]

const activeCommand = computed(() => {
  if (!value.value.startsWith('/')) return null
  const q = value.value.slice(1).toLowerCase()
  return commands.find(c => c.name.toLowerCase().startsWith(q)) || null
})

const attachments = ref([
  { id: '1', name: 'parser.ts', size: '4.2 KB' },
])
</script>

<template>
  <div class="max-w-lg mx-auto rounded-lg border border-border bg-background overflow-hidden">
    <div v-if="attachments.length" class="flex flex-wrap gap-1.5 border-b border-border px-3 pt-3">
      <span v-for="att in attachments" :key="att.id" class="flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs">
        <span class="max-w-[160px] truncate font-medium">{{ att.name }}</span>
        <span class="text-muted-foreground">{{ att.size }}</span>
      </span>
    </div>
    <textarea
      v-model="value"
      rows="2"
      placeholder="Type a message…"
      class="block w-full resize-none bg-transparent px-3 py-3 text-sm outline-none placeholder:text-muted-foreground"
    />
    <div v-if="activeCommand" class="border-t border-border bg-muted/30 px-3 py-1.5 text-xs text-muted-foreground">
      <span class="font-mono font-medium text-foreground">/{{ activeCommand.name }}</span>
      — {{ activeCommand.description }}
    </div>
    <div class="flex items-center justify-between border-t border-border px-3 py-2">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">gpt-4.1</span>
        <span class="text-[10px] text-muted-foreground">Enter to send · Shift+Enter newline</span>
      </div>
      <button class="h-8 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground">Send</button>
    </div>
  </div>
</template>
