<script setup lang="ts">
import { ref } from 'vue'

const files = ref([
  {
    path: 'src/auth/service.ts',
    additions: 12,
    deletions: 4,
    status: 'pending',
    open: false,
    lines: [
      '  async login(email: string) {',
      '-   return this.http.post("/login", { email });',
      '+   const res = await this.http.post("/login", { email });',
      '+   return this.withSession(res);',
      '  }',
    ],
  },
  {
    path: 'src/auth/types.ts',
    additions: 3,
    deletions: 0,
    status: 'pending',
    open: true,
    lines: [
      '+export interface Session {',
      '+  token: string;',
      '+  expiresAt: Date;',
      '+}',
    ],
  },
])

function setStatus(path: string, status: string) {
  const file = files.value.find(f => f.path === path)
  if (file) file.status = status
}
</script>

<template>
  <div class="max-w-lg mx-auto space-y-3 rounded-lg border border-border bg-background p-4">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-sm font-semibold">Review changes</h3>
        <p class="text-xs text-muted-foreground">
          {{ files.length }} files ·
          <span class="text-emerald-600 dark:text-emerald-400">+{{ files.reduce((s, f) => s + f.additions, 0) }}</span>
          <span class="text-red-600 dark:text-red-400">−{{ files.reduce((s, f) => s + f.deletions, 0) }}</span>
          · {{ files.filter(f => f.status === 'pending').length }} pending
        </p>
      </div>
      <div class="flex gap-2">
        <button class="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">Accept all</button>
        <button class="rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-accent">Reject all</button>
      </div>
    </div>
    <div class="space-y-2">
      <div v-for="file in files" :key="file.path" class="overflow-hidden rounded-md border">
        <div class="flex items-center gap-2 bg-muted/40 px-3 py-2">
          <button class="min-w-0 flex-1 text-left" @click="file.open = !file.open">
            <span class="block truncate text-sm font-medium">{{ file.path.split('/').pop() }}</span>
            <span class="block truncate text-xs text-muted-foreground">{{ file.path.split('/').slice(0, -1).join('/') || 'root' }}</span>
          </button>
          <span class="font-mono text-xs text-emerald-600 dark:text-emerald-400">+{{ file.additions }}</span>
          <span class="font-mono text-xs text-red-600 dark:text-red-400">−{{ file.deletions }}</span>
          <div class="flex gap-1">
            <button
              :class="['rounded px-2 py-1 text-xs font-medium', file.status === 'accepted' ? 'bg-emerald-600 text-white' : 'border hover:bg-accent']"
              @click="setStatus(file.path, 'accepted')"
            >✓</button>
            <button
              :class="['rounded px-2 py-1 text-xs font-medium', file.status === 'rejected' ? 'bg-red-600 text-white' : 'border hover:bg-accent']"
              @click="setStatus(file.path, 'rejected')"
            >✕</button>
          </div>
        </div>
        <div v-if="file.open" class="overflow-x-auto font-mono text-xs">
          <div
            v-for="(line, i) in file.lines"
            :key="i"
            :class="['whitespace-pre px-3 py-0.5', line.startsWith('+') ? 'bg-emerald-500/10 text-emerald-900 dark:text-emerald-200' : line.startsWith('-') ? 'bg-red-500/10 text-red-900 dark:text-red-200' : 'text-muted-foreground']"
          >{{ line || ' ' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
