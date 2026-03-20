# Alert Dialog

Hộp thoại modal làm gián đoạn người dùng với nội dung quan trọng và mong đợi phản hồi.

<ComponentPreview name="AlertDialogDemo">
  <template #preview>
    <DemoContainer>
      <AlertDialogDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from '@/components/ui/alert-dialog'
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogContent>
  </AlertDialog>
</template>
```

```tsx [React]
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog"

export default function App() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone.
        </AlertDialogDescription>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Delete</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AlertDialogComponent } from '@/components/ui/alert-dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlertDialogComponent],
  template: `
    <ui-alert-dialog [isOpen]="isOpen" (openChange)="isOpen = $event">
      <h2>Are you sure?</h2>
      <p>This action cannot be undone.</p>
      <button (click)="isOpen = false">Cancel</button>
      <button (click)="handleDelete()">Delete</button>
    </ui-alert-dialog>
  `
})
export class AppComponent {
  isOpen = false;

  handleDelete() {
    this.isOpen = false;
  }
}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add alert-dialog
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add alert-dialog
```

```bash [yarn]
yarn dlx galaxy-design@latest add alert-dialog
```

```bash [bun]
bunx galaxy-design@latest add alert-dialog
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
} from '@/components/ui'
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>Xóa Tài Khoản</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>Bạn có chắc chắn?</AlertDialogTitle>
      <AlertDialogDescription>
        Hành động này không thể hoàn tác.
      </AlertDialogDescription>
      <AlertDialogCancel>Hủy</AlertDialogCancel>
      <AlertDialogAction>Xóa</AlertDialogAction>
    </AlertDialogContent>
  </AlertDialog>
</template>
```

### React

```tsx
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
} from '@/components/ui'

export default function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Xóa Tài Khoản</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Bạn có chắc chắn?</AlertDialogTitle>
        <AlertDialogDescription>
          Hành động này không thể hoàn tác.
        </AlertDialogDescription>
        <AlertDialogCancel>Hủy</AlertDialogCancel>
        <AlertDialogAction>Xóa</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { AlertDialogComponent } from '@/components/ui/alert-dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlertDialogComponent],
  template: `
    <ui-alert-dialog [open]="isOpen" (openChange)="isOpen = $event">
      <ui-alert-dialog-trigger>
        <button variant="destructive">Xóa Tài Khoản</button>
      </ui-alert-dialog-trigger>
      <ui-alert-dialog-content>
        <ui-alert-dialog-title>Bạn có chắc chắn?</ui-alert-dialog-title>
        <ui-alert-dialog-description>
          Hành động này không thể hoàn tác.
        </ui-alert-dialog-description>
        <button (click)="isOpen = false">Hủy</button>
        <button (click)="handleDelete()">Xóa</button>
      </ui-alert-dialog-content>
    </ui-alert-dialog>
  `
})
export class AppComponent {
  isOpen = false;

  handleDelete() {
    // Xử lý xóa
    this.isOpen = false;
  }
}
```

### React Native

```tsx
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
} from '@/components/ui/alert-dialog'
import { Button, ButtonText } from '@/components/ui/button'

export default function App() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <ButtonText>Xóa Tài Khoản</ButtonText>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Bạn có chắc chắn?</AlertDialogTitle>
        <AlertDialogDescription>
          Hành động này không thể hoàn tác.
        </AlertDialogDescription>
        <AlertDialogCancel>
          <ButtonText>Hủy</ButtonText>
        </AlertDialogCancel>
        <AlertDialogAction>
          <ButtonText>Xóa</ButtonText>
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

### Flutter

```dart
import 'package:flutter/material.dart';
import 'package:galaxy_design/galaxy_alert_dialog.dart';

class AlertDialogExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyButton(
      variant: GalaxyButtonVariant.destructive,
      onPressed: () {
        GalaxyAlertDialog.show(
          context: context,
          title: 'Bạn có chắc chắn?',
          description: 'Hành động này không thể hoàn tác.',
          cancelText: 'Hủy',
          confirmText: 'Xóa',
          onConfirm: () {
            // Xử lý xóa
          },
        );
      },
      child: const Text('Xóa Tài Khoản'),
    );
  }
}
```

## API Reference

### Props

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `open` | `boolean` | - | Trạng thái mở được kiểm soát | React, Vue, Angular |
| `defaultOpen` | `boolean` | `false` | Trạng thái mở ban đầu cho chế độ uncontrolled | React, Vue, Angular |
| `onOpenChange` / `update:open` | `(open: boolean) => void` | - | Được gọi khi trạng thái mở thay đổi | React (onOpenChange), Vue (update:open), Angular |
| `title` | `string` | - | Văn bản tiêu đề tùy chọn | Flutter only |
| `description` | `string` | - | Văn bản mô tả tùy chọn | Flutter only |
| `cancelText` | `string` | `'Cancel'` | Văn bản nút hủy | Flutter only |
| `confirmText` | `string` | `'Confirm'` | Văn bản nút xác nhận | Flutter only |
| `variant` | `'default' \| 'destructive'` | `'default'` | Biến thể kiểu dáng trực quan | Flutter only |
| `padding` | `EdgeInsetsGeometry` | - | Padding bên trong container alert | Flutter only |

### Sub-components

#### AlertDialogTrigger

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render trigger như một phần tử con | React, Vue |
| `as` | `AsTag \| Component` | `'button'` | Phần tử hoặc component để render | Vue only |

#### AlertDialogContent

| Prop | Type | Default | Description | Frameworks |
|------|------|---------|-------------|------------|
| `forceMount` | `boolean` | - | Force-mount content ngay cả khi đóng | React, Vue |
| `className` / `class` | `string` | - | Tên CSS class | React (className), Vue (class) |
| `onOpenAutoFocus` | `(event: Event) => void` | - | Được gọi khi focus di chuyển vào alert dialog sau khi mở | React only |
| `onCloseAutoFocus` | `(event: Event) => void` | - | Được gọi khi focus trở lại sau khi đóng | React only |

## Khả năng truy cập

- **Điều hướng bàn phím**: [TODO]
- **Đọc màn hình**: [TODO]
- **Quản lý focus**: [TODO]
- **Tuân thủ WCAG**: Tuân thủ WCAG 2.1 cấp độ AA

## Tác giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
