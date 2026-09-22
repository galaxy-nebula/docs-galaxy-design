# Combobox

A searchable select — popover listbox with type-ahead filtering (web only).

<ComponentPreview name="ComboboxDemo">
  <template #preview>
    <DemoContainer>
      <ComboboxDemo />
    </DemoContainer>
  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add combobox
```

:::

## Features

- ✅ **Type-ahead filtering**
- ✅ **Keyboard navigation** — arrows + Enter
- ✅ **Popover listbox** — Combobox on top of Popover + Command primitives
- ✅ **Web only** — use native pickers on mobile

## Usage

::: code-group

```vue [Vue]
<script setup>
import { ref } from 'vue'
import { Combobox } from '@/components/ui/combobox'

const value = ref('')
</script>

<template>
  <Combobox v-model="value" :items="frameworks" placeholder="Search framework…" />
</template>
```

```tsx [React]
import { Combobox } from "@/components/ui/combobox"

<Combobox
  value={value}
  onChange={setValue}
  items={frameworks}
  placeholder="Search framework…"
/>
```

:::

## Platform Availability

| Framework | Status |
| --------- | ------ |
| React | ✅ Complete |
| Vue | ✅ Complete |
| Angular | ✅ Complete |
| React Native | ❌ Web only |
| Flutter | ❌ Web only |
