<script setup lang="ts">
import { ref } from 'vue'

const tasks = ref([
  { id: '1', label: 'Analyze repository structure', status: 'completed', detail: '' },
  { id: '2', label: 'Locate failing tests', status: 'completed', detail: '3 files' },
  { id: '3', label: 'Apply fixes to parser', status: 'running', detail: '' },
  { id: '4', label: 'Re-run test suite', status: 'pending', detail: '' },
])

const toolEvents = [
  { id: 'e1', name: 'bash', summary: 'npm test -- parser', time: '14:02:11' },
  { id: 'e2', name: 'read_file', summary: 'src/lib/parser.ts', time: '14:02:19' },
  { id: 'e3', name: 'edit_file', summary: '3 hunks applied', time: '14:02:33' },
]

const completed = tasks.value.filter(t => t.status === 'completed').length
const progress = Math.round((completed / tasks.value.length) * 100)
</script>

<template>
  <div class="max-w-md mx-auto rounded-lg border border-border overflow-hidden bg-background">
    <div class="flex items-center justify-between border-b border-border px-4 py-3">
      <div class="flex items-center gap-2">
        <span class="text-sm font-semibold">Codex</span>
        <span class="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-medium text-blue-600">Working…</span>
      </div>
      <span class="text-xs text-muted-foreground">2m 14s</span>
    </div>
    <div class="px-4 pt-3">
      <div class="mb-1 flex justify-between text-xs text-muted-foreground">
        <span>{{ completed }}/{{ tasks.length }} tasks</span>
        <span>{{ progress }}%</span>
      </div>
      <div class="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div class="h-full rounded-full bg-primary transition-all" :style="{ width: progress + '%' }" />
      </div>
    </div>
    <div class="divide-y divide-border/50 py-1">
      <div v-for="task in tasks" :key="task.id" class="flex items-start gap-3 px-3 py-2">
        <span :class="['mt-0.5 font-mono text-xs', task.status === 'completed' ? 'text-emerald-500' : task.status === 'running' ? 'text-blue-500 animate-pulse' : 'text-muted-foreground']">
          {{ task.status === 'completed' ? '✓' : task.status === 'running' ? '◌' : '○' }}
        </span>
        <div class="min-w-0 flex-1">
          <p :class="['text-sm', task.status === 'pending' || task.status === 'completed' ? 'text-muted-foreground' : '']">{{ task.label }}</p>
          <p v-if="task.detail" class="truncate text-xs text-muted-foreground">{{ task.detail }}</p>
        </div>
      </div>
    </div>
    <div class="space-y-1 border-t border-border px-3 py-2 font-mono text-xs">
      <div v-for="ev in toolEvents" :key="ev.id" class="flex gap-2">
        <span class="text-muted-foreground">{{ ev.time }}</span>
        <span class="text-foreground">{{ ev.name }}</span>
        <span class="min-w-0 flex-1 truncate text-muted-foreground">{{ ev.summary }}</span>
      </div>
    </div>
  </div>
</template>
