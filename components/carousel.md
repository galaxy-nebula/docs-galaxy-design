# Carousel

A horizontally scrollable carousel with snap points — built on Embla Carousel (web) with touch/mouse drag support.

<ComponentPreview name="CarouselDemo">
  <template #preview>
    <DemoContainer>
      <CarouselDemo />
    </DemoContainer>
  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add carousel
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add carousel
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add carousel
```

:::

## Features

- ✅ **Embla Carousel** — performant, dependency-light (web)
- ✅ **Snap points** — snap-x mandatory scrolling
- ✅ **Prev/Next controls** — arrow buttons included
- ✅ **Responsive** — configurable slide width
- ✅ **Mobile & web** — React Native + Flutter implementations available

## Usage

::: code-group

```vue [Vue]
<script setup>
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
</script>

<template>
  <Carousel>
    <CarouselContent>
      <CarouselItem v-for="i in 5" :key="i">…</CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
```

```tsx [React]
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function App() {
  return (
    <Carousel>
      <CarouselContent>
        {[1, 2, 3, 4, 5].map((i) => <CarouselItem key={i}>…</CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

:::

## Platform Availability

| Framework | Status |
| --------- | ------ |
| React | ✅ Complete (embla-carousel-react) |
| Vue | ✅ Complete (embla-carousel-vue) |
| Angular | ✅ Complete |
| React Native | ✅ Complete |
| Flutter | ✅ Complete |
