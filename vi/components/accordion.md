# Accordion

Tập hợp các tiêu đề tương tác xếp chồng theo chiều dọc, mỗi tiêu đề hiển thị một phần nội dung.

<ComponentPreview name="AccordionDemo">
  <template #preview>
    <DemoContainer>
      <AccordionDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Accordion } from '@/components/ui/accordion'
</script>

<template>
  <Accordion>Example content</Accordion>
</template>
```

```tsx [React]
import { Accordion } from "@/components/ui/accordion"

export default function App() {
  return <Accordion>Example content</Accordion>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AccordionComponent } from '@/components/ui/accordion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionComponent],
  template: `<ui-accordion>Example content</ui-accordion>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add accordion
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add accordion
```

```bash [yarn]
yarn dlx galaxy-design@latest add accordion
```

```bash [bun]
bunx galaxy-design@latest add accordion
```

```bash [global]
# Nếu bạn đã cài galaxy-design global
galaxy-ui add accordion
```

:::


::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `@radix-ui/react-accordion`
- **Vue**: `radix-vue`
- **Angular**: `@radix-ng/primitives`

Không cần cài đặt thủ công!
:::

## Sử dụng

### React

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function App() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Mục 1</AccordionTrigger>
        <AccordionContent>
          Nội dung cho mục 1.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Mục 2</AccordionTrigger>
        <AccordionContent>
          Nội dung cho mục 2.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

### Vue

```vue
<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
</script>

<template>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Mục 1</AccordionTrigger>
      <AccordionContent>
        Nội dung cho mục 1.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Mục 2</AccordionTrigger>
      <AccordionContent>
        Nội dung cho mục 2.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
```

### Angular

```typescript
import { Component } from '@angular/core';
import { AccordionComponent } from '@/components/ui/accordion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionComponent],
  template: `
    <ui-accordion type="single" collapsible>
      <ui-accordion-item value="item-1">
        <ui-accordion-trigger>Mục 1</ui-accordion-trigger>
        <ui-accordion-content>
          Nội dung cho mục 1.
        </ui-accordion-content>
      </ui-accordion-item>
      <ui-accordion-item value="item-2">
        <ui-accordion-trigger>Mục 2</ui-accordion-trigger>
        <ui-accordion-content>
          Nội dung cho mục 2.
        </ui-accordion-content>
      </ui-accordion-item>
    </ui-accordion>
  `
})
export class AppComponent {}
```

### React Native

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export default function App() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Mục 1</AccordionTrigger>
        <AccordionContent>
          Nội dung cho mục 1.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Mục 2</AccordionTrigger>
        <AccordionContent>
          Nội dung cho mục 2.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

### Flutter

```dart
import 'package:flutter/material.dart';
import 'package:galaxy_design/galaxy_accordion.dart';

class AccordionExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyAccordion(
      type: AccordionType.single,
      collapsible: true,
      items: [
        GalaxyAccordionItem(
          value: 'item-1',
          header: const Text('Mục 1'),
          content: const Text('Nội dung cho mục 1.'),
        ),
        GalaxyAccordionItem(
          value: 'item-2',
          header: const Text('Mục 2'),
          content: const Text('Nội dung cho mục 2.'),
        ),
      ],
    );
  }
}
```

## API Reference

### Props

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `type` | `'single' \| 'multiple'` | `'single'` | Hành vi chọn accordion (mở đơn hoặc nhiều mục) | Tất cả |
| `value` | `string \| string[] \| null` | `null` | Giá trị được kiểm soát cho mục/mục mở | Tất cả |
| `defaultValue` | `string \| string[]` | `undefined` | Mục mở ban đầu không kiểm soát | Tất cả |
| `collapsible` | `boolean` | `false` | Cho phép đóng tất cả mục (chỉ chế độ single) | Tất cả |
| `disabled` | `boolean` | `false` | Vô hiệu hóa accordion và tất cả mục | Tất cả |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Hướng accordion | Tất cả |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | Hướng đọc cho layout RTL hoặc LTR | Tất cả |
| `asChild` | `boolean` | `false` | Render root như child element | React, Vue, Angular |
| `className` / `class` | `string` | `''` | Tên CSS class cho root | React (className), Vue/Angular (class) |

### Sub-components

#### AccordionItem

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `value` | `string` | - | Giá trị duy nhất cho mục | Tất cả |
| `disabled` | `boolean` | `false` | Vô hiệu hóa mục | Tất cả |
| `asChild` | `boolean` | `false` | Render như child element | React, Vue, Angular |

#### AccordionTrigger

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render như child element | React, Vue, Angular |
| `className` / `class` | `string` | `''` | Tên CSS class | React (className), Vue/Angular (class) |

#### AccordionContent

| Prop | Kiểu | Mặc định | Mô tả | Frameworks |
|------|------|---------|-------------|------------|
| `asChild` | `boolean` | `false` | Render như child element | React, Vue, Angular |
| `className` / `class` | `string` | `''` | Tên CSS class | React (className), Vue/Angular (class) |

## Khả năng truy cập

- **Điều hướng bàn phím**: Space/Enter để đóng/mở, Tab để điều hướng
- **Đọc màn hình**: Sử dụng mẫu ARIA accordion chuẩn
- **Quản lý focus**: Quản lý focus giữa các trigger
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
