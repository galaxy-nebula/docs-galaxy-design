# Tooltip

A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

<ComponentPreview name="TooltipDemo">
  <template #preview>
    <DemoContainer>
      <TooltipDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```

```tsx [React]
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

export default function App() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { TooltipComponent } from '@/components/ui/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TooltipComponent],
  template: `
    <ui-tooltip>
      <button trigger>Hover me</button>
      <div content>Add to library</div>
    </ui-tooltip>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { Tooltip } from '@/components/ui/tooltip'
import { Button, ButtonText } from '@/components/ui/button'

export default function App() {
  return (
    <Tooltip content="Add to library">
      <Button>
        <ButtonText>Press me</ButtonText>
      </Button>
    </Tooltip>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: 'Add to library',
      child: ElevatedButton(
        onPressed: () {},
        child: const Text('Press me'),
      ),
    );
  }
}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add tooltip
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add tooltip
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add tooltip
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add tooltip
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add tooltip
```

:::

## Usage


## API Reference

### Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `open` | `boolean` | `undefined` | Controlled open state | React, Vue, Angular |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial open state | All |
| `onOpenChange` | `(open: boolean) => void` | - | Called when open state changes | React, Vue, Angular |
| `delayDuration` | `number` | `200` | Delay before showing tooltip | All |
| `disabled` | `boolean` | `false` | Disables the tooltip | All |
| `content` | `string \| ReactNode` | - | Tooltip content | All |
| `side` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Side to render tooltip | React, Vue, Angular |
| `sideOffset` | `number` | `4` | Offset from side | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

### Subcomponents

#### TooltipTrigger

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render as child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

#### TooltipContent

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `side` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Side to render content | React, Vue, Angular |
| `sideOffset` | `number` | `4` | Offset from side | React, Vue, Angular |
| `asChild` | `boolean` | `false` | Render as child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |

#### TooltipProvider

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `delayDuration` | `number` | `200` | Default delay for all tooltips | React, Vue, Angular |
| `skipDelayDuration` | `number` | `300` | Delay before skipping | React, Vue, Angular |

### Vue

```vue
<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```

### React

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui'

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { TooltipComponent } from '@/components/ui';

@Component({
  selector: 'app-tooltip-demo',
  standalone: true,
  imports: [TooltipComponent],
  template: `
    <ui-tooltip>
      <button trigger>Hover me</button>
      <div content>Add to library</div>
    </ui-tooltip>
  `
})
export class TooltipDemoComponent {}
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
