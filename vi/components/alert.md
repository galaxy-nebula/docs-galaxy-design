# Alert

Component callout để hiển thị các thông báo quan trọng với nhiều biến thể khác nhau.

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
    <AlertTitle>Chú ý!</AlertTitle>
    <AlertDescription>Bạn có thể thêm các component vào ứng dụng của mình bằng CLI.</AlertDescription>
  </Alert>
</template>
```

```tsx [React]
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function App() {
  return (
    <Alert>
      <AlertTitle>Chú ý!</AlertTitle>
      <AlertDescription>Bạn có thể thêm các component vào ứng dụng của mình bằng CLI.</AlertDescription>
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
      <ui-alert-title>Chú ý!</ui-alert-title>
      <ui-alert-description>Bạn có thể thêm các component vào ứng dụng của mình bằng CLI.</ui-alert-description>
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
      <AlertTitle>Chú ý!</AlertTitle>
      <AlertDescription>Bạn có thể thêm các component vào ứng dụng của mình bằng CLI.</AlertDescription>
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
      title: 'Chú ý!',
      description: 'Bạn có thể thêm các component vào ứng dụng của mình bằng CLI.',
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
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add alert
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
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Chú ý!</AlertTitle>
      <AlertDescription>Bạn có thể thêm các component vào ứng dụng của mình bằng CLI.</AlertDescription>
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
    <AlertTitle>Chú ý!</AlertTitle>
    <AlertDescription>Bạn có thể thêm các component vào ứng dụng của mình bằng CLI.</AlertDescription>
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
      <ui-alert-title>Chú ý!</ui-alert-title>
      <ui-alert-description>Bạn có thể thêm các component vào ứng dụng của mình bằng CLI.</ui-alert-description>
    </ui-alert>
  `
})
export class AlertDemoComponent {}
```

:::

### Biến thể Destructive

::: code-group

```tsx [React]
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertTitle>Lỗi</AlertTitle>
      <AlertDescription>Phiên của bạn đã hết hạn. Vui lòng đăng nhập lại.</AlertDescription>
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
    <AlertTitle>Lỗi</AlertTitle>
    <AlertDescription>Phiên của bạn đã hết hạn. Vui lòng đăng nhập lại.</AlertDescription>
  </Alert>
</template>
```

:::

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `variant` | `'default' \| 'destructive'` | `'default'` | Kiểu hiển thị của alert | Tất cả |
| `className` / `class` | `string` | `''` | Tên class CSS | Tất cả |
| `asChild` | `boolean` | `false` | Render như child element | Chỉ React, Vue |

## Accessibility

- **Screen Reader**: Sử dụng semantic markup với ARIA attributes
- **Role**: Sử dụng `role="alert"` cho thông báo quan trọng
- **Keyboard**: Có thể điều hướng bằng bàn phím

## Related Components

- [Toast](/components/toast) - Hiển thị thông báo tạm thời
- [Dialog](/components/dialog) - Hộp thoại modal
- [Alert Dialog](/components/alert-dialog) - Hộp thoại xác nhận

## Source Code

- [Vue Component](https://github.com/buikevin/galaxy-design/blob/main/packages/vue/src/alert.ts)
- [React Component](https://github.com/buikevin/galaxy-design/blob/main/packages/react/alert.tsx)
- [Angular Component](https://github.com/buikevin/galaxy-design/blob/main/packages/angular/alert.ts)
- [React Native Component](https://github.com/buikevin/galaxy-design/blob/main/packages/react-native/alert.tsx)
- [Flutter Widget](https://github.com/buikevin/galaxy-design/blob/main/packages/flutter/lib/alert.dart)
