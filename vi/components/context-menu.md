# Context Menu

Hiển thị menu cho người dùng—chẳng hạn như một tập hợp các hành động hoặc chức năng—được kích hoạt bằng cách nhấp chuột phải.

::: warning Chỉ dành cho Web
Component này chỉ khả dụng cho các framework web (Vue, React, Angular). Tương tác chuột phải không có trên nền tảng mobile.
:::

<ComponentPreview name="ContextMenuDemo">
  <template #preview>
    <DemoContainer>
      <ContextMenuDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@/components/ui/context-menu'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>Right click here</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Settings</ContextMenuItem>
      <ContextMenuItem>Logout</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
```

```tsx [React]
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu"

export default function App() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click here</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Settings</ContextMenuItem>
        <ContextMenuItem>Logout</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ContextMenuComponent } from '@/components/ui/context-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContextMenuComponent],
  template: `
    <ui-context-menu>
      <div trigger>Right click here</div>
      <div content>
        <ui-context-menu-item>Profile</ui-context-menu-item>
        <ui-context-menu-item>Settings</ui-context-menu-item>
        <ui-context-menu-item>Logout</ui-context-menu-item>
      </div>
    </ui-context-menu>
  `
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add context-menu
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add context-menu
```

```bash [yarn]
yarn dlx galaxy-design@latest add context-menu
```

```bash [bun]
bunx galaxy-design@latest add context-menu
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem
} from '@/components/ui'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>Nhấp chuột phải vào đây</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Hồ sơ</ContextMenuItem>
      <ContextMenuItem>Cài đặt</ContextMenuItem>
      <ContextMenuItem>Đăng xuất</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
```

### React

```tsx
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "@/components/ui/context-menu"

export default function App() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Nhấp chuột phải vào đây</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Hồ sơ
          <ContextMenuShortcut>⌘P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Cài đặt</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Đăng xuất</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { ContextMenuComponent } from '@/components/ui/context-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContextMenuComponent],
  template: `
    <ui-context-menu>
      <div trigger>Nhấp chuột phải vào đây</div>
      <div content>
        <ui-context-menu-item>Hồ sơ</ui-context-menu-item>
        <ui-context-menu-item>Cài đặt</ui-context-menu-item>
        <ui-context-menu-separator />
        <ui-context-menu-item>Đăng xuất</ui-context-menu-item>
      </div>
    </ui-context-menu>
  `
})
export class AppComponent {}
```

## API Reference

### Props

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `modal` | `boolean` | `true` | Tương tác bên ngoài có bị vô hiệu hóa khi menu mở không | React, Vue, Angular |
| `children` | `ReactNode` | - | Nội dung composition của context menu | React, Vue, Angular |

### Sub-components

#### ContextMenuTrigger

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `disabled` | `boolean` | `false` | Vô hiệu hóa trigger | React, Vue, Angular |
| `asChild` | `boolean` | `false` | Render trigger như một phần tử con | React, Vue |

#### ContextMenuContent

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Vị trí ưu tiên cho nội dung menu | React, Vue, Angular |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Căn chỉnh dọc theo cạnh | React, Vue, Angular |
| `sideOffset` | `number` | `5` | Offset tính bằng pixels từ trigger | React, Vue, Angular |
| `alignOffset` | `number` | `0` | Offset tính bằng pixels từ cạnh căn chỉnh | React, Vue, Angular |
| `avoidCollisions` | `boolean` | `true` | Tránh va chạm với viewport edges | React, Vue, Angular |
| `className` / `class` | `string` | - | Tên CSS class | React (className), Vue/Angular (class) |

#### ContextMenuItem

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `disabled` | `boolean` | `false` | Vô hiệu hóa item | React, Vue, Angular |
| `onSelect` | `(event: Event) => void` | - | Được gọi khi item được chọn | React, Vue, Angular |
| `textValue` | `string` | - | Giá trị văn bản dùng cho typeahead matching | React, Vue, Angular |
| `className` / `class` | `string` | - | Tên CSS class | React (className), Vue/Angular (class) |

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
