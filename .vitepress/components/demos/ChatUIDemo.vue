<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'

const messages = ref([
  { role: 'user', text: 'Can you help me write a function to sort an array?' },
  { role: 'assistant', text: 'Here\'s a quick sort implementation in TypeScript:\n\nfunction sort(arr: number[]) {\n  return [...arr].sort((a, b) => a - b);\n}' },
  { role: 'user', text: 'What about descending order?' },
  { role: 'assistant', text: 'Just flip the comparator: `(a, b) => b - a`' },
])
const input = ref('')

function send() {
  if (!input.value.trim()) return
  messages.value.push({ role: 'user', text: input.value })
  input.value = ''
}
</script>

<template>
  <div class="max-w-md mx-auto rounded-lg border border-border overflow-hidden">
    <div class="flex items-center gap-2 p-3 border-b border-border bg-muted/30">
      <span class="h-2 w-2 rounded-full bg-green-500"></span>
      <span class="text-sm font-medium">Chat</span>
    </div>
    <div class="p-4 space-y-4 max-h-[320px] overflow-y-auto">
      <div v-for="(msg, i) in messages" :key="i"
        class="flex gap-3"
        :class="msg.role === 'user' ? 'justify-end' : 'justify-start'"
      >
        <div v-if="msg.role === 'assistant'" class="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 shrink-0"></div>
        <div :class="[
          'rounded-lg px-3 py-2 max-w-[75%]',
          msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground',
        ]">
          <p class="text-sm whitespace-pre-wrap">{{ msg.text }}</p>
        </div>
        <div v-if="msg.role === 'user'" class="h-8 w-8 rounded-full bg-secondary border shrink-0"></div>
      </div>
    </div>
    <div class="flex gap-2 p-3 border-t border-border">
      <Input v-model="input" placeholder="Type a message..." @keyup.enter="send" />
      <Button @click="send">Send</Button>
    </div>
  </div>
</template>
