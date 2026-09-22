# OTP Input

One-time password input with auto-advance and paste support.

<ComponentPreview name="OTPInputDemo">
  <template #preview>
    <DemoContainer>
      <OTPInputDemo />
    </DemoContainer>
  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add otp-input
```

:::

## Features

- ✅ **Auto-advance** — focus jumps to next box on input
- ✅ **Backspace navigation** — returns to previous box
- ✅ **Numeric mode** — mobile keyboards show numbers
- ✅ **Controlled value** — full code string via v-model / onChange

## Usage

::: code-group

```vue [Vue]
<script setup>
import { ref } from 'vue'
import { OTPInput } from '@/components/ui/otp-input'

const code = ref('')
</script>

<template>
  <OTPInput v-model="code" :length="6" />
</template>
```

```tsx [React]
import { OTPInput } from "@/components/ui/otp-input"

<OTPInput length={6} onChange={(code) => setCode(code)} />
```

:::

## Platform Availability

| Framework | Status |
| --------- | ------ |
| React | ✅ Complete (input-otp) |
| Vue | ✅ Complete |
| Angular | ✅ Complete |
| React Native | ✅ Complete |
| Flutter | ✅ Complete |
