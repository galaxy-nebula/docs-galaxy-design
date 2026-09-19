# Menubar

Menu hiển thị liên tục phổ biến trong các ứng dụng desktop, cung cấp quyền truy cập nhanh vào một tập hợp các lệnh nhất quán.

::: warning Chỉ dành cho Web
Component này chỉ khả dụng cho các framework web (Vue, React, Angular). Menubar dành cho desktop không phù hợp với nền tảng mobile.
:::

<ComponentPreview name="MenubarDemo">
  <template #preview>
    <DemoContainer>
      <MenubarDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui/menubar'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>New</MenubarItem>
        <MenubarItem>Open</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
```

```tsx [React]
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"

export default function App() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { MenubarComponent } from '@/components/ui/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenubarComponent],
  template: `
    <ui-menubar>
      <ui-menubar-menu>
        <ui-menubar-trigger>File</ui-menubar-trigger>
        <ui-menubar-content>
          <ui-menubar-item>New</ui-menubar-item>
          <ui-menubar-item>Open</ui-menubar-item>
        </ui-menubar-content>
      </ui-menubar-menu>
    </ui-menubar>
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
npx @galaxy-stack/nebula-cli@latest add menubar
```

```bash [pnpm]
pnpm dlx @galaxy-stack/nebula-cli@latest add menubar
```

```bash [yarn]
yarn dlx @galaxy-stack/nebula-cli@latest add menubar
```

```bash [bun]
bunx @galaxy-stack/nebula-cli@latest add menubar
```

:::

## Sử dụng

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui/menubar'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Tệp</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Mới</MenubarItem>
        <MenubarItem>Mở</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
```

```tsx [React]
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"

export default function App() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Tệp</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Mới</MenubarItem>
          <MenubarItem>Mở</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { MenubarComponent } from '@/components/ui/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenubarComponent],
  template: `
    <ui-menubar>
      <ui-menubar-menu>
        <ui-menubar-trigger>Tệp</ui-menubar-trigger>
        <ui-menubar-content>
          <ui-menubar-item>Mới</ui-menubar-item>
          <ui-menubar-item>Mở</ui-menubar-item>
        </ui-menubar-content>
      </ui-menubar-menu>
    </ui-menubar>
  `
})
export class AppComponent {}
```

:::

## API Reference

### Menubar Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Giá trị menu mở (controlled) | Web only |
| `defaultValue` | `string` | - | Giá trị menu mở ban đầu (uncontrolled) | Web only |
| `onValueChange` | `(value: string) => void` | - | Gọi khi giá trị menu mở thay đổi | Web only |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Hướng đọc cho điều hướng bàn phím | Web only |
| `loop` | `boolean` | `false` | Lặp focus từ cuối về đầu | Web only |
| `className` | `string` | `''` | CSS class cho menubar root | Web only |

### MenubarMenu Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Giá trị duy nhất liên kết với menu | Web only |

### MenubarTrigger Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class | Web only |

### MenubarContent Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Vị trí ưu tiên | Web only |
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | Căn chỉnh | Web only |
| `className` | `string` | `''` | CSS class | Web only |

### MenubarItem Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class | Web only |
| `disabled` | `boolean` | `false` | Vô hiệu hóa item | Web only |

### MenubarSeparator Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class | Web only |

### MenubarCheckboxItem Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `checked` | `boolean` | - | Trạng thái checked (controlled) | Web only |
| `className` | `string` | `''` | CSS class | Web only |

### MenubarRadioGroup Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Giá trị controlled | Web only |
| `onValueChange` | `(value: string) => void` | - | Gọi khi giá trị thay đổi | Web only |

### MenubarRadioItem Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Giá trị radio item | Web only |
| `className` | `string` | `''` | CSS class | Web only |

### MenubarSub Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `open` | `boolean` | - | Trạng thái mở (controlled) | Web only |
| `defaultOpen` | `boolean` | `false` | Trạng thái mở mặc định | Web only |
| `onOpenChange` | `(open: boolean) => void` | - | Gọi khi trạng thái mở thay đổi | Web only |

### MenubarSubTrigger Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class | Web only |

### MenubarSubContent Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | Vị trí ưu tiên | Web only |
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | Căn chỉnh | Web only |
| `className` | `string` | `''` | CSS class | Web only |

### MenubarLabel Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class | Web only |

### MenubarShortcut Props

| Prop | Type | Default | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `className` | `string` | `''` | CSS class | Web only |

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
