# Avatar

An image element with a fallback for representing the user.

<ComponentPreview name="AvatarDemo">
  <template #preview>
    <DemoContainer>
      <AvatarDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
</script>

<template>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</template>
```

```tsx [React]
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function App() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AvatarComponent } from '@/components/ui/avatar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AvatarComponent],
  template: `
    <ui-avatar src="https://github.com/shadcn.png" alt="@shadcn">
      CN
    </ui-avatar>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function App() {
  return (
    <Avatar>
      <AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/avatar.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const GalaxyAvatar(
      imageUrl: 'https://github.com/shadcn.png',
      fallback: Text('CN'),
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
npx @galaxy-stack/nebula-cli@latest add avatar
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add avatar
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add avatar
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add avatar
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add avatar
```

:::

## Usage


## API Reference

### Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `src` | `string` | - | Image source URL | AvatarImage (All) |
| `alt` | `string` | - | Alternative text for the image | AvatarImage (All) |
| `className` | `string` | `''` | CSS class names for the avatar root | Avatar (React, React Native) |
| `class` | `string` | `''` | CSS class names for the avatar root | Avatar (Vue, Angular, Flutter) |

### Subcomponents

#### Avatar

Root container for the avatar component

#### AvatarImage

Image element with fallback support

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `src` | `string` | - | Image source URL | All |
| `alt` | `string` | - | Alternative text | All |
| `asChild` | `boolean` | `false` | Render as a child element | React, Vue, Angular |

#### AvatarFallback

Fallback content when image fails to load

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `delayMs` | `number` | `600` | Delay in milliseconds before showing fallback | React, Vue |
| `asChild` | `boolean` | `false` | Render as a child element | React, Vue, Angular |
| `className` | `string` | `''` | CSS class names | React, React Native |
| `class` | `string` | `''` | CSS class names | Vue, Angular, Flutter |


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
