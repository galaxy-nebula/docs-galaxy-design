<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="max-w-md mx-auto rounded-lg border border-border overflow-hidden bg-background">
    <div class="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
      <h3 class="text-2xl font-bold mb-2">Build faster with Galaxy</h3>
      <p class="text-sm text-muted-foreground mb-4">67 components × 5 frameworks. Copy, paste, ship.</p>
      <div class="flex gap-2 justify-center">
        <Button>Get Started</Button>
        <Button variant="outline">View Components</Button>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-px bg-border">
      <div class="p-4 bg-background text-center">
        <p class="text-2xl font-bold">67</p>
        <p class="text-xs text-muted-foreground">Components</p>
      </div>
      <div class="p-4 bg-background text-center">
        <p class="text-2xl font-bold">5</p>
        <p class="text-xs text-muted-foreground">Frameworks</p>
      </div>
      <div class="p-4 bg-background text-center">
        <p class="text-sm font-medium">AI</p>
        <p class="text-xs text-muted-foreground">Native</p>
      </div>
    </div>
  </div>
</template>
