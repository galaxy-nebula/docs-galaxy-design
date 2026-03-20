# Menubar

A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.

::: warning Web Only
This component is only available for web frameworks (Vue, React, Angular). Desktop menubar patterns are not suitable for mobile platforms.
:::

<ComponentPreview name="MenubarDemo">
  <template #preview>
    <DemoContainer>
      <MenubarDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui/menubar'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>New</MenubarItem>
        <MenubarItem>Open</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
```

```tsx [React]
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"

export default function App() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { MenubarComponent } from '@/components/ui/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenubarComponent],
  template: `
    <ui-menubar>
      <ui-menubar-menu>
        <ui-menubar-trigger>File</ui-menubar-trigger>
        <ui-menubar-content>
          <ui-menubar-item>New</ui-menubar-item>
          <ui-menubar-item>Open</ui-menubar-item>
        </ui-menubar-content>
      </ui-menubar-menu>
    </ui-menubar>
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
npx galaxy-design@latest add menubar
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add menubar
```

```bash [yarn]
yarn dlx galaxy-design@latest add menubar
```

```bash [bun]
bunx galaxy-design@latest add menubar
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add menubar
```

:::

## Usage


## API Reference

### Menubar Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Controlled open menu value | Web only |
| `defaultValue` | `string` | - | Initial open menu value (uncontrolled) | Web only |
| `onValueChange` | `(value: string) => void` | - | Called when open menu value changes | Web only |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Reading direction for keyboard navigation | Web only |
| `loop` | `boolean` | `false` | Loop keyboard focus from last to first | Web only |
| `className` | `string` | `''` | CSS class names for menubar root | Web only |

### MenubarMenu Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Unique value associated with menu | Web only |

### MenubarTrigger Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class names | Web only |

### MenubarContent Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Preferred side | Web only |
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | Alignment | Web only |
| `className` | `string` | `''` | CSS class names | Web only |

### MenubarItem Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class names | Web only |
| `disabled` | `boolean` | `false` | Disables the item | Web only |

### MenubarSeparator Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class names | Web only |

### MenubarCheckboxItem Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `checked` | `boolean` | - | Controlled checked state | Web only |
| `className` | `string` | `''` | CSS class names | Web only |

### MenubarRadioGroup Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Controlled value | Web only |
| `onValueChange` | `(value: string) => void` | - | Called when value changes | Web only |

### MenubarRadioItem Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Radio item value | Web only |
| `className` | `string` | `''` | CSS class names | Web only |

### MenubarSub Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `open` | `boolean` | - | Controlled open state | Web only |
| `defaultOpen` | `boolean` | `false` | Default open state | Web only |
| `onOpenChange` | `(open: boolean) => void` | - | Called when open state changes | Web only |

### MenubarSubTrigger Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class names | Web only |

### MenubarSubContent Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | Preferred side | Web only |
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | Alignment | Web only |
| `className` | `string` | `''` | CSS class names | Web only |

### MenubarLabel Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class names | Web only |

### MenubarSeparator Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class names | Web only |

### MenubarShortcut Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class names | Web only |


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
