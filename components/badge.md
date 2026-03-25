# Badge

A badge component for displaying status, labels, or counts with multiple variants.

<ComponentPreview name="BadgeDemo">
  <template #preview>
    <DemoContainer>
      <BadgeDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <Badge>Example content</Badge>
</template>
```

```tsx [React]
import { Badge } from "@/components/ui/badge"

export default function App() {
  return <Badge>Example content</Badge>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { BadgeComponent } from '@/components/ui/badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BadgeComponent],
  template: `<ui-badge>Example content</ui-badge>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Badge, BadgeText } from '@/components/ui/badge'

export default function App() {
  return (
    <Badge>
      <BadgeText>Example content</BadgeText>
    </Badge>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/badge.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyBadge(
      child: const Text('Example content'),
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
npx galaxy-design@latest add badge
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add badge
```

```bash [yarn]
yarn dlx galaxy-design@latest add badge
```

```bash [bun]
bunx galaxy-design@latest add badge
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add badge
```

:::

::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `class-variance-authority`
- **Vue**: `class-variance-authority`
- **Angular**: `class-variance-authority`
- **React Native**: `nativewind`, `tailwindcss`
- **Flutter**: No additional dependencies

No manual installation needed!
:::

## Usage

### Basic Example

::: code-group

```tsx [React]
import { Badge } from "@/components/ui/badge"

export default function BadgeDemo() {
  return <Badge>Badge</Badge>
}
```

```vue [Vue]
<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <Badge>Badge</Badge>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core';
import { BadgeComponent } from '@/components/ui/badge';

@Component({
  selector: 'app-badge-demo',
  standalone: true,
  imports: [BadgeComponent],
  template: `<ui-badge>Badge</ui-badge>`
})
export class BadgeDemoComponent {}
```

:::

### Variant Examples

::: code-group

```tsx [React]
import { Badge } from "@/components/ui/badge"

export default function BadgeVariants() {
  return (
    <div className="flex gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <div class="flex gap-2">
    <Badge variant="default">Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
</template>
```

:::

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `variant` | `'default' | 'secondary' | 'destructive' | 'outline'` | `'default'` | The visual style of the badge | All |
| `className` / `class` | `string` | `''` | CSS class names | All |
| `asChild` | `boolean` | `false` | Render as child element | React, Vue only |

## Accessibility

- **Screen Reader**: Uses semantic markup with proper ARIA attributes
- **Focus Management**: Inherits parent focus behavior
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
