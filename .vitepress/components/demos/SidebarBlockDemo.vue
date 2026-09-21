<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { label: 'Dashboard', active: true },
  { label: 'Projects', active: false },
  { label: 'Team', active: false },
  { label: 'Analytics', active: false },
  { label: 'Settings', active: false },
])
</script>

<template>
  <div class="flex max-w-md mx-auto rounded-lg border border-border overflow-hidden bg-background" style="min-height: 260px;">
    <nav class="w-44 border-r border-border bg-muted/30 p-2 shrink-0">
      <p class="text-xs font-medium text-muted-foreground px-2 py-2 mb-2 uppercase tracking-wider">Workspace</p>
      <div
        v-for="item in items"
        :key="item.label"
        :class="['flex items-center gap-2 px-3 py-2 rounded-md text-sm mb-0.5 cursor-pointer transition-colors', item.active ? 'bg-accent font-medium' : 'hover:bg-accent/50']"
      >
        <span>{{ item.label }}</span>
      </div>
    </nav>
    <main class="flex-1 p-4">
      <p class="text-sm text-muted-foreground">Main content area</p>
    </main>
  </div>
</template>
