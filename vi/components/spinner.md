# Spinner

Component spinner tải để hiển thị trạng thái đang tải hoặc xử lý.

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

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add spinner
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add spinner
```

```bash [yarn]
yarn dlx galaxy-design@latest add spinner
```

```bash [bun]
bunx galaxy-design@latest add spinner
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add spinner
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

### Các kích thước

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

### Với văn bản

::: code-group

```tsx [React]
import { Spinner } from "@/components/ui/spinner"

export default function SpinnerWithText() {
  return (
    <div className="flex items-center gap-2">
      <Spinner />
      <span>Đang tải...</span>
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
    <span>Đang tải...</span>
  </div>
</template>
```

:::

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `size` | `'sm' | 'default' | 'lg'` | `'default'` | Kích thước của spinner | Tất cả |
| `className` / `class` | `string` | `''` | Tên class CSS | Tất cả |
| `ariaLabel` | `string` | `'Loading...'` | Label dễ tiếp cận | Tất cả |

## Accessibility

- **Screen Reader**: Sử dụng `role="status"` và `aria-label` cho trạng thái tải
- **Focus Management**: Không nhận focus (decorative)
- **WCAG Compliance**: Tuân thủ WCAG 2.1 Level AA

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
