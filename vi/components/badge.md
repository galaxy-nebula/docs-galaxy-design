# Badge

Component badge để hiển thị trạng thái, nhãn hoặc số đếm với nhiều biến thể.

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
  <Badge>Nội dung ví dụ</Badge>
</template>
```

```tsx [React]
import { Badge } from "@/components/ui/badge"

export default function App() {
  return <Badge>Nội dung ví dụ</Badge>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { BadgeComponent } from '@/components/ui/badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BadgeComponent],
  template: `<ui-badge>Nội dung ví dụ</ui-badge>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Badge, BadgeText } from '@/components/ui/badge'

export default function App() {
  return (
    <Badge>
      <BadgeText>Nội dung ví dụ</BadgeText>
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
      child: const Text('Nội dung ví dụ'),
    );
  }
}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

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
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add badge
```

:::

::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `class-variance-authority`
- **Vue**: `class-variance-authority`
- **Angular**: `class-variance-authority`
- **React Native**: `nativewind`, `tailwindcss`
- **Flutter**: Không cần thêm dependencies

Không cần cài đặt thủ công!
:::

## Sử dụng

### Ví dụ cơ bản

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

### Các biến thể

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
| `variant` | `'default' | 'secondary' | 'destructive' | 'outline'` | `'default'` | Kiểu hiển thị của badge | Tất cả |
| `className` / `class` | `string` | `''` | Tên class CSS | Tất cả |
| `asChild` | `boolean` | `false` | Render như child element | Chỉ React, Vue |

## Accessibility

- **Screen Reader**: Sử dụng semantic markup với ARIA attributes
- **Focus Management**: Kế thừa hành vi focus từ parent
- **WCAG Compliance**: Tuân thủ WCAG 2.1 Level AA

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
