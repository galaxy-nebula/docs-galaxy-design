# Select

Hiển thị danh sách các tùy chọn để người dùng chọn—được kích hoạt bởi một nút.

<ComponentPreview name="SelectDemo">
  <template #preview>
    <DemoContainer>
      <SelectDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Select } from '@/components/ui/select'
</script>

<template>
  <Select>Example content</Select>
</template>
```

```tsx [React]
import { Select } from "@/components/ui/select"

export default function App() {
  return <Select>Example content</Select>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SelectComponent } from '@/components/ui/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SelectComponent],
  template: `<ui-select>Example content</ui-select>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx @galaxy-stack/design-cli@latest add select
```

```bash [pnpm]
pnpm dlx @galaxy-stack/design-cli@latest add select
```

```bash [yarn]
yarn dlx @galaxy-stack/design-cli@latest add select
```

```bash [bun]
bunx @galaxy-stack/design-cli@latest add select
```

```bash [global]
# Nếu bạn đã cài galaxy-design global
galaxy-ui add select
```

:::


::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `@radix-ui/react-select`
- **Vue**: `radix-vue`
- **Angular**: `@radix-ng/primitives`

Không cần cài đặt thủ công!
:::

## Sử dụng

### React

```tsx
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"

export default function App() {
  return (
    <Select defaultValue="apple">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Chọn một loại trái cây" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Táo</SelectItem>
        <SelectItem value="banana">Chuối</SelectItem>
        <SelectItem value="orange">Cam</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

### Vue

```vue
<script setup lang="ts">
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
</script>

<template>
  <Select default-value="apple">
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Chọn một loại trái cây" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Táo</SelectItem>
      <SelectItem value="banana">Chuối</SelectItem>
      <SelectItem value="orange">Cam</SelectItem>
    </SelectContent>
  </Select>
</template>
```

### Angular

```typescript
import { Component } from '@angular/core';
import { SelectComponent } from '@/components/ui/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SelectComponent],
  template: `
    <ui-select default-value="apple">
      <ui-select-trigger class="w-[180px]">
        <ui-select-value placeholder="Chọn một loại trái cây" />
      </ui-select-trigger>
      <ui-select-content>
        <ui-select-item value="apple">Táo</ui-select-item>
        <ui-select-item value="banana">Chuối</ui-select-item>
        <ui-select-item value="orange">Cam</ui-select-item>
      </ui-select-content>
    </ui-select>
  `
})
export class AppComponent {}
```

### React Native

```tsx
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'

export default function App() {
  return (
    <Select defaultValue="apple">
      <SelectTrigger>
        <SelectValue placeholder="Chọn một loại trái cây" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Táo</SelectItem>
        <SelectItem value="banana">Chuối</SelectItem>
        <SelectItem value="orange">Cam</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

### Flutter

```dart
import 'package:flutter/material.dart';
import 'package:galaxy_design/galaxy_select.dart';

class SelectExample extends StatefulWidget {
  @override
  _SelectExampleState createState() => _SelectExampleState();
}

class _SelectExampleState extends State<SelectExample> {
  String? selectedValue;

  @override
  Widget build(BuildContext context) {
    return GalaxySelect(
      value: selectedValue,
      hint: 'Chọn một loại trái cây',
      items: [
        GalaxySelectOption(value: 'apple', label: 'Táo'),
        GalaxySelectOption(value: 'banana', label: 'Chuối'),
        GalaxySelectOption(value: 'orange', label: 'Cam'),
      ],
      onChanged: (value) {
        setState(() {
          selectedValue = value;
        });
      },
    );
  }
}
```

## API Reference

### Props

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | `undefined` | Giá trị được chọn được kiểm soát | Tất cả |
| `defaultValue` | `string` | `undefined` | Giá trị ban đầu cho chế độ uncontrolled | Tất cả |
| `onValueChange` | `(value: string) => void` | - | Được gọi khi giá trị thay đổi | Tất cả |
| `open` | `boolean` | `undefined` | Trạng thái mở được kiểm soát | React, Vue, Angular |
| `defaultOpen` | `boolean` | `false` | Trạng thái mở ban đầu | Tất cả |
| `onOpenChange` | `(open: boolean) => void` | - | Được gọi khi trạng thái mở thay đổi | React, Vue, Angular |
| `disabled` | `boolean` | `false` | Vô hiệu hóa select | Tất cả |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Hướng đọc | React, Vue, Angular |
| `name` | `string` | - | Tên cho form submission | Tất cả |
| `required` | `boolean` | `false` | Yêu cầu giá trị trước khi submit form | Tất cả |
| `className` / `class` | `string` | `''` | Tên CSS class | React (className), Vue/Angular (class) |

### Sub-components

#### SelectTrigger

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render như một phần tử con | React, Vue, Angular |
| `className` / `class` | `string` | `''` | Tên CSS class | React (className), Vue/Angular (class) |

#### SelectContent

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `position` | `'popper' \| 'item-aligned'` | `'popper'` | Vị trí nội dung | React, Vue, Angular |
| `side` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Cạnh để render nội dung | React, Vue, Angular |
| `sideOffset` | `number` | `4` | Offset từ cạnh | React, Vue, Angular |
| `asChild` | `boolean` | `false` | Render như một phần tử con | React, Vue, Angular |
| `className` / `class` | `string` | `''` | Tên CSS class | React (className), Vue/Angular (class) |

#### SelectItem

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Giá trị duy nhất cho item | Tất cả |
| `label` | `string` | - | Nhãn hiển thị | Tất cả |
| `disabled` | `boolean` | `false` | Vô hiệu hóa item | Tất cả |
| `asChild` | `boolean` | `false` | Render như một phần tử con | React, Vue, Angular |

#### SelectValue

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `placeholder` | `string` | - | Văn bản giữ chỗ khi không có giá trị | Tất cả |
| `className` / `class` | `string` | `''` | Tên CSS class | React (className), Vue/Angular (class) |

## Khả năng truy cập

- **Điều hướng bàn phím**: Phím mũi tên để điều hướng, Enter để chọn, Escape để đóng
- **Đọc màn hình**: Sử dụng mẫu ARIA select chuẩn
- **Quản lý focus**: Quản lý focus giữa trigger và các tùy chọn
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
