# Hover Card

For sighted users to preview content available behind a link.

::: warning Web Only
This component is only available for web frameworks (Vue, React, Angular). Hover interactions are not available on mobile platforms.
:::

<ComponentPreview name="HoverCardDemo">
  <template #preview>
    <DemoContainer>
      <HoverCardDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>Hover</HoverCardTrigger>
    <HoverCardContent>
      <div class="space-y-2">
        <h4 class="text-sm font-semibold">@nextjs</h4>
        <p class="text-sm">The React Framework – created and maintained by @vercel.</p>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
```

```tsx [React]
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"

export default function App() {
  return (
    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { HoverCardComponent } from '@/components/ui/hover-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HoverCardComponent],
  template: `
    <ui-hover-card>
      <span trigger>Hover</span>
      <div content class="space-y-2">
        <h4 class="text-sm font-semibold">@nextjs</h4>
        <p class="text-sm">The React Framework – created and maintained by @vercel.</p>
      </div>
    </ui-hover-card>
  `
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add hover-card
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add hover-card
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add hover-card
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add hover-card
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add hover-card
```

:::

## Usage

### React

```tsx
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"

export default function App() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="https://nextjs.org">Hover</a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
```

### Vue

```vue
<script setup lang="ts">
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card'
</script>

<template>
  <HoverCard>
    <HoverCardTrigger asChild>
      <a href="https://nextjs.org">Hover</a>
    </HoverCardTrigger>
    <HoverCardContent class="w-80">
      <div class="space-y-2">
        <h4 class="text-sm font-semibold">@nextjs</h4>
        <p class="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
```

### Angular

```typescript
import { Component } from '@angular/core';
import { HoverCardComponent } from '@/components/ui/hover-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HoverCardComponent],
  template: `
    <ui-hover-card>
      <a trigger href="https://nextjs.org">Hover</a>
      <div content class="w-80 space-y-2">
        <h4 class="text-sm font-semibold">@nextjs</h4>
        <p class="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
      </div>
    </ui-hover-card>
  `
})
export class AppComponent {}
```

## API Reference

### Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `open` | `boolean` | - | Controlled open state | React, Vue, Angular |
| `defaultOpen` | `boolean` | `false` | Initial open state for uncontrolled usage | React, Vue, Angular |
| `onOpenChange` | `(open: boolean) => void` | - | Called when the open state changes | React, Vue, Angular |
| `openDelay` | `number` | `700` | Delay in milliseconds before opening | React, Vue, Angular |
| `closeDelay` | `number` | `300` | Delay in milliseconds before closing | React, Vue, Angular |
| `children` | `ReactNode` | - | Hover card composition content | React, Vue, Angular |

### Sub-components

#### HoverCardTrigger

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render the trigger as a child element | React, Vue |
| `as` | `AsTag \| Component` | `'button'` | Element or component to render | Vue only |

#### HoverCardContent

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Preferred side for the content | React, Vue, Angular |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment along the side | React, Vue, Angular |
| `sideOffset` | `number` | `5` | Offset in pixels from the trigger | React, Vue, Angular |
| `avoidCollisions` | `boolean` | `true` | Whether to avoid collisions with viewport edges | React, Vue, Angular |
| `forceMount` | `boolean` | - | Force-mount the content even when closed | React, Vue |
| `className` / `class` | `string` | - | CSS class names | React (className), Vue/Angular (class) |

### Vue

```vue
<script setup lang="ts">
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui'
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>Hover</HoverCardTrigger>
    <HoverCardContent>
      <div class="space-y-2">
        <h4 class="text-sm font-semibold">@nextjs</h4>
        <p class="text-sm">The React Framework – created and maintained by @vercel.</p>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
```

### React

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui'

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { HoverCardComponent } from '@/components/ui';

@Component({
  selector: 'app-hover-card-demo',
  standalone: true,
  imports: [HoverCardComponent],
  template: `
    <ui-hover-card>
      <span trigger>Hover</span>
      <div content class="space-y-2">
        <h4 class="text-sm font-semibold">@nextjs</h4>
        <p class="text-sm">The React Framework – created and maintained by @vercel.</p>
      </div>
    </ui-hover-card>
  `
})
export class HoverCardDemoComponent {}
```


## Accessibility

- **Keyboard Navigation**: [TODO]
- **Screen Reader**: [TODO]
- **Focus Management**: [TODO]
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
