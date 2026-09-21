<script setup lang="ts">
import { ref } from 'vue'
import { Badge } from '@/components/ui/badge'

const emails = ref([
  { from: 'Sarah Chen', subject: 'Q3 Design Review', preview: 'Hi team, the deck is ready for review.', time: '9:41 AM', unread: true },
  { from: 'Dev Team', subject: 'Deploy update', preview: 'The latest deployment is ready for staging.', time: '8:15 AM', unread: true },
  { from: 'Alex Kim', subject: 'API Integration', preview: 'REST API integration complete and tested.', time: 'Yesterday', unread: false },
])

function initials(name: string) {
  return name.split(' ').map(w => w[0]).join('')
}
</script>

<template>
  <div class="max-w-lg mx-auto rounded-lg border border-border overflow-hidden bg-background">
    <div class="p-3 border-b border-border bg-muted/30 flex items-center justify-between">
      <p class="text-sm font-medium">Inbox</p>
      <Badge variant="secondary">2 unread</Badge>
    </div>
    <div class="divide-y divide-border">
      <button
        v-for="email in emails"
        :key="email.subject"
        class="w-full text-left p-3 flex gap-3 items-start hover:bg-muted/50 transition-colors"
      >
        <div class="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-medium">
          {{ initials(email.from) }}
        </div>
        <div class="flex-1 min-w-0">
          <p :class="['text-sm truncate', email.unread ? 'font-semibold' : 'text-muted-foreground']">{{ email.subject }}</p>
          <p class="text-xs text-muted-foreground truncate">{{ email.preview }}</p>
        </div>
        <span class="text-xs text-muted-foreground shrink-0">{{ email.time }}</span>
      </button>
    </div>
  </div>
</template>
