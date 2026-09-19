# Context Menu

Displays a menu to the user—such as a set of actions or functions—triggered by right click.

::: warning Web Only
This component is only available for web frameworks (Vue, React, Angular). Right-click interaction is not available on mobile platforms.
:::

<ComponentPreview name="ContextMenuDemo">
  <template #preview>
    <DemoContainer>
      <ContextMenuDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@/components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>Right click here</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Settings</ContextMenuItem>
      <ContextMenuItem>Logout</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
```

```tsx [React]
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu"

export default function App() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click here</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Settings</ContextMenuItem>
        <ContextMenuItem>Logout</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ContextMenuComponent } from '@/components/ui/context-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContextMenuComponent],
  template: `
    <ui-context-menu>
      <div trigger>Right click here</div>
      <div content>
        <ui-context-menu-item>Profile</ui-context-menu-item>
        <ui-context-menu-item>Settings</ui-context-menu-item>
        <ui-context-menu-item>Logout</ui-context-menu-item>
      </div>
    </ui-context-menu>
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
npx @galaxy-stack/nebula-cli@latest add context-menu
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add context-menu
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add context-menu
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add context-menu
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add context-menu
```

:::

## Usage

### React

```tsx
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "@/components/ui/context-menu"

export default function App() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click here</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Profile
          <ContextMenuShortcut>⌘P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Settings</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Logout</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

### Vue

```vue
<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from '@/components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>Right click here</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>
        Profile
        <ContextMenuShortcut>⌘P</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>Settings</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Logout</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
```

### Angular

```typescript
import { Component } from '@angular/core';
import { ContextMenuComponent } from '@/components/ui/context-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContextMenuComponent],
  template: `
    <ui-context-menu>
      <div trigger>Right click here</div>
      <div content>
        <ui-context-menu-item>Profile</ui-context-menu-item>
        <ui-context-menu-item>Settings</ui-context-menu-item>
        <ui-context-menu-separator />
        <ui-context-menu-item>Logout</ui-context-menu-item>
      </div>
    </ui-context-menu>
  `
})
export class AppComponent {}
```

## API Reference

### Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `modal` | `boolean` | `true` | Whether outside interaction is disabled while the context menu is open | React, Vue, Angular |
| `children` | `ReactNode` | - | Context menu composition content | React, Vue, Angular |

### Sub-components

#### ContextMenuTrigger

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `disabled` | `boolean` | `false` | Disables the trigger | React, Vue, Angular |
| `asChild` | `boolean` | `false` | Render the trigger as a child element | React, Vue |

#### ContextMenuContent

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Preferred side for the menu content | React, Vue, Angular |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alignment along the side | React, Vue, Angular |
| `sideOffset` | `number` | `5` | Offset in pixels from the trigger | React, Vue, Angular |
| `alignOffset` | `number` | `0` | Offset in pixels from the alignment edge | React, Vue, Angular |
| `avoidCollisions` | `boolean` | `true` | Whether to avoid collisions with viewport edges | React, Vue, Angular |
| `className` / `class` | `string` | - | CSS class names | React (className), Vue/Angular (class) |

#### ContextMenuItem

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `disabled` | `boolean` | `false` | Disables the item | React, Vue, Angular |
| `onSelect` | `(event: Event) => void` | - | Called when the item is selected | React, Vue, Angular |
| `textValue` | `string` | - | Text value used for typeahead matching | React, Vue, Angular |
| `className` / `class` | `string` | - | CSS class names | React (className), Vue/Angular (class) |

### Vue

```vue
<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem
} from '@/components/ui'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>Right click here</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Settings</ContextMenuItem>
      <ContextMenuItem>Logout</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
```

### React

```tsx
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem
} from '@/components/ui'

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click here</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Settings</ContextMenuItem>
        <ContextMenuItem>Logout</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { ContextMenuComponent, ContextMenuItemComponent } from '@/components/ui';

@Component({
  selector: 'app-context-menu-demo',
  standalone: true,
  imports: [ContextMenuComponent, ContextMenuItemComponent],
  template: `
    <ui-context-menu>
      <div trigger>Right click here</div>
      <div content>
        <ui-context-menu-item>Profile</ui-context-menu-item>
        <ui-context-menu-item>Settings</ui-context-menu-item>
        <ui-context-menu-item>Logout</ui-context-menu-item>
      </div>
    </ui-context-menu>
  `
})
export class ContextMenuDemoComponent {}
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
