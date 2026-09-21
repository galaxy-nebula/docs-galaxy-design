<script setup lang="ts">
import { ref } from 'vue'

const messages = ref([
  { id: '1', role: 'user', content: 'Add input validation to the signup form' },
  {
    id: '2',
    role: 'assistant',
    content: 'I will update the validators and add error messages.',
    toolCalls: [
      { id: 't1', name: 'read_file', args: 'src/forms/signup.ts', result: '86 lines', status: 'completed' },
      { id: 't2', name: 'edit_file', args: 'src/forms/signup.ts', result: '4 changes applied', status: 'completed' },
      { id: 't3', name: 'run_tests', args: 'npm test -- signup', status: 'running' },
    ],
  },
])

const input = ref('')
const busy = ref(false)

function send() {
  if (!input.value.trim()) return
  messages.value.push({ id: String(Date.now()), role: 'user', content: input.value })
  input.value = ''
  busy.value = true
  setTimeout(() => {
    messages.value.push({ id: String(Date.now()), role: 'assistant', content: 'Done — validation added and tests pass.' })
    busy.value = false
  }, 1500)
}
</script>

<template>
  <div class="max-w-sm mx-auto rounded-lg border border-border overflow-hidden bg-background">
    <div class="flex items-center justify-between border-b border-border px-4 py-3">
      <div class="flex items-center gap-2">
        <span class="text-sm font-semibold">Copilot</span>
        <span class="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">gpt-4.1</span>
      </div>
      <span :class="['h-2 w-2 rounded-full', busy ? 'animate-pulse bg-blue-500' : 'bg-emerald-500']" />
    </div>
    <div class="h-64 overflow-y-auto p-4 space-y-4">
      <div v-for="msg in messages" :key="msg.id" :class="['flex gap-3', msg.role === 'user' ? 'justify-end' : 'justify-start']">
        <div v-if="msg.role === 'assistant'" class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border bg-primary/10 text-xs font-semibold">AI</div>
        <div class="max-w-[80%] space-y-2">
          <div :class="['rounded-lg px-3 py-2 text-sm', msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted']">
            <p class="whitespace-pre-wrap">{{ msg.content }}</p>
          </div>
          <div v-for="tc in msg.toolCalls || []" :key="tc.id" class="rounded-md border bg-muted/40 px-3 py-2 text-xs flex items-center gap-2">
            <span :class="['font-mono', tc.status === 'completed' ? 'text-emerald-500' : 'text-blue-500 animate-pulse']">
              {{ tc.status === 'completed' ? '✓' : '◌' }}
            </span>
            <span class="font-medium">{{ tc.name }}</span>
            <span class="ml-auto text-muted-foreground truncate max-w-[120px]">{{ tc.args }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-end gap-2 border-t border-border p-3">
      <input
        v-model="input"
        placeholder="Ask anything…"
        class="h-9 flex-1 rounded-md border bg-transparent px-3 text-sm outline-none"
        @keyup.enter="send"
      />
      <button
        :class="['h-9 rounded-md px-3 text-sm font-medium', busy ? 'bg-destructive text-destructive-foreground' : 'bg-primary text-primary-foreground']"
        @click="send"
      >
        {{ busy ? 'Stop' : 'Send' }}
      </button>
    </div>
  </div>
</template>
