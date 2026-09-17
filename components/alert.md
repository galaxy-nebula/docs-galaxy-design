# Alert

A callout component that displays important messages with different variants.

<ComponentPreview name="AlertDemo">
  <template #preview>
    <DemoContainer>
      <AlertDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
</script>

<template>
  <Alert>
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>You can add components to your app using the cli.</AlertDescription>
  </Alert>
</template>
```

```tsx [React]
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function App() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AlertComponent, AlertTitleComponent, AlertDescriptionComponent } from '@/components/ui/alert';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlertComponent, AlertTitleComponent, AlertDescriptionComponent],
  template: `
    <ui-alert>
      <ui-alert-title>Heads up!</ui-alert-title>
      <ui-alert-description>You can add components to your app using the cli.</ui-alert-description>
    </ui-alert>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

export default function App() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/alert.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyAlert(
      title: 'Heads up!',
      description: 'You can add components to your app using the cli.',
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
npx @galaxy-stack/design-cli@latest add alert
```

```bash [pnpm]
pnpm dlx @galaxy-stack/design-cli@latest add alert
```

```bash [yarn]
yarn dlx @galaxy-stack/design-cli@latest add alert
```

```bash [bun]
bunx @galaxy-stack/design-cli@latest add alert
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add alert
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
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
</script>

<template>
  <Alert>
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>You can add components to your app using the cli.</AlertDescription>
  </Alert>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AlertComponent, AlertTitleComponent, AlertDescriptionComponent } from '@/components/ui/alert';

@Component({
  selector: 'app-alert-demo',
  standalone: true,
  imports: [AlertComponent, AlertTitleComponent, AlertDescriptionComponent],
  template: `
    <ui-alert>
      <ui-alert-title>Heads up!</ui-alert-title>
      <ui-alert-description>You can add components to your app using the cli.</ui-alert-description>
    </ui-alert>
  `
})
export class AlertDemoComponent {}
```

:::

### Destructive Variant

::: code-group

```tsx [React]
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
</script>

<template>
  <Alert variant="destructive">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
  </Alert>
</template>
```

```typescript [Angular]
<ui-alert variant="destructive">
  <ui-alert-title>Error</ui-alert-title>
  <ui-alert-description>Your session has expired. Please log in again.</ui-alert-description>
</ui-alert>
```

:::

## API Reference

### Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `variant` | `'default' \| 'destructive'` | `'default'` | Visual style variant for the alert | All |
| `className` / `class` | `string` | `''` | CSS class names for the alert container | All |

### AlertTitle Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `className` / `class` | `string` | `''` | CSS class names for the alert title | All |

### AlertDescription Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `className` / `class` | `string` | `''` | CSS class names for the alert description | All |

## Accessibility

- **Semantic HTML**: Uses appropriate ARIA roles for alert regions
- **Screen Reader**: Announces alert content with proper priority
- **Destructive alerts**: Clearly indicate error states
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
