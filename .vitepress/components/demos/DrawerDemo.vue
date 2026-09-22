<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const open = ref(false)
</script>

<template>
  <div class="flex justify-center">
    <Button @click="open = true">Open Drawer</Button>
    <Teleport to="body">
      <Transition name="drawer-fade">
        <div v-if="open" class="fixed inset-0 z-50 bg-black/60" @click="open = false" />
      </Transition>
      <Transition name="drawer-slide">
        <div
          v-if="open"
          class="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-md rounded-t-lg border border-border bg-card p-6 shadow-lg"
        >
          <div class="mx-auto mb-4 h-1 w-10 rounded-full bg-muted-foreground/40" />
          <h3 class="text-lg font-semibold mb-1">Bottom Sheet</h3>
          <p class="text-sm text-muted-foreground mb-4">
            Drag or tap outside to dismiss. Common for mobile-style pickers.
          </p>
          <Button class="w-full" @click="open = false">Close</Button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.drawer-fade-enter-active, .drawer-fade-leave-active { transition: opacity 0.2s ease; }
.drawer-fade-enter-from, .drawer-fade-leave-to { opacity: 0; }
.drawer-slide-enter-active, .drawer-slide-leave-active { transition: transform 0.25s ease; }
.drawer-slide-enter-from, .drawer-slide-leave-to { transform: translate(-50%, 100%); }
</style>
