# Toast

Một thông báo ngắn được hiển thị tạm thời.

<ComponentPreview name="ToastDemo">
  <template #preview>
    <DemoContainer>
      <ToastDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
import { toast } from 'vue-sonner'

const showToast = () => {
  toast.success('Sự kiện đã được tạo!')
}
</script>

<template>
  <div>
    <button @click="showToast">Hiển thị Toast</button>
    <Toaster />
  </div>
</template>
```

```tsx [React]
import { Toaster } from "@/components/ui/toast"
import { toast } from "sonner"

export default function App() {
  return (
    <div>
      <button onClick={() => toast.success("Sự kiện đã được tạo!")}>
        Hiển thị Toast
      </button>
      <Toaster />
    </div>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToasterComponent } from '@/components/ui/toast';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToasterComponent],
  template: `
    <div>
      <button (click)="showToast()">Hiển thị Toast</button>
      <ui-toaster />
    </div>
  `
})
export class AppComponent {
  showToast() {
    toast.success('Sự kiện đã được tạo!');
  }
}
```

```tsx [React Native]
import { Toaster } from '@/components/ui/toast'
import { toast } from 'sonner-native'

export default function App() {
  return (
    <View>
      <Button
        title="Hiển thị Toast"
        onPress={() => toast.success('Sự kiện đã được tạo!')}
      />
      <Toaster />
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/toast.dart';
import 'package:galaxy_kit/galaxy_kit.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyToaster(
      child: ElevatedButton(
        onPressed: () {
          GalaxyToast.success('Sự kiện đã được tạo!');
        },
        child: const Text('Hiển thị Toast'),
      ),
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
npx @galaxy-stack/design-cli@latest add toast
```

```bash [pnpm]
pnpm dlx @galaxy-stack/design-cli@latest add toast
```

```bash [yarn]
yarn dlx @galaxy-stack/design-cli@latest add toast
```

```bash [bun]
bunx @galaxy-stack/design-cli@latest add toast
```

```bash [global]
# Nếu bạn đã cài đặt galaxy-design toàn cục
galaxy-design add toast
```

:::

::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `sonner`
- **Vue**: `vue-sonner`
- **Angular**: `ngx-sonner`
- **React Native**: `sonner-native`
- **Flutter**: `galaxy_kit`

Không cần cài đặt thủ công!
:::

## Sử dụng

### Ví dụ cơ bản

::: code-group

```tsx [React]
import { Toaster } from "@/components/ui/toast"
import { toast } from "sonner"

export default function ToastDemo() {
  return (
    <div>
      <button onClick={() => toast("Sự kiện đã được tạo!")}>
        Hiển thị Toast
      </button>
      <Toaster />
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
import { toast } from 'vue-sonner'

const showToast = () => {
  toast('Sự kiện đã được tạo!')
}
</script>

<template>
  <div>
    <button @click="showToast">Hiển thị Toast</button>
    <Toaster />
  </div>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToasterComponent } from '@/components/ui/toast';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-toast-demo',
  standalone: true,
  imports: [ToasterComponent],
  template: `
    <div>
      <button (click)="showToast()">Hiển thị Toast</button>
      <ui-toaster />
    </div>
  `
})
export class ToastDemoComponent {
  showToast() {
    toast('Sự kiện đã được tạo!');
  }
}
```

:::

### Toast thành công

::: code-group

```tsx [React]
import { Toaster } from "@/components/ui/toast"
import { toast } from "sonner"

export default function SuccessToast() {
  return (
    <div>
      <button onClick={() => toast.success("Sự kiện đã được tạo!")}>
        Hiển thị Toast thành công
      </button>
      <Toaster />
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
import { toast } from 'vue-sonner'

const showSuccess = () => {
  toast.success('Sự kiện đã được tạo!')
}
</script>

<template>
  <div>
    <button @click="showSuccess">Hiển thị Toast thành công</button>
    <Toaster />
  </div>
</template>
```

:::

### Toast lỗi

::: code-group

```tsx [React]
import { Toaster } from "@/components/ui/toast"
import { toast } from "sonner"

export default function ErrorToast() {
  return (
    <div>
      <button onClick={() => toast.error("Có lỗi xảy ra!")}>
        Hiển thị Toast lỗi
      </button>
      <Toaster />
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
import { toast } from 'vue-sonner'

const showError = () => {
  toast.error('Có lỗi xảy ra!')
}
</script>

<template>
  <div>
    <button @click="showError">Hiển thị Toast lỗi</button>
    <Toaster />
  </div>
</template>
```

:::

### Toast đang tải

::: code-group

```tsx [React]
import { Toaster } from "@/components/ui/toast"
import { toast } from "sonner"

export default function LoadingToast() {
  return (
    <div>
      <button onClick={() => toast.loading("Đang lưu...")}>
        Hiển thị Toast đang tải
      </button>
      <Toaster />
    </div>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
import { toast } from 'vue-sonner'

const showLoading = () => {
  toast.loading('Đang lưu...')
}
</script>

<template>
  <div>
    <button @click="showLoading">Hiển thị Toast đang tải</button>
    <Toaster />
  </div>
</template>
```

:::

## API Reference

### Methods

| Method | Type | Description | Framework Support |
|--------|------|-------------|-------------------|
| `toast` | `(message: string) => void` | Hiển thị toast thông báo | Tất cả |
| `toast.success` | `(message: string) => void` | Hiển thị toast thành công | Tất cả |
| `toast.error` | `(message: string) => void` | Hiển thị toast lỗi | Tất cả |
| `toast.warning` | `(message: string) => void` | Hiển thị toast cảnh báo | Tất cả |
| `toast.info` | `(message: string) => void` | Hiển thị toast thông tin | Tất cả |
| `toast.loading` | `(message: string) => void` | Hiển thị toast đang tải | Tất cả |
| `toast.promise` | `(promise: Promise, options: object) => void` | Hiển thị toast với promise | Tất cả |

## Accessibility

- **Screen Reader**: Sử dụng ARIA live regions để thông báo thay đổi
- **Focus Management**: Tự động quản lý focus khi toast xuất hiện
- **Keyboard Support**: Có thể đóng toast bằng phím Escape

## Related Components

- [Alert](/vi/components/alert) - Component hiển thị cảnh báo
- [Alert Dialog](/vi/components/alert-dialog) - Dialog cảnh báo
- [Toast](/vi/components/toast) - Component hiển thị thông báo
