# Spinner

A loading spinner component for indicating loading or processing states.

<ComponentPreview name="SpinnerDemo">
  <template #preview>
    <DemoContainer>
      <SpinnerDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Spinner } from '@/components/ui/spinner'
</script>

<template>
  <Spinner />
</template>
```

```tsx [React]
import { Spinner } from "@/components/ui/spinner"

export default function App() {
  return <Spinner />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SpinnerComponent } from '@/components/ui/spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpinnerComponent],
  template: `<ui-spinner />`
})
export class AppComponent {}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/spinner.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxySpinner();
  }
}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add spinner
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add spinner
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add spinner
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add spinner
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add spinner
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
import { Spinner } from "@/components/ui/spinner"

export default function SpinnerDemo() {
  return <Spinner />
}
```

```vue [Vue]
<script setup lang="ts">
import { Spinner } from '@/components/ui/spinner'
</script>

<template>
  <Spinner />
</template>
```

:::

### Size Variants

::: code-group

```tsx [React]
import { Spinner } from "@/components/ui/spinner"

export default function SpinnerSizes() {
  return (
    <div className="flex gap-4 items-center">
      <Spinner size="sm" />
      <Spinner size="default" />
      <Spinner size="lg" />
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Spinner } from '@/components/ui/spinner'
</script>

<template>
  <div class="flex gap-4 items-center">
    <Spinner size="sm" />
    <Spinner size="default" />
    <Spinner size="lg" />
  </div>
</template>
```

:::

### With Text

::: code-group

```tsx [React]
import { Spinner } from "@/components/ui/spinner"

export default function SpinnerWithText() {
  return (
    <div className="flex items-center gap-2">
      <Spinner />
      <span>Loading...</span>
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Spinner } from '@/components/ui/spinner'
</script>

<template>
  <div class="flex items-center gap-2">
    <Spinner />
    <span>Loading...</span>
  </div>
</template>
```

:::

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `size` | `'sm' | 'default' | 'lg'` | `'default'` | The size of the spinner | All |
| `className` / `class` | `string` | `''` | CSS class names | All |
| `ariaLabel` | `string` | `'Loading...'` | Accessible label | All |

## Accessibility

- **Screen Reader**: Uses `role="status"` and `aria-label` for loading state
- **Focus Management**: Does not receive focus (decorative)
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
