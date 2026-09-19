# Card

A card component for displaying content in a contained box with header, content, and footer sections.

<ComponentPreview name="CardDemo">
  <template #preview>
    <DemoContainer>
      <CardDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
</template>
```

```tsx [React]
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent, CardFooterComponent } from '@/components/ui/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent, CardFooterComponent],
  template: `
    <ui-card>
      <ui-card-header>
        <ui-card-title>Card Title</ui-card-title>
        <ui-card-description>Card Description</ui-card-description>
      </ui-card-header>
      <ui-card-content>
        <p>Card Content</p>
      </ui-card-content>
      <ui-card-footer>
        <p>Card Footer</p>
      </ui-card-footer>
    </ui-card>
  `
})
export class AppComponent {}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/card.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyCard(
      header: GalaxyCardHeader(
        title: 'Card Title',
        description: 'Card Description',
      ),
      content: const Text('Card Content'),
      footer: const Text('Card Footer'),
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
npx @galaxy-stack/nebula-cli@latest add card
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add card
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add card
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add card
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add card
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
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
  </Card>
</template>
```

:::

### With Actions

::: code-group

```tsx [React]
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CardWithActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter class="flex gap-2">
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </CardFooter>
  </Card>
</template>
```

:::

## API Reference

### Components

| Component | Description | Props |
|-----------|-------------|-------|
| `Card` | Root container | `className` / `class` |
| `CardHeader` | Header section | `className` / `class` |
| `CardTitle` | Title text | `className` / `class` |
| `CardDescription` | Description text | `className` / `class` |
| `CardContent` | Main content area | `className` / `class` |
| `CardFooter` | Footer section | `className` / `class` |

## Accessibility

- **Semantic HTML**: Uses proper `<article>`, `<header>`, `<footer>` elements
- **Screen Reader**: Clear content hierarchy
- **Focus Management**: Inherits parent focus behavior
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
