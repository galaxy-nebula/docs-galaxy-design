# Dialog

Cửa sổ được đặt chồng lên cửa sổ chính hoặc cửa sổ dialog khác.

<ComponentPreview name="DialogDemo">
  <template #preview>
    <DemoContainer>
      <DialogDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Dialog } from '@/components/ui/dialog'
</script>

<template>
  <Dialog>Example content</Dialog>
</template>
```

```tsx [React]
import { Dialog } from "@/components/ui/dialog"

export default function App() {
  return <Dialog>Example content</Dialog>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { DialogComponent } from '@/components/ui/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogComponent],
  template: `<ui-dialog>Example content</ui-dialog>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx @galaxy-stack/nebula-cli@latest add dialog
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add dialog
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add dialog
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add dialog
```

```bash [global]
# Nếu bạn đã cài galaxy-design global
galaxy-ui add dialog
```

:::


::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `@radix-ui/react-dialog`
- **Vue**: `radix-vue`
- **Angular**: `@radix-ng/primitives`

Không cần cài đặt thủ công!
:::

## Sử dụng

### React

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

export default function App() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Mở Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tiêu đề Dialog</DialogTitle>
          <DialogDescription>
            Đây là mô tả của dialog.
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button variant="outline">Đóng</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
```

### Vue

```vue
<script setup lang="ts">
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button>Mở Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Tiêu đề Dialog</DialogTitle>
        <DialogDescription>
          Đây là mô tả của dialog.
        </DialogDescription>
      </DialogHeader>
      <DialogClose asChild>
        <Button variant="outline">Đóng</Button>
      </DialogClose>
    </DialogContent>
  </Dialog>
</template>
```

### Angular

```typescript
import { Component } from '@angular/core';
import { DialogComponent } from '@/components/ui/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogComponent],
  template: `
    <ui-dialog>
      <button trigger>Mở Dialog</button>
      <div content>
        <ui-dialog-header>
          <ui-dialog-title>Tiêu đề Dialog</ui-dialog-title>
          <ui-dialog-description>
            Đây là mô tả của dialog.
          </ui-dialog-description>
        </ui-dialog-header>
        <button close>Đóng</button>
      </div>
    </ui-dialog>
  `
})
export class AppComponent {}
```

### React Native

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import { Button, ButtonText } from '@/components/ui/button'

export default function App() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><ButtonText>Mở Dialog</ButtonText></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tiêu đề Dialog</DialogTitle>
          <DialogDescription>
            Đây là mô tả của dialog.
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button variant="outline">
            <ButtonText>Đóng</ButtonText>
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
```

### Flutter

```dart
import 'package:flutter/material.dart';
import 'package:galaxy_design/galaxy_dialog.dart';

class DialogExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyButton(
      onPressed: () {
        showDialog(
          context: context,
          builder: (context) => GalaxyDialog(
            title: 'Tiêu đề Dialog',
            description: 'Đây là mô tả của dialog.',
            actions: [
              GalaxyButton(
                onPressed: () => Navigator.pop(context),
                child: const Text('Đóng'),
              ),
            ],
          ),
        );
      },
      child: const Text('Mở Dialog'),
    );
  }
}
```

## API Reference

### Props

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `open` | `boolean` | `undefined` | Trạng thái mở được kiểm soát | Tất cả |
| `defaultOpen` | `boolean` | `false` | Trạng thái mở ban đầu | Tất cả |
| `onOpenChange` | `(open: boolean) => void` | - | Được gọi khi trạng thái mở thay đổi | Tất cả |
| `modal` | `boolean` | `true` | Tương tác bên ngoài có bị vô hiệu hóa không | Tất cả |
| `className` / `class` | `string` | `''` | Tên CSS class | React (className), Vue/Angular (class) |

### Sub-components

#### DialogTrigger

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render như một phần tử con | React, Vue, Angular |
| `className` / `class` | `string` | `''` | Tên CSS class | React (className), Vue/Angular (class) |

#### DialogContent

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render như một phần tử con | React, Vue, Angular |
| `className` / `class` | `string` | `''` | Tên CSS class | React (className), Vue/Angular (class) |

#### DialogHeader

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `className` / `class` | `string` | `''` | Tên CSS class | React (className), Vue/Angular (class) |

#### DialogTitle

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render như một phần tử con | React, Vue, Angular |
| `className` / `class` | `string` | `''` | Tên CSS class | React (className), Vue/Angular (class) |

#### DialogDescription

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render như một phần tử con | React, Vue, Angular |
| `className` / `class` | `string` | `''` | Tên CSS class | React (className), Vue/Angular (class) |

#### DialogClose

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render như một phần tử con | React, Vue, Angular |
| `className` / `class` | `string` | `''` | Tên CSS class | React (className), Vue/Angular (class) |

## Khả năng truy cập

- **Điều hướng bàn phím**: Escape để đóng, Tab để điều hướng bên trong
- **Đọc màn hình**: Sử dụng role dialog với nhãn phù hợp
- **Quản lý focus**: Focus bị giữ trong dialog khi mở
- **Tuân thủ WCAG**: Tuân thủ WCAG 2.1 cấp độ AA

## Tác giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
## Tác giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
