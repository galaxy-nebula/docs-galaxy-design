<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const mode = ref<'login' | 'register'>('login')
const email = ref('')
const password = ref('')
</script>

<template>
  <div class="max-w-sm mx-auto rounded-lg border border-border p-6 bg-background">
    <h3 class="text-lg font-semibold mb-1">
      {{ mode === 'login' ? 'Sign In' : 'Create Account' }}
    </h3>
    <p class="text-sm text-muted-foreground mb-6">
      {{ mode === 'login' ? 'Enter your email to sign in.' : 'Fill in the details to create an account.' }}
    </p>
    <form class="space-y-4" @submit.prevent>
      <div class="space-y-2">
        <label class="text-sm font-medium" for="auth-email">Email</label>
        <Input id="auth-email" v-model="email" type="email" placeholder="m@example.com" />
      </div>
      <div class="space-y-2">
        <label class="text-sm font-medium" for="auth-password">Password</label>
        <Input id="auth-password" v-model="password" type="password" placeholder="••••••••" />
      </div>
      <Button class="w-full">{{ mode === 'login' ? 'Sign In' : 'Sign Up' }}</Button>
      <div class="flex items-center gap-2">
        <div class="h-px flex-1 bg-border" />
        <span class="text-xs text-muted-foreground">or</span>
        <div class="h-px flex-1 bg-border" />
      </div>
      <div class="grid grid-cols-2 gap-2">
        <Button variant="outline">Google</Button>
        <Button variant="outline">GitHub</Button>
      </div>
    </form>
    <p class="mt-6 text-sm text-center text-muted-foreground">
      {{ mode === 'login' ? "Don't have an account?" : 'Already have an account?' }}
      <button class="underline font-medium" @click="mode = mode === 'login' ? 'register' : 'login'">
        {{ mode === 'login' ? 'Sign up' : 'Sign in' }}
      </button>
    </p>
  </div>
</template>
