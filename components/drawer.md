# Drawer

A bottom sheet / side drawer overlay — built on Vaul (React) and Vaul-Vue (Vue) with drag-to-dismiss.

<ComponentPreview name="DrawerDemo">
  <template #preview>
    <DemoContainer>
      <DrawerDemo />
    </DemoContainer>
  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add drawer
```

:::

## Features

- ✅ **Drag to dismiss** — vaul physics on web
- ✅ **Bottom sheet & side variants**
- ✅ **Accessible** — focus trap, Esc to close
- ✅ **Responsive** — bottom sheet on mobile, side panel on desktop
- ✅ **Mobile & web** — RN bottom-sheet + Flutter showModalBottomSheet

## Usage

::: code-group

```vue [Vue]
<script setup>
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from '@/components/ui/drawer'
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <button>Open</button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Are you sure?</DrawerTitle>
      </DrawerHeader>
      <DrawerClose>Cancel</DrawerClose>
    </DrawerContent>
  </Drawer>
</template>
```

```tsx [React]
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer"

<Drawer>
  <DrawerTrigger asChild>
    <button>Open</button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you sure?</DrawerTitle>
    </DrawerHeader>
    <DrawerClose>Cancel</DrawerClose>
  </DrawerContent>
</Drawer>
```

:::

## Platform Availability

| Framework | Status |
| --------- | ------ |
| React | ✅ Complete (vaul) |
| Vue | ✅ Complete (vaul-vue) |
| Angular | ✅ Complete |
| React Native | ✅ Complete |
| Flutter | ✅ Complete |
